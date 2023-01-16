Now it's time to create our tests, which we'll do in the rules/tests/src/Functional folder. PHPUnit will find browser test files automatically in the tests/src/Functional folder of a module.

There are four basic steps involved in building a test:

* Creating the structure (just creating a class that inherits from \\Drupal\\Tests\\BrowserTestBase or a similar browser test class)
* Initializing the test case with whatever user creation or configuration needs to be done
* Creating actual tests within the test case
* And, of course, trying desperately to figure out why our test doesn't work the way we expect, and debugging the test (and perhaps the module)

To start, we just need a bit of boilerplate extending `BrowserTestBase`.

```php
namespace Drupal\Tests\rules\Functional;

use Drupal\Tests\BrowserTestBase;

/**
 * Tests that the Rules UI pages are reachable.
 *
 * @group rules_ui
 */
class UiPageTest extends BrowserTestBase {

```

As the next step, we need to specify the list of modules that need to be enabled for the test run. In our case, this is of course Rules.

```php
  /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = ['node', 'rules'];

```

We also need to specify the default theme which should be enabled. It is mandatory to specify a default theme since release 8.8\. Read more about it [here](https://www.drupal.org/node/3083055). Since in our case we aren't relying on any core markup we will use stark as the default theme.

```php
  /**
   * Theme to enable.
   *
   * @var string
   */
  protected $defaultTheme = 'stark';

```

Next comes the optional `setUp()`. Here is where we must do anything that needs to be done to make this Drupal instance work the way we want to. We have to think: "What did I have to do to get from a stock Drupal install to where I can run this test?". Not every test case will need this, but here is an example where we prepare a content type (taken from Rules' [ConfigureAndExecuteTest](https://git.drupalcode.org/project/rules/-/blob/8.x-3.x/tests/src/Functional/ConfigureAndExecuteTest.php)):

```php
  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();

    // Create an article content type that we will use for testing.
    $type = $this->container->get('entity_type.manager')->getStorage('node_type')
      ->create([
        'type' => 'article',
        'name' => 'Article',
      ]);
    $type->save();
    $this->container->get('router.builder')->rebuild();
  }

```

Note, that if you implement `setUp()`\-method, start with executing the `parent::setUp()`\-method like in the example.