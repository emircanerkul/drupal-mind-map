The very short explanation is to always use Composer to include modules. Run

`composer require drupal/modulename`

from the webroot directory, _not inside the core directory_, to install the module with all its Composer dependencies. Once the module has been included with Composer the module can then be enabled in Drupal. Read the guide on [Enabling Modules in Drupal](https://www.drupal.org/docs/8/extending-drupal-8/installing-drupal-8-modules#enable%5Fmod "Installing Drupal 8 Modules | Drupal 8 guide on Drupal.org") for more information.

Read [Using Composer to manage Drupal site dependencies](https://www.drupal.org/node/2718229 "Develop guide on Drupal.org") for more information.

NB! As of Drupal 8.1, the [Composer Manager](https://www.drupal.org/project/composer%5Fmanager "Project page on Drupal.org") module is deprecated and not needed.