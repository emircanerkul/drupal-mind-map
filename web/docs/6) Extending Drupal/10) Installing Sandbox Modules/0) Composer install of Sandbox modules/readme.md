### Sandbox modules with a composer.json

If the Sandbox module has a **composer.json** file that include `"type": "drupal-module",` you can add it as a _vcs_ repository entry to your `composer.json` "repositories" array:

```php
    "repositories": [
        {
            "type": "composer",
            "url": "https://packages.drupal.org/8"
        },
        {
            "type": "vcs",
            "url": "https://git.drupalcode.org/sandbox/username-12345678.git"
        }
    ],
```

Check the available versions with composer show (where `drupal/foo` is the package name defined in the Sandbox project's `composer.json`):

```php
composer show drupal/foo --all
```

Then use `composer require drupal/foo:1.0.x-dev` to install the module (replace the version string).

### Sandbox modules without a composer.json

It is still possible to use Composer to install Sandbox modules that don't have their own `composer.json` file, but you must [add the repository to your own composer.json](https://www.daggerhartlab.com/composer-how-to-use-git-repositories/) to be able to do this. This is an example showing how to install MegaChriz's [Feeds Dev](http://www.drupal.org/sandbox/megachriz/2950698) module:

add the following to the "repositories" section of your composer.json:

`"drupal/feeds_dev": {
    "type": "package",
    "package": {
        "name": "drupal/feeds_dev",
        "type": "drupal-module",
        "version": "1.x-dev",
        "source": {
            "url": "https://git.drupalcode.org/sandbox/megachriz-2950698.git",
            "type": "git",
            "reference": "8.x-1.x"
        }
    }
}`

and then on the command line:

`composer require drupal/feeds_dev:1.x-dev`