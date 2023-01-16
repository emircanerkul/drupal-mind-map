Let's say you want to create a message for when a specific hook is fired. You probably want to create a new ActivityAction plugin and then call it on this hook like this:

```php
function custom_module_some_specific_hook($entity) {
  /* @var $activity_logger_factory Drupal\activity_creator\Plugin\ActivityActionManager */
  $activity_logger_factory = \Drupal::service('plugin.manager.activity_action.processor');
  /* @var $create_action Drupal\activity_creator\Plugin\ActivityAction\CustomAction */
  $create_action = $activity_logger_factory->createInstance('custom_action');
  $create_action->create($entity);
}

```

Then in a message type you can specify the tokenized text, entity, action, context and destination and it should work.

For examples how to create your custom plugins see the src/Plugin folder in the activity\_creator module.