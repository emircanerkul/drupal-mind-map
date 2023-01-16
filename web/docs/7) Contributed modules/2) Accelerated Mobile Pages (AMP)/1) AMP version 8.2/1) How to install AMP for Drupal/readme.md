You should be [using Composer to manage Drupal site dependencies](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies).

With Composer, adding AMP tools to your site project is much like adding other modules or themes with Composer:

On the command line, enter the following commands in your project root directory:

* Download the AMP module and its dependencies, including the AMP library, with `composer require drupal/amp`.
* Download the AMP theme with `composer require drupal/amptheme`.

The AMP theme provides an AMP Base theme and an ExAMPle subtheme. You can use the included ExAMPle subtheme or create your own custom subtheme that is based on the AMP Base theme. If you want to create a custom AMP subtheme, add that subtheme to the /themes directory.