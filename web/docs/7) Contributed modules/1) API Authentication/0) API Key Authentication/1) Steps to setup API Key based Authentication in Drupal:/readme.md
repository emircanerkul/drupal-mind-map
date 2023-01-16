* For better understanding, we will be taking an example of adding API Key-based authentication to the Create User API for Drupal.
* **Please note** that the **/entity/user** API of Drupal is used to create a user in Drupal.

### Enable the API and assign methods and operations as follows:

* The first step is to enable the API and also assign methods and operations allowed on that particular API. This can be done using the REST UI module or you can simply modify the config.
* To enable the API using the **REST UI** module, click on the configure button of the REST UI module(as shown below)

![drupal rest api configre UI module](https://www.drupal.org/files/drupal-rest-ui-configure_1.png)

* Considering our example, we have to enable the **/entity/user** API. **Enable** this API using the Enable option in front of it.

![drupal rest api enable user node](https://www.drupal.org/files/drupal-rest-api-enable-user-node.png)

* Now, as our goal is to retrieve the node information, select the following configs:  
   * Method: **GET**  
   * Format: **json**  
   * Authentication provider: **rest\_api\_authentication.**
* This will allow the miniOrange REST API Authentication module to Authenticate your API. Click on the **Save Configuration** button to continue.

![drupal rest api select method and formats](https://www.drupal.org/files/Drupal-rest-api-select-method-and-formats_1.png)

### Create an API Key user field in Drupal:

In this step, we will set up how the API key is used to authenticate the API calls. In order to do so, first we need to create a User Attribute field for storing an API key.

* Navigate to the manage field **(/admin/config/people/accounts/fields)** tab of Drupal.
* To add the field, click on the **Add field** button.

![drupal rest api manage feilds](https://www.drupal.org/files/drupal-rest-api-manage-feilds.png)

* Now from the **Add a new field** dropdown, select the **Text (Plain)** option and enter **API Key** in the label textfield. Now, click on the **Save and continue** button to save your settings.
* Please ensure that the machine name of the user attribute should be **field\_api\_key.**

![drupal rest api add new feild](https://www.drupal.org/files/drupal-add-new-field.png)

* Now proceed with clicking on the **Save field settings** and then on the **Save Settings** button to complete the field creation.

![drupal save fields](https://www.drupal.org/files/drupal-save-fields.png)

![drupal rest api key settings](https://www.drupal.org/files/drupal-api-key-settings.png)

* You can now see an additional API Key textfield present in your user profile.

### Setup API Key based Authentication:

* In this step, we will generate an API Key, in order to do so please navigate to the API Authentication tab of the REST API Authentication Module. **(/admin/config/people/rest\_api\_authentication/auth\_settings)**
* Select the **Enable Authentication** checkbox and click on **Save Settings**.
* For enabling the API Key-Based Authentication, select the **API Key** radio button.
* In the same screen, you can generate the API key for a particular user or you can generate the API key for all the users at once.
* Right now we will generate the API key for a single user only.
* In the **Enter username** text field, enter the username for which you want to generate the API key and click on the **Generate API key** **for this user** button.
* You can now view the generated API Key from the API Key field of your user profile.

![drupal api create key](https://www.drupal.org/files/drupal-rest-api-create-key.png)

* Keep the API key handy as it will be used later while authenticating the API.

### Grant Drupal roles permission to create a user in Drupal:

* If you require, you can also grant non-admin Drupal roles permission to create a user in Drupal. You can do so by assigning Drupal roles to the **Administer users** permission from under the permission section (/admin/people/permissions) of your Drupal site.

![drupal rest api admin userinfo](https://www.drupal.org/files/drupal-rest-api-admin-user-info_0.png)

**That’s it!!!**

* Now let’s try to create a user in Drupal through an API call using an API key for authentication.