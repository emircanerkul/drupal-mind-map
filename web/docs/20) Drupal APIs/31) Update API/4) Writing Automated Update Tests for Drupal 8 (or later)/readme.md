---
url: >-
  https://www.drupal.org/docs/drupal-apis/update-api/writing-automated-update-tests-for-drupal-8-or-later
description: >-
  If your module is making a data model change related to configuration, then
  you need to properly update your data model (as described on child pages
  linked to from that page). You'll also need to test your update, to verify
  that it is working correctly. You can test it manually, but it is also a good
  idea (and required in Core development) to write an automated upgrade test for
  your change. This page describes how to do that. Outline of the steps The
  basic idea of an automated test for an update is: Make a test class that
  extends \Drupal\FunctionalTests\Update\UpdatePathTestBase.
published_time: '2015-07-20T16:30:09+00:00'
modified_time: '2022-08-21T05:05:49+00:00'
---
If your module is making a [data model change related to configuration](https://www.drupal.org/node/2535316), then you need to properly update your data model (as described on child pages linked to from that page).

You'll also need to test your update, to verify that it is working correctly. You can [test it manually](https://www.drupal.org/docs/8/api/update-api/introduction-to-update-api-for-drupal-8#manual-tests), but it is also a good idea (and required in Core development) to write an automated upgrade test for your change. This page describes how to do that.