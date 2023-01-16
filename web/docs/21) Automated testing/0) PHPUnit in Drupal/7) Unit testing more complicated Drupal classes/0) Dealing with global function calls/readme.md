If a function (for example `drupal_get_path()`) is called then you have three choices:

1. (Preferred method) Move the function call into a method of the class, override the class with a test class that overrides this method and use this version in your test. For example, imagine the following class is being tested:  
```php  
namespace Drupal\module_service;  
class ModuleService {  
  public function getModulePath($moduleName) {  
    return drupal_get_path('module', $moduleName);  
  }  
}  
```  
And imagine the following test class:  
```php  
namespace Drupal\Tests\module_service;  
use Drupal\module_service\ModuleService;  
class ModuleServiceTest {  
  function testGetModulePath() {  
    $service = new ModuleService();  
    $module_path = $service->getModulePath('some_module');  
    // Do some assertions (not shown)  
  }  
}  
```  
When running this test, PHPUnit will throw the following error:  
> Error: Call to undefined function Drupal\\module\_service\\drupal\_get\_path()  
This is because drupal\_get\_path() is a global function, and global functions do not exist in the testing environment.  
To get around this, the first step is to move the call to drupal\_get\_path() into a protected function (named getDrupalPath() below) that calls drupal\_get\_path():  
```php  
namespace Drupal\module_service;  
class ModuleService {  
  public function getModulePath($moduleName) {  
    return $this->getDrupalPath($moduleName);  
  }  
  protected function getDrupalPath($moduleName) {  
    return drupal_get_path('module', $moduleName);  
  }  
}  
```  
The next step is to create a new testing class (called TestModuleService below) that extends the original class (ModuleService). This new class goes in the same namespace and folder as the testing class. Override the function that calls the global function (in this case, overriding getDrupalPath()). The overriding function should return a dummy value that can be used in the assertions in your tests.  
```php  
namespace Drupal\Tests\module_service;  
use Drupal\module_service\ModuleService;  
class TestModuleService extends ModuleService {  
  /**  
   * Override parent::getDrupalPath()  
   * Do NOT call parent::getDrupalPath() inside this function  
   * or you will receive the original error  
   */  
  protected function getDrupalPath($moduleName) {  
    return 'fake/path/for/testing';  
  }  
}  
```  
Finally, the test class is altered to test against the new class (TestModuleService) instead of the original class (ModuleService)  
```php  
namespace Drupal\Tests\module_service;  
use Drupal\Tests\module_service\TestModuleService;  
class ModuleServiceTest {  
  function testGetModulePath() {  
    $service = new TestModuleService();  
    $module_path = $service->getModulePath('some_module');  
    // $module_path now equals fake/path/for/testing which has  
    // been returned from TestModuleService  
  }  
}  
```
2. Instead of `namespace Drupal\foo\tests;` use `namespace Drupal\foo\tests { }` around the class, followed by example.  
```php  
namespace {  
  if (!function_exists('foo')) {  
    function foo() {}  
  }  
}  
```  
Note this is a very dangerous practice because if two classes define the same function this way with different returning value then the results will vary depending on the order of the test call. Strive for returning some empty value (`array`, `NULL`, `''`) that makes sense for this function.
3. You also can add a property / getter / setter for the function name and then the method being tested runs `call_user_func_array($this->getSomeFunctionName(), $args)` and the test can override the function name.
4. Last but not least, you can mock a global function by adding fixtures in your test module. Let's say that you need to mock `base_path()`.  
   1. Simple go add a fixture in your testing src  
   2. Add a mock for function, for example, you can define like above:  
   3. Simply use `require_once` on your setup and you get your mocked function available and replaceable only in the test you are requiring. Make sure to use `function_exists()` to check if the function you need to test isn't already available.  
```php  
/**  
 * Overrides global function if not exists.  
 *  
 * @return string  
 *   Base path mocked.  
 */  
if (!function_exists('base_path')) {  
 function base_path() {  
    return '/';  
  }  
}  
```