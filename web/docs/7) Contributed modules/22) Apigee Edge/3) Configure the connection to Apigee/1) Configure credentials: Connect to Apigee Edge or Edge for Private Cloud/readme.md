Follow the steps below to configure the custom role, user account, and authentication credentials needed to connect your developer portal to Apigee Edge or Edge for Private Cloud.

### Create custom Apigee role

**Note**: For **SAML-enabled organizations**, you must contact your Apigee customer support representative for assistance. Do **not** use the procedure described in this section to create the developer administrator role.

Apigee recommends that you create a [custom Apigee role](https://docs.apigee.com/api-platform/system-administration/managing-roles-api.html) to assign to the user whose credentials will be used to configure the connection between the developer portal and Apigee Edge. This role is used exclusively for connecting the developer portal to your Apigee Edge organization and limits access to only the API resources required for this purpose. For example, the Developer Administrator role cannot edit or delete API proxies.

To assign the developer administrator role for **non-SAML enabled organizations**:

Create the role with the appropriate permissions by executing the Drush `apigee-edge:create-edge-role` command.

**Note**: You must have Organization Administrator privileges to run this command against an Apigee org.

`$ drush create-edge-role myorg me@example.com`

The command above will create a new role named "drupalportal" in the org "myorg", using the Apigee user "[me@example.com](mailto:me@example.com)" for connecting to the Apigee org to create the role.

Running `drush help apigee-edge:create-edge-role` will give more details on the arguments and parameters:

```php
# drush help apigee-edge:create-edge-role

Create a custom role in an Apigee organization for Drupal usage.

Create a custom Apigee role that limits permissions for Drupal connections
to the Apigee API.

Examples:
drush create-edge-role myorg me@example.com Create "drupalportal" role as orgadmin me@example.com for org myorg.
drush create-edge-role myorg me@example.com --role-name=portal Create role named "portal"
drush create-edge-role myorg me@example.com --base-url=https://api.edge.example.com Create role on private Apigee Edge server "api.edge.example.com".
drush create-edge-role myorg me@example.com --force Update permissions on "drupalportal" role even if role already exists.

Arguments:
org The Apigee Edge org to create the role in.
email An Apigee user email address with orgadmin role for this org.

Options:
--password[=PASSWORD] Password for the Apigee orgadmin user. If not set, you will be prompted for the password.
--base-url[=BASE-URL] Base URL to use, defaults to public cloud URL: https://api.enterprise.apigee.com/v1.
--role-name[=ROLE-NAME] The role to create in the Apigee Edge org, defaults to "drupalportal".
--force Force running of permissions on a role that already exists, defaults to throwing an error message if role exists. Note that permissions are only added, any current permissions not not removed.

Aliases: create-edge-role
```

### Create Apigee user

The Apigee Edge Drupal module makes calls to the [Apigee API](https://apidocs.apigee.com/management/apis) in order to do things such as create apps for a developer. In order to make calls to the Apigee API, you need to create a user account and assign the custom role created earlier to that user.

To create a user:

1. Log into Apigee Edge with a user that has the Organization Administrator role.
2. Select **Admin >** **Users** in the left hand navigation.
3. Click **+User** in the upper right hand corner.
4. Enter the user's email address.
5. Enter the name of the custom role name created in the previous step.
6. Click **Save.**

For more information, see Apigee documentation on [assigning roles to a user](https://docs.apigee.com/api-platform/system-administration/understanding-roles#assigningrolestoauser).

**Note**: Apigee recommends creating a generic user account that all developer administrators can use. If you assign the role to an individual user account, communication may be impacted if the user account is deleted after transferring or leaving the company, for example. Using a mailing list or email alias that contains multiple administrators is also a good idea so that multiple persons can recover or change the account password.

Configure credentials by creating an authentication key that defines the Apigee Edge base URL, organization, and [Developer Administrator](#assigning-the-developer-administrator-role) username and password. The steps to configure credentials using basic or OAuth2 authentication are provided below.

### Configure basic authentication for Apigee Edge

**Note**: Basic Authentication is less secure than [OAuth2 authentication](https://docs.google.com/document/d/1Ne058X9O8kfa%5FX5RtOTMEAuSCvWQo8MXZRe99hbve84/edit#heading=h.5nr3z2e2ihv). Your credentials are not encrypted or hashed; they are Base64-encoded only. See also [Recommended methods based on hosting provider](#recommended-methods).

To configure **basic authentication** for Apigee Edge:

1. Select **Configuration > Apigee Edge > General** in the Drupal administration menu.
2. Select the **Credentials** tab.
3. Expand the **Apigee Edge Connection Settings** section (if necessary).
4. In the **Authentication type** drop-down, select **HTTP basic**.
5. Configure the credentials listed in the following table.  
| **Credential**       | **Description**                                                                                                                                        |  
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |  
| Organization         | Name of your organization on Apigee Edge, defined when you create your account on Edge.                                                                |  
| Username             | Name of a user with Developer Administrator privileges. See [Assigning the Developer Administrator role](#assigning-the-developer-administrator-role). |  
| Password             | Password for the user with Developer Administrator privileges.                                                                                         |  
| Apigee Edge endpoint | Base URL to which Apigee Edge endpoint paths are appended. The default base URL is https://api.enterprise.apigee.com/v1.                               |
6. To test the connection, expand the **Test Connection** section (if necessary) and click **Send Request** to send a test request using the specified credentials.  
 A message is displayed indicating whether the connection was successful.
7. Click **Save configuration**.

### Configure OAuth2 Authentication for Apigee Edge

To configure OAuth2 authentication for Apigee Edge, perform the steps described in the following sections:

* [Before you configure OAuth2 Authentication for Apigee Edge](#before-oauth-config)
* [Steps to configure OAuth2 Authentication in Apigee Edge](#oauth-steps)

**Note**: You can also use an external key management solution, such as [Lockr](https://www.drupal.org/project/lockr), [Townsend Security's Alliance Key Manager](https://www.drupal.org/project/townsec%5Fkey) or any other Key module-compatible key management solution.

#### Before you configure OAuth2 Authentication for Apigee Edge

If you are using SAML, you will need to [enable SAML on Apigee Edge](http://docs.apigee.com/api-platform/system-administration/enabling-saml-authentication-edge) if you have not done so already. Obtain the **client ID** and **client secret** from your Apigee customer support representative.

If you are not using SAML the default client ID and secret can be used by the system by leaving those fields empty when configuring the connection settings.

#### Steps to configure OAuth2 Authentication in Apigee Edge

To configure **OAuth** for Apigee Edge:

1. Select **Configuration > Apigee Edge > General** in the Drupal administration menu.
2. Select the **Credentials** tab.
3. Expand the **Apigee Edge Connection Settings** section (if necessary).
4. In the **Authentication type** drop-down, select **OAuth**.
5. Configure the credentials listed in the following table.  
| **Credential**       | **Description**                                                                                                                                                                      |  
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |  
| Organization         | Name of your organization on Apigee Edge, defined when you create your account on Edge.                                                                                              |  
| Username             | Name of a user with Developer Administrator privileges. See [Assigning the Developer Administrator role](#assigning-the-developer-administrator-role).                               |  
| Password             | Password for the user with Developer Administrator privileges.                                                                                                                       |  
| Apigee Edge endpoint | Base URL to which Apigee Edge endpoint paths are appended. The default base URL is https://api.enterprise.apigee.com/v1.                                                             |  
| Authorization Server | Authorization server that issues access tokens to the client in the form: https://zonename.login.apigee.com/oauth/token This value defaults to: https://login.apigee.com/oauth/token |  
| Client ID            | Client ID that is issued to the client during the registration process. This value defaults to: edgecli                                                                              |  
| Client secret        | Client secret known only to the client and the authorization server. This value defaults to: edgeclisecret                                                                           |
6. To test the connection, expand the **Test Connection** section (if necessary) and click **Send Request** to send a test request using the specified credentials.  
 A message is displayed indicating whether the connection was successful.
7. Click **Save configuration**.