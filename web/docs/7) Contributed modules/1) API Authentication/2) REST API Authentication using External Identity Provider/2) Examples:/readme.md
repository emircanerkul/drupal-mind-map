* To create a user in Drupal you have to make a POST request along with the Token received from your identity provider. You can

**Request:** POST <your\_drupal\_base\_url>/entity/user?\_format=json  
**Header:**  Token: <Token\_receievd\_from\_external\_identity\_provider>  
 Accept: application/json  
 Content-Type: application/json

**Body:**  {  
 "name": \[  
 {"value": "<username>"}  
 \],  
 "mail": \[  
 {"value": "<email>"}  
 \],  
 "pass":\[  
 {"value": "<password>"}  
 \],  
 "status":\[  
 {"value": "1"}  
 \]  
}

**CURL Request Format-**

curl --location --request POST ‘<your\_drupal\_base\_url>/entity/user?\_format=json' \\  
\--header 'Accept: application/json' \\  
\--header 'Content-Type: application/json' \\  
\--header 'Token: <Token\_receievd\_from\_external\_identity\_proider> \\  
\--data-raw ' {  
 "name": \[  
 {"value": "Username"}  
 \],  
 "mail": \[  
 {"value": "email"}  
 \],  
 "pass":\[  
 {"value": "Password"}  
 \],  
 "status":\[  
 {"value": "1"}  
 \]  
}'  

* You can also refer to the image of the Postman request added below:

![drupal rest api request](https://www.drupal.org/files/drupal-rest-api-3rd-party-request.png)

* A successful response returns the user information that you have created. (please refer to the image below)

![drupal rest api api response](https://www.drupal.org/files/drupal-rest-api-3rd-party-response.png)

* If you receive any error in response then you can refer to the below table for the error description and possible solutions.

**Error Response:**

| Error                         | Description                                                                                                                                                                                                                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| INVALID\_USER\_INFO\_ENDPOINT | You will get this error whenever you provide the incorrect user info URL in the module configuration. **Example:** { "status": "error", "error": "INVALID\_USER\_INFO\_ENDPOINT", "error\_description": "Could not authenticate the token from your Provider. Please check your configurations." }                             |
| INVALID\_USERNAME\_ATTRIBUTE  | You will get this error whenever you provide the incorrect username attribute in the module configuration or if there is an error while trying to retrieve the username. **Example:** { "status": "error", "error": "INVALID\_USERNAME\_ATTRIBUTE", "error\_description": "Invalid request: Could not get user information." } |
| INVALID\_TOKEN                | You will get this error whenever the token provided by you is incorrect or missing from the header **Example:** { "status": "error", "error": "INVALID\_TOKEN", "error\_description": "Invalid request: Token Not Found.." }                                                                                                   |

**Congratulations!!!!** You can now authenticate any calls to your Drupal APIs using External Identity Provider Token.

We hope you found this document useful and informative.