---
url: https://www.drupal.org/docs/8/api/logging-api/overview
description: >-
  In Drupal 8 watchdog uses an OO, PSR-3 compatible framework. In the paragraphs
  below, a "channel" refers to what used to be the $type argument to watchdog().
  For logging you would have done with simple watchdog() statements in Drupal 7,
  look at the example for injecting a specific channel. The switch to PSR-3
  logging has resulted in the following API changes: hook_watchdog() is gone.
  For a module to implement a logger, it has to register a service tagged as
  logger.
published_time: '2015-10-18T17:18:57+00:00'
modified_time: '2022-11-30T16:41:35+00:00'
---
In Drupal 8 watchdog uses an OO, PSR-3 compatible framework.

In the paragraphs below, a "channel" refers to what used to be the `$type` argument to [watchdog()](https://api.drupal.org/api/drupal/includes!bootstrap.inc/function/watchdog/7). For logging you would have done with simple `watchdog()` statements in Drupal 7, look at the example for [injecting a specific channel](#specific-channel).

The switch to PSR-3 logging has resulted in the following API changes:

1. `hook_watchdog()` is gone. For a module to implement a logger, it has to register a service tagged as logger. eg  
```php  
services:  
  logger.mymodule:  
    class: Drupal\mymodule\Logger\MyLog  
    tags:  
      - { name: logger }  
```  
This class must implement [\\Psr\\Log\\LoggerInterface](https://github.com/php-fig/log/blob/master/Psr/Log/LoggerInterface.php). like this:  
```php  
namespace Drupal\mymodule\Logger;  
use Drupal\Core\Logger\RfcLoggerTrait;  
use Psr\Log\LoggerInterface;  
class MyLog implements LoggerInterface {  
  use RfcLoggerTrait;  
  /**  
   * {@inheritdoc}  
   */  
  public function log($level, $message, array $context = array()) {  
    // Do stuff  
  }  
}  
```
2. `watchdog($type, $message, $variables, $severity, $link)` has been removed in favor of `\Drupal::logger($type)->log($severity, $message, $variables)`  
**D7**  
```php  
// Logs a notice  
watchdog('my_module', $message, array());  
// Logs an error  
watchdog('my_module', $message, array(), WATCHDOG_ERROR);  
```  
**D8 - procedural**  
```php  
// Logs a notice  
\Drupal::logger('my_module')->notice($message);  
// Logs an error  
\Drupal::logger('my_module')->error($message);  
```  
**D8 - injecting the whole factory**  
```php  
services:  
  myservice_that_needs_to_log_to_multiple_channels:  
    class: Drupal\mymodule\MyService  
    arguments: ['@logger.factory']  
```  
```php  
use Drupal\Core\Logger\LoggerChannelFactoryInterface;  
class MyService {  
  public function __construct(LoggerChannelFactoryInterface $factory) {  
    $this->loggerFactory = $factory;  
  }  
  public function doStuff($message) {  
    // Logs a notice to "my_module" channel.  
    $this->loggerFactory->get('my_module')->notice($message);  
     // Logs an error to "my_other_module" channel.  
    $this->loggerFactory->get('my_other_module')->error($message);  
  }  
}  
```  
**D8 - injecting a specific channel**  
 Drupal core registers only one channel in `core.services.yml` for "system" channel.  
 There might be cases where you don't want to inject the whole factory to your class, but just a specific channel.  
 In that case you can easily register this channel with something like this:  
```php  
services:  
  logger.channel.mymodule:  
    parent: logger.channel_base  
    arguments: ['mymodule']  
```  
And then inject `logger.channel.mymodule` to your services.  
```php  
services:  
  myservice_that_needs_specific_channel:  
    class: Drupal\mymodule\MyService  
    arguments: ['@logger.channel.mymodule']  
```  
```php  
use Psr\Log\LoggerInterface;  
class MyService {  
  public function __construct(LoggerInterface $logger) {  
    $this->logger = $logger;  
  }  
  public function doStuff($message) {  
    // Logs a notice.  
    $this->logger->notice($message);  
     // Logs an error.  
    $this->logger->error($message);  
  }  
}  
```  
OR use the LoggerChannelTrait:  
```php  
use Drupal\Core\Logger\LoggerChannelTrait;  
class MyService {  
  use LoggerChannelTrait;  
  public function doStuff($message) {  
    $logger = $this->getLogger('mymodule');  
    $logger->error($message);  
  }  
}  
```
3. WATCHDOG\_\* constants and `watchdog_severity_levels()` are removed  
**D7**  
```php  
$severity = WATCHDOG_EMERGENCY;  
$severity = WATCHDOG_ALERT;  
$severity = WATCHDOG_CRITICAL;  
$severity = WATCHDOG_ERROR;  
$severity = WATCHDOG_WARNING;  
$severity = WATCHDOG_NOTICE;  
$severity = WATCHDOG_INFO;  
$severity = WATCHDOG_DEBUG;  
$levels = watchdog_severity_levels();  
```  
**D8**  
```php  
use Drupal\Core\Logger\RfcLogLevel;  
$severity = RfcLogLevel::EMERGENCY;  
$severity = RfcLogLevel::ALERT;  
$severity = RfcLogLevel::CRITICAL;  
$severity = RfcLogLevel::ERROR;  
$severity = RfcLogLevel::WARNING;  
$severity = RfcLogLevel::NOTICE;  
$severity = RfcLogLevel::INFO;  
$severity = RfcLogLevel::DEBUG;  
$levels = RfcLogLevel::getLevels();  
```

### Shorthand functions

Whilst `$logger->log($level, $message);` works fine, you can directly use the functions enumerated in the [Drupal\\Core\\Logger\\RfcLoggerTrait](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Logger%21RfcLoggerTrait.php/trait/RfcLoggerTrait/8.2.x):

* `emergency($message, $context)`
* `alert($message, $context)`
* `critical($message, $context)`
* `error($message, $context)`
* `warning($message, $context)`
* `notice($message, $context)`
* `info($message, $context)`
* `debug($message, $context)`