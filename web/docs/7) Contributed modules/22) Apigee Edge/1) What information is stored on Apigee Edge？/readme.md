---
url: >-
  https://www.drupal.org/docs/8/modules/apigee-edge/what-information-is-stored-on-apigee-edge
description: >-
  When integrating with Apigee Edge, the developer portal does not function as a
  stand-alone system. Much of the information used by the Apigee Edge module is
  actually stored on Apigee Edge. Apigee Edge does not make requests to the
  portal, it only responds to requests made from the portal. Therefore, all
  interactions between the portal and Apigee Edge are initiated by the portal.
  The portal initiates communication with Apigee Edge by making REST requests
  over HTTP and HTTPS.
published_time: '2018-05-11T19:36:30+00:00'
modified_time: '2018-05-30T14:21:25+00:00'
---
When integrating with Apigee Edge, the developer portal does not function as a stand-alone system. Much of the information used by the Apigee Edge module is actually stored on Apigee Edge.

![Info stored on Apigee Edge](https://www.drupal.org/files/portal-edge.png)

Apigee Edge does not make requests to the portal, it only responds to requests made from the portal. Therefore, all interactions between the portal and Apigee Edge are initiated by the portal. The portal initiates communication with Apigee Edge by making REST requests over HTTP and HTTPS. For example, when a developer registers a new app on the portal, the portal makes a request to Apigee Edge to send information about the app to Apigee Edge. You need to configure Apigee Edge credentials so that the portal can access Apigee Edge.

**Note**: To improve performance, you can configure the caching of specific data on the developer portal, including application, API product, and developer data. Caching data reduces the number of API calls required when displaying specific values. See [Configure caching](./configure-caching).

### App developer information

When an app developer [registers](how-app-developers-interact-with-the-apigee-edge-module#registering-an-app-developer-account) as a new developer portal user, the app developer information is created and stored on both the developer portal and Apigee Edge.

On **Apigee Edge**, the information that is maintained for each app developer includes:

* First and last name
* Email address
* Developer status

On the **developer portal**, the information that is maintained for each app developer includes:

* First and last name
* Email address
* Portal password
* Portal account status (active or blocked)
* Portal role (authenticated user, administrator, other)
* Role-based permissions

**Note**: In Apigee Edge, the email address is case-sensitive. So `JohnSmith@example.com` and `johnsmith@example.com` are considered to be different email addresses. In Drupal, however, the primary key is **not case-sensitive**. So `JohnSmith@example.com` and `johnsmith@example.com` are considered to be the same primary keys.

From the email address, Apigee Edge generates a unique developer ID for each organization to which the app developer belongs. In Apigee Edge, you may need to use the developer ID to correlate an app with an app developer.

**Note**: To configure what happens if a user tries to register using an email address that is already defined in Apigee Edge, see [Configure developer registration](configue-developer-registration).

When a developer logs in to the portal, it is the portal that is responsible for authenticating the developer and for enforcing role-based permissions. Because the portal acts as the developer identity store, consider the **portal as the system of record for developer information**, not Apigee Edge. When the developer modifies their information on the portal, that information is stored on the portal and, if applicable, sent to Apigee Edge. For example, if the developer changes their first name, that information is sent to Apigee Edge. But if the developer changes their password, that information is only stored locally on the portal.

**Note**: Though not recommended, if you update the developer information on Apigee Edge, you can force a sync between the developer portal and Apigee Edge, as described in [Synchronize developers with Apigee Edge](synchronize-developers-with-apigee-edge).

### Apps and API keys

When an app developer completes the app registration process on the portal, the portal sends information about the app to Apigee Edge, including the app name and API products associated with the app, and optionally the callback URL and custom attributes.

If Apigee Edge successfully registers the app, it returns a single API key to the portal. The developer then uses that API key to access the API products associated with the app.

No information about apps and API keys is actually stored permanently on the portal. Instead, all of that information is stored on Apigee Edge. Therefore, any time a developer uses the portal to view information about an app, the portal makes a request to Apigee Edge to access that information. Any time the developer modifies an app, the portal automatically sends those modifications to Apigee Edge.

**Note**: You can configure caching to reduce the number of API calls made to Apigee Edge. See [Configure caching](configure-caching) If caching is enabled, you may not see changes made in Apigee Edge on the developer portal immediately. API keys are never cached.

For example, a developer logs in to the portal and navigates to their My Apps page. To populate the My Apps page, the portal makes a request to Apigee Edge to retrieve information about the developer's apps and API keys. That information then appears on the developer's My Apps page in the portal. If the developer then adds, removes, or modifies an app, the portal sends those modifications to Apigee Edge.

Because all information about apps and API keys is stored on Apigee Edge, an Apigee Edge administrator can manage that information by using the Apigee Edge UI. For example, an administrator can:

* Add, edit, or delete a developer's app
* Revoke or approve an API key for an app

For more information, see [Register apps and manage API keys](https://docs.apigee.com/api-platform/publish/creating-apps-surface-your-api).