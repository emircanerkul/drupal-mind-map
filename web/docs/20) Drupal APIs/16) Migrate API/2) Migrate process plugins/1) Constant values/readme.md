---
url: https://www.drupal.org/docs/8/api/migrate-api/migrate-process/constant-values
description: >-
  Sometimes you need a constant value. Perhaps it's for the concatenation plugin
  or simply some value that is always fixed. In this case, first you need to
  define a constant in the source and then use it as any other in your process.
  The following example sets the value of the id destination property to
  node_search: source: constants: id: node_search process: id: constants/id Note
  that the constants key is not special. If the source contains a constants
  property, use another name, for example defaults.
published_time: '2014-01-12T05:27:20+00:00'
modified_time: '2022-05-01T01:27:23+00:00'
---
Sometimes you need a constant value. Perhaps it's for the concatenation plugin or simply some value that is always fixed. In this case, first you need to define a constant in the source and then use it as any other in your process. The following example sets the value of the `id` destination property to `node_search`:

```php
source:
  constants:
    id: node_search
process:
  id: constants/id

```

Note that the `constants` key is not special. If the source contains a `constants` property, use another name, for example `defaults`. In other words, the code example below is equivalent to the previous one:

```php
source:
  defaults:
    id: node_search
process:
  id: defaults/id

```

This works because the definition of the `source` provides the default values for every row retrieved from the source (without deep merging).

Please note that using the [default\_value](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21DefaultValue.php/class/DefaultValue) process plugin is an alternative and simpler way to define constant values in the destination.

### Contrib module migrations

While custom migrations need to specify their config dependencies explicitly, the migrate\_drupal module automates part of this by treating the value of `constants/entity_type` as a Drupal 8 entity type and adding a dependency on the module providing said entity type. This is strictly migrate\_drupal specific.