Once you have created the PHP file that creates your "prior" data, you'll need to write a test that runs the update and verifies the resulting data. Here's a skeleton:

```php
namespace Drupal\YOURMODULE\Tests\Update;

use Drupal\FunctionalTests\Update\UpdatePathTestBase;

/**
 * Provides tests for the DESCRIBE UPDATE HERE.
 */
class YourClassNameEndsInTest extends UpdatePathTestBase {

  /**
   * {@inheritdoc}
   */
  protected function setDatabaseDumpFiles() {
    // Note that contributed modules must use an absolute path of
    // DRUPAL_ROOT . '/core/modules/system/tests/fixtures/update/drupal-8.bare.standard.php.gz'
    // to drupal-8.bare.standard.php.gz, because the relative path to core in
    // the testbot is not guaranteed to be the same as what you use on your site.
    // If however you are writing a core test residing in (for example)
    // /core/modules/foo/src/Tests/Update, a relative path of
    // __DIR__ . '/../../../../system/tests/fixtures/update/drupal-8.bare.standard.php.gz'
    // is preferred.
    $this->databaseDumpFiles = [
      DRUPAL_ROOT . '/core/modules/system/tests/fixtures/update/drupal-8.bare.standard.php.gz',
      __DIR__ . 'PATH TO YOUR PHP SETUP FILE',
    ];
  }

  /**
   * Tests that DESCRIBE YOUR UPDATE HERE.
   */
  public function testUpdateHookN() {
    // Run the updates.
    $this->runUpdates();

   // Now load your data and test it.
  }
}

```