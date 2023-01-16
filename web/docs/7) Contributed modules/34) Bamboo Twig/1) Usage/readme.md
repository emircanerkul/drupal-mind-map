---
url: https://www.drupal.org/docs/8/modules/bamboo-twig/usage
description: >-
  Bamboo Twig has a lot of advantages and brings a lot of new features to the
  Twig landscape of Drupal 8. It boosts performance by using lazy loading,
  improves the code quality with automated workflow. It's expected that Bamboo
  Twig will normalize the way you use twig in your Drupal project reducing the
  need to install a bunch of extra modules. Internationalization Use the
  bamboo_i18n_format_date filter to return a date string in the correct
  locality. date string - date, timestamp, DrupalDateTimePlus, DateTimePlus or
  DateTime.
published_time: '2017-04-22T19:45:07+00:00'
modified_time: '2019-11-18T19:27:02+00:00'
---
Bamboo Twig has a lot of advantages and brings a lot of new features to the Twig landscape of Drupal 8.  
It boosts performance by using lazy loading, improves the code quality with automated workflow.

It's expected that Bamboo Twig will normalize the way you use twig in your Drupal project reducing the need to install a bunch of extra modules.  

### Internationalization

Use the `bamboo_i18n_format_date` filter to return a date string in the correct locality.

* `date` string - date, timestamp, DrupalDateTimePlus, DateTimePlus or DateTime.
* `type` string (optional) - The format to use, one of the built-in formats: 'short', 'medium', 'long'. Use 'custom' to use $format.
* `format` string (optional) - PHP date format string suitable for input to date().
* `timezone` string (optional) - Time zone identifier, as described at <http://php.net/manual/timezones.php> Defaults to the time zone used to display the page.
* `langcode` string (optional) - Language code to translate to. NULL (default) means to use the user interface language for the page.

```php
{# Print the formatted date using Drupal i18n. #}
{{ node.changed.value|bamboo_i18n_format_date('medium') }}
{{ node.changed.value|bamboo_i18n_format_date('custom', 'Y-m-d') }}

```

Use the `bamboo_i18n_current_lang` function to return the current lang iso code.

* `langcode` string (optional) - defaults to current interface language.

```php
{# Print the current language ID. #}
{{ bamboo_i18n_current_lang() }}

```

The `bamboo_i18n_get_translation` filter returns the translated entity 

```php
{# Get the French translation of an entity #}
{{ entity|bamboo_i18n_get_translation('fr').title.value }}
{# Get the current language translation of an entity #}
{{ entity|bamboo_i18n_get_translation.title.value }}
```

### Files

The `bamboo_file_extension_guesser` filter returns the extension of a file based on its  
mimeType.

* `mimeType` string

```php
{# Print the extension of the 'application/pdf' mimeType #}
{{ 'application/pdf'|bamboo_file_extension_guesser }}

```

The `bamboo_file_url_absolute` function returns absolute url of a given URI or path to a file.

* `uri` string - URI or string path to a file.

```php
{# Print the absolute url to access 'image.jpg' #}
{{ bamboo_file_url_absolute('public://image.jpg') }}

```

### Paths

The `bamboo_path_system` function returns the relative URL of a system entity.

* `type` string - one of 'core', 'profile', 'module', 'theme' or 'theme\_engine'.
* `item` string

```php
{# Print the relative URL to the system entity 'theme' named 'stable' #}
{{ bamboo_path_system('theme', 'stable') }}

```

### Loaders

The `bamboo_load_currentuser` function returns a User object of the current logged user.

```php
{# Load the current user #}
{% set user = bamboo_load_currentuser() %}

```

The `bamboo_load_entity` function returns a EntityInterface object of the requested entity.

* `entity_type` string.
* `id` int (optional).
* `langcode` string (optional) - defaults to current context language

```php
{# Load the entity node with nid 1 #}
{% set node = bamboo_load_entity('node', 1) %}

```

Keep in mind, when loading an entity it will fetch it in the current context language.  
When you access it directly through a `EntityReferenceField` or a `Paragraph` (e.g. `node.field_referenced_tags.entity`), the entity is always loaded in its original language (it won't be loaded in the current context language or in the entity loaded language).

You should then use the `bamboo_i18n_get_translation` filter to make sure you have the entity displayed in another language.

```php
{# Load the entity node with nid 1 #}
{% set node = bamboo_load_entity('node', 1) %}
{# Display the entity title in the current context lang (page lang) #}
{{ node.title.value }}
{# Display the referenced entity name in its original lang #}
{{ node.field_referenced_tags.entity.name.value }}
{# Display the ref. entity name in the current context lang (page lang) #}
{{ node.field_referenced_tags.entity|bamboo_i18n_get_translation.name.value }}
```

The `bamboo_load_field`function returns a render array of an entity field.

* `field_name` string.
* `entity_type` string.
* `id` int (optional).
* `langcode` string (optional).
* `formatter` string (optional).

```php
{# Load the title of node 1 with nid 1 #}
{% set title = bamboo_load_field('title', 'node', 1) %}

```

The `bamboo_load_image` function returns a ImageInterface object of the requested image.

* `path` string - The path or URI to the original image.

```php
{# Load image with uri 'public://antistatique.jpg' #}
{% set image = bamboo_load_image('public://antistatique.jpg') %}

```

### Render

The `bamboo_render_block` function returns a render array of the specified block (works only for Block Plugin).

* `block_name` string.
* `params` array (optional).

```php
{# Render the 'system_powered_by_block' block #}
{{ bamboo_render_block('system_powered_by_block') }}

```

In the case you want to render a Block Entity, you have to use the `bamboo_render_entity`. 

The `bamboo_render_entity` function returns a render array of the specified entity type. Can render a specific `view`.

* `entity_type` string.
* `id` int (optional).
* `view_mode` string (optional) - machine name of the view mode.
* `langcode` string (optional) - defaults to current language.

```php
{# Render node with nid 1 #}
{{ bamboo_render_entity('node', 1) }}

{# Render the teaser of node with nid 2 #}
{{ bamboo_render_entity('node', 2, 'teaser') }}

{# Render the `stark_messages` Block entity #}
{{ bamboo_render_entity('block', 'stark_messages') }}

```

The `bamboo_render_form` function returns a render array of the specified Form.

* `module` string.
* `formName` string.
* `params` array (optional).

```php
{# Render a the CronForm #}
{{ bamboo_render_form('system', 'CronForm') }}

```

The `bamboo_render_menu` function returns a render array of the specified menu.

* `menu_name` string.
* `level` int (optional) - defaults to 1.
* `depth` int (optional) - defaults to 0.

```php
{# Render a part of the admin menu #}
{{ bamboo_render_menu('admin', 1, 2) }}

```

The `bamboo_render_field` function returns a render array of an entity field.

* `field_name` string.
* `entity_type` string.
* `id` int (optional).
* `langcode` string (optional) - defaults to current language.
* `formatter` string (optional) - The formatter that should be used to render the field. Eg. 'text' for textfield or 'url' for linkfield.

```php
{# Render the title of node 1  #}
{{ bamboo_render_field('title', 'node', 1) }}

```

The `bamboo_render_region` function returns a render array of the specified region.

* `region` string.
* `theme_name` string (optional) - defaults to default theme.

```php
{# Render the sidebar_first region for current theme. #}
{{ bamboo_render_region('sidebar_first') }}

```

### Image Styles

The `bamboo_render_image` function returns a render array of the specified image file.

* `fid` int.
* `styles` string.

```php
{# Get thumbnail from image with fid 12. #}
{{ bamboo_render_image(12, 'thumbnail') }}

```

The `bamboo_render_image_style` function returns URL string of the specified image path or URI.

* `path` string.
* `styles` string.
* `preprocess` boolean - preprocess the image style before first HTTP call.

```php
{# Get thumbnail from image 'public://antistatique.jpg'. #}
{{ bamboo_render_image_style('public://antistatique.jpg', 'thumbnail') }}

```

### Views

The `bamboo_render_views` function renders the requested view.

* `view` string.
* `item` string.

```php
{# Render the View `who_s_new` block `block_1` #}
{{ bamboo_render_views('who_s_new', 'block_1') }}
```

### Configurations

The `bamboo_config_get` function returns the specified config.

* `config_key` string.
* `name` string.

```php
{# Get system mail setting #}
{{ bamboo_config_get('system.site', 'mail') }}

```

The `bamboo_state_get` function returns the specified state.

* `state_key` string.

```php
{# Get system.cron_last from state #}
{{ bamboo_state_get('system.cron_last') }}

```

The `bamboo_settings_get` function returns the specified setting.

* `state_key` string.

```php
{# Get hash_salt from settings #}
{{ bamboo_settings_get('hash_salt') }}

```

### Security

The `bamboo_has_role` function returns a boolean if the current|given user has the requested role.

* `role` string.
* `user` int - User id instead of the current logged user..

```php
{# Does the current|given user have the given role ? #}
{{ bamboo_has_role('authenticated') ? 'TRUE' : 'FALSE' }}

```

The `bamboo_has_roles` function returns a boolean of the current|given user has the requested roles.

* `roles` string\[\]
* `conjunction` (optional) string - The conjunction to use on the set of roles. Only the two values '_AND_' or '_OR_' are allowed.
* `user` (optional) int - User id instead of the current logged user.

```php
{# Does the current user have all the given roles ? #}
{{ bamboo_has_roles(['authenticated', 'administrator']) ? 'TRUE' : 'FALSE' }}
{# Does the current user have at least one of the given roles ? #}
{{ bamboo_has_roles(['authenticated', 'administrator'], 'OR') ? 'TRUE' : 'FALSE' }}
```

The `bamboo_has_permission` function returns a boolean if the current|given user has the requested permission.

* `permission` string
* `user` int - User id instead of the current logged user.

```php
{# Does the current|given user have the given permission ? #}
{{ bamboo_has_permission('administer site configuration') ? 'TRUE' : 'FALSE' }}

```

The `bamboo_has_permissions` function returns a boolean if the current|given user has the requested permissions.

* `permissions` string\[\]
* `conjunction` (optional) string - The conjunction to use on the set of permissions. Only the two values '_AND_' or '_OR_' are allowed.
* `user` (optional) int - User id instead of the current logged user.

```php
{# Does the current user have all the given permissions ? #}
{{ bamboo_has_permissions(['administer site configuration', 'bypass node access']) ? 'TRUE' : 'FALSE' }}
{# Does the current user have at least one of the given permissions ? #}
{{ bamboo_has_permissions(['administer site configuration', 'bypass node access'], 'OR') ? 'TRUE' : 'FALSE' }}

```

### Extensions

The `bamboo_extensions_truncate` filter from Twig-extensions [Text](http://twig-extensions.readthedocs.io/en/latest/text.html).

* `sentence` string.
* `word` boolean - Truncat at the end of words.
* `ellipsis` string.

```php
{# Truncate a sentence #}
{{ "This is a very long sentence."|bamboo_extensions_truncate(2, false, '...') }}

```

The \*coming soon\* `bamboo_extensions_truncate_html` filter to truncates sentences html and preserves tags.

* `sentence` string.
* `word` boolean - Truncate at the end of words.
* `ellipsis` string.

```php
{# Truncate a HTML sentence #}
{{ "<p>This <b>is a very</b> long sentence.</p>"|bamboo_extensions_truncate_html(2, false, '...') }}

```

The `bamboo_extensions_shuffle` filter from Twig-extensions [Array](http://twig-extensions.readthedocs.io/en/latest/array.html).

* `array` array.

```php
{# Shuffle the given array #}
[1, 2, 3]|bamboo_extensions_shuffle

```

The `bamboo_extensions_time_diff` filter from Twig-extensions [Date](http://twig-extensions.readthedocs.io/en/latest/date.html).

* `date` string - date, timestamp, DrupalDateTimePlus, DateTimePlus or DateTime.

```php
{# Difference between two dates #}
{{ '24-07-2014 17:28:01'|bamboo_extensions_time_diff('24-07-2014 17:28:06') }}

```

### Token

The `bamboo_token` function substitute a given tokens with appropriate value.

* `token` string.

```php
{# Substitute token #}
{{ bamboo_token('site:name') }}

```