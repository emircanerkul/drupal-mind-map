Configuration done in settings.php can be done in a kernel test as follows:

```php
use Drupal\Core\Site\Settings;

$settings = Settings::getAll();
// Change the default queue factory to a different service ID.
$settings['queue_default'] = 'test_queue';
new Settings($settings);
```