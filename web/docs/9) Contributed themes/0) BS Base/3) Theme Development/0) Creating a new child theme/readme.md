---
url: >-
  https://www.drupal.org/docs/8/themes/bs-base/theme-development/creating-a-new-child-theme
description: >-
  You will start by executing next drush ( version 8 only, version 9+ are not
  supported for now [#3071090]) command in your custom Drupal project drush
  bs-theme-create bs_bootstrap demo_theme 'Demo Theme' 'This is a Demo Theme.'
  This will create a new `demo_theme` in `themes/custom/demo_theme` project
  folder, as a child theme of `bs_bootstrap` base theme. It will also download
  all needed dependencies needed for gulp compilation and finally compile theme
  CSS code.
published_time: '2019-01-14T17:56:23+00:00'
modified_time: '2021-04-16T08:51:17+00:00'
---
You will start by executing next drush ( version 8 only, version 9+ are not supported for now [#3071090: Add drush 9 generator support for bs\_base](https://www.drupal.org/project/bs%5Flib/issues/3071090 "Status: Closed (fixed)")) command in your custom Drupal project

```php
drush bs-theme-create bs_bootstrap demo_theme 'Demo Theme' 'This is a Demo Theme.'
```

This will create a new \`demo\_theme\` in \`themes/custom/demo\_theme\` project folder, as a child theme of \`bs\_bootstrap\` base theme. It will also download all needed dependencies needed for gulp compilation and finally compile theme CSS code.

The format of the command is:

```php
drush bs-theme-create <parent-machine-name> <child-machine-name> <child-name> <child-description>
```

<!-- note-tip -->
> TIP: Note that you do not need to base your custom theme on `bs_base` or `bs_bootstrap`. You are free to create your own custom base theme based on `bs_bootstrap` and then create custom client project themes from your custom base theme with the same command.

Make sure that you downloaded and installed bs\_lib contributed module and install all needed libraries that that module requires. This module provides a component library definition for Bootstrap 4\. Also, this module adds a couple of enhancements ('Bootstrap navigation bar toggler button' block and 'Scroll to top' block) which you will probably want to use.

Your custom theme is already ready to be used, go enable it and take a look. It does not look that great, right? However, this is done on purpose because we wanted to offer more base/construction/sketchy visual feeling out of the box so our clients know that they are not limited out of the box with some specific design implementation.

Lets first check our main theme file \`demo\_theme.info.yml\`. Everything is standard here except libraries-override key which requires more explanation. Most of the time child themes will load all CSS files from base themes and other contributed modules and then add additional CSS code that overrides inherited CSS code. This is not the case with bs\_base child themes. Here instead of loading various CSS files from base themes and contrib modules we will actually override these CSS files with our own versions. This produces less CSS code and makes it easier to override inherited CSS rules.

Now let us check 4 files that are laying a foundation for the custom Gulp workflow process. These files are \`gulp-options.yml\`, \`gulp-tasks.js\`, \`gulpfile.js\` and \`package.json\`.