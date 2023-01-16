The code above did a very simple GET request on the admin/config/workflow/rules page. It loads the page, then checks the response code and asserts that we find appropriate text on the page.

Most tests will follow this pattern:

1. Do a `$this->drupalGet('some/path')` to go to a page
2. Use `$this->clickLink(..)` to navigate by links on the page
3. Use `$this->getSession()->getPage()->fillField(...);` to fill out form fields
4. Submit forms with `$this->getSession()->getPage()->pressButton(...);` or use $this->submitForm(...); (or use the deprecated drupalPostForm() method)
5. Do one or more assertions to check that what we see on the page is what we should see.

### Filling in forms

```php
    $page = $this->getSession()->getPage();

    $page->fillField('form_element', 'value');
    $page->selectFieldOption('form_element', 'value');

```

### Assertions

There are dozens of possible assertions. Some examples are below. When you get beyond this tutorial, you'll want to look at the \\Behat\\Mink\\WebAssert class and its Drupal child [\\Drupal\\Tests\\WebAssert](https://api.drupal.org/api/drupal/core!tests!Drupal!Tests!WebAssert.php/class/WebAssert) to read about more of them.

```php
    $this->assertOptionSelected('form_element', 'value');
    $this->assertFieldByName('form_element');

    $web_assert = $this->assertSession();

    $web_assert->addressEquals('node/1');
    $web_assert->pageTextContains("Expected text");
    $web_assert->pageTextNotContains("Unexpected text");

```