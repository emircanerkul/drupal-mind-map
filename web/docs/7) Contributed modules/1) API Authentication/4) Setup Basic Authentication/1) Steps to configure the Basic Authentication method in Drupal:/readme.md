* For better understanding, we will be taking an example of adding Basic authentication for getting a node for Drupal using REST API.
* **Please note** that the **/node/{node}** API of Drupal is used to retrieve information of a Drupal node.

### Enable the API and assign methods and operations as follows:

* The first step is to enable the API and also assign methods and operations allowed on that particular API. This can be done using the REST UI module or you can simply modify the config.
* To enable the API using the **REST UI** module, click on the configure button of the REST UI module(as shown below)

![Drupal rest api enable REST UI](https://www.drupal.org/files/drupal-rest-ui-configure_0.png)

* Considering our example, we want to enable the **/node/{node}** API present under the **Content** section. Enable this API using the **Enable** option in front of it.

![drupal rest api enable api](https://www.drupal.org/files/drupal-rest-api-enable-GET-node_0.png)

* Now, as our goal is to retrieve the node information, select the following configs:  
   * Method: **GET**  
   * Format: **json**  
   * Authentication provider: **rest\_api\_authentication.**
* This will allow the miniOrange REST API Authentication module to Authenticate your API. Click on the **Save Configuration** button to continue.

![Drupal rest api select method](https://www.drupal.org/files/Drupal-rest-api-select-method-and-formats_0.png)

### Steps to Enable the Basic Authentication:

* In this step, we will set up **Basic Authentication** as an **API Authentication** method. In order to do so, please navigate to the API Authentication tab of the REST API Authentication Module **(/admin/config/people/rest\_api\_authentication/auth\_settings)**  
   * Select the **Enable Authentication** checkbox and click on **Save** above Settings.  
   * Below the **Save Settings** button select Basic Authentication and click on the **select method** button.

**That’s it!!!**  
Now let’s try to fetch node information through an API call using Basic authentication.

### Example:

* To get node information in Drupal, you have to make a GET request along with the Drupal username and password of the user. The value of the username and password must be in base64encoded format. You can refer to the below format to make a call.

**Request:** GET <your\_drupal\_base\_url> /node/{node}?\_format=json  
**Header:**   
 Authorization: Basic base64encoded <username:password>  
 Accept: application/json  
 Content-Type: application/json

**CURL Request Format-**  
curl --location --request GET 'drupal\_base\_url/node/1?\_format=json' \\  
\--header 'Accept: application/json' \\  
\--header 'Content-Type: application/json' \\  
\--header 'Authorization: Basic base64encoded <username:password'>

* You can also refer to the image of the Postman request added below:

![drupal rest api base url](https://www.drupal.org/files/drupal-rest-api-base-url-postman.png)

* A successful response returns the node information that you have created. (please refer to the image below)

![drupal rest api authentication success response](https://www.drupal.org/files/drupal-rest-api-success-response-postman.png)

* If you receive any error in response then you can refer to the below table for the error description and possible solutions.

| **Error**                                   | **Description**                                                                                                                                                                                                                                                                           |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MISSING\_AUTHORIZATION\_HEADER              | You will get this error whenever you don't send an Authorization Header in the API request or if it was removed by your server due to some reasons. Example: { "status": "error", "error": "MISSING\_AUTHORIZATION\_HEADER", "error\_description": "Authorization header not received." } |
| INVALID\_AUTHORIZATION\_HEADER\_TOKEN\_TYPE | You will get this error when you send the Authorization header but not in a valid format. Example: { "status": "error", "error": "INVALID\_AUTHORIZATION\_HEADER\_TOKEN\_TYPE", "error\_description": "Authorization header must be the type of Basic Authentication." }                  |
| USER\_NAME\_MISSING                         | You will get this error whenever the module is not able to find the username in the API call. Example: { "status": "error", "error": "USER\_NAME\_MISSING", "error\_description": "Username Not Found" }                                                                                  |
| INVALID\_CREDENTIALS                        | You will get this error when either the username or password is incorrect. Example: { "status": "error", "error": "INVALID\_CREDENTIALS", "error\_description": "Invalid username or password." }                                                                                         |

**Congratulations!!!!** You can now authenticate any calls to your Drupal APIs using Basic Authentication.

We hope you found this document useful and informative.