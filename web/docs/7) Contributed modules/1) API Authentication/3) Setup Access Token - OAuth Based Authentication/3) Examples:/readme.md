* First of all, we have to make an API call to get an access token. We will then use this to authenticate Drupal API for getting a user’s information.
* The miniOrange API Authentication module supports 2 grant types that you can use to get an access token:

### Password Grant:

* In the Password grant, we can obtain the access token by making a POST request containing the user’s Drupal Username and Password along with the Client ID issued by the REST API Authentication module.

**Request:** POST <drupal\_base\_url>/rest\_api/access\_token

**Body:**

grant\_type = password

username = <drupal\_username>

password = <drupal\_password>

client\_id = <client\_id>

**Request in CURL Format-**

curl --location --request POST '<your\_drupal\_base\_url>/rest\_api/access\_token' \\

 \--header 'Accept: application/json' \\

 \--header 'Content-Type: application/x-www-form-urlencoded' \\

\--data-urlencode 'grant\_type=password' \\

 \--data-urlencode 'client\_id= <drupal\_client\_id>' \\

 \--data-urlencode 'username=<drupal\_username >\\

\--data-urlencode 'password=<drupal\_password>'

* You can also refer to the image of the Postman request added below:

![drupal rest api postman](https://www.drupal.org/files/drupal-rest-api-postman.png)

### Client Credentials grant:

* In the Client Credentials grant, we can obtain the access token by making a POST request containing the Client ID and Client Secret issued by the REST API Authentication module along with the user’s Drupal username.

**Request:** POST <drupal\_base\_url>/rest\_api/access\_token

**Body:**

grant\_type = client\_credentials

client\_id = <client\_id>

client\_secret = <client\_secret>

Username = <drupal\_username>

**CURL Request Format-**

curl --location --request POST '<drupal\_base\_url>/rest\_api/access\_token' \\

\--header 'Accept: application/json' \\

\--header 'Content-Type: application/x-www-form-urlencoded' \\

\--data-urlencode 'grant\_type=client\_credentials' \\

\--data-urlencode 'client\_id=<Client\_ID>' \\

\--data-urlencode 'username=<drupal\_username>' \\

\--data-urlencode 'client\_secret=<Client\_secret>'

* You can also refer to the image of the Postman request to get an access token from Drupal using the Client Credentials grant.

![drupal rest api response](https://www.drupal.org/files/drupal-rest-api-postman-api-response.png)

* A successful response returns the Access Token along with token expiry and token type(please refer to the image below)

![drupal rest api success response](https://www.drupal.org/files/drupal-rest-api-success-response_0.png)

**Error Response:**

| **Error**               | **Description**                                                                                                                                                                                                       |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INVALID\_CREDENTIALS    | You will get this error when either username or password is incorrect. Example: { "status": "error", "error": "INVALID\_CREDENTIALS", "error\_description": "Invalid username or password." }                         |
| INVALID\_CLIENT\_ID     | You will get this error whenever you send an incorrect client ID. Example: { "status": "error", "error": "INVALID\_CLIENT\_ID", "error\_description": "Invalid Client ID." }                                          |
| INVALID\_CLIENT\_SECRET | You will get this error whenever you send an incorrect client ID. Example: { "status": "error", "error": "INVALID\_CLIENT\_ID", "error\_description": "Invalid Client Secret." }                                      |
| MISSING\_USERNAME       | You will get this error whenever you have missed any parameter to send in the request. Example: { "status": "error", "error": "MISSING\_USERNAME", "error\_description": "The username is missing from the request" } |

**Using the received Access Token to authorize the Drupal REST APIs:**

* To perform authentication using access tokens, simply add the received access token as a Bearer token in the Authorization Header along with your request

**Sample request to fetch user information using token based authentication:**

**Request:** GET <drupal\_base\_url> /user/{user\_id}?\_format=json  
**Header:** Authorization: Bearer <received\_access\_token>  
**Accept:** application/json

* You can also refer to the Postman request for the same:

![drupal rest api base url](https://www.drupal.org/files/drupal-rest-api-base-url_0.png)

* A successful response would look something like:

![drupal rest api success msg](https://www.drupal.org/files/drupal-rest-api-success-msg_0.png)

* Error Responses and Possible Solutions:

| **Error**                                   | **Description**                                                                                                                                                                                                                                                                           |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INVALID\_ACCESS\_TOKEN                      | You will get this error when you have put an invalid Access Token or expired Access Token. Example: { "status": "error", "error": "INVALID\_ACCESS\_TOKEN", "error\_description": "Invalid Access Token." }                                                                               |
| MISSING\_AUTHORIZATION\_HEADER              | You will get this error whenever you don't send an Authorization Header in the API request or if it was removed by your server due to some reasons. Example: { "status": "error", "error": "MISSING\_AUTHORIZATION\_HEADER", "error\_description": "Authorization header not received." } |
| INVALID\_AUTHORIZATION\_HEADER\_TOKEN\_TYPE | You will get this error when you send the Authorization header but the token type is not Bearer Example: { "status": "error", "error": "INVALID\_AUTHORIZATION\_HEADER\_TOKEN\_TYPE", "error\_description": "Authorization header must be the type of Bearer Token." }                    |
| TOKEN\_EXPIRED                              | You will get this error when you send the Authorization header but the access token is expired. Example: { “status” => “error”,  “error” => ”TOKEN\_EXPIRED”,  “error\_description” => “Invalid request: Token Expired.” }                                                                |

**Congratulations!!!!** You can now authenticate any calls to your Drupal APIs using OAuth/Access Token-Based Authentication.

* We hope you found this document useful and informative.