Now we need to create specific tests to exercise the module. We just create methods of our test class, each of which exercises a particular test. All methods should start with 'test' in lower-case. Any method [with public visibility](http://php.net/manual/en/language.oop5.visibility.php) that starts this way will automatically be recognized by PHPUnit and run when requested.

Our first test will check the page at `admin/config/workflow/rules`:

```php
  /**
   * Tests that the reaction rule listing page works.
   */
  public function testReactionRulePage() {
    $account = $this->drupalCreateUser(['administer rules']);
    $this->drupalLogin($account);

    $this->drupalGet('admin/config/workflow/rules');
    $this->assertSession()->statusCodeEquals(200);

    // Test that there is an empty reaction rule listing.
    $this->assertSession()->pageTextContains('There is no Reaction Rule yet.');
  }

```