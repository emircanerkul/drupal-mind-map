---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/process-plugins-from-other-contrib-modules/contrib-process-plugin-addressfield
description: >-
  The Drupal 7 Address Field module defines a field type for storing
  international postal addresses. The module is replaced in Drupal 8 by the
  Address module. The Drupal 8 Address module provides an upgrade path from
  Drupal 7 Address Field to Drupal 8 Address. It uses an addressfield process
  plugin for transforming the values from Drupal 7 to Drupal 8 format. Example
  migration_plus item manifest : Drupal 8 Target field : field_drupal8_address
  Drupal 7 Source field : field_drupal7_address field_drupal8_address: plugin:
  addressfield source: field_drupal7_address
published_time: '2016-09-12T20:44:46+00:00'
modified_time: '2022-05-01T01:22:03+00:00'
---
The Drupal 7 [Address Field](https://www.drupal.org/project/addressfield) module defines a field type for storing international postal addresses. The module is replaced in Drupal 8 by the [Address](https://www.drupal.org/project/address) module.

The Drupal 8 Address module provides an upgrade path from Drupal 7 Address Field to Drupal 8 Address. It uses an `addressfield` process plugin for transforming the values from Drupal 7 to Drupal 8 format.

Example migration\_plus item manifest :

```php
  Drupal 8 Target field : field_drupal8_address
  Drupal 7 Source field : field_drupal7_address

```

```php
field_drupal8_address:
  plugin: addressfield
  source: field_drupal7_address

```