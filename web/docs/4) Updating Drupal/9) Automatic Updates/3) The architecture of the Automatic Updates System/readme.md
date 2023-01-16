### Core Features

#### Readiness Checks

The readiness checks are a pluggable system allowing a variety of different types of checks to be run, and warnings or errors to be displayed in the Drupal admin interface.

### Drupal.org Infrastructure

Automatic Updates for Drupal are supported by the infrastructure of Drupal.org and funded by the activities of the Drupal Association.

### Deliberate limitations

* Fully automatic, completely unattended updates (i.e., done during cron runs) are not yet supported. This will come when drupal.org's packaging system supports [The Update Framework](https://theupdateframework.io/).
* This module does not support updating across major versions of Drupal core (for example, Drupal 9 to Drupal 10), because major version updates are disruptive. See the [Upgrade Status module](https://www.drupal.org/project/upgrade%5Fstatus) for help with that.
* It is not possible to update a development snapshot of Drupal core to any other version.
* It is not possible to downgrade to an older version of Drupal, or undo an update once it's complete.
* Multisites are not supported because it's not possible to automatically keep all the sites in a multisite synchronized with changes in the underlying code base.