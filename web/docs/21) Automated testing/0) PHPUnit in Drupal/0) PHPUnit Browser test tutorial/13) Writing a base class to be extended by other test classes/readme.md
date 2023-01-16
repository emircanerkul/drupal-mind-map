You may find that some of your test duplicate code for shared functionality. In this case, you may want to create a base class that is then extended by your various test classes. When doing this there are 2 important things to keep in mind.

1. The base test class should be abstract
2. The base test class should end with the word Base

Example base test class: `my_module/Tests/src/Functional/myModuleTestBase.php`

```php
<?php

namespace Drupal\Tests\my_module\Functional;

/**
 * To be extended by other test classes.
 */
abstract class myModuleTestBase extends BrowserTestBase {
  protected function setUp() {
    parent::setUp();
    // etc
  }
}
```

Extending the base class: `my_module/Tests/src/Functional/myModuleSomethingTest.php`

```php
<?php

namespace Drupal\Tests\my_module\Functional;

/**
 * Test something about my module.
 *
 * @group my_module
 */
class myModuleSomethingTest extends myModuleTestBase {

  protected function setUp() {
    parent::setUp();
  }

  public function testSomething() {
    // do the test.
  }
}
```