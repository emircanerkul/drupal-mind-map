It is best practice to inject the service rather than the deprecated global function into classes. However, if a class does use a global function the following pattern needs to be followed in order for the test runner to work.

### Example

This example is from the aggregator module, which uses `drupal_set_message` globally. Note that this does not work with namespace such as `\drupal_set_message`.

```php
namespace Drupal\Tests\aggregator\Unit\Plugin;

class AggregatorPluginSettingsBaseTest extends UnitTestCase {}

namespace Drupal\Core\Form;

if (!function_exists('drupal_set_message')) {
  function drupal_set_message() {}
}

```

Note that as of Drupal 8.5 (#2278383), you can use an injectable service for `drupal_set_message`, but the above is still a useful example for other instances with global functions.