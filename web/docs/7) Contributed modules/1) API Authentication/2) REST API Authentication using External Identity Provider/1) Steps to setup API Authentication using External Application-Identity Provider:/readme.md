* For better understanding, we will be taking an example of adding External Identity Provider based authentication to the Create User API for Drupal.
* **Please note** that the **/entity/user** API of Drupal is used to create a user in Drupal.

### Enable the API and assign methods and operations as follows:

* The first step is to enable the API and also assign methods and operations allowed on that particular API. This can be done using the **REST UI** module or you can simply modify the config.
* To enable the API using the REST UI module, click on the **Configure** button of the REST UI module(as shown below)

![drupal rest api ui configure](https://www.drupal.org/files/drupal-rest-ui-configure_2.png)

* Considering our example, we have to enable the **/entity/user** API present under the User. Enable this API by clicking on the Enable option in front of it.

![drupal rest api enable user node](https://www.drupal.org/files/drupal-rest-api-enable-user-node_0.png)

* Now, as our goal is to retrieve the node information, select the following configs:  
   * Method: **GET**  
   * Format: **json**  
   * Authentication provider: **rest\_api\_authentication.**
* This will allow the miniOrange REST API Authentication module to Authenticate your API. Click on the Save Configuration button to continue.

![drupal rest api select method and format](https://www.drupal.org/files/Drupal-rest-api-select-method-and-formats_2.png)

### Drupal REST API Authentication module configuration:

* In this step, we will set up **External Identity Provider** as an API Authentication  
 method. In order to do so, please navigate to the API Authentication tab of the REST API Authentication Module **(/admin/config/people/rest\_api\_authentication/auth\_settings)**  
   * Select the **Enable Authentication** checkbox and click on **Save Settings.**  
   * Below the **Save Settings** button, select the External Identity Provider radio button.  
   * In the User Info Endpoint text field, enter the user info endpoint of your Identity Provider so the module can fetch the user’s information using the provided token.  
   * Also, in the Username Attribute enter the attribute key/name of your Identity Provider in which the external provider is sending the username.

![drupal rest api select access token](https://www.drupal.org/files/drupal-rest-api-select-external-authentication_0.png)

### Grant Drupal roles permission to create a user in Drupal: 

* If you require, you can also grant non-admin Drupal roles permission to create a user in Drupal. You can do so by assigning Drupal roles to the **Administer users** permission from under the permission section (/admin/people/permissions) of your Drupal site.

![drupal rest api view information](https://www.drupal.org/files/drupal-rest-api-admin-user-info.png)

**That’s it!!!**

* Now let’s try to create a user in Drupal through an API call using an External Identity Provider for authentication.