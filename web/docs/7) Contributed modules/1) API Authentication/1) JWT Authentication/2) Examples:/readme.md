* First of all, we have to make an API call to get a JWT. We will then use that token to authenticate Drupal API for creating a basic page.
* We can obtain the JWT by making a POST request containing the user’s Drupal Username and Password. You have to send the Username and Password in base64-encoded format. You can refer to the below request format for reference.

**Request:** POST <your\_drupal\_base\_url>/rest\_api/id\_token

**Header:** Authorization: Basic base64encoded <username:password;>  
 Accept: application/json

**CURL Request Format-**

curl --location --request POST ' <your\_drupal\_base\_url>/rest\_api/id\_token' \\  
\--header 'Accept: application/json' \\  
\--header 'Content-Type: application/json' \\  
\--header 'Authorization: Basic base64encoded <username:password>'

* You can also refer to the image of the Postman request to get JWT from Drupal.

**Request:**

**![drupal- rest api postman request](https://www.drupal.org/files/Drupal-rest-api-postman-request-id-token.png)**

* A successful response returns the JWT along with its token expiry. (please refer to the image below)

![drupal rest api postman response](https://www.drupal.org/files/Drupal-rest-api-postman-success-response.png)

* If you receive any error in response then you can refer to the below table for the error description and possible solutions.

| **Error**            | **Description**                                                                                                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INVALID\_CREDENTIALS | You will get this error when either username or password is incorrect. Example: { "status": "error", "error": "INVALID\_CREDENTIALS", "error\_description": "Invalid username or password." } |