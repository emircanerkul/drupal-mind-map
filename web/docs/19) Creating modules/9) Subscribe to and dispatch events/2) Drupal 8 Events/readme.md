Drupal 8 events are very much Symfony events. Let's take a look at how this breaks down into our list of event system components.

* **Event Subscribers** \- A class that implements the `\Symfony\Component\EventDispatcher\EventSubscriberInterface`.
* **Event Dispatcher** \- A class that implements `\Symfony\Contracts\EventDispatcher\EventDispatcherInterface`. Generally at least one instance of the Event Dispatcher is provided as a service to the system, but other dispatchers can be created if desired.
* **Event Registry** \- The registry for subscribers is stored within the Event Dispatcher object as an array keyed by the event name and the event priority (order). When registering an event as a service (see examples), that event is registered within the globally available dispatcher.
* **Event Context** \- A class that extends the `\Drupal\Component\EventDispatcher\Event` class. Generally each extension that dispatches its own event will create a new type of Event class that contains the relevant data event subscribers need. ([See change record](https://www.drupal.org/node/3159012))

Learning to use Drupal 8 events will help you understand more about developing with custom modules, and will prepare you for a future where events will (hopefully) replace hooks. So let's create a custom module that shows how to leverage each of these event components in Drupal 8.

### My First Drupal 8 Event Subscriber

Let's create our first event subscriber in Drupal 8 using some core provided events. I personally like to do something very simple to start, so we're going to create an event subscriber that shows the user a message when a Config object is saved or deleted.

First thing we need is a module where we're going to do our work. I've named mine `custom_events`.

```yaml
name: Custom Events
type: module
description: Custom/Example event work.
core: 8.x
package: Custom
```

Next step, we want to register a new event subscriber with Drupal. To do this we need to create `custom_events.services.yml`. If you're coming from Drupal7- and are more familiar with the hooks system, then you can think of this step as the same as writing a "_hook\_my\_event\_name_" function in your module or theme.

```yaml
services:
  # Name of this service.
  my_config_events_subscriber:
    # Event subscriber class that will listen for the events.
    class: '\Drupal\custom_events\EventSubscriber\ConfigEventsSubscriber'
    # Tagged as an event_subscriber to register this subscriber with the event_dispatch service.
    tags:
      - { name: 'event_subscriber' }
```

That's pretty simple, but let's break it down a little bit.

1. We define a new service named "_my\_config\_events\_subscriber_"
2. We set its "_class_" property to the global name of a new PHP class that we will create.
3. We define the "_tags_" property, and provide a tag named "event\_subscriber". This is how the service is registered as an event subscriber within the system.

Alternatively, you may use the PHP class of the event subscriber (without the leading backslash) as the name of the service and omit the _"class"_ property, like so:

```php
services:
  # Name of this service, using the event subscriber class that will listen for the events.
  Drupal\custom_events\EventSubscriber\ConfigEventsSubscriber:
    tags:
      - { name: 'event_subscriber' }
```

Now we only need to write the event subscriber class. There are a few requirements for this class we want to make sure we do:

1. Should implement the `EventSubscriberInterface`.
2. Must have a `getSubscribedEvents()` method that returns an array. The keys of the array will be the event names you want to subscribe to, and the values of those keys are a method name on this event subscriber object.

Here is our event subscriber class. It subscribes to events on the ConfigEvents class, and executes a local method for each event.

`src/EventSubscriber/ConfigEventsSubscriber.php`

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
class ConfigEventsSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritdoc}
   *
   * @return array
   *   The event names to listen for, and the methods that should be executed.
   */
  public static function getSubscribedEvents() {
    return [
      ConfigEvents::SAVE => 'configSave',
      ConfigEvents::DELETE => 'configDelete',
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
    \Drupal::messenger()->addStatus('Saved config: ' . $config->getName());
  }

  /**
   * React to a config object being deleted.
   *
   * @param \Drupal\Core\Config\ConfigCrudEvent $event
   *   Config crud event.
   */
  public function configDelete(ConfigCrudEvent $event) {
    $config = $event->getConfig();
    \Drupal::messenger()->addStatus('Deleted config: ' . $config->getName());
  }

}
```

That's it! It looks pretty simple, but let's walk through this and hit the important notes:

* We implement the `EventSubscriberInterface` class.
* We implement the `getSubscribedEvents()` method. That method returns an array of event name => method name key/value pairs.
* In both the `configSave()` and `configDelete()` we expect an object of the `ConfigCrudEvent` type. That object has `getConfig()` method which returns the `Config` object for this event.

And a few questions that might come up to the astute observer:

* **What is `ConfigEvents::SAVE` and where did it come from?**  
 It's a common practice when defining new events that you create a globally available constant whose value is the name of the event. In this case, `\Drupal\Core\Config\ConfigEvents` has a constant `SAVE` and its value is `'config.save'`.
* **Why did we expect a `ConfigCrudEvent` object, and how did we know that?**  
 It is also common practice when defining new events that you create a new type of object that is special to your event, contains the data needed, and has a simple api for that data. At the moment, we're best able to determine the event object expected by exploring the code base and the public api documentation.

I think we're ready to enable the module and test this event. What we expect to happen is that whenever a config object is saved or delete by Drupal, we should see a message that contains the config object's name.

Since config objects are so prevalent in Drupal 8, this is a pretty easy thing to try. Most modules manage their settings with config objects, so we should be able to just install and uninstall a module and see what config objects they save during installation and delete during uninstallation.

1. Install "_custom\_events_" module on its own.
2. Install "_statistics_" module.  
    
    
![Message after install of statistics module.](https://www.drupal.org/files/events-1-installed.png)  
 Message after install of statistics module.  
    
Looks like two config objects were saved! The first is the `core.extension` config object, which manages installed modules and themes. Next is the `statistics.settings` config object.
3. Uninstall "_statistics_" module.  
![Message after uninstall of statistics module.](https://www.drupal.org/files/events-2-uninstalled.png)  
 Message after uninstall of statistics module.  
This time we see both the `SAVE` and `DELETE` events fired. We can see that the `statistics.settings` config object has been deleted, and the `core.extension` config object was saved.

I'd call that a success! We have successfully subscribed to two Drupal core events.

Now let's look at how to create your own events and dispatch them for other modules to use.

### My First Drupal 8 Event and Event Dispatch

First thing we need to decide is what type of event we're going to dispatch and when we're going to dispatch it. We're going to create an event for a Drupal hook that does not yet have an event in core "_hook\_user\_login_".

Let's start by creating a new class that extends `Event`, we'll call the new class `UserLoginEvent`. Let's also make sure we provide a globally available event name for subscribers.

`src/Event/UserLoginEvent.php`

```php
<?php

namespace Drupal\custom_events\Event;

use Drupal\Component\EventDispatcher\Event;
use Drupal\user\UserInterface;

/**
 * Event that is fired when a user logs in.
 */
class UserLoginEvent extends Event {

  const EVENT_NAME = 'custom_events_user_login';

  /**
   * The user account.
   *
   * @var \Drupal\user\UserInterface
   */
  public $account;

  /**
   * Constructs the object.
   *
   * @param \Drupal\user\UserInterface $account
   *   The account of the user logged in.
   */
  public function __construct(UserInterface $account) {
    $this->account = $account;
  }

}
```

* `UserLoginEvent::EVENT_NAME` is a constant with the value of `'custom_events_user_login'`. This is the name of our new custom event.
* The constructor for this event expects a `UserInterface` object and stores it as a property on the event. This will make the $account object available to subscribers of this event.
* **Note**: Drupal 9.1 (Symfony 4) deprecated the use of `Symfony\Component\EventDispatcher\Event`. To maintain the forward/backward compatibility use `Drupal\Component\EventDispatcher\Event` instead.

And that's it!

Now we just need to dispatch our new event. We're going to do this during "_hook\_user\_login_". Start by creating `custom_events.module`.

```php
<?php

/**
 * @file
 * Contains custom_events.module.
 */

use Drupal\custom_events\Event\UserLoginEvent;

/**
 * Implements hook_user_login().
 */
function custom_events_user_login($account) {
  // Instantiate our event.
  $event = new UserLoginEvent($account);

  // Get the event_dispatcher service and dispatch the event.
  $event_dispatcher = \Drupal::service('event_dispatcher');
  $event_dispatcher->dispatch($event, UserLoginEvent::EVENT_NAME);
}
```

Inside of our "_hook\_user\_login_" implementation, we only need to do a few things to dispatch our new event:

1. Instantiate a new custom object named `UserLoginEvent` and provide its constructor the $account object available within the hook.
2. Get the `event_dispatcher` service.
3. Execute the `dispatch()` method on the `event_dispatcher` service. Provide the name of the event we're dispatching (`UserLoginEvent::EVENT_NAME`), and the event object we just created (`$event`).

There we have it! We are now dispatching our custom event when a user is logged into Drupal.

Next up, let's complete our example by creating an event subscriber for our new event. First we need to update our services.yml file to include the event subscriber we will write.

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
```

Same as before. We define a new service and tag it as an `event_subscriber`. Now we need to write that EventSubscriber class.

`src/EventSubscriber/UserLoginSubscriber.php`

```php
<?php

namespace Drupal\custom_events\EventSubscriber;

use Drupal\custom_events\Event\UserLoginEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Class UserLoginSubscriber.
 *
 * @package Drupal\custom_events\EventSubscriber
 */
class UserLoginSubscriber implements EventSubscriberInterface {

  /**
   * Database connection.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $database;

  /**
   * Date formatter.
   *
   * @var \Drupal\Core\Datetime\DateFormatterInterface
   */
  protected $dateFormatter;

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    return [
      // Static class constant => method on this class.
      UserLoginEvent::EVENT_NAME => 'onUserLogin',
    ];
  }

  /**
   * Subscribe to the user login event dispatched.
   *
   * @param \Drupal\custom_events\Event\UserLoginEvent $event
   *   Dat event object yo.
   */
  public function onUserLogin(UserLoginEvent $event) {
    $database = \Drupal::database();
    $dateFormatter = \Drupal::service('date.formatter');

    $account_created = $database->select('users_field_data', 'ud')
      ->fields('ud', ['created'])
      ->condition('ud.uid', $event->account->id())
      ->execute()
      ->fetchField();

    \Drupal::messenger()->addStatus(t('Welcome, your account was created on %created_date.', [
      '%created_date' => $dateFormatter->format($account_created, 'short'),
    ]));
  }

}
```

Broken down:

1. We subscribe to the event named `UserLoginEvent::EVENT_NAME` with the method `onUserLogin()` (a method name we made up).
2. During onUserLogin, we access the `$account` property (the user that just logged in) of the `$event` object, and do some stuff with it.
3. When a user logs in, they should see a message telling them the date and time for when they joined the site.  
![Message after logging in.](https://www.drupal.org/files/events-3-login.png)  
 Message after logging in.

Voila! We have both dispatched a new custom event, and subscribed to that event. We are awesome at this!