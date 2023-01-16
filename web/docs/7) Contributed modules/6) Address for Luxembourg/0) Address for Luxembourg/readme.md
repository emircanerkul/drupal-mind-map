---
url: >-
  https://www.drupal.org/docs/contributed-modules/address-for-luxembourg/address-for-luxembourg
description: >-
  Introduction The Address for Luxembourg extends the module address by adding
  the list of localities by cantons for Luxembourg. How to install The module
  Address for Luxembourg can be installed at least in these 2 ways: Download it
  directly from the module's page by clicking on the last release and finding
  the https://ftp.drupal.org/files/projects/address_lu-1.0.0.zip or
  https://ftp.drupal.org/files/projects/address_lu-1.0.0.tar.gz. Then placed
  inside the project module repo. Use composer instead by running the command
  composer require 'drupal/address_lu:^1.0' from the root project's folder.
published_time: '2022-04-18T10:58:44+00:00'
modified_time: '2022-04-18T18:56:02+00:00'
---
### Introduction

The [Address for Luxembourg](https://drupal.org/project/address%5Flu) extends the module address by adding the list of localities by cantons for Luxembourg.

### How to install

The module _Address for Luxembourg_ can be installed at least in these 2 ways:

* Download it directly from the module's [page](https://drupal.org/project/address%5Flu) by clicking on the last release and finding the _<https://ftp.drupal.org/files/projects/address%5Flu-1.0.0.zip>_ or _<https://ftp.drupal.org/files/projects/address%5Flu-1.0.0.tar.gz>._ Then placed inside the project module repo.
* Use composer instead by running the command `composer require 'drupal/address_lu:^1.0'`from the root project's folder.

### Enable the module

In order to enable the module you can:

* Navigate to the _admin/modules_ page. Find the search field and find it then enable it by checking the checkbox and then clicking the button _Save._
* Use `drush` command `drush pm:enable address_lu -y` from the terminal.

### Dependencies

* [Address](https://www.drupal.org/project/address "Token")

### Usage

Navigate to the profiles list _admin/people/profiles_. Click edit on any profile. You should be able to view the list of cantons and cities for Luxemburg. See the screen-shot:

![](https://www.drupal.org/files/address_lu.png)