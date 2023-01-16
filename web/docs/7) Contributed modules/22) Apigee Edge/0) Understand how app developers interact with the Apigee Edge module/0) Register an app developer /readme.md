**Note**: Whether a developer can self-register depends on your Drupal Account Settings configuration. Specifically, **Registration and Cancellation** must be configured to enable visitors to register accounts. See [Configuring User Account Settings](https://www.drupal.org/docs/user%5Fguide/en/config-user.html) in the Drupal documentation.

Before app developers can use your APIs, they must register by creating an account.

Alternatively, you can register app developers on their behalf using the Apigee Edge management UI, as described in [Managing app developers](https://docs.apigee.com/api-platform/publish/adding-developers-your-api-product) in the Apigee documentation (though self-service account management via a developer portal is recommended over this approach). In this case, you will need to sync the developers between the portal and Apigee Edge, as described in [Synchronize developers with Apigee Edge](synchronize-developers-with-apigee-edge).

When an app developer registers an account:

* App developer information is created and a subset is stored on Apigee Edge. See [What information is stored on Apigee Edge?](what-information-is-stored-on-apigee-edge)
* App developer appears on the list of registered app developers in Drupal and Apigee Edge, as described in the following sections:  
   * [Managing user accounts](https://www.drupal.org/docs/user%5Fguide/en/user-chapter.html) in the Drupal documentation.  
   * [Managing app developers](https://docs.apigee.com/api-platform/publish/adding-developers-your-api-product) in the Apigee documentation.

New app developers can self-register with your portal as follows:

1. Navigate to the portal.
2. Click **Log in**.
3. Click the **Create new account** tab.
4. Complete the form, including name, email, username, and so on.  
**Note**: To configure what happens if an email address is already registered in Drupal or Apigee Edge, see [Configure developer registration](configue-developer-registration).
5. Click **Create new account**.  
Depending on your [Drupal account settings](https://www.drupal.org/docs/user%5Fguide/en/config-user.html), the app developer may receive an email to verify the account creation.
6. After the account is verified, the developer can log in to the portal.