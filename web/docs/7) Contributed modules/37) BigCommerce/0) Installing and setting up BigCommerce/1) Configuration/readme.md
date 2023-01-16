In order to configure the BigCommerce module you need to have:

* An account on [BigCommerce](https://bigcommerce.com) and have created an API account on the service. API details are typically downloaded as text file when you create the API account on the Bigcommerce website. The API details you will need are:  
   * API Path of your BigCommerce store, for example: `https://api.bigcommerce.com/stores/i81ynkycaa/v3/`  
   * Client ID: this will a long string of letters and numbers.  
   * Client Secret: this will a long string of letters and numbers.  
   * Access Token: this will a long string of letters and numbers.
* A [Commerce store](https://docs.drupalcommerce.org/commerce2/user-guide/setting-up-store) configured on your site

The API details are stored in Drupal configuration and can be saved by visiting `admin/commerce/config/bigcommerce/settings` on your site.

Once your configuration is complete you are ready to import products from BigCommerce to your Drupal site.

Using checkout requires your Drupal site to using https and have a valid SSL certificate.