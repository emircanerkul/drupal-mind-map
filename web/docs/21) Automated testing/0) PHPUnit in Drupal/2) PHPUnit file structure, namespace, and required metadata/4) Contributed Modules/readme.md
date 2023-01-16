Contributed modules' tests will be discovered by the Drupal test runner in either the new Drupal 8 modules folder at the root of the Drupal installation or in the legacy /sites/\*/modules folder. The test directory, file, namespace, and class must conform to the PSR-4 standard as in the following example.

### Example:

* **A test located in any of the following:**  
   * modules/phpunit\_example/tests/src/Unit/Double\_DisplayManagerTest.php OR  
   * sites/all/modules/phpunit\_example/tests/src/Unit/Double\_DisplayManagerTest.php
* **Must correspond with the following namespace and class:**  
   * namespace Drupal\\Tests\\phpunit\_example\\Unit  
   * class Double\_DisplayManagerTest extends UnitTestCase

Note that you may run PHPUnit directly using a custom configuration that does not conform to the Drupal test runner standard above. This will work locally and on other platforms.