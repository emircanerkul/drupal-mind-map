Prior to Drupal 8.8.0 [the sync directory is defined in $config\_directories and not $settings](https://www.drupal.org/node/3018145), and so the settings.php file should be updated.

Simply change from:

`$config_directories['sync'] = 'foo/bar';`

to

`$settings['config_sync_directory'] = 'foo/bar';`