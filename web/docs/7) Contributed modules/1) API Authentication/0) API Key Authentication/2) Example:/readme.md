* To create a user in Drupal you have to make a POST request along with the username of the user and API key issued by the miniOrange REST API Authentication Module. The value of the username and API key must be in base64encoded format. You can refer to the below format to make a call.

**Request:** POST <your\_drupal\_base\_url>/entity/user?\_format=json  
**Header:** Authorization: Basic base64encoded <username:api\_key>  
 Accept: application/json  
 Content-Type: application/json

**Body:** {  
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
\--header 'Authorization: Basic base64encoded<username:API key>’ \\  
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

![drupal rest api request for postman](https://www.drupal.org/files/drupal-rest-api-request-for-postman.png)

* A successful response returns the user information that you have created. (please refer to the image below)

![drupal rest api response for postman](https://www.drupal.org/files/drupal-rest-api-response-for-postman.png)

* If you receive any error in the response, you can refer to the below table for the error description and possible solutions.

**Error Response:**

| **Error**                                   | **Description**                                                                                                                                                                                                                                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MISSING\_AUTHORIZATION\_HEADER              | You will get this error whenever you don't send an Authorization Header in the API request or if it was removed by your server due to some reasons. Example: { "status": "error", "error": "MISSING\_AUTHORIZATION\_HEADER", "error\_description": "Authorization header not received." }  |
| INVALID\_AUTHORIZATION\_HEADER\_TOKEN\_TYPE | You will get this error when you send the Authorization header but in a valid format. Example: { "status": "error", "error": "INVALID\_AUTHORIZATION\_HEADER\_TOKEN\_TYPE", "error\_description": "Authorization header must be the type of Basic Authentication." }                       |
| USER\_DOES\_NOT\_EXIST                      | You will get this error whenever the module does not find any account belonging to the username that you have sent in the request. Example: { "status": "error", "error": "USER\_DOES\_NOT\_EXIST", "error\_description": "The user does not exist." }                                     |
| INVALID\_API\_KEY                           | You will get this error whenever the API key sent in the API call does not match. Example: { "status": "error", "error": "INVALID\_API\_KEY", "error\_description": "The API Key sent in the Request seems to be invalid or incorrect using invalid API Key." }                            |
| USER\_NAME\_MISSING                         | You will get this error whenever the module is not able to find the username in the API call. Example: { "status": "error", "error": "USER\_NAME\_MISSING", "error\_description": "The username is missing from the request" }                                                             |
| INVALID\_AUTHORIZATION\_HEADER              | You will get this error whenever the module is not able to decode the header properly or not found the username and API key in the header. Example: { "status": "error", "error": "INVALID\_AUTHORIZATION\_HEADER", "error\_description": "The authorization header seems to be invalid" } |

**Congratulations!!!!** You can now authenticate any calls to your Drupal APIs using API Key-Based Authentication method.

We hope you found this document useful and informative.