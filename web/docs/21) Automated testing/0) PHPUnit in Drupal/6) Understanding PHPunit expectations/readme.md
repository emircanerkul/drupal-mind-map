---
url: >-
  https://www.drupal.org/docs/testing/phpunit-in-drupal/understanding-phpunit-expectations
description: >-
  A mock object most of the time will contain an expectation like
  $lock->expects($this->at(0)) ->method('acquire') ->with($lock_name, 30)
  ->will($this->returnValue(TRUE)); expects() accepts matchers (be mindful of
  the note as well below the table). method accepts constraints. When a method
  call happens, every expectation checks whether it matches. It only uses the
  matches and constraints above. It does not use the arguments passed into with.
  That is only used to verify whether the behavior is the correct one.
published_time: '2013-12-16T18:46:09+00:00'
modified_time: '2019-10-29T14:45:56+00:00'
---
A mock object most of the time will contain an expectation like

```php
    $lock->expects($this->at(0))
      ->method('acquire')
      ->with($lock_name, 30)
      ->will($this->returnValue(TRUE));

```

`expects()` accepts [matchers](http://phpunit.de/manual/3.7/en/test-doubles.html#test-doubles.mock-objects.tables.matchers) (be mindful of the note as well below the table). `method` accepts [constraints](http://phpunit.de/manual/3.7/en/writing-tests-for-phpunit.html#writing-tests-for-phpunit.assertions.assertThat.tables.constraints).

When a method call happens, every expectation checks whether it matches. It only uses the matches and constraints above. It does not use the arguments passed into `with`. That is only used to verify whether the behavior is the correct one. If there is a match and verification also passed then comes the invocation part as prescribed in `will`.

While `$this->returnValue` is one of the most common, it is not always enough. We might want to write a single expectation that matches every call of a method and then we likely need something more than just returning a constant value. The PHPUnit manual has excellent examples of these:

1. [it can return values in the specified order](http://phpunit.de/manual/3.7/en/test-doubles.html#test-doubles.stubs.examples.StubTest7.php)
2. [it can return values from a map](http://phpunit.de/manual/3.7/en/test-doubles.html#test-doubles.stubs.examples.StubTest5.php). To clarify, each map element is a list of arguments plus the return value. On every call, every such element is considered in order by strictly (`===`) comparing the list of arguments to the actual method call arguments and if there is a match then the last element is returned immediately.
3. [it can use a callback](http://phpunit.de/manual/3.7/en/test-doubles.html#test-doubles.stubs.examples.StubTest6.php). This is the most versatile and closures can be used very effectively here.