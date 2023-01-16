---
url: >-
  https://www.drupal.org/docs/contributed-themes/bootstrap-45-barrio-sass-starter-kit/installation
description: >-
  Before doing anything, node.js needs to be installed on your server. Download
  Bootstrap Barrio to the /themes folder located in the root of your Drupal
  installation. Download Bootstrap 4/5 - Barrio SASS Starter Kit to the /themes
  folder mentioned above so it is in the same directory as Bootstrap Barrio.
  Drupal Root | | - themes  | - contrib  | - bootstrap_barrio  | -
  bootstrap_sass To create a subtheme: You can create a subtheme through a shell
  script.
published_time: '2018-02-17T02:19:05+00:00'
modified_time: '2022-02-22T19:44:57+00:00'
---
Before doing anything, [node.js needs to be installed](https://nodejs.org/en/download/package-manager/) on your server.

Download [Bootstrap Barrio](https://www.drupal.org/project/bootstrap%5Fbarrio) to the /themes folder located in the root of your Drupal installation.

Download [Bootstrap 4/5 - Barrio SASS Starter Kit](https://www.drupal.org/project/bootstrap%5Fsass) to the /themes folder mentioned above so it is in the same directory as Bootstrap Barrio. 

Drupal Root  
 |  
 | - themes   
 | - contrib  
 | - bootstrap\_barrio  
 | - bootstrap\_sass

**To create a subtheme:**

* You can create a subtheme through a shell script.
* Navigate to the "themes/contrib/bootstrap\_sass" folder change permissions to shell script `chmod +x scripts/create_subtheme.sh` and run: `./scripts/create_subtheme.sh` or `bash scripts/create_subtheme.sh`
* The script will ask a series of configuration questions and then create your subtheme.
* If you don't already have a "themes/custom" folder, it will create one, then place your subtheme there.

**From the subtheme folder:**

* Install gulp: `npm install --global gulp-cli`
* Install dependencies including Bootstrap latest version: `npm install`
* Optional install Material Design Bootstrap: `npm install mdbootstrap`

Dependencies are declared on the `package.json` file.

Update line#80 of the gulpfile.js file with your own domain.

```php
browserSync.init({
  proxy: "http://yourdomain.com",
});
```