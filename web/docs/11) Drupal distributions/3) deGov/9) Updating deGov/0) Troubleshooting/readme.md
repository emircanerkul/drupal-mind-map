### Missing configuration

If you get errors regarding missing configuration, then you can import a single configuration or a list of configurations. For that you must install the [Drupal Console](https://drupalconsole.com/) command line tool. Afterwards you can execute the following command:

```php
drupal config:import:single --file="/path/to/file/block.block.default_block.yml"
```

Shortcut: 

```php
drupal cis --file="/path/to/file/block.block.default_block.yml"
```

See more documentation about that command: [https://hechoendrupal.gitbooks.io/drupal-console/en/commands/config-impo...](https://hechoendrupal.gitbooks.io/drupal-console/en/commands/config-import-single.html). Note the next paragraph for not stumbling into issues, after you have imported configurations of entities.

### Field storage config and fields config imported - content entity types are still missing the fields

After you have imported the field storage and fields config, you must apply pending entity schema updates. Use the [Drush](https://www.drush.org/) command line tool for that. Then you can execute the following command:

```php
drush entup
```

To learn more about that and other Drush commands, visit the [Drush command documentation](https://drushcommands.com/drush-8x/core/entity-updates/).

### An update hook breaks my project/cannot be applied

If you have executed **drush updb** to apply the database updates and some updates ([update hooks](https://www.drupal.org/docs/8/api/update-api/introduction-to-update-api-for-drupal-8)) are still failing, then you can bypass them. Just pick their version from the error message and execute the following Drush command.

```php
drush ev "\Drupal::keyValue('system.schema')->set('my_nice_module', (int) 8149)";

```

Note: The first parameter if the set method is the module machine name. The second parameter is the module version.