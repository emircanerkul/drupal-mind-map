---
url: >-
  https://www.drupal.org/docs/8/modules/apigee-developer-portal-kickstart/migrate-drupal-7-developer-portal-entities
description: >-
  The Apigee Developer Portal Kickstart distribution includes the
  apigee_kickstart_migrate module for migrating your Drupal 7 developer portal
  to Drupal 8. The table below lists the fields for all entity types that ship
  with the Drupal 7 developer portal and their equivalent fields in Drupal 8
  Kickstart. The apigee_kickstart_migrate module includes migrations for all the
  entity types listed.
published_time: '2020-04-20T23:50:27+00:00'
modified_time: '2020-04-20T23:53:57+00:00'
---
The Apigee Developer Portal Kickstart distribution includes the `apigee_kickstart_migrate` module for migrating your Drupal 7 developer portal to Drupal 8.

The table below lists the fields for all entity types that ship with the Drupal 7 developer portal and their equivalent fields in Drupal 8 Kickstart. The `apigee_kickstart_migrate` module includes migrations for all the entity types listed.

| **Drupal 7 (Devportal)**  | **Drupal 8 (Kickstart)** |                   |
| ------------------------- | ------------------------ | ----------------- |
| Content Types             | Article (article)        | Article (article) |
| title                     | title                    |                   |
| body                      | body                     |                   |
| field\_keywords           | field\_tags              |                   |
| field\_content\_tag       | field\_tags              |                   |
| Basic page (page)         | Basic page (page)        |                   |
| title                     | title                    |                   |
| body                      | body                     |                   |
| FAQ (faq)                 | FAQ (faq)                |                   |
| title                     | title                    |                   |
| body                      | field\_answer            |                   |
| field\_detailed\_question | \-                       |                   |
| Forum topic (forum)       | Forum topic (forum)      |                   |
| title                     | title                    |                   |
| body                      | body                     |                   |
| taxonomy\_forums          | taxonomy\_forums         |                   |
| Comment Types             | Comment (comment)        | Comment (comment) |
| author                    | author                   |                   |
| subject                   | subject                  |                   |
| comment\_body             | comment\_body            |                   |
| Taxonomy                  | Forums (forums)          | Forum (forums)    |
| name                      | name                     |                   |
| Tags (tags)               | Tags (tags)              |                   |
| name                      | name                     |                   |