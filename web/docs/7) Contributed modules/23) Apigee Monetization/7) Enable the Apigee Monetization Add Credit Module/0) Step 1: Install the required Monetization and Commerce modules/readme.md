Ensure that you have installed the Apigee Monetization module, as described in [Install the Apigee Monetization module](https://www.drupal.org/docs/8/modules/apigee-monetization/install-the-apigee-monetization-module).

In addition, you will need to install the Drupal Commerce module to provide the dependencies needed for the Apigee Monetization Add Credit module. The Apigee Monetization Add Credit module is included in the Apigee Monetization module, but will need to be installed, as described below.

1. Install the Drupal Commerce module using Composer. **Note:** Composer must be executed at the root of your Drupal installation. For example:  
cd path/to/drupal/root  
composer require drupal/commerce
2. Select **Extend** in the Drupal administration menu.
3. Scroll to the **Apigee** section of the page.
4. Select **Apigee Monetization Add Credit**.
5. Click **Install**.
6. When prompted to install Drupal Commerce modules required as dependencies, click **Continue**.