Tests of core classes are placed in the following directory and their namespace will consist of the path minus the configured folder. Note that namespace uses backslashes, but otherwise matches the file structure.

**Directory:** core/tests/Drupal/Tests/Core/\[component\]  
**Namespace:** Drupal\\Tests\\Core\\\[component\]

### Examples:

* **Test:** core/tests/Drupal/Tests/Core/UrlTest.php
* namespace Drupal\\Tests\\Core
* class UrlTest extends UnitTestCase
* **Test:** core/tests/Drupal/Tests/Core/Form/ConfirmFormHelperTest.php
* namespace Drupal\\Tests\\Core\\Form
* class ConfirmFormHelperTest extends UnitTestCase
* **Test:** core/tests/Drupal/Tests/Core/Entity/Controller/EntityViewControllerTest.php
* namespace Drupal\\Tests\\Core\\Entity\\Controller
* class EntityViewControllerTest extends UnitTestCase