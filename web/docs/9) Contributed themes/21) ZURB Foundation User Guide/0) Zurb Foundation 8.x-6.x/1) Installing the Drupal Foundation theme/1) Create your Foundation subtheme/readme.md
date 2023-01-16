### Drink the Composer cool-aid

It's made abundantly clear on Drupal.org and in countless blogs, conferences and Meetups that [Composer](https://getcomposer.org/download/) is the recommended way to install and manage Drupal modules and themes.

These instructions assume you have created your D8 site using [one of the regular composer commands](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies) and/or your Drupal app (core, modules and theme) are in a _web/_ or _public\_html/_ subfolder. Hopefully, these instructions can give you guidance if you've created your Composer D8 project differently.

You can use Composer to install three flavours of the Drupal ZURB Foundation theme.

#### Install the Foundation for Sites 6 alpha release (D8F6)

We're already using this alpha release on multiple production sites\*. Use the following command at the root of your project:

```php
composer require drupal/zurb_foundation:^6.0
```

#### Install the Foundation for Sites 6 dev branch

Get the very latest theme, including the very latest improvements (not recommended for production):

```php
composer require drupal/zurb_foundation:6.x-dev
```

#### Install the Foundation for Sites 5 branch

If you'd like to use [Foundation for Sites version 5](https://foundation.zurb.com/sites/docs/v/5.5.3/), we have a branch for that too, currently in beta:

```php
composer require drupal/zurb_foundation:^5.0
```

### Install using drush

Don't want to use Composer? You can install using drush.Change directory to the root of your Drupal project (or wherever drush can be run from) and download ZURB Foundation.

```php
drush dl --select zurb_foundation
```

Type a number to pick a version.

Enable the Foundation theme.

Using Drush 9?

```php
drush then zurb_foundation
```

Using Drush 8?

```php
drush en zurb_foundation -y
```

### Manual install

Don't want to do any command line? Then here is how to use the install package.

1. Log into your Drupal 8 administrative backend
2. Go to _Appearance_ and click the **\+ Install new theme** button
3. Install the ZURB Foundation theme  
   * Copy and paste the URL of the install package you'd like to install into the Install from a URL field, or  
   * Download the .zip or .tar.gz file to your local computer and upload it to the Upload a module or theme archive to install field
4. Click **Install**
5. Enable your theme