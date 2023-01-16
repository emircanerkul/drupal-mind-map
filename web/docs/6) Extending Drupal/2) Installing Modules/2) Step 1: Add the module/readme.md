### If Drupal core module, go to step 2

If the module you want to install is part of Drupal core you can skip ahead to the next step. To find out if it's in core, go to site's /admin/modules page. Core modules are already included so don't need to be added.

### Several ways to add modules

The recommended way of installing a module is with [Composer](https://www.drupal.org/docs/user%5Fguide/en/install-composer.html), especially for modules that have dependencies.

For those who can't yet use Composer on your site (such as shared host), you can simulate Composer using [Ludwig](https://www.drupal.org/project/ludwig) for those (few) modules that offer Ludwig.

In addition, you can install by [manually downloading the .zip or .tar.gz file](https://www.drupal.org/docs/user%5Fguide/en/extend-manual-install.html "11.6. Manually Downloading Module or Theme Files | Drupal 8 User Guide guide on Drupal.org"). This only works for modules that don't have dependencies.

### Add a module with Composer

To install a contributed module along with its dependencies, go to the project page (for example <https://www.drupal.org/project/geofield>) and copy the Composer command under "Releases":

`composer require drupal/geofield`

Run the command from your command line. Once the command is complete you should see a message indicating the module has been added to your project's _composer.json_ file as a dependency and the related code has been downloaded.

For more information, and a video demonstration, see: [Using Composer to Download and Update Files](https://www.drupal.org/docs/user%5Fguide/en/install-composer.html#using-composer-to-download-a-module-or-theme "3.5. Using Composer to Download and Update Files | Drupal 8 User Guide guide on Drupal.org"), and [Downloading contributed modules and themes using Composer](https://www.drupal.org/docs/develop/using-composer/using-composer-to-install-drupal-and-manage-dependencies#adding-modules "Using Composer to Install Drupal and Manage Dependencies | Develop guide on Drupal.org")

### Add a module using Drupal's User Interface

An alternative way of installing a module is to click on the latest release on the module's page, for example <https://www.drupal.org/project/file%5Freplace/releases/8.x-1.3>. Then copy the "tar.gz" link under the "Alternative installation files", and paste that link on your site at /admin/modules/install in the URL box and press Install. Now skip to the next step.

For more detailed instruction, see [Downloading and Installing a Module from Drupal.org](https://www.drupal.org/docs/user%5Fguide/en/extend-module-install.html).

### Add a module with Ludwig

For those who can't yet use Composer on your site (such as shared host), you can simulate Composer using [Ludwig](https://www.drupal.org/project/ludwig) for those (few) modules that offer Ludwig. This is not a recommended way and it's not available for all modules, but for some modules and for some situations like shared hosts or local windows, it's handy. Here's an [example](https://www.drupal.org/project/phpmailer%5Fsmtp/issues/3133980#comment-13613134).