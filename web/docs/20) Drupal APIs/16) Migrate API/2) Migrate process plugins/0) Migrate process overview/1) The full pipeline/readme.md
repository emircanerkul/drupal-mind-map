Sometimes, a source value must pass through multiple plugins to end up with the right value and structure for the destination property. In this case, the value associated with the destination key is a list of associative arrays, each containing at least a `plugin` key and its configuration much like the single plugin case above. The incoming source value is passed into the first plugin, the output of that is passed to the second plugin, and so on.

For example, consider how we translate a Drupal 6 text format user-visible name to a unique Drupal 8 machine name: the filter format machine name is created from the label by first applying the `machine_name` plugin to create a machine name and then the deduplication plugin. **The second plugin and so on does not need a `source` as their input is the output of the previous plugin.** This is why it's called a pipeline.

```yaml
process:
  format:
    -
      plugin: machine_name
      source: name
    -
      plugin: make_unique_entity_field
      entity_type: filter_format
      field: format

```

What this says is that the source property named `name` is passed into the [machine\_name plugin](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MachineName.php/class/MachineName), to convert the original string to a lower-case alphanumeric (plus underscores) name. Since this could potentially result in the same machine name for different incoming strings, and we need unique machine names for our filter\_format entities, we next invoke the [make\_unique\_entity\_field plugin](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MakeUniqueEntityField.php/class/MakeUniqueEntityField). The make\_unique\_entity\_field plugin does not have a source specified; the result of the machine\_name plugin is implicitly fed to make\_unique\_entity\_field, which also takes `entity_type` and `field` configuration keys. The result of the make\_unique\_entity\_field plugin, as the last in the pipeline, is assigned to the destination `format` property.