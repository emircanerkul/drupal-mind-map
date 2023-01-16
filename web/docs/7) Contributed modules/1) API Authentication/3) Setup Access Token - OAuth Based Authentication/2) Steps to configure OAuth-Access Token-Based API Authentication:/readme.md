* For better understanding, we will be taking an example of adding OAuth/Access Token-based authentication to the get user information API for Drupal.
* **Please note** that Drupal's get user information API is used to retrieve user information.

### Enable the API and assign methods and operations as follows:

* The first step is to enable the API and also assign methods and operations allowed on that particular API. This can be done using the REST UI module or you can simply modify the config.
* To enable the API using the **REST UI** module, click on the configure button of the REST UI module(as shown below)

![drupal rest api enable rest ui](https://www.drupal.org/files/drupal-rest-api-enable-rest-ui_0.png)

* Considering our example, we want to enable the **/user/{user}** API present under the **Content** section. Enable this API using the **Enable** option in front of it.

![drupal rest api enable user](https://www.drupal.org/files/drupal-rest-api-enable-user.png)

* Now, as our goal is to retrieve the node information, select the following configs:  
   * Method: **GET**  
   * Format: **json**  
   * Authentication provider: **rest\_api\_authentication.**
* This will allow the miniOrange REST API Authentication module to Authenticate your API. Click on the **Save Configuration** button to continue.

![drupal rest api select method](https://www.drupal.org/files/Drupal-rest-api-select-method_0.png)

### Setup OAuth/Access Token-Based API Authentication:

* In this step, we will set up OAuth/Access Token as an API Authentication  
 method. In order to do so, please navigate to the API Authentication tab of the REST API Authentication Module **(/admin/config/people/rest\_api\_authentication/auth\_settings)**  
   * Select the **Enable Authentication** checkbox and click on the **Save Settings** button.  
   * Below the Save Settings button select the **OAuth/Access Token** radio button.  
   * Now click on the **Generate a new Client ID & Secret** button.
* Keep the Client ID and Secret handy as it will be used later while authenticating the Get User Info API.

![drupal rest api generate new client id](https://www.drupal.org/files/drupal-rest-api-generate-new-client-id.png)

### Grant Drupal roles permission to view user information:

* If you require, you can also grant non-admin Drupal roles permission to view user information. You can do so by assigning Drupal roles to the **View User Information** permission from under the permission section **(/admin/people/permissions)** of your Drupal site.

![drupal rest api enable checkbox](https://www.drupal.org/files/drupal-rest-api-enable-checkbox.png)

**That’s it!!!**

Now let’s try to fetch user information through an API call using OAuth/Access Token for authentication