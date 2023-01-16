---
url: https://www.drupal.org/docs/contributed-themes/bs-base/theme-development
description: >-
  How to create a new child theme, develop SASS code and explaining update
  workflow and maintenance. Interested to find out which version of SASS you are
  using? Just execute the next command from your custom theme: npx node -e
  'console.log(require("node-sass").info)' node-sass 4.11.0 (Wrapper)
  [JavaScript] libsass 3.5.4 (Sass Compiler) [C/C++] You do not need a running
  Drupal instance (with a database) in order to use drush create and update
  commands.
published_time: '2019-07-19T09:48:31+00:00'
modified_time: '2022-10-30T11:19:50+00:00'
---
How to create a new child theme, develop SASS code and explaining update workflow and maintenance.

<!-- note-tip -->
> TIP: Interested to find out which version of SASS you are using?&nbsp;Just execute the next command from your custom theme:
npx node -e 'console.log(require("node-sass").info)'
node-sass	4.11.0	(Wrapper)	[JavaScript]
libsass  	3.5.4	(Sass Compiler)	[C/C++]

<!-- note-tip -->
> TIP: You do not need a running Drupal instance (with a database) in order to use drush create and update commands. However if you do not have a running Drupal instance then you will need to add next symbolic link to your .drush home folder:
ln -s /path/to/project/web/themes/contrib/bs_base/bs_base.drush.inc ~/.drush/bs_base.drush.inc