---
url: >-
  https://www.drupal.org/docs/8/themes/bs-base/theme-development/updating-existing-child-theme
description: >-
  Besides maintaining your custom child theme code you need to be sure that your
  theme is updated against the latest changes in parent themes. This changes can
  be minor ones like bug fixes, update to latest minor Bootstrap version, etc or
  bigger ones like new features, refactoring changes, update to major Bootstrap
  release, etc. Tracking of all these changes in your child theme is hard,
  error-prone and time-consuming. Additionally, you could have your own custom
  bs_base base theme and a number of client child themes.
published_time: '2019-01-15T09:33:43+00:00'
modified_time: '2019-08-22T20:46:56+00:00'
---
Besides maintaining your custom child theme code you need to be sure that your theme is updated against the latest changes in parent themes. This changes can be minor ones like bug fixes, update to latest minor Bootstrap version, etc or bigger ones like new features, refactoring changes, update to major Bootstrap release, etc. Tracking of all these changes in your child theme is hard, error-prone and time-consuming. Additionally, you could have your own custom bs\_base base theme and a number of client child themes. Manually maintaining all this and tracking changes is a very difficult job and bs\_base themes offer tools and workflows to help you with this.

We discussed part of this tools and workflows in [Creating a new child theme](https://www.drupal.org/docs/8/themes/bs-base/creating-a-new-child-theme) chapter where we talked about drush bs-theme-create command, SASS organization and inheritance concepts and SASS import flat structure concept. Based on these concepts we built drush update command that can greatly help you with the tasks of tracking various changes when updating parent themes.

To update your demo\_theme child theme you execute next drush command:

```php
drush bs-theme-update demo_theme
```

The update drush command will do two important things

1. Check all SASS code in parent themes and detect any new SASS files or partial SASS files in parent themes that are missing in a child theme. All the new SASS files will be added to the child theme and any new SASS partial that is missing in existing child SASS files will be injected into existing child SASS files. Command will then re-compile SASS files and generate updated CSS files.
2. Execute any new update hook in any parent theme. Bs\_base update theme hooks are not the standard Drupal API but additional API that bs\_base is offering you. They exist to help you cover complex update procedures. We will cover this topic in more details in [the separate chapter](https://www.drupal.org/docs/8/themes/bs-base/theme-update-hooks).

<!-- note-warning -->
> WARNING: Remember, we're in -alpha, things can fail, and we're happy if you file issues for us.

<!-- note-version -->
> VERSION: Bootstrap Updates (fe. alpha-6)
When we bump the Bootstrap version, the composer.json of your drupal project has to be updated too.