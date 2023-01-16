---
url: >-
  https://www.drupal.org/docs/installing-drupal/step-2-install-dependencies-with-composer
description: >-
  This step is needed only if you have installed (or updated) the codebase using
  git. If you do not have composer installed, see the official composer
  installation instructions. In order to get a working codebase, you need to run
  composer install --no-dev from the top level of the repository. This will
  install Symfony and other packages required by Drupal in the vendor/
  directory.
published_time: '2017-04-25T02:52:06+00:00'
modified_time: '2020-06-07T23:42:58+00:00'
---
<!-- note-warning -->
> WARNING: This step is needed only if you have installed (or updated) the codebase using git.

If you do not have composer installed, see the official [composer installation instructions](https://getcomposer.org/download/).

In order to get a working codebase, you need to run `composer install --no-dev` from the top level of the repository. This will install Symfony and other packages required by Drupal in the `vendor/` directory.

If you skip this step, then you are likely to see an error message like this when you try to run the installer:

> `Warning: require(.../drupal/vendor/autoload.php): failed to open stream: No such file or directory in .../drupal/autoload.php on line 14`

It is important to include the `--no-dev` option when installing packages for your production server. Some packages, such as `phpunit/*`, are inherently insecure and should never be installed on the production server. If you are installing Drupal on a local or development server, and you want to install development packages, then leave off the `--no-dev` option.

You may also add the `-o` option, to generate optimized autoload files. For a complete list of options for the `composer install` subcommand, use `composer help install`.