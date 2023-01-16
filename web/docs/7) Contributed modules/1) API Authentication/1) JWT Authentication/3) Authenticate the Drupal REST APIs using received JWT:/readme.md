* To perform authentication using JWT, simply add the received JWT as a Bearer token in the Authorization Header.

**Request:** POST <drupal\_base\_url> /node?\_format=json  
**Header:** Authorization: Bearer received\_JWT  
 Accept: application/json   
**Body:**   
 {  
 "type":\[  
 {"target\_id":"page"}  
 \],  
 "title":\[  
 {"value":"Drupal Rest API Authentication"}  
 \],  
 "body":\[  
 {"value":"Page created using the JWT Authentication."}  
 \]  
}

**CURL Request Format-**

curl --location --request POST ‘<drupal\_base\_url>/node?\_format=json’\\  
\--header 'Accept: application/json' \\  
\--header 'Content-Type: application/json' \\  
\--header 'Authorization: Bearer <received\_JWT>’ \\  
\--data-raw '{  
 "type":\[  
 {"target\_id":"page"}  
 \],  
 "title":\[  
 {"value":"Drupal Rest API Authentication"}  
 \],  
 "body":\[  
 {"value":"Page created using the JWT Authentication."}  
 \]  
}'  

**Sample request to create a page using JWT-based authentication:**

* You can also refer to the Postman request for the same:

![drupal rest api request](https://www.drupal.org/files/Drupal-rest-api-request-json.png)

* A successful response would look something like:

![drupal rest api response](https://www.drupal.org/files/drupal-rest-api-json-response.png)

* You can check the created page in the content tab of Drupal.

![drupal rest api postman response](https://www.drupal.org/files/drupal-rest-api-authentication-page-created.png)

* Error Responses and Possible Solutions:

| **Error**                                   | **Description**                                                                                                                                                                                                                                                                         |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MISSING\_AUTHORIZATION\_HEADER              | You will get this error whenever you don't send an Authorization Header in the API request or if it was removed by your server due to some reasons. Example: { "status": "error", "error":"MISSING\_AUTHORIZATION\_HEADE", "error\_description": "Authorization header not received." } |
| INVALID\_AUTHORIZATION\_HEADER\_TOKEN\_TYPE | You will get this error when you send the Authorization header but the token type is not Bearer Example: { "status": "error", "error": "INVALID\_AUTHORIZATION\_HEADER\_TOKEN\_TYPE", "error\_description": "Authorization header must be the type of Bearer Token." }                  |
| TOKEN\_EXPIRED                              | You will get this error when you send the Authorization header but the access token is expired. Example: { "status": "error" “error”: “TOKEN\_EXPIRED” "message": "Invalid request: Token Expired."  }                                                                                  |
| USER\_INFORMATION\_NOT\_FOUND               | You will get this error while trying to retrieve the user information. Example: { "status": "error" “error”: “USER\_INFORMATION\_NOT\_FOUND” "message": "Could Not Retrieve User Information.",  }                                                                                      |
| INVALID\_SIGNATURE                          | You will get this error when the token signature is not valid. Example: { "status": "error" “error”: “INVALID\_SIGNATURE” "message": "Invalid Token signature.",  }                                                                                                                     |

**Congratulations!!!!** You can now authenticate any calls to your Drupal APIs using JWT-Based Authentication.

We hope you found this document useful and informative.