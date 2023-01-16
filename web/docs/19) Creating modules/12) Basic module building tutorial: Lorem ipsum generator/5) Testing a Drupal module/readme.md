---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/step-by-step-tutorial/testing-a-drupal-module
description: >-
  Part VI of A practical guide to building basic Drupal 8 modules From .info to
  tests, just the basics If you have been following this practical guide to
  building basic Drupal 8 modules from the beginning, we are now ready for some
  QA. If you just want to jump right in and play along you can grab the Lorum
  ipsum module directly from Drupal. Let's check that the module works as
  expected by writing a few tests of our own which can be run via Drupal itself.
  /tests/src/Functional/LoremIpsumTest.php
published_time: '2015-08-31T17:22:44+00:00'
modified_time: '2021-03-09T15:08:13+00:00'
---
_Part VI of [A](https://www.drupal.org/docs/8/creating-custom-modules/a-practical-guide-to-building-basic-drupal-8-modules)_[ practical guide to building basic Drupal 8 modules](https://www.drupal.org/docs/8/creating-custom-modules/a-practical-guide-to-building-basic-drupal-8-modules)  
_From .info to tests, just the basics_

If you have been following this [practical guide to building basic Drupal 8 modules](/docs/8/creating-custom-modules/a-practical-guide-to-building-basic-drupal-8-modules) from the beginning, we are now ready for some QA. If you just want to jump right in and play along you can grab the [Lorum ipsum module](https://www.drupal.org/project/loremipsum/) directly from Drupal.

Let's check that the module works as expected by writing a few tests of our own which can be run via Drupal itself.

### /tests/src/Functional/LoremIpsumTest.php

```php
<?php

namespace Drupal\Tests\loremipsum\Functional;

use Drupal\Tests\BrowserTestBase;

/**
 * Tests for the Lorem Ipsum module.
 *
 * @group loremipsum
 */
class LoremIpsumTests extends BrowserTestBase {

  /**
   * Modules to install.
   *
   * @var array
   */
  protected static $modules = array('loremipsum');

  /**
   * A simple user.
   *
   * @var \Drupal\user\Entity\User
   */
  private $user;

  /**
   * Perform initial setup tasks that run before every test method.
   */
  public function setUp() {
    parent::setUp();
    $this->user = $this->drupalCreateUser(array(
      'administer site configuration',
      'generate lorem ipsum',
    ));
  }
}
```

Testing begins by extending the _BrowserTestBase_ class. It's important to note that Drupal runs tests in a testing database, which is created, populated as needed and then destroyed. This means that you can test on _development_, _staging_, and even - if you dare! - _production_ environments.

The first order of business for tests, as you can see above, is to perform some initial setup by defining the modules to test (just the present one), creating a test user and giving it the required permissions.

Then we test access to the dummy text generation page:

```php
  /**
   * Tests that the Lorem ipsum page can be reached.
   */
  public function testLoremIpsumPageExists() {
    // Login.
    $this->drupalLogin($this->user);

    // Generator test:
    $this->drupalGet('loremipsum/generate/4/20');
     $this->assertSession()->statusCodeEquals(200);
  }
```

And the config form:

```php
  /**
   * Tests the config form.
   */
  public function testConfigForm() {
    // Login.
    $this->drupalLogin($this->user);

    // Access config page.
    $this->drupalGet('admin/config/development/loremipsum');
     $this->assertSession()->statusCodeEquals(200);
    // Test the form elements exist and have defaults.
    $config = $this->config('loremipsum.settings');
    $this->assertSession()->fieldValueEquals(
      'page_title',
      $config->get('loremipsum.page_title'),
    );
    $this->assertSession()->fieldValueEquals(
      'source_text',
      $config->get('loremipsum.source_text'),
    );
```

Next we test the config form can be submitted:

```php
    // Test form submission.
    $this->drupalPostForm(NULL, array(
      'page_title' => 'Test lorem ipsum',
      'source_text' => 'Test phrase 1 \nTest phrase 2 \nTest phrase 3 \n',
    ), t('Save configuration'));
    $this->assertSession()->pageTextContains('The configuration options have been saved.');
```

And assert that the new values are there:

```php
    // Test the new values are there.
    $this->drupalGet('admin/config/development/loremipsum');
    $this->assertSession()->statusCodeEquals(200);
    $this->assertSession()->fieldValueEquals(
      'page_title',
      'Test lorem ipsum',
    );
    $this->assertSession()->fieldValueEquals(
      'source_text',
      'Test phrase 1 \nTest phrase 2 \nTest phrase 3 \n',
    );
  }

}
```

To execute the tests  
1\. enable modules CORE.Testing and DEVELOPMENT:Lorem ipsum  
2\. go to admin/config/development/testing  
3\. select test 'loremipsum'  
4\. press 'Run tests'

And that's it for this tutorial! If you want, grab a copy of this code at the [Lorem ipsum](https://www.drupal.org/project/loremipsum ) project page - keep in mind the current dev version has [theming built in](/docs/8/creating-custom-modules/theming)to it. Also if you have any questions, feel free to drop me a line. Happy coding!