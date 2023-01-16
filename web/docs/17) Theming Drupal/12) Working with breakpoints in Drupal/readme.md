---
url: https://www.drupal.org/docs/theming-drupal/working-with-breakpoints-in-drupal
description: >-
  There is no user interface for editing breakpoints in Drupal 8. Due to the
  fact that breakpoints are defined in configuration files, it's not possible to
  provide a UI in contrib either. Breakpoints are used to separate the height or
  width of viewports (screens, printers, and other media output types) into
  steps and provide for the case where a responsive design adjusts in order to
  display correctly on different devices. The Breakpoints module standardizes
  the use of breakpoints and enables modules and themes to expose or use each
  others' breakpoints.
published_time: '2012-10-04T22:26:04+00:00'
modified_time: '2020-05-19T22:00:32+00:00'
---
_There is no user interface for editing breakpoints in Drupal 8\. Due to the fact that breakpoints are defined in configuration files, it's not possible to provide a UI in contrib either._

Breakpoints are used to separate the height or width of viewports (screens, printers, and other media output types) into steps and provide for the case where a [responsive design](/node/1322126) adjusts in order to display correctly on different devices. The Breakpoints module standardizes the use of breakpoints and enables modules and themes to expose or use each others' breakpoints. The Breakpoint module keeps track of the height, width, and resolution breakpoints.

<!-- note-warning -->
> WARNING: Please note that inputting your CSS breakpoints into your breakpoints.yml file is only necessary when Drupal needs to interact with the breakpoints as in the case of the Responsive Images module.