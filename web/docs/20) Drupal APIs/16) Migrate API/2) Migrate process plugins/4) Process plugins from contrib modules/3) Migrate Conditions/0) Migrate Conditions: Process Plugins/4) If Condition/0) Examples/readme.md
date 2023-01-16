### 1\. Fully configured

If animal\_family is 'bird', get feather\_color. Otherwise, get fur\_color.

```yaml
process:
  animal_color:
    plugin: if_condition
    source: animal_family
    condition:
      plugin: equals
      value: bird
    do_get: feather_color
    else_get: fur_color

```

### 2\. Nice way to set a default value

The core default\_value process plugin cannot set a source/destination property as the default value. Using if\_condition, you can easily use a source/destination value as the fallback. In this case we do not set do\_get because we want the source to "pass through" if it meets the condition.

```yaml
process:
  destination_value:
    plugin: if_condition
    source: my_source_value
    condition: not:empty
    else_get: my_fallback_source_value

```

### 3\. Re-create the core entity\_exists process plugin

The core entity\_exists plugin returns the source value if the source value corresponds to an entity that exists. Otherwise it returns NULL. By no setting do\_get, the source value "passes through" if the condition is met. By not configuring else\_get, we return null if the condition is not met.

```yaml
process:
  field_tag:
    plugin: if_condition
    source: source_tid
    condition:
      plugin: entity_exists
      entity_type: taxonomy_term
```

### 4\. Do some extra processing if a condition is not met

Let's say if the source uid is 0 or 1, you want to keep that value. But any other source uid should be used in a migration lookup.

```yaml
process:
  uid:
    plugin: if_condition
    source: source_uid
    condition:
      plugin: in_array
      value:
        - 0
        - 1
    else_process:
      plugin: migration_lookup
      migration: users
```

Note that if you do not explicitly set the source for else\_process (or do\_process) the source of the if\_condition plugin will be assumed.

### 5\. Concatenate values conditionally

Consider a migration of entities that represent remote video. Each entity tells you the provider (YouTube or Vimeo) and the video's ID. But core media wants a url, so we have to do some fancy concatenation.

```yaml
source:
  ...
  constants:
    youtube_base_url: 'https://youtube.com/watch?v='
    vimeo_base_url: 'https://vimeo.com/'
process:
  field_media_oembed_video:
    plugin: if_condition
    condition:
      plugin: equals
      value: youtube
    source: provider
    do_process:
      plugin: concat
      source:
        - constants/youtube_base_url
        - video_id
    else_process:
      plugin: concat
      source:
        - constants/vimeo_base_url
        - video_id
```

Note that in this case, both do\_process and else\_process explicitly define the source, and neither one uses the same source that is used by if\_condition.

Also, note that do\_process and else\_process can contain multiple chained process plugins using the syntax you would expect.

### 6\. Give meaningful title to stubs

Stubbed entities get unreadable random strings as the title. We can leverage `if_condition` to give a meaningful title. Here's how it could work for a typical node migration:

```yaml
source:
  ...
  constants:
    fallback_title_prefix: "Stub for sourceid "
process:
  title:
    plugin: if_condition
    condition: not:empty
    source: title
    else_process:
      plugin: concat
      source:
        - constants/fallback_title_prefix
        - nid
```