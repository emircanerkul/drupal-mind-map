Often there is a need to interject actions at different points in execution. Traditionally with Drupal we use Hooks. However, with Drupal 8 and now 9 there has been a move towards using events over hooks. The migrate module is no exception. Currently, there are only two types of hooks available for the migrate module. The "hook\_migrate\_prepare\_row" hook and the "hook\_migration\_plugins\_alter" hook. While these are useful, they are not as useful or powerful as using events.

A detailed list of [migration events can be found here](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Event%21MigrateEvents.php/class/MigrateEvents/9.3.x).

**For a quick reference, these are the events:**

1. MAP\_SAVE - This event allows modules to perform an action whenever the disposition of an item being migrated is saved to the map table.
2. MAP\_DELETE - This event allows modules to perform an action whenever a row is deleted from a migration's map table (implying it has been rolled back).
3. PRE\_IMPORT - This event allows modules to perform an action whenever a migration import operation is about to begin.
4. POST\_IMPORT - This event allows modules to perform an action whenever a migration import operation is completing.
5. PRE\_ROW\_SAVE - This event allows modules to perform an action whenever a specific item is about to be saved by the destination plugin.
6. POST\_ROW\_SAVE - This event allows modules to perform an action whenever a specific item has been saved by the destination plugin.
7. PRE\_ROLLBACK - This event allows modules to perform an action whenever a migration rollback operation is about to begin.
8. POST\_ROLLBACK - This event allows modules to perform an action whenever a migration rollback operation is completing.
9. PRE\_ROW\_DELETE - This event allows modules to perform an action whenever a specific item is about to be deleted by the destination plugin.
10. POST\_ROW\_DELETE - This event allows modules to perform an action whenever a specific item has been deleted by the destination plugin.
11. IDMAP\_MESSAGE - This event allows modules to perform an action whenever a message is being logged by the ID map.

**Creating an Event Subscriber**

To create an event subscriber, you will create both an EventSubscriber class and an entry in your module's services.yml file.

In your module create the following directory structure: "src/EventSubscriber". Then create a file for the subscriber that is descriptive in its purpose. Keep in mind that a subscriber can "subscribe" to one or more events. Meaning the same class can handle the "POST\_IMPORT" event and the "PRE\_ROLLBACK" event or all of the events if you wish. Often, a preference is to have one class per event that you are subscribing to so that you make it easier to find and troubleshoot problems when they occur. Keeps things isolated.

In this case, create a file that is called "MyModuleMigrationSubscriber.php". With a class of the same name within it (see example below). Then within that you create a getSubscribedEvents function and return an array of the events your class will act on and associate each event with a function within your class. Then declare each function and take the needed actions. The below example is really used on a production website right now (though names have been changed to protect witnesses).

After you have created your subscriber class you just need to add a reference to it in your module's services.yml file (see example below). Then finally clear cache to get it recognized.

**Class MyModuleMigrationSubscriber.php:**

```php
<?php

namespace Drupal\MY_MODULE\EventSubscriber;

use Drupal\migrate\Event\MigrateEvents;
use Drupal\migrate\Event\MigrateImportEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Class PreMigrationSubscriber.
 *
 * Run a test to validate that the server is available.
 *
 * @package Drupal\YOUR_MODULE
 */
class MyModuleMigrationSubscriber implements EventSubscriberInterface {

  /**
   * Get subscribed events.
   *
   * @inheritdoc
   */
  public static function getSubscribedEvents() {
    $events[MigrateEvents::PRE_IMPORT][] = ['onMigratePreImport'];
    $events[MigrateEvents::POST_IMPORT][] = ['onMigratePostImport'];
    return $events;
  }

  /**
   * Check for the image server status just once to avoid thousands of requests.
   *
   * @param \Drupal\migrate\Event\MigrateImportEvent $event
   *   The import event object.
   */
  public function onMigratePreImport(MigrateImportEvent $event) {
    $migration_id = $event->getMigration()->getBaseId();

    if (strpos($migration_id, '_products', -9)) {
      $store = \Drupal::service('tempstore.private')->get('my_module_migrations');

      if ($this->checkImageServerStatus('https://www.TESTDOMAIN.com')) {
        $store->set('server_available', TRUE);
      }
      else {
        $store->set('server_available', FALSE);
        $event->logMessage('The server is unreachable.');
      }
    }
  }

  /**
   * Checks the status of the image server.
   *
   * @param string $url
   *   The URL to check.
   *
   * @return bool
   *   TRUE if the image server is available, FALSE otherwise.
   */
  private function checkImageServerStatus($url) {
    $headers = @get_headers($url);

    // Use condition to check the existence of URL.
    if ($headers && strpos($headers[0], '200')) {
      return TRUE;
    }

    return FALSE;
  }

  /**
   * Check for our specified last node migration and run our flagging mechanisms.
   *
   * @param \Drupal\migrate\Event\MigrateImportEvent $event
   *   The import event object.
   */
  public function onMigratePostImport(MigrateImportEvent $event) {
    $migration_id = $event->getMigration()->getBaseId();

    // Do a little bit of cleanup.
    if (strpos($migration_id, '_products', -9)) {
      $store = \Drupal::service('tempstore.private')->get('my_module_migrations');
      $store->delete('server_available');
    }
  }

}

```

**The my\_module.services.yml file:**

```yaml
services:
  migration_subscriber:
    class: Drupal\MY_MODULE\EventSubscriber\MyModuleMigrationSubscriber
    tags:
      - { name: 'event_subscriber' }

```