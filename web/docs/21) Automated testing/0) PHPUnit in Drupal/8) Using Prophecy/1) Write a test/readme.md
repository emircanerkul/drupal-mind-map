Now let's write a test. We want to ensure that if `State::set($key, $value);` is called, the key-value store receives such call as well.

```php
class StateTest extends UnitTestCase {

  public function testSet() {
    // Create an object called prophecy which you can
    // instruct how to behave. 
    $prophecy = $this->prophesize(KeyValueFactoryInterface::class);
        
    // We can call methods with their expected arguments.
    // You can also say what this "mock" should return.
    $prophecy->set('key', 'value')->willReturn('my first value');
        
    // Convert the prophecy to an object which behaves like a $key value store.
    // This object is called a mock.
    $key_value_store = $prophecy->reveal();
    $state = new State($key_value_store);
        
    $state->set('key', 'value');
  }

}


```

For more information, refer to <https://github.com/phpspec/prophecy>.