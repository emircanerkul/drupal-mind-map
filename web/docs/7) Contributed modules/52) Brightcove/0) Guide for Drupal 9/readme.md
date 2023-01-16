---
url: https://www.drupal.org/docs/contributed-modules/brightcove/guide-for-drupal-9
description: >-
  Installation guide for Brightcove Video Connect 3.x 1. Download the module The
  downloading of the module happens with the help of composer: composer require
  drupal/brightcove 2. Install and enable modules Install and enable the
  Brightcove Video Connect module and its dependencies: Token, Time Formatter,
  Inline Entity Form Enable the module from the terminal: drush en brightcove 3.
  Generate credentials Go to
  https://studio.brightcove.com/products/videocloud/admin/oauthsettings and
  generate a new set of credentials.
published_time: '2021-11-01T13:17:42+00:00'
modified_time: '2021-11-12T11:17:28+00:00'
---
### Installation guide for Brightcove Video Connect 3.x

**1\. Download the module**

The downloading of the module happens with the help of composer: 

```php
composer require drupal/brightcove
```

**2\. Install and enable modules**

Install and enable the Brightcove Video Connect module and its dependencies: Token, Time Formatter, Inline Entity Form  
Enable the module from the terminal:

```php
drush en brightcove
```

**3\. Generate credentials**

Go to <https://studio.brightcove.com/products/videocloud/admin/oauthsettings> and generate a new set of credentials. Make sure you enable all permissions, because currently the API does not expose the user permissions, so the module can’t adapt to that.

**4\. Add credentials**

Add these credentials under: admin/config/media/brightcove\_api\_client

**5\. Synchronize entities**

Initiate a 'Sync all' of Brightcove videos and playlists into Drupal: admin/reports/brightcove

#### Synchronisation from Brightcove to Drupal

There are three ways to synchronise content from Brightcove to Drupal.

1. Manually triggering the batch synchronisation by clicking on the "Sync all" button at <http://example.com/admin/reports/brightcove>.
2. Relying on Drupal's cron which downloads all content changes from Brightcove to Drupal, and when it finishes with it, it starts over automatically. (This means Drupal's cron must be running, either via the Automated Cron module, or by any other means, eg. drush and/or UNIX system cron.)
3. When a video/playlist is edited on the Drupal site which has more recent changes on Brightcove, a message is displayed with a link in it. Clicking on this link will download all the changes from Brightcove to Drupal (ie. synchronise the content) made on the video/playlist, and the user gets redirected to the edit page again afterwards.

#### Synchronisation from Drupal to Brightcove

… is done every time a video/playlist gets changed via the Drupal interface.

#### Known issues

##### **Create video through media**

* The Inline Entity Form (IEF) has a known issue: currently, it is not possible to create video through media, only to add an already existing one.

#### Migrating from Drupal 8

* To apply the code changes, run

```php
drush updb
```

* **NOTE:** If someone updates the module from 1.3, there will be new fields on the player entity that are being updated only after the cron run, the updb alone will not do it.

#### Migrating from Drupal 7

* Migration from previous Drupal versions is not supported at the moment due to the lack of an upgrade path in core.

#### Video playlist management

In comparison with the earlier version of the module, with the current version it is no longer possible to switch between manual and smart playlists due to the Brightcove API change