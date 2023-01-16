Drupal 8 provides base classes for PHPUnit. You can inherit from them to get access to Drupal specific methods and properties. This is not required. If you like to test pure methods without any dependency to Drupal, you can write PHPUnit tests with PHPUnit only.

Examples for Drupal base classes for PHPUnit tests:

* `\Drupal\KernelTests\KernelTestBase`
* `\Drupal\KernelTests\Core\Entity\EntityKernelTestBase`
* `\Drupal\Tests\UnitTestCase`

An important place for PHPUnit is the official [PHPUnit manual](https://phpunit.readthedocs.io/en/8.4/index.html) and the official [Drupal 8 Testing](https://www.drupal.org/docs/8/testing) documentation.

Only a few helpful concepts from PHPUnit, which are part of deGov:

* [Test Doubles](https://phpunit.readthedocs.io/en/8.4/test-doubles.html)  
   * [Stubs](https://phpunit.readthedocs.io/en/8.4/test-doubles.html#stubs)  
   * [Mock Objects](https://phpunit.readthedocs.io/en/8.4/test-doubles.html#mock-objects)

Please note, that you should test only your own code via PHPUnit and not code which you are already expecting to work properly. The dependencies should be injected with concepts like stubs or mock objects as much as possible.

If you are inheriting from the KernelTestBase class from Drupal, you are bootstraping Drupal within your unit tests. The database connection is available also. But the duration of the tests execution process will increase massively. Therefor unit tests with as few as possible dependencies should be written as much as possible.