The drupal.org testing system also has support for deprecation checking. There are two methods:

1. The execution of your module's test suite can be configured to fail when a deprecated code path (a `trigger_error()` with `E_USER_DEPRECATED` level) is reached. The effectiveness of this method depends on the extent of test coverage in your code.
2. The same PHPStan deprecation testing tool can run on your project (similar to `drupal-check` and Upgrade Status' backend). This will produce a build artifact but will not (yet) fail the testing of your project.

You can use a testing issue with a `drupalci.yml` file or commit a custom `drupalci.yml` to your project to take advantage of these.[ Use the _**suppress-deprecations**_ option](https://www.drupal.org/drupalorg/docs/drupal-ci/customizing-drupalci-testing-for-projects#testing) to make tests fail on `trigger_error()` calls. Add the `phpstan:` step to add static code analyses for deprecations. Here is a sample `drupalci.yml` snippet:

```php
build:
  assessment:
    validate_codebase:
      # Static analysis of code for @deprecated uses.
      phpstan:
        halt-on-fail: false
    testing:
      run_tests.standard:
        types: 'Simpletest,PHPUnit-Unit,PHPUnit-Kernel,PHPUnit-Functional'
        # Fails on trigger_error(..., E_USER_DEPRECATED) calls encountered.
        suppress-deprecations: false

```