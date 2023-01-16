---
url: >-
  https://www.drupal.org/docs/8/themes/barrio-bootstrap-4-drupal-89-theme/bootstrap-barrio-installation/bootstrap-libraries-load
description: >-
  Video Tutorial Since 8.x-4.24 version, Bootstrap is automatically downloaded
  via composer and copied into vendors folder. To copy dist files into libraries
  folder during installation, you can add the following 2 lines of script into
  your main composer.json file: "scripts": { "post-install-cmd": [ "@composer
  drupal:scaffold" ], "post-update-cmd": [ "@composer drupal:scaffold", "mkdir
  -p web/libraries/bootstrap", "cp -R vendor/twbs/bootstrap/dist
  web/libraries/bootstrap" ] }, This will maintain your bootstrap version up to
  date when updating via composer.
published_time: '2018-06-05T17:59:35+00:00'
modified_time: '2022-09-08T12:28:20+00:00'
---
<!-- note-tip -->
> TIP: Video Tutorial

Since 8.x-4.24 version, Bootstrap is automatically downloaded via composer and copied into vendors folder.

To copy dist files into libraries folder during installation, you can add the following 2 lines of script into your main composer.json file:

```php
"scripts": {
    "post-install-cmd": [
        "@composer drupal:scaffold"
    ],
    "post-update-cmd": [
        "@composer drupal:scaffold",
        "mkdir -p web/libraries/bootstrap",
        "cp -R vendor/twbs/bootstrap/dist web/libraries/bootstrap"
    ]
},
```

This will maintain your bootstrap version up to date when updating via composer.

Bootstrap Libraries could be loaded by the [Bootstrap Library](https://www.drupal.org/project/bootstrap%5Flibrary "Bootstrap Library | Drupal.org") module, this gives you extra flexibility to load the library either via CDN or locally, choosing an up-to-date Bootstrap version regardless of the theme version.

1. Declare the bootstrap library on your `theme.libraries.yml`, locally or CDN. And then call the library from your `theme.info.yml` file  
Switch between:  
 \- barrio\_localbook/bootstrap\_cdn  
 or  
 \- barrio\_localbook/bootstrap
2. Compile Bootstrap with SASS as in the Bootstrap SASS subtheme.

### Declaring the bootstrap library on your theme.libraries.yml

The library of your choice must be called by your `theme.info` file.If you declare as specified below using the library key `bootstrap` will use the local library, while `bootstrap_cdn` will load from the stackpath bootstrap CDN.

```php
global-styling:
  version: VERSION
  js:
    js/global.js: {}
  css:
    component:
      css/style.css: {}
bootstrap:
  js:
    /libraries/popper/popper.min.js: {}
    /libraries/bootstrap/dist/js/bootstrap.min.js: {}
  css:
    component:
      /libraries/bootstrap/dist/css/bootstrap.min.css: {}
bootstrap_cdn:
  js:
    //cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js: {}
    //stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js: {}
  css:
    component:
     //stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css: {}
```

### Switching between Bootstrap Library module and regular Bootstrap library

If you were previously using the Bootstrap Library module but would prefer to use the regular Bootstrap library (first method outlined), be sure to uninstall the Bootstrap Library module before running any upgrades.