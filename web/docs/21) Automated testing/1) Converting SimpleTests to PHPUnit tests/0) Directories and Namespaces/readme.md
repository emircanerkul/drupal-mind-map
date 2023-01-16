In Drupal 7, SimpleTest-based tests are in the `modulename.test` file. This file is expected to contain all the test classes. There are no unique namespaces. Early versions of Drupal 8 also had SimpleTest-based tests, under module\_name/src/Tests.

Drupal 8 and later now uses [PHPUnit for testing](https://www.drupal.org/docs/8/phpunit) and [namespaced classes, in named subdirectories, to organize code and enable PSR-4 autoloading](https://www.drupal.org/node/2156625). Simpletest based tests are deprecated. For a contrib module `modulename`, this means:

* Tests extending **DrupalWebTestCase** should be converted to browser tests extending `\Drupal\Tests\BrowserTestBase`
* Tests extending **DrupalUnitTestCase** should be converted to unit tests extending `\Drupal\Tests\UnitTestCase`

For DrupalWebTestCase tests, then:

1. Create a subfolder in your module: `/tests/src/Functional`
2. Move your `modulename.test` file into this subfolder. This is for convenience's sake as you refactor the test classes out of this file.
3. Separate out all of the test classes from `modulename.test`:  
   * If your `modulename.test` file has three test classes in it, you'll end up with three files, one per class.  
   * Each separate file should be named based on a class it contains: for example if your test class name is `MymoduleLoginTest`, the filename should be `MymoduleLoginTest.php`.  
   * It's often easier to fully convert one class first, then you have a template for subsequent ones.
4. Give your stub classes their own namespace, and move them into a deeper subfolder. Your tests' namespace is `\Drupal\Tests\modulename\Functional`, and your stubs' namespace should be something like `\Drupal\Tests\modulename\Functional\Stubs`.
5. Mock modules can go in `tests/modules`.

For DrupalUnitTestCase follow the above instructions but replace `Functional` with `Unit`.