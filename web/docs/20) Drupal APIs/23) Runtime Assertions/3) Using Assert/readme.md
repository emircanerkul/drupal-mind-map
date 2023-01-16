You are encouraged to use unit tests whenever possible to test your own code and modules. The assert statement is most useful for modules that provide API's that will be used by other modules. As in Drupal core, assert can be used in those modules to ensure the calling code is meeting the expectations of the API by providing variables of the correct data type. 

The [assert](http://www.php.net/assert) statement takes two arguments. The first is the assertion, which is the condition to be tested. The second is either an error message string or an exception to throw.

If you write a unit test to check an assert() statement you must check to see if assertions are on and if they are not skip the test:

```php
if (ini_get('zend.assertions') < 0) {
  $this->markTestSkipped('Assertions disabled, skipping');
}
```

Doing this preserves the option to all unit tests as a group regardless of whether runtime assertions are turned on. Note - the above also skips the test on PHP 5.