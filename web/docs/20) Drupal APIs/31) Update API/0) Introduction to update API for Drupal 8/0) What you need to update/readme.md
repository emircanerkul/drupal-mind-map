You need to provide code that performs an update to stored data whenever your module makes a change to its data model. A data model change is **any change that makes stored data on an existing site incompatible with that site's updated codebase**. In Drupal 8, there are several ways your data model can change, described in the following sections.

### Content entity and field changes

Configurable fields can be created programmatically this way:

```php
/**
 * Add field foo to Bar vocabulary.
 */
function mymodule_update_9002() {
  $module_path = drupal_get_path('module', 'mymodule');

  $yml = Yaml::parse(file_get_contents($module_path . '/config/install/field.storage.taxonomy_term.field_foo.yml'));
  if (!FieldStorageConfig::loadByName($yml['entity_type'], $yml['field_name'])) {
    FieldStorageConfig::create($yml)->save();
  }
  $yml = Yaml::parse(file_get_contents($module_path . '/config/install/field.field.taxonomy_term.bar.field_foo.yml'));
  if (!FieldConfig::loadByName($yml['entity_type'], $yml['bundle'], $yml['field_name'])) {
    FieldConfig::create($yml)->save();
  }
}

/**
 * Setup Foo bar View display.
 */
function mymodule_update_9003() {
  $field_name = 'field_foo';
  $properties = array(
    'targetEntityType' => 'taxonomy_term',
    'bundle' => 'bar',
  );
  if ($view_displays = \Drupal::entityTypeManager()->getStorage('entity_view_display')->loadByProperties($properties)) {
    foreach ($view_displays as $view_display) {
      $view_display_config = [
        'label' => 'above',
        'region' => 'hidden',
      ];
      $view_display->setComponent($field_name, $view_display_config);
      $view_display->save();
    }
  }
}

/**
 * Setup Foo bar Form display.
 */
function mymodule_update_9004() {
  $field_name = 'field_foo';
  $properties = array(
    'targetEntityType' => 'taxonomy_term',
    'bundle' => 'bar',
  );
  if ($form_displays = \Drupal::entityTypeManager()->getStorage('entity_form_display')->loadByProperties($properties)) {
    foreach ($form_displays as $form_display) {
      $form_display_config = [
        'type' => 'boolean_checkbox',
        'settings' => [
          'display_label' => TRUE,
        ],
        'weight' => 1,
      ];
      $form_display->setComponent($field_name, $form_display_config);
      $form_display->save();
    }
  }
}

```

**TODO:** Needs rewrite since [automatic updates were removed](https://www.drupal.org/node/2554097).

### Configuration schema changes

Changes to your configuration schema include:

* Removing or renaming a configuration key.
* Adding a configuration key. Even if the additions are backwards-compatible in terms of stored data, they will introduce unexpected differences in exporting configuration the next time the configuration is saved.
* Changing the expected data type, allowable values, or array structure of a configuration key.
* Changing the expected default value of a configuration key.
* Changes to configuration dependencies (e.g. changes to a plugin's dependencies or an implementation of `ConfigEntityInterface::calculateDependencies()`).
* Etc.

For example, changing the way a particular Views plugin defines its configuration would require an update to all saved views configuration items that use that plugin.

### Database schema changes

If your module defines its own `hook_schema()` for database tables, the following types of changes are possible:

* Adding, changing, or removing a database table or field.
* Moving stored data to different fields or tables.
* Changing the format of stored data (for example, changing the stored format of user-entered paths, requiring a different password hashing algorithm, or storing a UUID as an external key instead of a serial ID).