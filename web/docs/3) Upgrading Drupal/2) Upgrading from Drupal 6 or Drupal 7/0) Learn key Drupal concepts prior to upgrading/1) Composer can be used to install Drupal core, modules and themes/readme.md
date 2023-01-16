### Traditional way to manage Drupal, modules and themes

The traditional way of managing a Drupal site was to download a tarball or zip of Drupal core, extract it and then do the same thing for contributed modules and themes. Some modules have required third party libraries to be manually downloaded to a certain directory, typically under sites/all/libraries. Drupal 8 (or later) core and most of the modules can still be installed and updated with this traditional approach, but there's an increasing number of contributed modules which require installation with Composer.

### Drupal 8 (or later) can be installed and updated using Composer

Modern PHP applications are typically built using reusable libraries or components. This applies also to Drupal 8 (or later) which uses components of the [Symfony framework](https://symfony.com/) and many other third parties. It is also increasingly common that contributed Drupal modules have dependencies to third party libraries. Composer is a dependency manager for PHP that resolves the component dependencies and downloads the required versions for you.

Managing and updating your Drupal 8 (or later) site can become challenging if you originally installed Drupal 8 (or later) core with the traditional tarball / zip approach and then need modules that can only be installed using Composer. A couple of examples of modules with third party dependencies:

* [Address](https://www.drupal.org/project/address) depends on [commerceguys/addressing](https://github.com/commerceguys/addressing) library
* [Geofield ](https://www.drupal.org/project/geofield)depends on [phayes/geoPHP](https://github.com/phayes/geoPHP) library
* [Simple FB Connect](https://www.drupal.org/project/simple%5Ffb%5Fconnect) depends on [facebook/graph-sdk](https://github.com/facebook/php-graph-sdk) library

If you know that you will need a contributed module which must be installed with Composer, it is highly recommended to also install Drupal 8 (or later) core with Composer. Switching to Composer managed approach when the site was originally installed with the traditional approach can be quite challenging. This hassle can be avoided by using Composer to build the whole site from the beginning. In practice this means that you will NOT download and extract any tarballs / zip files manually but you use Composer to install Drupal 8 (or later) core, all contributed modules and themes.

[Read more about managing Drupal 8 (or later) and contributed modules using Composer](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies)  