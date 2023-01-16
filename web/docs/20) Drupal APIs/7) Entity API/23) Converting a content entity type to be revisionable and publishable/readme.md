---
url: >-
  https://www.drupal.org/docs/drupal-apis/entity-api/converting-a-content-entity-type-to-be-revisionable-and-publishable
description: >-
  The information in this document is outdated, the most current information on
  this topic is provided in this change record:
  https://www.drupal.org/node/3034742. Newer versions of Drupal core, starting
  with 8.4.0, are offering many improvements for content editors who want to
  keep track of all the changes to a piece of content over time, and maybe add a
  moderation workflow as well by using the Content Moderation module. If you
  want to make the most out of these new features, you will need to make sure
  that your custom content entity types are revisionable and publishable.
published_time: '2017-09-14T20:00:03+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
**The information in this document is outdated, the most current information on this topic is provided in this change record: <https://www.drupal.org/node/3034742>.**

Newer versions of Drupal core, starting with 8.4.0, are offering many improvements for content editors who want to keep track of all the changes to a piece of content over time, and maybe add a moderation workflow as well by using the Content Moderation module.

If you want to make the most out of these new features, you will need to make sure that your custom content entity types are revisionable and publishable. This guide describes the process of converting an existing entity type in detail, and it is split into two parts:

1\. You are building a new website and you want to have the correct entity definition right from the start  
2\. You are upgrading an existing website to Drupal 8.4.0 or newer and you want to convert your existing content entity types that already contain data