You may optionally define external dependencies for your module in composer.json. **Drupal core will not automatically discover or manage these dependencies**. To utilize dependencies defined in a project's composer.json file, you must use one of the following maintenance strategies:

* [Install Drupal core and the module using composer.](/node/2718229)
* [Manually modify the composer.json file](/node/2404989) in your Drupal installation's root directory.

For more information on composer as a dependency manager for Drupal, review a [comparison of Composer and Drush Make](https://www.drupal.org/node/2471553) as dependency managers.

### Adding dependencies on other Drupal modules

By default Composer only will look at packages that are published on [Packagist](https://packagist.org/) when it is resolving its dependencies. Most Drupal modules are not published there, since Drupal has its own repository. Because of this you might get error messages such as the following:

> The requested package drupal/module could not be found in any version, there may be a typo in the package name.

You can instruct Composer to look for Drupal modules in the `packages.drupal.org` repository by executing the following command:

```php
$ composer config repositories.drupal composer https://packages.drupal.org/8

```

This command will add the following section to your `composer.json` file:

```php
  "repositories": {
    "drupal": {
      "type": "composer",
      "url": "https://packages.drupal.org/8"
    }
  }

```