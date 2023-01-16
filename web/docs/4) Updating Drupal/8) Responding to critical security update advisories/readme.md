---
url: >-
  https://www.drupal.org/docs/updating-drupal/responding-to-critical-security-update-advisories
description: >-
  As of Drupal 9.3.0, highly critical security advisories (similar to
  PSA-2019-02-19) will be displayed on Drupal administration pages. When an
  advisory is released, site owners should review their sites to verify that the
  latest releases are installed and that the site is in a good state to quickly
  update once the fixes are provided to the community. Most security advisories
  are not classified as highly critical, so they will not be displayed within
  Drupal. View the Security Advisories listing page to see all current security
  advisories and learn how to stay informed on advisories.
published_time: '2021-03-15T19:28:57+00:00'
modified_time: '2021-04-21T19:52:59+00:00'
---
As of Drupal 9.3.0, highly critical security advisories (similar to [PSA-2019-02-19](https://www.drupal.org/psa-2019-02-19)) will be displayed on Drupal administration pages.

When an advisory is released, site owners should review their sites to verify that the latest releases are installed and that the site is in a good state to quickly update once the fixes are provided to the community.

Most security advisories are not classified as highly critical, so they will not be displayed within Drupal. View the [Security Advisories listing page](https://www.drupal.org/security) to see all current security advisories and learn how to stay informed on advisories. 

To learn about security advisories, read the [Security advisory process and permissions policy](https://www.drupal.org/drupal-security-team/security-advisory-process-and-permissions-policy).

### Sites running development snapshots

Drupal cannot determine whether a necessary security fix has been installed if the site is using a development snapshot of a project (either of Drupal core or a contributed project). For this reason, sites running development versions may see advisories for security issues that will not affect their site. It is the site owner's responsibility to read these advisories to determine whether they should upgrade the relevant projects.

### Drupal.org JSON advisories feed

Drupal relies on a JSON feed for security advisories. This feed is used by Drupal core and the [Automatic Updates contributed module](https://www.drupal.org/project/automatic%5Fupdates) to display advisories. It is supported by the infrastructure of Drupal.org and funded by the activities of the Drupal Association. Its canonical URL is <https://updates.drupal.org/psa.json>.

The feed includes a list of currently-active PSAs with the following details:

* `title`: The title of the security advisory.
* `link`: The URL to the full security advisory on Drupal.org.
* `project`: The short name of the project the security advisory is for.
* `type`: The type of the project the security advisory is for, such as `core`, `module`, `theme`, `distribution`, etc.
* `is_psa`: A flag which indicates that the post is a public service announcement, and not another kind of security advisory.
* `insecure`: List of versions of the affected project that are _currently_ considered insecure. For public service announcements which are tied to particular release, this does _not_ indicate which versions will be marked as insecure. This list will be updated after the security release is published, to also include insecure versions.
* `pubDate`: The date the security advisory was published.

For example, if [Drupal 7 and 8 release on May 8th, 2019 - PSA-2019-05-07](https://www.drupal.org/psa-2019-05-07) and [Various 3rd Party Vulnerabilities - PSA-2019-09-04](https://www.drupal.org/psa-2019-09-04) were included in `psa.json`, the feed would include the following:

```php
[
   {
      "title" : "Drupal 7 and 8 release on May 8th, 2019 - PSA-2019-05-07",
      "insecure" : [
         "4.7.0-beta3",
         …
         "8.7.0-rc1",
         "8.7.0",
         "8.7.4"
      ],
      "link" : "https://www.drupal.org/psa-2019-05-07",
      "pubDate" : "2019-09-20T22:09:16+00:00",
      "project" : "drupal",
      "type" : "core",
      "is_psa" : "1"
   },
   {
      "project" : "securitydrupalorg",
      "pubDate" : "2019-09-12T21:35:55+00:00",
      "is_psa" : "1",
      "type" : "module",
      "insecure" : [],
      "title" : "Various 3rd Party Vulnerabilities - PSA-2019-09-04",
      "link" : "https://www.drupal.org/psa-2019-09-04"
   }
]
```