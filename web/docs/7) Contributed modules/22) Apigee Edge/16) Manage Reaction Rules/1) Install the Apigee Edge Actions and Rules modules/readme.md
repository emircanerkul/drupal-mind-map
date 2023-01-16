This module must be installed on a Drupal site that is managed by Composer. Drupal.org has documentation on how to [use Composer to manage Drupal site dependencies](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies) to get you started quickly.

Before you begin, confirm that you have the Apigee Edge module installed, as Apigee Edge Actions is a submodule of Apigee Edge.

To get started with Apigee Edge Actions:

1. Install the Rules module using [Composer](https://getcomposer.org/). Composer will download the module and its dependencies.  
**Note**: Composer must be executed at the root of your Drupal installation.  
**Note:** The Apigee Edge Actions module is currently compatible with Rules up to version 3.0.0-alpha5.  
`cd /path/to/drupal/root`  
`composer require drupal/rules:3.0.0-alpha5`
2. Choose **Extend** in the Drupal administration menu.
3. Select the **Apigee Edge Actions** module from the Apigee (Experimental) menu.
4. Click **Install**.