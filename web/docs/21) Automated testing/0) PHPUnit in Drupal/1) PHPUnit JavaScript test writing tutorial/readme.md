---
url: >-
  https://www.drupal.org/docs/automated-testing/phpunit-in-drupal/phpunit-javascript-test-writing-tutorial
description: >-
  The main difference from other tests is that the JavaScript function tests are
  executed in a real browser. JavaScript behaviours are executed, meaning the
  tests will have the same experience AND requirements that you have in a normal
  browser. Read Running PHPUnit JavaScript tests to find out how to run a
  JavaScript test. Setup In order to write your own tests, you add a
  FunctionalJavascript folder inside yourmodule/tests/src and create a
  FooTest.php file. In there ensure to extend
  Drupal\FunctionalJavascriptTests\WebDriverTestBase.
published_time: '2016-12-02T16:24:28+00:00'
modified_time: '2022-07-24T05:30:08+00:00'
---
The main difference from other tests is that the JavaScript function tests are executed in a real browser. JavaScript behaviours are executed, meaning the tests will have the same experience AND requirements that you have in a normal browser.

Read [Running PHPUnit JavaScript tests](https://www.drupal.org/docs/8/phpunit/running-phpunit-javascript-tests) to find out how to run a JavaScript test.

#### Setup

In order to write your own tests, you add a `FunctionalJavascript` folder inside `yourmodule/tests/src` and create a `FooTest.php` file.  
In there ensure to extend `Drupal\FunctionalJavascriptTests\`[WebDriverTestBase](https://api.drupal.org/api/drupal/core%21tests%21Drupal%21FunctionalJavascriptTests%21WebDriverTestBase.php/class/WebDriverTestBase/). The namespace for your test will be `\Drupal\Tests\[MODULENAME]\FunctionalJavascript`.

#### Basics

To make assertions about the page, and to change things on it, you'll need the following two objects:

```php
// The WebAssert object contains methods for making assertions about the page.
$web_assert = $this->assertSession();
// The Mink page element allows you to manipulate the current page.
$page = $this->getSession()->getPage();

```

#### Navigation

In there you can do ordinary HTTP requests using `drupalGet`, but also click on links/press buttons. When pressing a submit button (that is not Ajaxified) the page will submit and load the resulting page. After the page is loaded the test will continue.

NOTE: The test continues on the load event. If AJAX behaviors are triggered on load (for example in behaviors) you should add a `$this->assertSession()->assertWaitOnAjaxRequest()` after the load or, better yet, if you are waiting for elements to appear, you can use a `waitForX` method, see [Waiting](#waiting).

#### Finding and using elements

After loading a page you can use various methods of finding elements on the page. The most common methods for this are (there are other methods but these are the most used):

```php
$page = $this->getSession()->getPage();

// Find the submit button labeled 'Save'
$button = $page->findButton('Save');

// Find the field with the name 'test'
$field = $page->findField('field_test[0][value]');

// Find links
$link = $page->findLink('Link text');

// Find using css
$element = $page->find('css', 'css selector');
```

Before using an element you should always check if it was found:

```php
$this->assertNotEmpty($field);
```

After this, you can start changing/using the element. For example, you can now check the visibility of an element, see the following code examples:

```php
$page = $this->getSession()->getPage();
$content = $page->findLink('Content');
$this->assertTrue($content->isVisible());

```

AJAX form interactions are also supported using classes [Session](https://api.drupal.org/api/drupal/vendor%21behat%21mink%21src%21Session.php/class/Session/), [DocumentElement](https://api.drupal.org/api/drupal/vendor%21behat%21mink%21src%21Element%21DocumentElement.php/class/DocumentElement/), and [NodeElement](https://api.drupal.org/api/drupal/vendor%21behat%21mink%21src%21Element%21NodeElement.php/class/NodeElement/). The following will run the AJAX behaviors if there are any attached:

```php
$this->getSession()->getPage()->find('css', '#somebutton')->click();

```

### Waiting

When clicking a link/button with AJAX behavior attached, you need to keep in mind that the underlying browser might need a while to deliver changes to the HTML. This can also be true for other JavaScript interactions, like when you choose a radio button that makes other parts of the UI open or click on a vertical tab opener link and then needs to interact with the part of the form that is in that tab. The preferred method for this is to wait until an expected piece of UI is available. There are various methods available for this in [WebDriverWebAssert](https://api.drupal.org/api/drupal/core%21tests%21Drupal%21FunctionalJavascriptTests%21WebDriverWebAssert.php/class/WebDriverWebAssert/):

* `::waitForElement()`
* `::waitForElementVisible()`
* `::waitForButton()`
* `::waitForLink()`
* `::waitForField()`
* `::waitForId()`

The methods work similarly to the find...() methods in that they return an element when found.

Here is some code that will wait up to 10 seconds for an element to appear, and return the element if it does, FALSE if it doesn't:

```php
// $type can be either 'css' or 'xpath' here, and $selector will need to change accordingly
function waitForAppearance($type, $selector) {
  $page = $this->getSession()->getPage();
  return $page->waitFor(10,
      function() use ($type, $selector, $page) {
        return $page->find($type, $selector);
     });
}

```

There are edge cases where you have to directly wait for the AJAX request to finish. Use `$this->assertSession()->assertWaitOnAjaxRequest()` to wait for that.

As a last resort you can use a custom JavaScript snippet code that needs to pass:

```php
$this->assertJsCondition('JavaScript condition that should equal TRUE');
```

**You should always avoid waiting for a specific number of (milli)seconds. This would cause random failures in tests as sometimes the test will run longer than you'd expect, or you will wait too long causing the test to take more time than necessary.**

### Downloading third-party libraries for testing (info "libraries" folder)

For front-end related modules it is sometime required to first download third-party libraries into the "libraries" folder before running the tests. This is typically done in a testing submodule.

_Best-practice is not yet documented here, please help to add this to the tutorial, see [issue 3272542](/project/drupal/issues/3272542)._

### Debug tests

#### HTML

You can output the HTML that the test browser has after an AJAX request. This will be added to the test HTML output that is produced by normal page requests.

```php
// Get the Mink page element.
$page = $this->getSession()->getPage();

// Change a form element that will react with AJAX, and wait for the request to
// complete.
$page->selectFieldOption('my-field', '1');
$this->assertSession()->assertWaitOnAjaxRequest();

// Output the new HTML.
$this->htmlOutput($page->getHtml());

```

#### Screenshots

If you want to see a screenshot to work out what is going on you can do this! (introduced in 8.1.9)

```php
$this->createScreenshot('PATH/TO/screenshot.png');

```

Don't put the screenshot in a path inside the test environment like `public://test.jpg` as this will be cleaned up at the end of the test.

Read more about the context of these changes at [#2807237: PHPUnit initiative](https://www.drupal.org/project/ideas/issues/2807237 "Status: Closed (fixed)").

#### Screenshots on Drupal CI

If you want to see a screenshot to work out what is going on when the Drupal CI testbot runs your tests, you can also do this! To achieve this, you have to write the screenshot to a directory which will be in the build artifacts. The folder `sites/default/files/simpletest` is such a folder.

Example code:

```php
$this->createScreenshot(\Drupal::root() . '/sites/default/files/simpletest/screen.png');
```

You can then inspect your screenshot by clicking your way to this file:

* Click the test result on the issue
* Click **View results on the dispatcher**
* Expand the following path under **Build Artifacts**: simpletest.js (or run\_tests.js) -> phpunit-xml

#### Log output

Errors during AJAX calls produce no visible error output. The [log\_stdout module](/project/log%5Fstdout) allows errors to show in the normal output.