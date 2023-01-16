---
url: >-
  https://www.drupal.org/docs/contributed-modules/apigee-edge/configure-the-connection-to-apigee
description: >-
  The Apigee Edge module that is installed on the Drupal developer portal acts
  as a client for Apigee. Using the credentials that you configure, the portal
  initiates communication with Apigee by making REST requests over HTTP and
  HTTPS. For example, when a developer registers a new app on the developer
  portal, the portal makes a request to Apigee to send information about the app
  to your Apigee organization. For more information, see What information is
  stored on Apigee Edge?
published_time: '2018-05-11T20:27:46+00:00'
modified_time: '2021-11-03T23:39:25+00:00'
---
The Apigee Edge module that is installed on the Drupal developer portal acts as a client for Apigee. Using the credentials that you configure, the portal initiates communication with Apigee by making REST requests over HTTP and HTTPS. For example, when a developer registers a new app on the developer portal, the portal makes a request to Apigee to send information about the app to your Apigee organization. For more information, see [What information is stored on Apigee Edge?](what-information-is-stored-on-apigee-edge)

To configure the connection between the developer portal and Apigee, perform the following tasks:

* [Configure the private file system path](#configure-private-file)
* [Configure credentials: Connect to Apigee Edge or Edge for Private Cloud](#configure-credentials-edge)
* [Configure credentials: Connect to Apigee X or hybrid](#configure-credentials-hybrid)
* [Configure credential storage](#configure-credential-storage)
* [Configure connection timeouts](#configure-connection-timeouts)
* [Configure error handling for a failed connection](#configuring-error-handling-for-a-failed-connection)

**Notes**:

* If you do not configure the connection between the developer portal and Apigee, you will not be able to register developers on the developer portal (see [What information is stored on Apigee Edge?](what-information-is-stored-on-apigee-edge)) and may cause other issues with Drupal core functions. If you do not plan to configure the connection between the developer portal and Apigee, you should disable the Apigee Edge module.
* Do not enable [two-factor authentication on Apigee](https://docs.apigee.com/api-platform/system-administration/enable-two-factor-auth-your-apigee-account) if you are building a Drupal developer portal. Otherwise, the developer portal will not be able to [communicate with Apigee.](https://www.drupal.org/docs/8/modules/apigee-edge/what-information-is-stored-on-apigee-edge)