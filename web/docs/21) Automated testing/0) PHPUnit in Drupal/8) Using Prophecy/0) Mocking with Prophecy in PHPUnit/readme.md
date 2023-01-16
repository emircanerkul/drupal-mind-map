Unit testing is a best practice in test-driven development. In a unit test, a small part of the code (for example, a particular class) is tested and _just_ that. For the other interacting code in the test, you inject the dependencies, not as real objects, but rather as mocks (simulated objects).

Prophecy creates mocks from a class. The class methods can be called on these mock objects, which will return method mock objects instead of the actual results. In turn, expectations can be set on the method mock objects. Once all expectations have been set, the prophecy can be revealed, which returns a dummy object that can then be passed to anywhere that expects an instance of the original class.

Let's take a look at an actual example:

```php
class State implements StateInterface {
  
  public function __construct(KeyValueFactoryInterface $key_value_factory) {
    $this->keyValueStore = $key_value_factory->get('state');
  }
   
  public function set($key, $value) {
    $this->cache[$key] = $value;
    $this->keyValueStore->set($key, $value);
  }

}

```