**Warning:** When installing Kickstart, the Edge connection settings are stored in Drupal’s configuration system which is not designed to store sensitive information. When installing Kickstart for uses other than local development, we highly recommend changing the Apigee Edge connection key provider to a more secure storage location. [Learn more](https://www.drupal.org/docs/8/modules/apigee-developer-portal-kickstart/apigee-kickstart-faqs#s-during-installation-a-warning-is-displayed-that-the-apigee-edge-connection-key-provider-is-not-considered-secure-what-should-i-do)

To download Drupal Core 9, the Apigee Developer Portal Kickstart profile, and all dependencies into the `MY_PROJECT` directory:

1. Execute the following command:  
\- For Drupal 9:  
`composer create-project apigee/devportal-kickstart-project:9.x-dev MY_PROJECT --no-interaction`  
Note that the _\-dev_ in the command above lets Composer know that we want to use the 9.x branch in the [devportal-kickstart-project-composer GitHub project](https://github.com/apigee/devportal-kickstart-project-composer) instead of a tag. It will always install the latest stable release of Drupal Core and the Kickstart distribution. See [Composer branch alias documentation](https://getcomposer.org/doc/articles/aliases.md#branch-alias) for more information.
2. The actual web root will be `MY_PROJECT/web`. Point your [web server](https://www.drupal.org/docs/develop/local-server-setup) to serve that directory.
3. Visit the site in a web browser, and you'll be redirected to `core/install.php`, where you can run the installer like any Drupal site installation. Running the installation via web browser is recommended for the best experience.
4. If you are installing Kickstart for use with a Monetization-enabled Apigee org and you are using the latest version of the `apigee/devportal-kickstart-project` in your main composer file, the installer prompts you to enable Monetization.  
   * If you enter connection details for a Monetization-enabled Apigee org and you are not prompted to enable Monetization, see [updating your main composer file](//www.drupal.org/docs/8/modules/apigee-developer-portal-kickstart/get-started-with-kickstart#s-updating-your-main-composer-file-to-use-drupalrecommended-project) to confirm you are using the latest version of Kickstart.  
   * If you are using your own composer file and you want to enable Monetization, use the following command to add `apigee_m10n` to your project before running the web base installer:  
   `composer require drupal/apigee_m10n drupal/commerce:"^2.16" --optimize-autoloader`  
   The “`--optimize-autoloader`” flag is optional in the above command.  
For more information on using the [Apigee Monetization](https://www.drupal.org/project/apigee%5Fm10n) module for Drupal with the Kickstart distribution, see [Enable Monetization](https://www.drupal.org/docs/8/modules/apigee-developer-portal-kickstart/enable-monetization).

**Note**: The `composer create-project` command shown above creates a main `composer.json` file that includes the Monetization and Commerce modules. If you are not using Monetization in your Kickstart portal, you can run the following command to remove these modules from the file:

`composer remove drupal/apigee_m10n drupal/commerce`