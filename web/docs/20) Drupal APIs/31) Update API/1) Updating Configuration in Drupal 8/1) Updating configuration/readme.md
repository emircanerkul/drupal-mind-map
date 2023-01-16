The general idea when updating configuration for a data model change is that in your hook\_update\_N() function, you will need to:

* Locate configuration items in the active config storage that contain your data.
* Update them so that they have the right data conforming to the new model (all examples below illustrate this).
* If there is data that is outdated, but that your module doesn't have complete control over, save the outdated data somewhere (such as key-value storage) for contrib modules to use, while updating what you can. The [Updating Block context mappings example](#example%5Fupdating%5Fblock%5Fcontext%5Fmappings) below illustrates this.
* Save the config items.

Here are some examples.

### Example 1: Adding a configuration key

If example.module used to have configuration that looks like this:

```php
pets:
  - dog
  - cat

```

and its configuration is being updated to look like this:

```php
pets:
  - dog
  - cat
fruit:
  - apple
  - banana
  - mango

```

it needs a hook\_update\_N function as follows:

```php
/**
 * Add fruit to the default configuration for example.module.
 */
function example_update_8001() {
  $config_factory = \Drupal::configFactory();
  $config = $config_factory->getEditable('example.configuration');
  $config->set('fruit', ['apple', 'banana', 'mango']);
  $config->save(TRUE);
}

```

### Example 2: Updating Views field handler to a different type

On issue [#2455125: Update EntityViewsData use of generic timestamp to use Field API formatter](https://www.drupal.org/project/drupal/issues/2455125 "Status: Closed (fixed)"), a data model change was made: Entity views with base entity fields that were previously using the Views `date` field handler were changed over to use the generic Entity Field handler instead.

This mean that Views config items with pieces like this in the fields section:

```php
          field: created
          id: created
          date_format: 'time ago'
          custom_date_format: ''
          timezone: ''
          plugin_id: date

```

needed to be changed to look like this:

```php
          field: created
          id: created
          type: timestamp_ago
          settings:
            future_format: '@interval hence'
            past_format: '@interval ago'
            granularity: 2
          plugin_id: field

```

To accomplish this, the following code was put into a hook\_update\_N() function for the core Views module (slightly edited for illustration purposes):

```php
  $config_factory = \Drupal::configFactory();

  // Find all views configs.
  foreach ($config_factory->listAll('views.view.') as $view_config_name) {
    $view = $config_factory->getEditable($view_config_name);

    // Go through each display on each view.
    $displays = $view->get('display');
    foreach ($displays as $display_name => $display) {

      // Go through all the entity fields on each display and find ones currently using 'date' as the plugin.
      if (!empty($display['display_options']['fields'])) {
        foreach ($display['display_options']['fields'] as $field_name => $field) {
          if (isset($field['entity_type']) && $field['plugin_id'] === 'date') {

            // Update the field to use the new plugin.
            $date_format = !empty($field['date_format']) ? $field['date_format'] : 'medium';
            $custom_date_format = !empty($field['custom_date_format']) ? $field['custom_date_format'] : '';
            $timezone = !empty($field['timezone']) ? $field['timezone'] : '';
            $base = "display.$display_name.display_options.fields.$field_name";

            if ($date_format === 'time ago') {
              // Update the field to use the Field API formatter.
              $view->set($base . '.plugin_id', 'field');
              $view->set($base . '.type', 'timestamp_ago');

              // Add the new settings
              $view->set($base . '.settings.future_format', '@interval hence');
              $view->set($base . '.settings.past_format', '@interval ago');
              $view->set($base . '.settings.granularity', 2);
            }

            // Similar to the other options for the date format (omitted here)

            // Remove the old settings.
            $view->clear($base . '.date_format');
            $view->clear($base . '.custom_date_format');
            $view->clear($base . '.timezone');
          }
        }
      }
    }

    $view->save(TRUE);
  }
  // Compose a message about what was done.
  // Omitted in this example.
  $message = ...;
  return $message;

```

### Example 3: Updating Block context mappings

On issue [#2354889: Make block context faster by removing onBlock event and replace it with loading from a ContextManager](https://www.drupal.org/project/drupal/issues/2354889 "Status: Closed (fixed)"), a data model change was made in the context\_mapping part of block visibility settings, and on [#2528178: Provide an upgrade path for blocks context IDs #2354889 (context manager)](https://www.drupal.org/project/drupal/issues/2528178 "Status: Closed (fixed)"), the update code was added for this change.

The data model change was that Block configuration items visibility settings changed from something like this:

```php
visibility:
  node_type:
    id: node_type
    bundles:
      article: article
    negate: false
    context_mapping:
      node: node.node

```

to:

```php
visibility:
  node_type:
    id: node_type
    bundles:
      article: article
    negate: false
    context_mapping:
      node: @node.node:block.node_route_context 

```

This update was a bit problematic because block visibility relies on the context plugin system, which means that both Core and Contrib plugins could be involved. This Core module could only update the plugins it knew about, so it needed also to leave room for contrib or a manual process to update the rest.

The following steps were followed to accomplish this.

#### Figure out where to store original information

Because it is possible that some plugins may not be known to Core, and thus cannot be updated, the update code need to save the original information somewhere, so that contrib modules could theoretically do their own updates.

One possibility, that was discussed on the issue was to add a new key like "visibility\_2528178" to the block.block.\* config schema, but it was decided that this wasn't a great precedent to set because the information would have to be stored indefinitely.

So instead, it was decided to store it in "key-value storage", which is like the State storage but a bit less specific. So, they defined a key-value storage key "update-backup", and stored the information there (see below).

#### Update known plugins

Next, the following code was put into a hook\_update\_N() function to update the Core context plugins and keep track of the ones Core doesn't know about, saving the information in the key-value store.

```php
  // Make a list of visibility conditions that we know how to fix.
  $context_service_id_map = [
    'node.node' => '@node.node_route_context:node',
    'user.current_user' => '@user.current_user_context:current_user',
  ];
  foreach (array_keys(\Drupal::languageManager()->getDefinedLanguageTypesInfo()) as $language_type_id) {
    $context_service_id_map['language.' . $language_type_id] = '@language.current_language_context:' . $language_type_id;
  }

  // Update the plugins we can fix, and keep track of the others.
  $config_factory = \Drupal::configFactory();
  $backup_values = $update_backup = [];
  foreach ($config_factory->listAll('block.block.') as $block_config_name) {
    $block = $config_factory->getEditable($block_config_name);
    if ($visibility = $block->get('visibility')) {
      foreach ($visibility as $condition_plugin_id => &$condition) {
        foreach ($condition['context_mapping'] as $key => $context) {
          if (!isset($context_service_id_map[$context])) {
            // Remove the visibility condition for unknown context mapping
            // entries, so the update process itself runs through and users can
            // fix their block placements manually OR alternatively contributed
            // modules can run their own update functions to update mappings
            // that they provide.
            $backup_values[$context][] = $condition_plugin_id;
            unset($visibility[$condition_plugin_id]);
            continue;
          }
          // Replace the context ID based on the defined mapping.
          $condition['context_mapping'][$key] = $context_service_id_map[$context];
        }
      }
      $block->set('visibility', $visibility);

      if ($backup_values) {
        // We not only store the missing context mappings but also the previous
        // block status, in order to allow contributed and custom modules to do
        // their own updates.
        $update_backup[$block->get('id')] = [
          'missing_context_ids' => $backup_values,
          'status' => $block->get('status')
        ];
      }
    }

    // Mark the resulting configuration as trusted data. This avoids issues with
    // future schema changes.
    $block->save(TRUE);
  }

  if ($update_backup) {
    \Drupal::keyValue('update_backup')->set('block_update_8001', $update_backup);
  }

```

#### Let contrib update

The next step in the update process is to let contrib update its own plugins. To enable that, in the previous update step, information was saved in the key-value store that contrib modules could use to update themselves. [A change record was written to explain to Contrib module maintainers how to update their blocks.](https://www.drupal.org/node/2527840)

#### Deal with what we cannot update

Finally, in a separate update function (so that contrib could use hook\_update\_dependencies() to force the right order; see the change record linked above), Core updates all remaining blocks that were not fixed:

* Disable the block, because its visibility information is incomplete, and it could lead to exposing information that shouldn't be seen by some users, and would also generate warnings.
* Warn the user so they can go fix manually if possible.

Here's body of the separate hook\_update\_N() function that does this:

```php
  $block_update_8001 = \Drupal::keyValue('update_backup')->get('block_update_8001', []);

  $block_ids = array_keys($block_update_8001);
  $config_factory = \Drupal::configFactory();
  /** @var \Drupal\Core\Config\Config[] $blocks */
  $blocks = [];
  foreach ($block_ids as $block_id) {
    $blocks[$block_id] = $block = $config_factory->getEditable('block.block.' . $block_id);
    // This block will have an invalid context mapping service and must be
    // disabled in order to prevent information disclosure.

    // Disable currently enabled blocks.
    if ($block_update_8001[$block_id]['status']) {
      $block->set('status', FALSE);
      $block->save(TRUE);
    }
  }

  $condition_plugin_id_label_map = array_column(\Drupal::service('plugin.manager.condition')->getDefinitions(), 'label', 'id');

  // Override with the UI labels we are aware of. Sadly they are not machine
  // accessible, see
  // \Drupal\node\Plugin\Condition\NodeType::buildConfigurationForm().
  $condition_plugin_id_label_map['node_type'] = t('Content types');
  $condition_plugin_id_label_map['request_path'] = t('Pages');
  $condition_plugin_id_label_map['user_role'] = t('Roles');

  if (count($block_ids) > 0) {
    $message = t('Encountered an unknown context mapping key coming probably from a contributed or custom module: One or more mappings could not be updated. Please manually review your visibility settings for the following blocks, which are disabled now:');
    $message .= '<ul>';
    foreach ($blocks as $disabled_block_id => $disabled_block) {
      $message .= '<li>' . t('@label (Visibility: @plugin_ids)', [
          '@label' => $disabled_block->get('settings.label'),
          '@plugin_ids' => implode(', ', array_intersect_key($condition_plugin_id_label_map, array_flip(array_keys($block_update_8001[$disabled_block_id]['missing_context_ids']))))
        ]) . '</li>';
    }
    $message .= '</ul>';

    return $message;
  }
```

### Example 4: Entity fields

There's an example related to entity fields on [the entity update page](https://www.drupal.org/node/2535476) that shows how to update field storage config, field config, view mode config, and form mode config items for entity fields.

### See also:

* [Add a default configuration](https://www.drupal.org/docs/8/creating-custom-modules/add-a-default-configuration) to a custom module
* [Include default configuration in a Drupal 8 module](https://www.drupal.org/docs/8/creating-custom-modules/include-default-configuration-in-your-drupal-8-module)