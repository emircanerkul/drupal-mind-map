---
url: >-
  https://www.drupal.org/docs/understanding-drupal/drupal-9-release-date-and-what-it-means/why-did-we-plan-to-release-drupal
description: >-
  With Drupal 8, we adopted semantic versioning. This allowed us to add new
  features in minor releases of Drupal 8 (such as Content Moderation being added
  to Drupal 8.2.0 and Layout Builder in 8.5.0) instead of waiting for major
  version releases. Changes in minor releases are always backwards-compatible
  with previous Drupal 8 releases. We could theoretically go on doing this
  however long we want, but Drupal also relies on third-party dependencies. In
  many cases, it is not possible to make third-party updates backwards
  compatible with earlier Drupal versions.
published_time: '2019-05-07T09:26:23+00:00'
modified_time: '2020-06-16T02:23:03+00:00'
---
With Drupal 8, we adopted [semantic versioning](https://semver.org/). This allowed us to add new features in minor releases of Drupal 8 (such as Content Moderation being added to Drupal 8.2.0 and Layout Builder in 8.5.0) instead of waiting for major version releases. Changes in minor releases are always backwards-compatible with previous Drupal 8 releases. We could theoretically go on doing this however long we want, but Drupal also relies on third-party dependencies.

In many cases, it is not possible to make third-party updates backwards compatible with earlier Drupal versions. Semantic versioning dictates that changes impacting backwards compatibility can only be implemented in major releases like Drupal 9 or 10.

Drupal has used third-party libraries for more than a decade (for example, the adoption of jQuery in Drupal 5), but not to the extent they are used in Drupal 8\. Libraries such as Symfony, Twig, CKEditor, Guzzle are fundamental components of Drupal 8's architecture. These dependencies eventually become outdated and unsupported, and Drupal must be updated to use newer, supported versions. If the updated dependencies impact backwards compatibility, they can only be added to Drupal in a new major release. For example, Drupal 8 uses Symfony 3 which will reach end of life in November 2021, and the update to Symfony 4 breaks backwards compatibility with Symfony 3.

With Drupal 9, we updated to Symfony 4.4\. Although [Symfony 3's end of life is November 2021](https://symfony.com/roadmap/3.4), we wanted to provide Drupal 8 users sufficient time to update and plan for Drupal 9's release on June 3, 2020\. Check out the [release cycle overview](https://www.drupal.org/core/release-cycle-overview) for more information.