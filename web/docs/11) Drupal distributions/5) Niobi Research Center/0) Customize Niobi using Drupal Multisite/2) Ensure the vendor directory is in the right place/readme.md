In order for Niobi to correctly see and use modules and libraries you are downloading into your multisite folders, there is a special autoloader file in profiles/niobi/multisite\_autoload.php . This will look at all directories in your sites/ directory, and if it finds an autoloader in any of the following paths, it will include that for autoloading:

```php
sites/*/vendor/autoload.php
sites/*/modules/vendor/autoload.php
sites/*/themes/vendor/autoload.php
```

Be sure that your custom implementation of Composer puts vendor/autoload.php in one of these locations.

_If Niobi can see your autoloader, and your composer.json is set to autoload Niobi's autoloader, then Composer operations and site operations should go smoothly for your multisite._

Finally, if you have an alternative solution, we are open to further discussion on the [Niobi Issue Queue](https://www.drupal.org/project/issues/niobi).