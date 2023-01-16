---
url: >-
  https://www.drupal.org/docs/updating-drupal/migrating-the-composer-project-for-drupal-earlier-than-880
description: >-
  Official Drupal Beta program partner PreviousNext released a helpful blog post
  about the steps they followed to update from Drupal 8.7 to the Drupal
  8.8.0-beta, which may help any other site owners who have issues with this
  update. The primary cause of issues when upgrading from previous versions of
  Drupal prior to Drupal 8.8.0 with Composer is the change from using the
  community-contributed Composer template to the new official
  Drupal/recommended-project template. The following troubleshooting steps
  should fix your installation so that you can use the standard update
  instructions.
published_time: '2020-05-26T00:19:03+00:00'
modified_time: '2020-11-25T20:11:18+00:00'
---
<!-- note-tip -->
> TIP: Official Drupal Beta program partner PreviousNext released a helpful blog post about the steps they followed to update from Drupal 8.7 to the Drupal 8.8.0-beta, which may help any other site owners who have issues with this update.

The primary cause of issues when upgrading from previous versions of Drupal prior to Drupal 8.8.0 with [Composer](https://www.drupal.org/docs/develop/using-composer/using-composer-with-drupal) is the change from using the community-contributed Composer template to the new official [Drupal/recommended-project](http://github.com/drupal/recommended-project) template. The following troubleshooting steps should fix your installation so that you can use the [standard update instructions](/docs/updating-drupal/update-drupal-core-via-composer).

### Consider removing your /vendor directory

Removing your vendor directory can sometimes eliminate conflicts when running the Composer update. To do so:

```php
cd your_install_dir

rm -rf vendor
```

You can then continue with these troubleshooting steps and/or proceed to rerun the composer update command.

### Migrating from webflo/drupal-core-strict to drupal/core-recommended

Before the 8.8.0 release, many sites used the [webflo/drupal-core-strict](https://github.com/webflo/drupal-core-strict) meta-package to lock dependencies to the exact versions used/tested with Drupal core (mostly Symfony packages). Starting with the 8.8.0 release, Drupal core now provides a [drupal/core-recommended](https://packagist.org/packages/drupal/core-recommended) package to accomplish this feature. However, migrating from the old to the new method does not happen automatically when upgrading to 8.8.0 core, and the `webflo/drupal-core-strict` package doesn't work with 8.8.0.

The simplest way to accomplish this migration and avoid conflicts is to remove your `composer.lock` file entirely as part of the update. However, doing so will mean that other dependencies (e.g., contributed Drupal modules) may be updated, too. Following these steps will ensure that you update exactly what you intend:

1. `composer update` \# To update any dependencies as a separate step.
2. `git add composer.lock; git commit` \# Save the updates as a separate commit.
3. `composer remove webflo/drupal-core-strict --no-update`
4. `composer remove drupal/core --no-update`
5. `composer require 'composer/installers:^1.7' --no-update`
6. `rm composer.lock`
7. `rm -rf vendor` \# Also helps avoid conflicts.
8. `composer require drupal/core-recommended:^8.8 --update-with-dependencies`
9. `git add composer.json composer.lock; git commit -m "Update Drupal to 8.8.0 and use drupal/core-recommended instead of webflo/drupal-core-strict"`

### Migrating from webflo/drupal-core-require-dev to drupal/core-dev

If you created your site some time ago, it may be using the [webflo/drupal-core-require-dev](https://github.com/webflo/drupal-core-require-dev) meta-package to include Drupal's development dependencies to do unit and functional testing. If you are not using Drupal's development dependencies for testing, you may simply remove the `webflo/drupal-core-require-dev`. Otherwise, you should start using the project `drupal/core-dev` instead.

First, the old developer tools package must be removed:

`composer remove --dev webflo/drupal-core-require-dev`

If you do not need the developer tools, you can stop here. If you would like to install them again using the official method, run:

`composer require --dev drupal/core-dev:^8.8`

### Migrating from drupal-composer/drupal-scaffold to drupal/core-composer-scaffold

If you are using drupal-composer/drupal-scaffold it has been replaced by drupal/core-composer-scaffold. The scaffolding configuration is in composer.json file under extra>drupal-scaffold. 

First remove the old scaffolding:

`composer remove drupal-composer/drupal-scaffold --no-update`

Then add the new scaffolding:

`composer require drupal/core-composer-scaffold:^8.8`

Also, make sure the `extra` section of `composer.json` has proper configuration:

```php
"extra": {
...
    "drupal-scaffold": {
        "locations": {
            "web-root": "web/"
        }
    },
...
}
```

### Updating patches

If you are applying patches using [cweagans/composer-patches](https://github.com/cweagans/composer-patches) then those patches may need to be [re-rolled](https://www.drupal.org/patch/reroll). Once the patch is re-rolled you will need to update the patch in the `extra/patches` section of your composer.json.

### Updating conflicting soft dependencies

In some cases, you may have a soft-dependency installed with a version that is incompatible with the latest version of Drupal. The solution is to `composer require` the specific versions of those modules that _are_ compatible, update core, and then remove the dependencies.

First, require new Drupal core and dependencies:

`composer require --update-with-dependencies \ drupal/core:^8.8.0 \ symfony/finder:^3.4 \ symfony/filesystem:^3.4`

Second, require new core-dev package and dependencies:

`composer require --dev --update-with-dependencies \ drupal/core-dev:^8.8.0 \ symfony/debug:^3.4 `

Lastly, remove the temporarily required dependencies:

`composer remove -n \ symfony/finder \ symfony/filesystem \`

`composer remove -n --dev symfony/debug`

### Updating database config and schema

Once the codebase is updated you may need to update your database config and schema as well:

`drush updb drush cr drush config-export`

### Updating settings.php

In Drupal 8.8.0 [the sync directory is defined in $settings and not $config\_directories](https://www.drupal.org/node/3018145), and so the settings.php file should be updated.

Simply change from:

`$config_directories['sync'] = 'foo/bar';`

to

`$settings['config_sync_directory'] = 'foo/bar';`