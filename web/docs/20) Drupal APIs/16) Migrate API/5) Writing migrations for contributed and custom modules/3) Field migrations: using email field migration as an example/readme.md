Writing an upgrade path for a module providing a field type is not too complex. We'll use the Drupal 7 [Email](https://www.drupal.org/project/email) as an example. The Email module was moved to Drupal 8 core but the example is valid also for modules which remain in contrib space for Drupal 8.

### Write a plugin class that extends FieldPluginBase

* Class [\\Drupal\\Core\\Field\\Plugin\\migrate\\field\\Email](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21Plugin%21migrate%21field%21Email.php/class/Email/8.5.x) extends [\\Drupal\\migrate\_drupal\\Plugin\\migrate\\field\\FieldPluginBase](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21migrate%21field%21FieldPluginBase.php/class/FieldPluginBase/8.5.x)
* FieldPluginBase implements [MigrateFieldInterface](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21MigrateFieldInterface.php/interface/MigrateFieldInterface/8.5.x)
* The namespace to use for your plugin class is `Drupal\MODULE\Plugin\migrate\field` and thus the file should be located in `MODULE/src/Plugin/migrate/field directory` (where MODULE is obviously the name of your module).

### Let's start by inspecting the annotation of this plugin class

```php
@MigrateField(
  id = "email",
  core = {6,7},
  type_map = {
    "email" = "email"
  },
  source_module = "email",
  destination_module = "core"
)
```

* ID and core versions are straight forward.
* The field type names are 'email' in both Drupal 8 and Drupal 6/7 (left hand side of the 'type\_map' is the Drupal 8 field type and right hand side is the Drupal 6/7 field type.
* 'source\_module' and 'destination\_module' define the module names that are shown in the Migrate Drupal UI. Note: These became required as part of [#2859304: Show field type migrations correctly in Migrate Drupal UI](https://www.drupal.org/project/drupal/issues/2859304 "Status: Closed (fixed)"), see [change record](https://www.drupal.org/node/2914530).

### Methods to implement

The methods the plugin class need to implement depend obviously on the field that is being migrated. Email field is quite typical and it implements [getFieldWidgetMap()](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21MigrateFieldInterface.php/function/MigrateFieldInterface%3A%3AgetFieldWidgetMap), [getFieldFormatterMap()](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21MigrateFieldInterface.php/function/MigrateFieldInterface%3A%3AgetFieldFormatterMap) and [defineValueProcessPipeline()](https://api.drupal.org/api/drupal/core%21modules%21migrate%5Fdrupal%21src%21Plugin%21migrate%21field%21FieldPluginBase.php/function/FieldPluginBase%3A%3AdefineValueProcessPipeline). 

Widget and formatter maps are straight forward array maps:

```php
  /**
   * {@inheritdoc}
   */
  public function getFieldWidgetMap() {
    return [
      'email_textfield' => 'email_default',
    ];
  }
```

* The email field migration maps Drupal 6/7 'email\_textfield' to Drupal 8 'email\_default'.

```php
  /**
   * {@inheritdoc}
   */
  public function getFieldFormatterMap() {
    return [
      'email_formatter_default' => 'basic_string',
      'email_formatter_contact' => 'basic_string',
      'email_formatter_plain' => 'basic_string',
      'email_formatter_spamspan' => 'basic_string',
    ];
  }

```

* The email field migration maps all different Drupal 6/7 field formatter settings to Drupal 8 'basic\_string'.

```php
  /**
   * {@inheritdoc}
   */
  public function defineValueProcessPipeline(MigrationInterface $migration, $field_name, $data) {
    $process = [
      'plugin' => 'iterator',
      'source' => $field_name,
      'process' => [
        'value' => 'email',
      ],
    ];
    $migration->setProcessOfProperty($field_name, $process);
  }
```

* The actual processing of field values is done by implementing processFieldValue()
* The email field migration uses the [iterator](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Iterator.php/class/Iterator) process plugin which allows migration of multi-value fields.  
   * Note: iterator process plugin is deprecated. Use [SubProcess](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21SubProcess.php/class/SubProcess) process plugin instead.
* For each value we apply mapping so that the Drupal 8 destination property 'value' is mapped from Drupal 6/7 source property 'email'.