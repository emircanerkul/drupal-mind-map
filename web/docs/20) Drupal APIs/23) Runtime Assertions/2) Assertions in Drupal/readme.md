Assertions are only now being added to Drupal - at this time they are still large areas of the code that aren't being tested this way. The first assertions that will be added to Drupal will deal with the areas of the code module and theme developers work with most frequently, and working out from there.

An assertion inspector component has been provided to do several common generic tests. They are invoked like so.

```php
// First mark that you may use the library after setting the namespace.
use Drupal\Component\Assertion\Inspector;

// Then later in the same PHP file.
assert(Inspector::assertAllStrings($array));

```

This will assert that all the elements of the $array are strings. See the api documentation for more information on the Inspector's functions.

### Configuration Checking

Drupal has several objects that the services.yml file of modules can change. These objects may contain assertions about their own state to make sure they haven't been misconfigured, such as \\Drupal\\Template\\TwigExtension.

```php
  public function getPath($name, $parameters = array(), $options = array()) {
    assert($this->urlGenerator instanceof UrlGeneratorInterface, 'Generator missing. The most likely culprit is a misconfigured services.yml file in a module.');
    $options['absolute'] = FALSE;
    return $this->urlGenerator->generateFromRoute($name, $parameters, $options);
  }

```

**Note:** Whether to assert the validity of configuration files is in a gray area between assertions and exceptions. Drupal uses assert when only developers are expected to make changes to the files in question. Configuration files that are modified by admins are to be guarded by exception testing at all times.