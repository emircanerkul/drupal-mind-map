**Commenting**: The first thing to keep in mind is that this is an excellent opportunity to finish all those docblock and inline comments you always thought you'd get around to, but never did. Go on... It's not that hard. Drupal.org comment doc standards here: <https://drupal.org/coding-standards/docs>

**Drupal Coding Standards**: Drupal.org has a SimpleTest coding standards document here: <https://drupal.org/node/325974> You should probably adopt these standards, even if you're not a core developer.

**Class Names**: Drupal searches for tests by finding files that end in `Test.php`. This means your test class files should end in `Test.php`, which also means your test class names should end in `Test`. Clear? :-) If your Drupal 7 testing class has a name like `ThisIsATestCase` then you'll need to change it to `ThisIsATestCaseTest` for Drupal 8\. And you should put it in a file named `ThisIsATestCaseTest.php` so that Drupal can find it.

**Convert to PHPUnit**: Note that Drupal 8 still includes Simpletest but it has been deprecated, all tests should be converted to PHPUnit, see Drupal PHPUnit documentation here: <https://drupal.org/node/2116239>

**Dependencies**: One of the more important things is that, in `BrowserTestBase`, module dependencies don't live in `setUp()` anymore. You'll need to add a static property to your test class called `$modules,` which will be an array of module names:


```php
// Drupal 7:
protected function setUp() {
  parent::setUp('some_module', 'some_other_module');
}

// Drupal 8:
  protected static $modules = ['some_module', 'some_other_module'];

```

**getInfo()**: The method `getInfo()` should give some metadata for the test in Drupal 7\. In Drupal 8 this data should be put in PHPDoc comments. The `name` will be taken from the class name and the `description`, `group` and `dependencies` info will be read from the PHPDoc comment for the class. See [Test class getInfo() method removed in favor of PHPDoc](https://www.drupal.org/node/2301125) for full instructions.

**drupalPost() and drupalPostForm()**: In order to accommodate a form submission to Drupal, `BrowserTestBase` has `drupalPostForm()` which has the same calling signature as the old `drupalPost()`, so it's an easy conversion. Change notice here: <https://drupal.org/node/2087433>. Using `drupalPost()` to do POST requests is not supported in BrowserTestBase since this was mostly used to perform mock Javascript interactions, use a Javascript test for these scenarios. If a POST request is really needed then BrowserTestBase has `$this->getHttpClient` available which can be used to perform all kinds of requests.