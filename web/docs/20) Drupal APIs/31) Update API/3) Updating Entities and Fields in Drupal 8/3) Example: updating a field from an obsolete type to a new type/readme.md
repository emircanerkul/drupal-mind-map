As one example of a more drastic change that wasn't handled by the automatic update system that handles entity and field schema updates, on issue [#1847596: Remove Taxonomy term reference field in favor of Entity reference](https://www.drupal.org/project/drupal/issues/1847596 "Status: Closed (fixed), Assigned to: webchick"), the Taxonomy Reference field was removed, in place of using the more generic Entity Reference field. This change was not a simple schema update, so the automatic system didn't take care of it. At the time of that change, Drupal Core was not attempting to provide updates for data model changes, but the contributed [HEAD to HEAD module](https://www.drupal.org/project/head2head) was.

So, the HEAD to HEAD project provided a function called head2head\_1847596() (in head2head.module) to update an existing site's taxonomy reference fields to be generic entity reference fields.

This function is a bit complex, and consists of several parts. Each part does operations similar to those shown on the [page about updating configuration in Drupal 8](https://www.drupal.org/node/2535454).

#### Updating field storage config items

In this section, the function locates all the config items of type 'taxonomy\_term\_reference', and updates them to be entity reference fields instead.

```php
  if (!$field_storage_configs = \Drupal::entityTypeManager()->getStorage('field_storage_config')->loadByProperties(array('type' => 'taxonomy_term_reference'))) {
    return;
  }

  foreach ($field_storage_configs as $field_storage) {
    // Since the usual workflow for field storages do not allow changing the
    // field type, we have to work around it in this case.
    $new_field_storage = $field_storage->toArray();
    $new_field_storage['type'] = 'entity_reference';
    $new_field_storage['module'] = 'core';
    $new_field_storage['settings']['target_type'] = 'taxonomy_term';

    $vocabulary_name = $new_field_storage['settings']['allowed_values'][0]['vocabulary'];
    unset($new_field_storage['settings']['allowed_values']);

    $new_field_storage = FieldStorageConfig::create($new_field_storage);
    $new_field_storage->original = $new_field_storage;
    $new_field_storage->enforceIsNew(FALSE);

    $new_field_storage->save();

```

#### Updating field config items

In this section, the function locates all field config items for the storage config item it's working on, and updates these.

```php
    $field_name = $field_storage->getName();
    if (!$fields = \Drupal::entityTypeManager()->getStorage('field_config')->loadByProperties(array('field_name' => $field_name))) {
      continue;
    }

    foreach ($fields as $field) {
      $new_field = $field->toArray();
      $new_field['field_type'] = 'entity_reference';
      $new_field['settings'] = array(
        'handler' => 'default:taxonomy_term',
        'handler_settings' => array(
          'target_bundles' => array($vocabulary_name => $vocabulary_name),
          // Enable auto-create.
          'auto_create' => TRUE,
        ),
      );

      $new_field = FieldConfig::create($new_field);
      $new_field->original = $field;
      $new_field->enforceIsNew(FALSE);
      $new_field->save();

```

#### Updating entity view display configs

In this section, the function locates all entity views display config items that are displaying the field being worked on, and updates them.

```php
      $properties = array(
        'targetEntityType' => $field->getTargetEntityTypeId(),
        'bundle' => $field->getTargetBundle()
      );
      if ($view_displays = \Drupal::entityTypeManager()->getStorage('entity_view_display')->loadByProperties($properties)) {
        foreach ($view_displays as $view_display) {
          if ($component = $view_display->getComponent($field_name)) {
            // Map taxonomy term reference formatters to entity reference ones.
            switch ($component['type']) {
              case 'taxonomy_term_reference_plain':
                $type = 'entity_reference_label';
                $settings = array(
                  'link' => FALSE,
                );
                break;
              case 'taxonomy_term_reference_link':
                $type = 'entity_reference_label';
                $settings = array(
                  'link' => TRUE,
                );
                break;
              case 'taxonomy_term_reference_rss_category':
                $type = 'entity_reference_rss_category';
                $settings = array();
                break;
            }

            $view_display->setComponent($field_name, array(
              'type' => $type,
              'settings' => $settings,
            ) + $component)->save();
          }
        }
      }

```

Note: Ensure your schema definitions are updated to match the new settings.

#### Updating entity form configs

In this section, the function locates all entity form config items that contain widgets for the field being worked on, and updates them.

```php
      $properties = array(
        'targetEntityType' => $field->getTargetEntityTypeId(),
        'bundle' => $field->getTargetBundle()
      );
      if ($form_displays = \Drupal::entityTypeManager()->getStorage('entity_form_display')->loadByProperties($properties)) {
        foreach ($form_displays as $form_display) {
          if ($component = $form_display->getComponent($field_name)) {
            $form_display->setComponent($field_name, array(
              'type' => 'entity_reference_autocomplete_tags',
              'settings' => array(
                'match_operator' => 'CONTAINS',
                'size' => '60',
                'placeholder' => '',
              ),
            ) + $component)->save();
          }
        }
      }
    }
  }

```

Note: Ensure your schema definitions are updated to match the new settings.

**Example: Updating name and description of Entity** **programatically.**

```php
// To update name and description of content type Page 
$configEntity = \Drupal::entityTypeManager()
    ->getStorage('node_type')
    ->load('page');
if (!$configEntity) {
  return NULL;
}
$configEntity->set('name', 'New name page');
$configEntity->set('description', 'New updated description');
$configEntity->save();
```