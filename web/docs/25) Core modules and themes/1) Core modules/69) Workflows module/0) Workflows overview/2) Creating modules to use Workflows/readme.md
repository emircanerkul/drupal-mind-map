Workflows is here for you to use when building a module that requires things to move between different states. Create a `WorkflowType` plugin that extends `\Drupal\workflows\Plugin\WorkflowTypeBase` and also a schema file detailing the schema for your Workflow `type_settings`.

Some examples to follow are:

* [Content moderation](http://cgit.drupalcode.org/drupal/tree/core/modules/content%5Fmoderation)
* [Workflow Type Test](http://cgit.drupalcode.org/drupal/tree/core/modules/workflows/tests/modules/workflow%5Ftype%5Ftest)