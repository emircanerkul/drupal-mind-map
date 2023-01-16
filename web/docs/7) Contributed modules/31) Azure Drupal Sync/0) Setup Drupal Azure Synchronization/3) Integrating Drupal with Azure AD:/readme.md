* In STEP 2, you will have to configure the below-mentioned values from the Azure AD into Drupal.

**Tenant ID:**

* From the **Overview** section of the Azure AD Application, copy the **Directory (Tenant) ID** value.

![drupal azure sync copy tenant id](https://www.drupal.org/files/drupal-azure-sync-copy-tenant-id.png)

* Now, paste the copied Tenant ID into Drupal’s **Tenant ID** text field.

**Application (Client) ID:**

* From the **Overview** section of the Azure AD Application, copy the **Application (client) ID** value.

![drupal azure sync copy client id](https://www.drupal.org/files/drupal-azure-sync-copy-client-id.png)

* Paste the copied Client ID in the Drupal’s **Application (Client) ID** text field.

**Client Secret:**

* From the left navigation panel, click on the **Certificates & secrets** menu and click on the **New client secret** button.
* Add a description for the secret and select the expiry of the secret.
* Click on the **Add** button.

![drupal azure sync secret and certificates](https://www.drupal.org/files/Drupal-azure-sync-secret-certificates-1.png)

* Copy the Secret Value.

![drupal azure sync copy client secret](https://www.drupal.org/files/drupal-azure-sync-copy-client-secret.png)

* Paste the copied Secret value in Drupal’s **Client Secret** text field

**Tenant Name/Primary Domain:**

* In the same window, hover on your profile (top right corner) and note down the Domain mentioned in the pop-up box.

![drupal azure sync copy doamin](https://www.drupal.org/files/drupal-azure-sync-copy-domain.png)

* Paste the noted Domain value in Drupal’s **Tenant Name/Primary Domain** text field.

**Test UPN/ID:**

* Navigate to the Azure AD and select the **Users** menu from the left navigation panel.
* Copy your user’s **User Principal Name** to test out the integration of Drupal and Azure AD.
* Paste the copied User Principal Name in Drupal’s **Test UPN/ID** text field.

![drupal azure sync click on save](https://www.drupal.org/files/drupal-azure-sync-click-on-save-button.png)

* Once done with all the Configurations, click on the **Save and Test Configuration** button.
* If the Test Configuration is successful, you will receive a success message like:

![drupal azure sync success msg](https://www.drupal.org/files/drupal-azure-sync-success-msg.png)

* If you want, you can click on the link in the success message to check the attributes received from Azure AD.
* Alternatively, if there is an error in the integration of Azure AD with Drupal, then you can check the cause of the error by following the link in the error message or scrolling down to the **Test Configuration Result** section.

![drupal azure sync error msg](https://www.drupal.org/files/drupal-azure-sync-errror-msg.png)

* Once successful integration, click on the **Next** button.