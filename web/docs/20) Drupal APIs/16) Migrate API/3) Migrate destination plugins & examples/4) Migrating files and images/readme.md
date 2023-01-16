---
url: >-
  https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-destination-plugins-examples/migrating-files-and-images
description: >-
  This page currently describes migration of File entities. Since Drupal 8 core
  also has Media entities which require specific migrations. Feel free to
  complement this documentation by adding examples for Media migrations. Drupal
  content types can have image or file fields where image files or attachments
  such as PDF files can be added. The file migration can be done in two separate
  migrations as follows: First migrate the files using entity:file destination
  plugin. Use migration_lookup process plugin in the node migration to associate
  the previously migrated files to the nodes.
published_time: '2015-12-18T22:39:32+00:00'
modified_time: '2022-07-01T07:07:55+00:00'
---
<!-- note-warning -->
> WARNING: This page currently describes migration of File entities. Since Drupal 8 core also has&nbsp;Media entities&nbsp;which require specific migrations. Feel free to complement this documentation by adding examples for Media migrations.&nbsp;

Drupal content types can have image or file fields where image files or attachments such as PDF files can be added. The file migration can be done in two separate migrations as follows:

* First migrate the files using `entity:file` destination plugin.
* Use [migration\_lookup](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21process%21MigrationLookup.php/class/MigrationLookup) process plugin in the node migration to associate the previously migrated files to the nodes.

An alternative and much simpler approach is to use the contributed [Migrate Files (extended)](https://www.drupal.org/project/migrate%5Ffile) module which provides process plugins for migrating images and files from an internal or external source and a third process plugin for migrating remote files so that they are used from the remote location. Note that when using this approach, some operations such as rolling back a migration will have no effect on the files that were imported this way.

The rest of this tutorial describes how you can use the [Migrate Files (extended)](https://www.drupal.org/project/migrate%5Ffile) module plugins in some specific scenarios: