If you need to define custom transformation logic, you can also implement [hook\_migrate\_prepare\_row()](https://api.drupal.org/api/drupal/core%21modules%21migrate%21migrate.api.php/function/hook%5Fmigrate%5Fprepare%5Frow/8.4.x) in your custom module and implement your logic in there.

As the API documentation of the hook describes, the hook has three arguments:

* [Row ](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Row.php/class/Row/8.4.x)$row
* [MigrateSourceInterface ](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21MigrateSourceInterface.php/interface/MigrateSourceInterface/8.4.x)$source
* [MigrationInterface ](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21MigrationInterface.php/interface/MigrationInterface/8.4.x)$migration

As described on the API documentation of the hook, you can use `$migration->id()` to limit your logic to only the desired migration.

To read a source property to a variable, use [Row::getSourceProperty()](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Row.php/function/Row%3A%3AgetSourceProperty/8.4.x), for example, if the source row would have a property called 'type', you could say `$type = $row->getSourceProperty('type');`

To set a completely new property that you can use in your migration definition as a source, use [Row::setSourceProperty()](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Row.php/function/Row%3A%3AsetSourceProperty/8.4.x).

To make database queries to the source site, use `$source->getDatabase()->query()` as demonstrated in the hook API documentation.

To skip the row from being migrated, you can throw a new [MigrateSkipRowException](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21MigrateSkipRowException.php/class/MigrateSkipRowException/8.4.x).