---
url: https://www.drupal.org/docs/contributed-themes/uikit/getting-started
description: >-
  UIkit for Drupal does not come with the required UIkit framework files
  because, in general, 3rd party libraries and content are forbidden from being
  committed to a repository for projects hosted on drupal.org. We instead use
  cdnjs.com to retrieve the UIkit library. This also makes the footprint of our
  repository smaller. Simply follow the instructions below to get started with
  using UIkit for Drupal. Download UIkit First of all you need to download UIkit
  for Drupal.
published_time: '2017-05-29T20:56:17+00:00'
modified_time: '2019-02-18T21:54:05+00:00'
---
UIkit for Drupal does not come with the required UIkit framework files because, in general, [3rd party libraries and content are forbidden](https://www.drupal.org/node/422996) from being committed to a repository for projects hosted on drupal.org. We instead use [cdnjs.com](https://cdnjs.com/) to retrieve the [UIkit library](https://cdnjs.com/libraries/uikit).

This also makes the footprint of our repository smaller. Simply follow the instructions below to get started with using UIkit for Drupal.

### Download UIkit

First of all you need to download UIkit for Drupal. There are three ways to do this:

* use **composer require drupal/uikit** (recommended)
* direct download from drupal.org project page (also recommended)
* cloning repository from git.drupal.org (for theme developers)

Please read the [Installing themes](https://www.drupal.org/docs/7/extending-drupal/installing-themes) article before installing UIkit for Drupal. We only provide the download methods below, not how to install themes.

#### via drupal.org (recommended for site administrators)

The recommended way to get UIkit is by visiting [drupal.org](https://www.drupal.org/project/uikit). Towards the bottom of the page are the download links for the various versions of the packaged theme.

#### via Composer (recommended for site administrators comfortable with Composer)

Drush is deprecated so please use the following composer command to download UIkit.

`composer require drupal/uikit`

Information on Composer can be found [here](https://www.drupal.org/node/2718229#managing-contributed).

#### via git.drupal.org (recomended for theme developers only)

Use the following Git command to download from one of the development branches. This will ensure you get the latest commited development release.

`git clone --branch 8.x-2.x https://git.drupal.org/project/uikit.git`

`git clone --branch 8.x-3.x https://git.drupal.org/project/uikit.git`