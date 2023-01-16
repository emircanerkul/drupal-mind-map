Within your multisite directory, you may create a repository folder with Git, and here you can add your composer.json . Here is a sample of a file being used for a custom install of Niobi, which is using a single sign-on and the Commerce module for handling payments.

```yaml
{
  "name": "drupal-composer/drupal-project",
  "minimum-stability": "dev",
  "repositories": [
    {
      "type": "composer",
      "url": "https://packages.drupal.org/8"
    }
  ],
  "prefer-stable": true,
  "config": {
    "sort-packages": true
  },
  "require": {
    "composer/installers": "^1.0@dev",
    "drupal/cas": "^1.4",
    "drupal/cas_attributes": "^1.0@beta",
    "drupal/commerce": "^2.13",
    "drupal/commerce_authnet": "^1.1",
    "drupal/commerce_webform_order": "1.x-dev",
    "drupal/config_update": "^1.6",
    "drupal/masquerade": "^2.0@beta",
    "drupal/smtp": "^1.0@beta",
    "drupal/state_machine": "^1.0@RC"
  },
  "replace" : {
    "drupal/core" : "*",
    "drupal/address" : "*",
    "drupal/profile" : "*",
    "drupal/token" : "*",
    "drupal/webform" : "*",
    "behat/mink": "*",
    "behat/mink-goutte-driver": "*",
    "jcalderonzumba/gastonjs": "*",
    "jcalderonzumba/mink-phantomjs-driver": "*",
    "mikey179/vfsstream": "*",
    "phpunit/phpunit": "*",
    "symfony/css-selector": "*"
  },
  "extra": {
    "installer-paths": {
      "modules/{$name}": ["type:drupal-module"]
    }
  },
  "autoload": {
    "files" : ["../../../../vendor/autoload.php"]
  }
}
```

### Notes on the file

There are a few items in particular to call out in this composer.json file:

**autoload**: This is a critical line. What this line does, is call Niobi's autoloader for use by Composer. This is necessary for Composer to recognize the presence of certain modules and libraries, otherwise certain modules will have difficulty installing. Depending on where you put composer.json, this line will have3 or 4 pairs of double dots (..)

**replace**: In some cases running "composer install" will attempt to grab modules already provided by Niobi, downloading them into your multisite folder (including an extra copy of Drupal core!). The statements in the "replace" directive prevents this. _As a rule, you should only add items to this line if you have to._

**extra/installer-paths**: This allows you to specify the location where downloaded items will be stored. The statement given will put modules into a "modules" folder that would be in the same directory. You may also use an absolute path. For the type of path, here's an example form the distribution's composer.json:

```yaml
"extra": {
        "installer-paths": {
            "web/core": ["type:drupal-core"],
            "web/libraries/{$name}": ["type:drupal-library"],
            "web/modules/contrib/{$name}": ["type:drupal-module"],
            "web/profiles/contrib/{$name}": ["type:drupal-profile"],
            "web/themes/contrib/{$name}": ["type:drupal-theme"],
            "drush/contrib/{$name}": ["type:drupal-drush"]
        }
    }
```