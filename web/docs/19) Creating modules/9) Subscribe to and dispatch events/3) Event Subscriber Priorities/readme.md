Another great feature of the Events system is the subscriber's ability to set its own priority within the subscriber itself, rather than having to change the entire module's execution weight or leverage another hook to change the priority (as with hooks).

Doing this is very simple, but to best show it off we need to write another subscriber to an event where we already have a subscriber. Let's write "_AnotherConfigEventSubscriber_" and set the priorities for its listeners.

First, we'll register our new event subscriber in our services.yml file:

```yaml
services:
  # Name of this service.
  my_config_events_subscriber:
    # Event subscriber class that will listen for the events.
    class: '\Drupal\custom_events\EventSubscriber\ConfigEventsSubscriber'
    # Tagged as an event_subscriber to register this subscriber with the event_dispatch service.
    tags:
      - { name: 'event_subscriber' }

  # Subscriber to the event we dispatch in hook_user_login.
  custom_events_user_login:
    class: '\Drupal\custom_events\EventSubscriber\UserLoginSubscriber'
    tags:
      - { name: 'event_subscriber' }

  another_config_events_subscriber:
    class: '\Drupal\custom_events\EventSubscriber\AnotherConfigEventsSubscriber'
    tags:
      - { name: 'event_subscriber' }
```

Then we'll write the `AnotherConfigEventSubscriber.php`:

`src/EventSubscriber/AnotherConfigEventSubscriber.php`

```php
<?php

namespace Drupal\custom_events\EventSubscriber;

use Drupal\Core\Config\ConfigCrudEvent;
use Drupal\Core\Config\ConfigEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Class EntityTypeSubscriber.
 *
 * @package Drupal\custom_events\EventSubscriber
 */
class AnotherConfigEventsSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritdoc}
   *
   * @return array
   *   The event names to listen for, and the methods that should be executed.
   */
  public static function getSubscribedEvents() {
    return [
      ConfigEvents::SAVE => ['configSave', 100],
      ConfigEvents::DELETE => ['configDelete', -100],
    ];
  }

  /**
   * React to a config object being saved.
   *
   * @param \Drupal\Core\Config\ConfigCrudEvent $event
   *   Config crud event.
   */
  public function configSave(ConfigCrudEvent $event) {
    $config = $event->getConfig();
    \Drupal::messenger()->addStatus('(Another) Saved config: ' . $config->getName());
  }

  /**
   * React to a config object being deleted.
   *
   * @param \Drupal\Core\Config\ConfigCrudEvent $event
   *   Config crud event.
   */
  public function configDelete(ConfigCrudEvent $event) {
    $config = $event->getConfig();
    \Drupal::messenger()->addStatus('(Another) Deleted config: ' . $config->getName());
  }

}
```

Pretty much the only important difference here is that we have changed the returned array in the `getSubscribedEvents()` method. Instead of the value for a given event being a string with the local method name, it is now an array where the first item in the array is the local method name and the second item is the priority of this listener.

So we changed this:

```php
public static function getSubscribedEvents() {
  return [
    ConfigEvents::SAVE => 'configSave',
    ConfigEvents::DELETE => 'configDelete',
  ];
}
```

To this:

```php
public static function getSubscribedEvents() {
  return [
    ConfigEvents::SAVE => ['configSave', 100],
    ConfigEvents::DELETE => ['configDelete', -100],
  ];
}
```

The results we're expecting:

* `AnotherConfigEventSubscriber::configSave()` has a very high priority, so it should be executed **before** `ConfigEventSubscriber::configSave()`.
* `AnotherConfigEventSubscriber::configDelete()` has a very low priority, so it should be executed **after** `ConfigEventSubscriber::configDelete()`.

Let's see the SAVE event in action by enabling the Statistics module again.

![Installing the Statistics module and looking at messages.](https://www.drupal.org/files/events-4-installed-priorities.png)  
Installing the Statistics module and looking at messages.  

Great! Our new event listener on `ConfigEvents::SAVE` happened before the other one we wrote. Now let's uninstall the Statistics module and see what happens on the DELETE event.

![Uninstalling statistics module and looking at the messages.](https://www.drupal.org/files/events-5-uninstalled-priorities.png)  
Uninstalling statistics module and looking at the messages.  

Also great! Our new event listener on `ConfigEvents::DELETE` was executed after the other one we wrote because it has a very low priority.

> Note: When you register a subscriber to an event without specifying the priority, it defaults to `0`.

**References:**

* [GitHub repo](https://github.com/daggerhart/drupal8%5Fexamples/tree/master/modules/custom%5Fevents) \- Contains all the working code presented in this guide.
* [Symfony Documentation: Event Listeners & Subscribers](https://symfony.com/doc/current/event%5Fdispatcher.html) \- Note, Drupal 8 does not use "Event Listeners" in the Symfony sense. Focus on Event Subscribers.
* [Symfony Documentation: Event Dispatcher](https://symfony.com/doc/current/components/event%5Fdispatcher.html)
* [Original blog post](https://www.daggerhart.com/drupal-8-hooks-events-event-subscribers/) \- Very similar to this guide page. Contains some additional information about the future of Events in Drupal.