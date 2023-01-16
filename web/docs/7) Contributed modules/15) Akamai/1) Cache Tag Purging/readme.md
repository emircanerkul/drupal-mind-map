---
url: https://www.drupal.org/docs/contributed-modules/akamai/cache-tag-purging
description: >-
  This module provides a Drupal 8 service to interact with the Akamai Content
  Control Utility. While the service can be used by developers in isolation,
  most users should install the Purge module. Purge will take care of
  invalidating caches automatically when content is updated. Cache Tag Blacklist
  Numerous cache tags are attached to any given page and queued for expiration
  when changes are made to that page. Below is a cache tag blacklist to get
  started to limit Akamai purge requests to node changes.
published_time: '2021-10-19T18:44:30+00:00'
modified_time: '2021-10-19T19:10:36+00:00'
---
This module provides a Drupal 8 service to interact with the [Akamai Content Control Utility](https://developer.akamai.com/api/purge/ccu/overview.html).

While the service can be used by developers in isolation, most users should install the [Purge](http://drupal.org/project/purge) module. Purge will take care of invalidating caches automatically when content is updated.

**Cache Tag Blacklist**

Numerous cache tags are attached to any given page and queued for expiration when changes are made to that page.

Below is a cache tag blacklist to get started to limit Akamai purge requests to node changes.

```php
4xx-response
theme_registry
route_match
routes
config:
node_list
user
migration_
local_
entity_
workflow_
element_
contextual_links_
link_relation_
content_moderation_
webform_submission_list
redirect_list
```