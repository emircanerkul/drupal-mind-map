When trying to test a single method, the constructor and the method itself might unleash a whole chain of method calls and Drupal service calls and it seems the test will drown in a sea of mocking. This is a code smell and you _really_ should try to fix it. This is not a technique to be used when you are writing a new class but sometimes fixing this is not possible/feasible -- fixing a small bug on an entity class does not warrant rewriting the entity class. Instead, completely kill every method but the one being tested:

```php
    $methods = get_class_methods('Drupal\comment\Entity\Comment');
    unset($methods[array_search('preSave', $methods)]);
    $comment = $this->getMockBuilder('Drupal\comment\Entity\Comment')
      ->disableOriginalConstructor()
      ->setMethods($methods)
      ->getMock();

```

This will create a version of the comment entity class with every method returning NULL except `preSave`. If NULL is not adequate, then just add an expectation:

```php
    $comment->expects($this->once())
      ->method('isNew')
      ->will($this->returnValue(TRUE));

```

As discussed in the [function calls](#function%5Fcalls) section, it is best to move function calls into a method and then override the method -- instead of writing a test class, the technique described here can be used as well.