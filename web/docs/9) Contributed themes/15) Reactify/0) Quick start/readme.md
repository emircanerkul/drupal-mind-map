---
url: https://www.drupal.org/docs/contributed-themes/reactify/quick-start
description: >-
  1. Install Reactify theme: drush dl reactify -> drush en reactify -y Theme's
  page: https://www.drupal.org/project/reactify 2. Install Reactify Theme
  Utilities module: drush dl reactify_utilities -> drush en reactify_utilities
  -y Module's page: https://www.drupal.org/project/reactify_utilities The module
  contains several submodules for authentication and REST endpoints
  configuration. 3. Uninstall core modules Quick Edit and Contextual links. The
  reason is that those modules are not used on theme's frontend, but they are
  enabled by default and they have jQuery dependency.
published_time: '2018-04-06T06:10:48+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
1\. Install Reactify theme: drush dl reactify -> drush en reactify -y

Theme's page: <https://www.drupal.org/project/reactify>

2\. Install Reactify Theme Utilities module: drush dl reactify\_utilities -> drush en reactify\_utilities -y

Module's page: <https://www.drupal.org/project/reactify%5Futilities>

The module contains several submodules for authentication and REST endpoints configuration.

3\. Uninstall core modules Quick Edit and Contextual links. The reason is that those modules are not used on theme's frontend, but they are enabled by default and they have jQuery dependency. Reactify theme disables core libraries, so jQuery, jQuery Once etc are not loaded. There will be just white screen and console error 'jQuery is not defined' if modules would be enabled.

4\. (Optional) Install devel module, enable Devel Generate module: drush dl devel, drush en devel\_generate -y

Some content could be generasted to show theme's functionality

5\. Download JSON Web Token Authentication module: <https://www.drupal.org/project/jwt>

Please consider to download the module via composer: go to site's root folder and type 'composer require drupal/jwt'.

JWT module has library dependancy (firebase/php-jwt) and installation via composer ensures that library would be added as well.

JWT module uses Key module for storing secret key. Instructions can be found on Key module's page: <https://www.drupal.org/project/key>