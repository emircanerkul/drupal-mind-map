Metadata about a test is done with native PHPDoc documentation on the test class itself, following PHPUnit's lead:

### Examples

File: modules/ice\_cream/tests/src/Unit/IceCreamTest.php

* **Name**: Generated from the fully-qualified test class name.
* **Description**: Generated from the PHPDoc summary line.  
   * Every test class MUST have a PHPDoc summary line. Only PHPUnit tests MAY skip the PHPDoc summary line if their PHPDoc specifies a `@coversDefaultClass`. See [PHPUnit @coversDefaultClass annotation documentation](https://phpunit.de/manual/current/en/appendixes.annotations.html#appendixes.annotations.coversDefaultClass)
* **Group**: Generated from the `@group` PHPDoc annotation.  
   * Every test class MUST specify at least one (first) `@group` that matches the originating module short name (or Drupal core component name).
* **Dependencies**: Generated from `@requires module $name` PHPDoc annotation. See [PHPUnit @requires annotation documentation](http://phpunit.de/manual/current/en/incomplete-and-skipped-tests.html#incomplete-and-skipped-tests.skipping-tests-using-requires). Also, if your test requires additional contributed modules to be installed, beyond the module's direct dependencies, see [the Managing dependencies Composer page](https://www.drupal.org/docs/develop/using-composer/managing-dependencies-for-a-contributed-project) for instructions.

```php
namespace Drupal\Tests\ice_cream\Unit;

/**
 * Tests generation of ice cream.
 *
 * @group ice_cream
 */
class IceCreamTest extends UnitTestCase {
  ...
}

```

The summary is unnecessary if using the `@coversDefaultClass` annotation:

```php
/**
 * @coversDefaultClass \Drupal\ice_cream\IceCream
 * @group ice_cream
 */
class IceCreamTest extends UnitTestCase {
  ...
}

```