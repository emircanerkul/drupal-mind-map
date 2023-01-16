---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-other-contrib-modules/contrib-process-plugin-entity_generate
description: >-
  The entity_generate plugin, provided by the contributed Migrate Plus module,
  is used to match existing entities (by entity type, bundle type, and
  value_key) and generate entities that don't yet exist. The most common use is
  for taxonomy term reference fields.
published_time: '2017-06-06T05:15:27+00:00'
modified_time: '2022-05-01T01:25:05+00:00'
---
The _entity\_generate_ plugin, provided by the contributed [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus) module, is used to match existing entities (by entity type, bundle type, and value\_key) and generate entities that don't yet exist.

The most common use is for taxonomy term reference fields.

Here's a taxonomy term example using all of the possible configuration parameters (spacing and commenting only for documentation purposes):

```yaml
process:

  # Field to populate
  field_tags:

    # Plugin to use
    plugin: entity_generate

    # Field from source configuration
    source: tags

    # Value to compare in the bundle
    value_key: name

    # Bundle key value
    # If you get errors consider using only bundle
    bundle_key: vid

    # Bundle machine name
    bundle: tags

    # Type of entity
    entity_type: taxonomy_term

    # Set to true to ignore case on lookup
    ignore_case: true
```

**Basic Example**

Example usage with minimal configuration for term import, for example to Tags field in Article content type:

```yaml
process:
  field_tags:
    plugin: entity_generate
    source: tags

```

**Generating nodes**

Node generation would be similar, but bundle\_key for nodes must have value "type":

```yaml
process:
  field_related_articles:
    plugin: entity_generate
    source: title
    entity_type: node
    bundle: article
    value_key: title
    bundle_key: type
    values:
      title: title
      ...
```

**Multiple terms example**

If you have multiple terms in you source, for example `"tags": "great;helpful;awesome"` you can split them up with the [Migrate plugin Explode](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21Explode.php/class/Explode), where the data is separated before being piped on to `entity_generate` and get created:

```yaml
process:
  field_tags:
    -
      plugin: explode
      source: tags
      delimiter: ';'
    -
      plugin: entity_generate
```