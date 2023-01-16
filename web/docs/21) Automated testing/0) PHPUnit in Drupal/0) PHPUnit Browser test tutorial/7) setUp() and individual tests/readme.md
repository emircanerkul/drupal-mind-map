Each test function will have a completely new Drupal instance to execute tests. This means that whatever you have created in a previous test function will not be available anymore in the next.

Consider this example, taken from [Rules UIPageTest.php -extraction](http://cgit.drupalcode.org/rules/tree/tests/src/Functional/UiPageTest.php?h=8.x-3.x "Rules UIPageTest.php -file extraction"):

```php
namespace Drupal\Tests\rules\Functional;

class UiPageTest extends RulesBrowserTestBase {

 /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = ['rules'];

  /**
   * {@inheritdoc}
   */
  protected function setUp() {
    parent::setUp();
    // ....
  }
  public function testReactionRulePage() {
    $account = $this->drupalCreateUser(['administer rules']);
    $this->drupalLogin($account);
    // .....
  }

  public function testCreateReactionRule() {
    $account = $this->drupalCreateUser(['administer rules']);
    $this->drupalLogin($account);
    // .....
  }

  public function testCancelExpressionInRule() {
    // Setup a rule with one condition.
    $this->testCreateReactionRule();
    // .....
  }

}

```

Here both `testReactionRulePage()` and `testCreateReactionRule` must create their own `$account`, because both tests are run against their own Drupal instances and the latter function's Drupal has no accounts unless created.

However, other (later) tests _can_ rely on content created in other test functions **if they execute those functions separately** like `testCancelExpressionInRule()` does.

`setUp()`\-function on the other hand is executed before each test -function, so you may use it to prepare the test environment as well.