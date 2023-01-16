The following instructions are part of [#2735005: Convert all Simpletest web tests to BrowserTestBase (or UnitTestBase/KernelTestBase)](https://www.drupal.org/project/drupal/issues/2735005 "Status: Closed (fixed)") which tracked the conversion of Drupal core tests. You can find many example conversions linked there.

### Instructions for converting a Simpletest web test

1. Read <https://www.drupal.org/phpunit> and all subpages, especially [PHPUnit Browser test tutorial](https://www.drupal.org/node/2783189).
2. Move the test file to a `tests/src/Functional` folder in the module.
3. Rename the namespace, make the class extend BrowserTestBase and fix the use statement.
4. If there is a test method which does not perform any web request (for example no `->drupalGet()` or `->drupalPostForm()` calls) then that method should be extracted to a unit test or kernel test. `$this->setRawContent()` generally means the test should be converted to a Kernel test. This is best done in a follow-up issue, it is best to first convert it to a BrowserTestBase test.
5. Calls like `$this->drupalPostAjaxForm()` or `$this->drupalPost()` means the test should be converted to a Javascript test. These methods were used to mock javascript interactions in Simpletest, since we have proper Javascript testing in PHPUnit, there is no longer a need to mock this behavior. This is best done in a follow-up issue, it is best to first convert it to a BrowserTestBase test. In most cases `drupalPostAjaxForm`can be replaced by `drupalPostForm`and the test will continue to work.
6. Otherwise, try to change as little as possible in the converted web test. Do not get tempted to "improve" or "tidy up" the tests - the conversion should be easy to review with only the minimum necessary changes. Further cleanup can be done in a follow-up issue.
7. Run the single test file with PHPUnit (replace the path with the file you converted):  
```php  
cd core  
../vendor/bin/phpunit   modules/help/tests/src/Functional/HelpTest.php --stop-on-failure  
```
8. If the conversion starts to involve complex changes, please reach out to people or search the core conversion issues for similar scenarios and see how they were solved.
9. Any TestBase or Trait which is in the old `/src/Tests/` location should be moved to the `/tests/` dir

Common conversion issues

* When using the result of an XPath or cssSelect and the result is used as an array or cast to a string, this would work in WebTestBase but for BrowserTestBase this returns a `\Behat\Mink\Element\NodeElement` object which does not allow this. Usually calling `getText()`on the result fixes the problem.
* When you see an exception of  
```php  
Exception: Serialization of 'Closure' is not allowed  
```  
This is usually also caused by the return of an XPath being used as a string or array in an assertion. Again, adding `getText()`on the result usually fixes this problem. Since the exception doesn't specify on which line of the test the error occurs, this can be very hard to debug.
* `drupalPostAjaxForm()`doesn't exist on BrowserTestBase and can usually be replaced with `drupalPostForm()`this does mean a loss of pseudo-JavaScript coverage, so ideally a follow up should be created to add proper JavaScript coverage using WebdriverTestBase
* `drupalGetTestFiles()`doesn't exist on BrowserTestBase, you need to add the `TestFileCreationTrait` and rename the method to `getTestFiles()` (or rename the method in the use statement to minimize changes in the rest of the file)