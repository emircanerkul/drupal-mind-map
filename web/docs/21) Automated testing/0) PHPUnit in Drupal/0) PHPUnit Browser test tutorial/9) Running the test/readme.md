We will use the command line to execute the test. This is documented in more detail on the [running PHPUnit tests page](/node/2116263).

Let's execute just the testReactionRulePage() method of UiPageTest:

```php
cd core
../vendor/bin/phpunit --filter testReactionRulePage ../modules/rules/tests/src/Functional/UiPageTest.php
PHPUnit 4.8.11 by Sebastian Bergmann and contributors.

.

Time: 25.14 seconds, Memory: 6.00Mb

OK (1 test, 5 assertions)

HTML output was generated
http://drupal-8.localhost/sites/simpletest/browser_output/Drupal_Tests_rules_Functional_UiPageTest-13-411368.html
http://drupal-8.localhost/sites/simpletest/browser_output/Drupal_Tests_rules_Functional_UiPageTest-14-411368.html
http://drupal-8.localhost/sites/simpletest/browser_output/Drupal_Tests_rules_Functional_UiPageTest-15-411368.html

```

Yay, our test has passed! It also generated a couple of HTML output files, where you can see the pages the browser visited during the test. The pages are written to files linked as for example above, so you can inspect them after the test has run.