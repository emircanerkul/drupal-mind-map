It really doesn't teach us much to just have a test that succeeds. Let's look at one that fails.

We'll modify the test to provoke a test fail - we will assert that the page contains some different text, which is of course not there.

```php
  /**
   * Tests that the reaction rule listing page works.
   */
  public function testReactionRulePage() {
    $account = $this->drupalCreateUser(['administer rules']);
    $this->drupalLogin($account);

    $this->drupalGet('admin/config/workflow/rules');
    $this->assertSession()->statusCodeEquals(200);

    $this->assertSession()->pageTextContains('some text not actually on the page');
  }

```

Run the test and see the result:

```php
../vendor/bin/phpunit --filter testReactionRulePage ../modules/rules/tests/src/Functional/UiPageTest.php 
PHPUnit 4.8.11 by Sebastian Bergmann and contributors.

E

Time: 24.38 seconds, Memory: 6.00Mb

There was 1 error:

1) Drupal\Tests\rules\Functional\UiPageTest::testReactionRulePage
Behat\Mink\Exception\ResponseTextException: The text "some text not actually on the page" was not found anywhere in the text of the current page.

/home/klausi/workspace/drupal-8/vendor/behat/mink/src/WebAssert.php:787
/home/klausi/workspace/drupal-8/vendor/behat/mink/src/WebAssert.php:262
/home/klausi/workspace/drupal-8/modules/rules/tests/src/Functional/UiPageTest.php:37

FAILURES!
Tests: 1, Assertions: 5, Errors: 1.

HTML output was generated
http://drupal-8.localhost/sites/simpletest/browser_output/Drupal_Tests_rules_Functional_UiPageTest-16-425496.html
http://drupal-8.localhost/sites/simpletest/browser_output/Drupal_Tests_rules_Functional_UiPageTest-17-425496.html
http://drupal-8.localhost/sites/simpletest/browser_output/Drupal_Tests_rules_Functional_UiPageTest-18-425496.html

```

Oops, something went wrong and our test has caught that. Yay!