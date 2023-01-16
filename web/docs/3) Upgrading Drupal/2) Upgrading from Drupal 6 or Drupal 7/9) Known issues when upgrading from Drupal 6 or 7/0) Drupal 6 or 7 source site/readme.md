### Potential ID conflicts

#### The problem

As described on the [preparing an upgrade](/docs/8/upgrade/preparing-an-upgrade#dont%5Fcreate%5Fcontent) page, the destination site should be completely empty when the upgrade process is performed. The migration process preserves the IDs of the source site when importing them into the destination site. If the content has been created on the destination site before the upgrade (e.g. node with nid 1), it is likely that the IDs will conflict.

The user is warned of potential ID conflicts than can choose to continue with the upgrade or not. Site administrators should carefully consider potential conflicts. If ID conflicts are not treated with care, content or other entity items such as taxonomy terms and files can be overwritten causing data loss. It is also possible that the referencing entities are damaged, for example, content can be associated with an incorrect taxonomy term.

#### Scenarios that might lead to ID conflicts

* The destination site had already been in use at the time of the upgrade and content had already been created.
* The initial migration was completed. After the initial migration content or other entities were created in both the source and the destination sites. When the updated / newly created content was migrated from the source site, the IDs may conflict with the content that was created in the destination site.
* The destination was in a clean state but contributed or custom modules might have added data for their own use when they were enabled in the destination site. For example, since Drupal 8 the Forum module creates a taxonomy term for its _General Discussion_ category and that will normally get ID #1 in a fresh install. If the source data contains a taxonomy term with ID 1, it will overwrite the name of the forum's _General Discussion_ category.
* The source might have data that do not come with an ID, but the destination requires them to have an ID. For example, Drupal 6 handles user pictures as unmanaged files without an ID but the destination requires them to have an ID. Managed file fields with IDs will be created during the migration and these may conflict with files that are yet to be migrated.
* Possible ID conflicts with translations are not automatically detected.  
   * If you are executing a complete upgrade at once and you are performing the upgrade to an empty destination site, everything should be OK.  
   * If you are executing a partial migration after an initial upgrade AND you have added translations on your destination site before migrating the updated / newly created content, the second migration may overwrite the translation made on the destination site.

#### Solutions

##### Custom migration for the conflicting items

It is possible to [customize the migration](/docs/8/upgrade/customize-migrations-when-upgrading-to-drupal-8) for the problematic content so that new IDs are created for the problematic items. Note that this will affect their internal path and possibly their public URLs. Special care should be taken to correct any references to the changed entities.

##### Manipulate auto-increment values

When the destination does not have any conflicting data but the migration process may generate conflicts, it is possible to manipulate the AUTO\_INCREMENT value on the destination database tables so that the IDs of the created entities do not fall within the range of other migrated entities. The migration of user pictures described above is an example of this.

##### Accept that data may be overwritten

It is always possible to go ahead with performing the migration. This is probably not the desired solution in many cases as it may lead to data loss.

### Statistics

The access log settings and non-i18n statistics data are migrated. Consolidation of i18n statistics data are migrated as of Drupal 8.5.2\. See [#2930101: i18n / statistics - node counter not updated for translations](https://www.drupal.org/project/drupal/issues/2930101 "Status: Closed (fixed)").

### Views

Views are not migrated, you will need to create the views in the destination site manually. For further details, please refer to [#2500547: Upgrade path for Views from Drupal 6 and 7](https://www.drupal.org/project/drupal/issues/2500547 "Status: Closed (won't fix)"). Note that the [Views Migration](/project/view%5Fmigration) and [Views migration from Drupal 6 or 7](https://www.drupal.org/project/views%5Fmigration) modules exist to make a "best-effort" attempt, but results will need testing, particularly with more advanced views.