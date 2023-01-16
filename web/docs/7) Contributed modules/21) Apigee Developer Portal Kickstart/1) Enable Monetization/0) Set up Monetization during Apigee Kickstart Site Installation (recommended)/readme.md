Follow the [Installation instructions](https://www.drupal.org/docs/8/modules/apigee-developer-portal-kickstart/get-started-with-kickstart#s-installation-instructions) to install the Apigee Kickstart profile and set up your web server.

If you enter connection details for a Monetization-enabled Apigee org and you are using the latest version of the `apigee/devportal-kickstart-project` in your main composer file, the installer prompts you to:

1. **Enable Monetization.**
2. **Enable Add Credit module** (visible after checking **Enable Monetization**) or proceed to Step 3\. If you check **Enable Add Credit module,** you are prompted to:  
   * Configure the Drupal Commerce Store name, email, and address  
   * Create an "Add Credit" product for supported currencies  
   * Create a test payment gateway
3. Complete the installation.

If you check **Enable Monetization**, the installer:

* Configures the connection to Apigee Edge
* Installs the Apigee Monetization module with the Kickstart custom theme, including:  
   * A _Pricing and Plans_ page to display available rate plans  
   * _Rate Plan_ detail pages for each rate plan  
   * A _Balance and Plans_ tab, for viewing and managing prepaid balances, purchased plans, and billing details

If you also check **Enable Add Credit module**, the installer:

* Installs the Apigee Monetization Add Credit (submodule)
* Installs the Drupal Commerce module and its dependencies
* Creates the "Add credit" Commerce entities preconfigured to work with the Apigee Monetization Add Credit module and the Apigee Kickstart custom theme.
* Creates Drupal Commerce products for each supported currency selected during installation
* Configures the Drupal Commerce Store
* Customizes Drupal Commerce Views for a Kickstart-themed checkout experience.

Once the installation completes, perform these steps to complete your Monetization set up:

1. Review your products and settings, and adjust as needed.
2. [Set up a payment gateway](https://www.drupal.org/docs/8/modules/apigee-monetization/manage-payment-gateways).
3. Review the [Apigee Monetization documentation](https://www.drupal.org/docs/8/modules/apigee-monetization) for additional options and features, including [enabling recurring payments](https://www.drupal.org/docs/contributed-modules/apigee-monetization/enable-recurring-payments) for prepaid developers.