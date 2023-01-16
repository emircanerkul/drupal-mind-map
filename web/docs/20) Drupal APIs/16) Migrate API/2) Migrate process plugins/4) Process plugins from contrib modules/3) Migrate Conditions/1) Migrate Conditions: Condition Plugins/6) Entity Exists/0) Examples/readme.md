### 1\. Re-create the core entity\_exists process plugin

The core entity\_exists plugin returns the source value if the source value corresponds to an entity that exists. Otherwise it returns NULL. By no setting do\_get, the source value "passes through" if the condition is met. By not configuring else\_get, we return null if the condition is not met.

```php
process:
  field_tag:
    plugin: if_condition
    source: source_tid
    condition:
      plugin: entity_exists
      entity_type: taxonomy_term
```

Or equivalently using parens syntax to pass the entity\_type:

```php
process:
  field_tag:
    plugin: if_condition
    source: source_tid
    condition: entity_exists(taxonomy_term)
```

### 2\. Remove tag ids that do not correspond to tags

Assuming source\_tag\_ids contains taxonomy term ids, we can save ourselves some validation errors by removing values that do not correspond to a valid entity.

```php
process:
  field_tags:
    plugin: filter_on_condition
    source: source_tag_ids
    condition:
      plugin: entity_exists
      entity_type: taxonomy_term
```