* For better understanding, we will be taking an example of adding JWT-based authentication to create a basic page in Drupal using the **/node** API.

### Enable the API and assign methods and operations as follows:

* The first step is to enable the API and also assign methods and operations allowed on that particular API. This can be done using the REST UI module or you can simply modify the config.
* To enable the API using the **REST UI** module, click on the configure button of the REST UI module(as shown below)

![drupal rest ui](https://www.drupal.org/files/drupal-rest-ui-configure.png)

* Considering our example, we want to enable the /node API present under the content section. Enable this API using the Enable option in front of it.

![drupal rest api enable node](https://www.drupal.org/files/drupal-rest-api-enable-GET-node.png)

* Now, as our goal is to retrieve the node information, select the following configs:  
   * Method: **GET**  
   * Format: **json**  
   * Authentication provider: **rest\_api\_authentication.**
* This will allow the miniOrange REST API Authentication module to Authenticate your API. Click on the **Save Configuration** button to continue.

![drupal rest api select method](https://www.drupal.org/files/Drupal-rest-api-select-method-and-formats.png)

### Setup JWT-Based API Authentication:

* In this step, we will set up JWT as an API Authentication method. In order to do so, please navigate to the **API Authentication** tab of the REST API Authentication Module (**/admin/config/people/rest\_api\_authentication/auth\_settings**)  
   * Select the **Enable Authentication** checkbox and click on Save Settings.  
   * Below the Save Settings button select the **JWT** radio button.
* If you wish to use an externally created JWT token for authentication, you can do so by configuring the below options:  
   * In the **Username Attribute** text field, enter the attribute name in which your username will get received.  
   * If you wish to use an external JWT token, you can also provide the JWKS URI to validate that JWT token in Drupal.

![drupal rest api jwt token](https://www.drupal.org/files/Drupal-rest-api-select-jwt-token-and-username-attribute.png)

### Grant permissions to Drupal roles to create a page:

* If you require, you can also grant non-admin Drupal roles permission to create a basic page. You can do so by assigning Drupal roles to the **Basic page: Create new content** permission from under the permission section (**/admin/people/permissions**) of your Drupal site.

![drupal rest api enable content editor](https://www.drupal.org/files/Drupal-rest-api-enable-content-editor-checkbox.png)

**That’s it!!!**

Now let’s try to create a basic page through an API call using JWT for authentication.