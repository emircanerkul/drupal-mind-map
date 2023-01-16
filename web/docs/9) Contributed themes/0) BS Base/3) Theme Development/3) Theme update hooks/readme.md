---
url: >-
  https://www.drupal.org/docs/8/themes/bs-base/theme-development/theme-update-hooks
description: >-
  Custom update hooks API should be used in the cases when parent themes have
  updates that go beyond SASS changes, that includes Gulp libraries update,
  Bootstrap update to a minor or major version, etc. In case of these kinds of
  an update if you want to automate update process you would use update hooks.
  These hooks are similar to regular Drupal update hooks and you write them in
  the same way.
published_time: '2019-01-15T09:37:39+00:00'
modified_time: '2019-07-19T09:58:15+00:00'
---
Custom update hooks API should be used in the cases when parent themes have updates that go beyond SASS changes, that includes Gulp libraries update, Bootstrap update to a minor or major version, etc. In case of these kinds of an update if you want to automate update process you would use update hooks. These hooks are similar to regular Drupal update hooks and you write them in the same way.

For example, let say that bs\_bootstrap got updated to Bootstrap 4.2.1 version and besides possible updates in SASS files and re-compilation of CSS files we also need to update Bootstrap version in a package.json file. This version number needs to be changed in bs\_bootstrap package.json but also later updated in any custom child theme that is using bs\_bootstrap. In order to automate this process, we will add a new update hook in bs\_bootstrap.

So the update hook for bs\_bootstrap theme could look like this in bs\_bootstrap.bs\_base.install file:

```php
<?php

/**
 * @file
 * Update hooks for bs_bootstrap base themes.
 */

/**
 * Description explaining your update step 8000.
 */
function bs_bootstrap_bs_update_8000() {
  $themes_info = _bs_base_drupal_theme_list_info();
  $child_themes = _bs_base_find_child_themes('bs_bootstrap');

  // Update Bootstrap version information in package.json.
  foreach ($child_themes as $child_theme) {
    _bs_base_regexp_file($themes_info[$child_theme]->subpath . '/package.json', [
      '"bootstrap": "~4.1.3"' => '"bootstrap": "~4.2.1"',
      // Add a backslash before tilde in the array key, as this is a regex steering sign
      '"autoprefixer": "\^7.2.3"' => '"autoprefixer": "^9.4.10"',
    ]);
  }
}
```

After this running \`drush bs-theme-update demo\_theme\` will produce the next result:

```php
$ drush bs-theme-update demo_theme -y
Updating a demo_theme theme                               [ok]
The following updates are pending:

bs_bootstrap theme : 
  8000 -   Description explaining your update step 8000.

Do you wish to run all pending updates? (y/n): y

Running next updates:
  8000 -   Description explaining your update step 8000.

Building CSS asset for a demo_theme theme                 [ok]
Installing any missing package and rebuilding sass files  [ok]
Rebuilding CSS files  
```

As we see update command detected that it needs to run new update hook from bs\_bootstrap and it executes it. As a result, we will get the next additional lines in demo\_theme.info:

```php
bs_versions:
  bs_bootstrap: 8000
```

<!-- note-tip -->
> TIP: Note that bs_versions yaml&nbsp;value does support multiple theme versioning, so in your hypothetical child theme `demo_theme` which has a custom parent base theme `demo_parent` you could have this kind of yaml&nbsp;information in demo_theme.info file:
bs_versions:
  bs_base: 8002
  bs_bootstrap: 8003
  demo_parent: 8001

<!-- note-tip -->
> TIP: Investigate code in bs_base.drush.inc when writing update hooks. Examples from there and existing helper function can help you while writing your update implementations. Especially check the next functions that you can use:
_bs_base_drupal_get_base_themes()
_bs_base_drupal_theme_list_info()
_bs_base_find_child_themes()
_bs_base_regexp_file()
_bs_base_set_yml_value()