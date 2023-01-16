### Simple 1:1 copying

The [get plugin](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Get.php/class/Get) is used to copy a value from a source property. Unlike all other process plugins, it can be used without being explicitly named. For example, to copy the value of the source property `subject` into the destination `title`:

```yaml
process:
  title: subject

```

To import the created and changed date of a node, use the following syntax, where Post Date is a field containing a timestamp.

```yaml
process: 
  created: Post Date 
  changed: Post Date
```

### Created by one plugin

The destination might be created by one plugin (in addition to the implicit `get`). In this case, the value associated with the destination property `uid` is an associative array containing a `plugin` value identifying the plugin to use, along with any additional values used by that particular plugin. In this example we use the [migration\_lookup plugin](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MigrationLookup.php/class/MigrationLookup) (the `source: author` uses the [get](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Get.php/class/Get) plugin to access the source value initially before passing it to the migration\_lookup plugin):

```yaml
process:
  uid:
    plugin: migration_lookup
    migration: users
    source: author

```