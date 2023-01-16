---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process/writing-a-process-plugin
description: >-
  Process plugins must be in namespace subdirectory Plugin\migrate\process under
  the namespace of the module that defines them. In other words, if your module
  is called 'mymodule', the process plugins must be located in
  mymodule/src/Plugin/migrate/process directory. Process plugins
  implement\Drupal\migrate\Plugin\MigrateProcessInterface and usually extend
  \Drupal\migrate\ProcessPluginBase. Process plugins are annotated with
  \Drupal\migrate\Annotation\MigrateProcessPlugin annotation. Migration process
  plugins are managed by the\Drupal\migrate\Plugin\MigratePluginManager class.
published_time: '2016-06-15T20:09:12+00:00'
modified_time: '2022-02-08T15:51:40+00:00'
---
* Process plugins must be in namespace subdirectory Plugin\\migrate\\process under the namespace of the module that defines them. In other words, if your module is called 'mymodule', the process plugins must be located in mymodule/src/Plugin/migrate/process directory.
* Process plugins implement[\\Drupal\\migrate\\Plugin\\MigrateProcessInterface](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21MigrateProcessInterface.php/interface/MigrateProcessInterface/8.4.x "An interface for migrate process plugins.") and usually extend [\\Drupal\\migrate\\ProcessPluginBase](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21ProcessPluginBase.php/class/ProcessPluginBase/8.4.x "The base class for all migrate process plugins.").
* Process plugins are annotated with [\\Drupal\\migrate\\Annotation\\MigrateProcessPlugin](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Annotation%21MigrateProcessPlugin.php/class/MigrateProcessPlugin/8.4.x "Defines a migration process plugin annotation object.") annotation.
* Migration process plugins are managed by the[\\Drupal\\migrate\\Plugin\\MigratePluginManager](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21MigratePluginManager.php/class/MigratePluginManager/8.4.x "Manages migrate plugins.") class.

[The core Migrate module provides process plugins](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/list-of-core-process-plugins) for common operations (setting default values, mapping values, etc.). In addition to these, the contributed [Migrate Plus provides useful process plugins](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/list-of-process-plugins-provided-by-migrate-plus) as well. You can use these process plugins as examples when writing your own process plugins.

The contributed [Migrate Sandbox](http://drupal.org/project/migrate%5Fsandbox) module offers a UI for experimenting with process plugins and the process pipeline without running real migrations. This can be very helpful when developing custom process plugins since it offers an easy way to test them out.

### Example

In your module **module\_example** create **TransformValue** migrate plugin.

First, we will create plugin place holder in our module

```php
mkdir -p src/Plugin/migrate/process
touch src/Plugin/migrate/process/TransformValue.php
```

In **TransformValue.php** let's define namespace

```php
<?php

namespace Drupal\migrate_example\Plugin\migrate\process;
```

add **TransformValue** class

```php
<?php

namespace Drupal\migrate_example\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;

class TransformValue extends ProcessPluginBase {
}
```

and add notation

```php
<?php

namespace Drupal\migrate_example\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;

/**
 * Perform custom value transformations.
 *
 * @MigrateProcessPlugin(
 *   id = "transform_value"
 * )
 *
 * To do custom value transformations use the following:
 *
 * @code
 * field_text:
 *   plugin: transform_value
 *   source: text
 * @endcode
 *
 */
class TransformValue extends ProcessPluginBase {
}
```

Let's add **transform()** function to modify our value

```php
<?php

namespace Drupal\migrate_example\Plugin\migrate\process;

use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;

/**
 * Perform custom value transformations.
 *
 * @MigrateProcessPlugin(
 *   id = "transform_value"
 * )
 *
 * To do custom value transformations use the following:
 *
 * @code
 * field_text:
 *   plugin: transform_value
 *   source: text
 * @endcode
 *
 */
class TransformValue extends ProcessPluginBase {
  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    return strrev($value);
  }
}
```

### Reacting to problems

We can use **MigrateException** to throw an error:

```php
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    // Throw an error if value and reverse value are the same.
    if ($value === strrev($value)) {
      throw new MigrateException('Reverse value is the same as value.');
    }

    return strrev($value);
  }
```

More specific exceptions allow control of how the migration behaves in response to the problem.

Throwing **MigrateSkipRowException** causes the source record currently being migrated to be skipped:

```php
throw new MigrateSkipRowException('Skip this record.');
```

Throwing a **MigrateSkipProcessException** causes just the current process item in the migration to be skipped.

```php
throw new MigrateSkipProcessException($message);
```

### Configuration

Values in the migration's process definition can be accessed in the source plugin's configuration:

```yaml
process:
  my_destination:
    plugin: my_source_plugin
    source: my_source
    cake: genoise

```

```php
$cake_type = $this->configuration['cake'];

```