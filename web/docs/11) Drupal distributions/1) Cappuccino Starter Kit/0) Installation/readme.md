---
url: >-
  https://www.drupal.org/docs/drupal-distributions/cappuccino-starter-kit/installation
description: >-
  Clone the repository, or download the latest version. git clone --branch
  '3.0.x' https://git.drupalcode.org/project/cappuccino.git or
  https://www.drupal.org/project/cappuccino/releases/3.0.x-dev Run "composer
  install" in the root, to download all the dependencies. Point your webhost to
  the "web" folder. Build the theme (by default in
  web/profiles/cappuccino/themes/ino_basetheme) with npm and gulp. It was tested
  on node.js version 16.0.
published_time: '2019-07-29T16:43:09+00:00'
modified_time: '2022-07-30T11:06:11+00:00'
---
* Clone the repository, or download the latest version.

git clone --branch '3.0.x' <https://git.drupalcode.org/project/cappuccino.git>

or

[https://www.drupal.org/project/cappuccino/releases/3.0.x-dev](https://www.drupal.org/project/cappuccino/releases/8.x-1.x-dev)

* Run "composer install" in the root, to download all the dependencies.
* Point your webhost to the "web" folder.
* Build the theme (by default in web/profiles/cappuccino/themes/ino\_basetheme) with npm and gulp.

It was tested on node.js version 16.0.

Inside the theme folder run:  
npm install

Compile the theme for production  
npx gulp sass-prod

* Make sure that the "config\_sync\_directory" configuration points to the config/sync  
 folder inside the "cappuccino" profile.
* Install Drupal with the "drush site:install --existing-config" command

Currently installing it through the UI is broken.

The Cappuccino profile will be selected by default. The initial configuration will be installed as well.

Currently french translations are loaded in the system by default, but that can be disabled or changed after installation.

It is recommended to change the config sync folder in the settings.php, and then export the configuration to not overwrite the configuration that was bundled with the profile when doing development.