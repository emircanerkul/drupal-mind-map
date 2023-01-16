There's a special relationship between the location of test files within the file structure, the namespace they use, and the class which they extend.

### Drupal Unit Test Suites: Auto-detected Tests

Drupal 8 uses a number of test suites to allow for choosing between different kinds of tests to run.

Drupal 8 has the following test suites:

* Simpletest: Legacy tests based on the Drupal version of the Simpletest framework.
* Unit: PHPUnit-based tests with minimal dependencies.
* Kernel: PHPUnit-based tests with a bootstrapped kernel, and a minimal number of extensions enabled.
* Functional: PHPUnit-based tests with a booted Drupal instance.
* FunctionalJavascript: PHPUnit-based tests that use Webdriver (PhantomJS before Drupal 8.5) to perform tests of Javascript functionality.

Drupal's test system can discover these different test suites for core, core extensions, and contrib extensions, as long as the tests are placed within the proper directories so they can be discovered as belonging to one of the test suites listed above.

**Simpletest-based** tests must be placed in an extension, within that extension's `src/Tests` directory. They will have a namespace of `\Drupal\$extension\Tests`.

**PHPUnit-based**: Generally, the other suites must be within a `tests/src/$suite_type` directory. These tests will have a namespace of `\Drupal\Tests\$extension\$suite_type`. Note that there are exceptions to this naming scheme, illustrated below.

**Traits**: The third class is traits. It is possible to write a trait that will be discovered and can be used by the various different test types. Each test suite will discover the trait if it is placed in the `tests/src/Traits` directory and the trait will have a namespace of `\Drupal\Tests\$extension\Traits`.

Note that the class names must **end** with the word 'Test'. The test methods within the class must **start** with the word 'test'. Like this:

`class SomethingTest extends BrowserTestBase {
  public function testSomething() {
    // Your assertions here.
  }
}`