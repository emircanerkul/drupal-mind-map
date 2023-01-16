---
url: >-
  https://www.drupal.org/docs/contributed-modules/address-for-rep-of-moldova/address-for-rep-of-moldova
description: >-
  Introduction The Address for Rep. of Moldova extends the module address by
  adding the list of districts and subdivisions for the Rep. of Moldova. How to
  install The module Address for Rep. of Moldova can be installed at least in
  these 2 ways: Download it directly from the module's page by clicking on the
  last release and finding the
  https://ftp.drupal.org/files/projects/address_md-1.0.3.zip or
  https://ftp.drupal.org/files/projects/address_md-1.0.3.tar.gz. Then placed
  inside the project module repo.
published_time: '2022-04-18T19:00:39+00:00'
modified_time: '2022-04-18T19:00:39+00:00'
---
###  Introduction

The [Address for Rep. of Moldova](https://drupal.org/project/address%5Fmd) extends the module address by adding the list of districts and subdivisions for the Rep. of Moldova.

### How to install

The module _Address for Rep. of Moldova_ can be installed at least in these 2 ways:

* Download it directly from the module's [page](https://drupal.org/project/address%5Fmd) by clicking on the last release and finding the _<https://ftp.drupal.org/files/projects/address%5Fmd-1.0.3.zip>_ or _<https://ftp.drupal.org/files/projects/address%5Fmd-1.0.3.tar.gz>._ Then placed inside the project module repo.
* Use composer instead by running the command `composer require 'drupal/address_md:^1.0'`from the root project's folder.

### Enable the module

In order to enable the module you can:

* Navigate to the _admin/modules_ page. Find the search field and find it then enable it by checking the checkbox and then clicking the button _Save._
* Use `drush` command `drush pm:enable address_md -y` from the terminal.

### Dependencies

* [Address](https://www.drupal.org/project/address "Token")

### Usage

Navigate to the profiles list _admin/people/profiles_. Click edit on any profile. You should be able to view the list of regions and cities for Rep. of Moldova. See the screen-shot:![](https://www.drupal.org/files/address_md.png)