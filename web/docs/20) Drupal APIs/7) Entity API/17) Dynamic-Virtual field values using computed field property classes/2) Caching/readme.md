In D7, `hook_field_load()` allowed developers to store computed field properties with the field information before it was stored in the field cache.

This ability was removed in Drupal 8 under the assumption that the render cache will prevent extensive processing and that the computed field value is no longer accessed for requests that can rely on the render cache of rendered entities.