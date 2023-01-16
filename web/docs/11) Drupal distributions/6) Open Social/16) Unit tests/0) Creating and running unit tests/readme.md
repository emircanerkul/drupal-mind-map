To create the Open Social unit tests, these tests need to be placed in certain predefined directories.  
These directories are added to the file: `phpunit.xml.dist` in the distribution.

If you look at:

```php
html/profiles/contrib/social/phpunit.xml.dist
```

you'll see we have several suites, 

we run all the social tests from the following 

```php
<testsuite name="social">
      <directory>modules/*/*/tests/src/Unit</directory>
      <directory>modules/*/*/*/tests/src/Unit</directory>
      <exclude>
        <file>modules/contrib/address/tests/src/Unit/Plugin/Validation/Constraint/CountryConstraintValidatorTest.php</file>
      </exclude>
</testsuite>
```

so all tests written in features or custom modules within open social are tested.  
Do you want to test something else? You can use the _core-contrib_ or _unit-core_ suite.