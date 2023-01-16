Isolation can be achieved by substituting the depended-on object with an object that is controlled by the unit test suite; a test double. The test double takes the same interface as the production object but does have a different implementation, usually much simplified and targeted for a particular test case or suite.  
Test doubles can come in many flavours. The most important test doubles are stubs and mocks. A stub directs inputs into the object under test. A mock object observes outputs of the object under test.

### Substituting - Dependency Injection and Dependency Lookup

Two of the most popular approaches to get substituted behaviour into objects under test is dependency injection and dependency lookup. Dependency injection injects the test double via the API of the object under test. Dependency lookup retrieves the test double via another object. The other "locator" object should then provide some mechanism to configure it during unit tests with a test double.

Here is an example of an object that might use dependency injection substitution:

```php
<?php
class KittenService {
  public function __construct(QueryInterface $query) {
    $this->query = $query;
  }

  public function doWhatever() {
    // ...
    if (/* $condition */) {
      // ...
      $this->query->execute();
    }
    else {
      // ...
      $this->query->abort();
    }
  }
}

// We want to test abort function was called so we inject a mocked object.
$mock = new QueryMock(); // Implements QueryInterface.
$service = new KittenService($mock);
$service->doWhatever();

$this->assertTrue($mock->abortCalled(), 'Abort function was called.');
?>
```

Here is the same example of an object that might use dependency lookup substitution:

```php
<?php
class KittenService {

  public function doWhatever() {
    // ...
    if (/* $condition */) {
      // ...
      db_query()->execute();
    }
    else {
      // ...
      db_query()->abort();
    }
  }
}

// We want to test abort function was called so we set the service locator to return our mocked object.
db_query_set(new QueryMock()); // Implements QueryInterface.
$service = new KittenService();
$service->doWhatever();

$this->assertTrue(db_query()->abortCalled(), 'Abort function was called.');
?>
```

### Substituting - Overriding and Overwriting

Substitution by overriding can be achieved with subclassing the depended-on object with an object only used in tests that provide an alternative implementation for the behaviour, not of interest in unit tests of the object under test.  
Substitution by overwriting simply sets (overwrites) a depended-on object with a test double. However, this is only feasible if the depended-on object is exposed via an API of the object under test and typed as an interface or common base class.

Here is an example of an object that might use overriding substitution:

```php
<?php
class KittenService {
  public function __construct(QueryInterface $query) {
    $this->query = $query;
  }

  public function doWhatever() {
    if ($result = $this->query->execute()) {
      // Do whatever...
    }
    else {
      throw MyAPICheckedException();
    }
  }
}

class QueryStub extends Query {
  // Simulates the query execution failed.
  public function execute() {
    return FALSE;
  }
}

// We want to test the API function throws an exception when the db fails.
$stub = new QueryStub(); // Extends Query.
$service = new KittenService($stub);
try {
  $service->doWhatever();
  $this->fail('The query passed.');
catch (MyAPICheckedException $e) {
  $this->pass('An exception was thrown.');
}
?>
```

Here is the same example of an object that might use overwriting substitution:

```php
<?php
class KittenService {
  public function __construct(QueryInterface $query) {
    $this->query = $query;
  }

  public function doWhatever() {
    if ($result = $this->query->execute()) {
      // Do whatever...
    }
    else {
      throw MyAPICheckedException();
    }
  }
}

class QueryStub implements QueryInterface {
  // Implements full interface.

  // Simulates the query execution failed.
  public function execute() {
    return FALSE;
  }
}

// We want to test the API function throws an exception when the db fails.
$stub = new QueryStub(); // Implements QueryInterface.
$service = new KittenService($stub);
try {
  $service->doWhatever();
  $this->fail('The query passed.');
catch (MyAPICheckedException $e) {
  $this->pass('An exception was thrown.');
}
?>
```

This is different as the QueryStub has to implements the full interface and might be cumbersome to maintain, but does not require the dependencies of the Query object in the former example and offers the full flexibility over the test-double behaviour.

### Substituting - Test Hocks

A Test Hock is a control point (i.e. if-statement) within the object under test that decides to behave differently based on if it's being exercised during unit tests or during production. This can require a known object with a global state to tell objects if they are in unit tests or not. However, instead of hardcoding a conditional statement in the production code, this could also be done configuring a dependency injection container. In any case, this approach adds risk, size and complexity to production code that would not need to be there following the approaches above and should be used with caution.

```php
<?php
if (drupal_valid_test_ua()) {
  //
}
?>
```

_Example of a Drupal Test Hock._