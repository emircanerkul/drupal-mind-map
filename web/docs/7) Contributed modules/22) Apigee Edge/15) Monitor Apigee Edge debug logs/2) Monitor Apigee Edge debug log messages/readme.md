Apigee Edge debug log messages are displayed on the Recent log messages page. Based on the HTTP status code, one of the following icons may appear adjacent to an Apigee Edge debug log message:

| Icon                                                           | Description                                    |
| -------------------------------------------------------------- | ---------------------------------------------- |
| ![Only local images are allowed.](/misc/watchdog-error.png)    | HTTP status code greater than or equal to 400. |
| ![Only local images are allowed.](/files/log-noresponse_0.png) | No response due to connection or server issue. |

If the status code is 2xx, no icon is displayed adjacent to the message.

To monitor Apigee Edge Debug log messages:

1. Select **Reports > Recent log messages** from the Drupal adminstration menu.
2. To filter all Apigee Edge debug log messages:  
   1. Select **apigee\_edge\_debug** in the Type field.  
   2. Select one or more of the following in the Severity field: **Debug**, **Warning** (HTTP status code >=400) or **Error** (connection or server issue).  
   3. Click **Filter**.