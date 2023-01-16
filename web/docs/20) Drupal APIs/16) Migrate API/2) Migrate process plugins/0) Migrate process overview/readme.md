---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-process-overview
description: >-
  The process key of a migration describes, property-by-property, how the
  destination is to be constructed from the source data. The value of the
  process key is an associative array, where each key is a destination property.
  The values associated with each key describe how the destination value is
  created. Core supports the most common cases with shorthands. Less common
  cases with a more verbose syntax and what can not be expressed in this way can
  be coded in a custom process plugin.
published_time: '2013-11-07T02:23:59+00:00'
modified_time: '2022-11-14T18:54:03+00:00'
---
The `process` key of a migration describes, property-by-property, how the destination is to be constructed from the source data. The value of the process key is an associative array, where each key is a destination property. The values associated with each key describe how the destination value is created. Core supports the most common cases with shorthands. Less common cases with a more verbose syntax and what can not be expressed in this way can be coded in a custom process plugin.

The contributed [Migrate Sandbox](http://drupal.org/project/migrate%5Fsandbox) module offers a UI for experimenting with process plugins and the process pipeline without running real migrations. It may be a helpful tool when working through this guide.