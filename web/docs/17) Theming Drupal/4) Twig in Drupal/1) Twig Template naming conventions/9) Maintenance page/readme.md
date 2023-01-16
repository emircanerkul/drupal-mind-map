Pattern: _maintenance-page--\[offline\].html.twig_  
Base template: _maintenance-page.html.twig_ (base location: core/modules/system/templates/maintenance-page.html.twig)

This applies when the database fails. Useful for presenting a friendlier page without error messages. [Theming the maintenance page](/node/195435) must be properly setup first.

See the [maintenance-page.html.twig API documentation](https://api.drupal.org/api/drupal/core!modules!system!templates!maintenance-page.html.twig/8).

Please note that the maintenance-page--offline.html.twig file is currently not rendering when the database is unavailable. Issue being tracked: [#2720109: maintenance-page--offline.html.twig is not picked up when system is offline ](https://www.drupal.org/project/drupal/issues/2720109 "Status: Needs work").