The contributed[ i18n module](https://www.drupal.org/project/i18n) provides multilingual capabilities for nodes in Drupal 6\. Similar capabilities are in Drupal core.

### Language settings of content types

* Migrating content type language settings from Drupal 6 to Drupal 8 or higher is supported.

### Language aware nodes without translations

* Nodes can have a language in Drupal 6 without translations.
* The result in Drupal 8+ will be conceptually the same as in Drupal 6\. There will be two separate node entities and the language of each node will be migrated automatically.
* The figure below illustrates this migration.

![Migration of language aware Drupal 6 nodes](https://www.drupal.org/files/D6-node-languages-without-translations.PNG)

### Node translations

The translation concept in Drupal 6 and Drupal 8+ is fundamentally different.

In Drupal 6 we have two nodes, one for English and one for Finnish. Both language versions are separate node entities with their own node IDs. The nodes are associated as translations of each other.

The Drupal 8 or higher translation concept is fundamentally different. There is only one node entity which is 'shared' between all language versions of the node and the translations are done on field level.

The figure below illustrates the migration. The content of both nodes (English and Finnish) is migrated to one and the same node so that there are language versions on field level. Redirects from node/2 to node/1 will be automatically created during the migration. 

![Migration of Drupal 6 node translations](https://www.drupal.org/files/D6-node-translations.PNG)

### Multilingual node revisions

The migration for translations of node revisions is available as of Drupal 8.9.x.