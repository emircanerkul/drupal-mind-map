We are using the following tools for the test techniques:

* [PHPUnit](https://phpunit.de)  
   * Unit tests without and with a database connection. For detailed identification of bugs in your code and building a logical application structure.
* [BackstopJS](https://github.com/garris/BackstopJS)  
   * Testing against regressions in the visual layer of your webbrowser
* [Behat](https://docs.behat.org/en/latest/)  
   * Testing of the application behavior in the webbrowser

### [Examples](#examples)

The most BackstopJS and Behat tests can be located in the following path:

```php
docroot/profiles/contrib/degov/testing 
```

The PHPUnit tests are attached to the modules. Some PHPUnit tests can be found here:

```php
docroot/profiles/contrib/degov/modules/degov_auto_crop/tests 
```

### [Timely efficient development](#timely-efficient-development)

The most developer time efficient test technique is unit testing. You should have a large amount of PHPUnit tests. There should be fewer Behat and BackstopJS tests in your application than unit tests.

Of course it takes time if you have never developed tests or if you have only limited experience in writing automated tests. If you are collecting experience and skills during the tests development process, you are minimizing the total effort in the development and maintenance of your application.