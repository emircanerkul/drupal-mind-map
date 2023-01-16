You can generate these files by exporting the configuration in _Configuration > Development > Configuration synchronization_. You can opt to use the "Single import/export" functionality to export a single piece of configuration, in which case you are presented with a text area containing the code to copy/paste into the configuration file. Or you can do a "Full export" which will let you download a tar.gz file that contains all configuration files in a single folder.

When using exported configuration it is important to **remove the UUID from the configuration**. Every piece of configuration is uniquely identified by this ID. If you would include this UUID in your module the ID would be the same for all sites that use your module, so it would not be unique anymore. If you simply remove this line from the configuration Drupal will generate new UUIDs when your module is enabled, guaranteeing uniqueness.

uuid: 626187e6-2176-4a73-8900-c0912580e4a1 < < Remove this!
langcode: en
status: true