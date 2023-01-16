You need to install a couple of dependencies:

* [bs\_lib](https://www.drupal.org/project/bs%5Flib) (contrib module),
* [bs\_base](https://www.drupal.org/project/bs%5Fbase) (contrib base theme)
* [jasny](https://github.com/pivica/jasny-bootstrap)[\-bootstrap](https://github.com/pivica/jasny-bootstrap) (library, the forked version from GitHub)
* [popper](https://popper.js.org/) (library)
* [bootstrap](https://getbootstrap.com/) (library)

In order to quickly install Drupal and needed dependencies we recommend using a composer base installation approach:

```php
composer create-project --stability=dev drupal/recommended-project:9.3.12 your-site-folder
cd your-site-folder
```

Edit composer.json, add replace repositories section with

```yaml
    "repositories": {
        "packages_drupal": {
            "type": "composer",
            "url": "https://packages.drupal.org/8"
        },
        "jasny_bootstrap": {
            "type": "git",
            "url": "https://github.com/pivica/jasny-bootstrap.git"
        },
        "popper": {
            "type": "package",
            "package": {
                "name": "floating-ui/popper",
                "version": "v1.16.0",
                "type": "drupal-library",
                "dist": {
                    "type": "zip",
                    "url": "https://api.github.com/repos/floating-ui/floating-ui/zipball/9754fae6dae25265c7d60d1415c08782326b04f8",
                    "reference": "9754fae6dae25265c7d60d1415c08782326b04f8"
                }
            }
        },
        "bootstrap": {
            "type": "package",
            "package": {
                "name": "twbs/bootstrap",
                "version": "4.6.1",
                "type": "drupal-library",
                "dist": {
                    "type": "tar",
                    "url": "https://registry.npmjs.org/bootstrap/-/bootstrap-4.6.1.tgz"
                }
            }
        }
    },
```

Add to 'extra' section:

```yaml
"installer-types": ["component"],
```

Add to 'installer-paths' section:

```yaml
            "web/libraries/jasny-bootstrap": [
                "jasny/bootstrap"
            ],
```

and change minimum-stability to dev:

```yaml
    "minimum-stability": "dev",
```

Save changes to composer.json and then execute:

```php
composer require drupal/bs_lib drupal/bs_base drush/drush jasny/bootstrap twbs/bootstrap floating-ui/popper
```

Create database and install Drupal:

```php
echo 'create database your_database' | mysql -u root
drush si standard install_configure_form.enable_update_status_emails=NULL --site-name='Your Site' --db-url=mysql://root@localhost/your_database -y
```