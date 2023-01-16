---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/naming-and-placing-your-drupal-module
description: >-
  Main topic described: module naming and location Before you begin If you want
  PHP to help identify your mistakes on your testing site, try the settings
  described here: Showing all errors while developing. Name your module The
  first step in creating a module is to choose a "short name", or machine name,
  for it. This machine name will be used in several files and functions in your
  module, and is used by core Drupal programmatically to refer to your module.
  There are some important rules to follow when selecting a machine name: It
  must start with a letter.
published_time: '2013-10-21T13:37:26+00:00'
modified_time: '2021-08-21T05:39:44+00:00'
---
**Main topic described: _module naming and location_**

### Before you begin

If you want PHP to help identify your mistakes on your testing site, try the settings described here: [Showing all errors while developing](https://drupal.org/node/1056468).

### Name your module

The first step in creating a module is to choose a "short name", or machine name, for it. This machine name will be used in several files and functions in your module, and is used by core Drupal programmatically to refer to your module.  
![](https://www.drupal.org/files/machine_name_2.png)  
There are some important rules to follow when selecting a machine name:

* It must start with a letter.
* It must contain only lower-case letters, digits, and underscores.
* It must not contain any spaces.
* It must not be longer than 50 characters.
* It must be unique. Your module should not have the same short name as any other module, theme, theme engine, or installation profile you will be using on the site.
* It should not be any of the reserved terms : `src`, `lib`, `vendor`, `assets`, `css`, `files`, `images`, `js`, `misc`, `templates`, `includes`, `fixtures`, `Drupal`.

For this case, we'll choose "hello\_world" as the machine name.

**Important note:** Be sure to not use upper-case letters in your module's machine name as Drupal will not recognize your hook implementations. See [Understanding the hook system for Drupal modules](/node/292).

### Create a folder for your module

Given that our choice of machine name is "hello\_world", start the module by creating a folder within your Drupal installation at the path: `/modules/custom/hello_world `or `/sites/all/modules/hello_world`. You may omit`/custom/`subfolder and place your module to `/modules/hello_world`folder, but often it's good idea to have a dedicated place for your own modules, so you'll not have to search for them among other ones, downloaded from Drupal.org.

Note that it is not necessary to use the same name for your module's folder as your machine name. You could, for example, use the folder name `HelloWorld` instead. However, you must remember to use the machine name programmatically within your module's code and filenames.

Previous Drupal versions demanded custom modules to be located in `/sites/all/modules` as the core modules were located in `/modules`. However, in Drupal 8 `/modules` is now freed up for your custom and contributed modules. All core modules and libraries files are now located in the `/core` directory. In Drupal 8, you can still use the Drupal 7/6 best practice of putting your custom and Drupal.org contributed (downloaded) modules into `/sites/all/modules` but you can also just put them into the `/modules` directory, which has the same effect.

Our example module is not operational yet, we'll need an `.info.yml` file first. Read more about How to [Let Drupal 8 know about your module with an .info.yml file](/node/2000204). We'll activate the module later in the tutorial.

### Coding standards

We strongly advise you to follow the [Drupal coding standards](http://drupal.org/node/318) when writing your own, custom modules. It is a requirement for any change suggestions to Drupal core code and also a best practice for drupal.org hosted code.

### See also

* [Showing all errors while developing](http://drupal.org/node/1056468)
* [Coding standards](http://drupal.org/node/318)