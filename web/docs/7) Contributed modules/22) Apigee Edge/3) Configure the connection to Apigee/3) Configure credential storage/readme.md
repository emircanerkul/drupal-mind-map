The Apigee Edge module uses the [Drupal Key module](https://www.drupal.org/project/key) to store Apigee connection settings, including the authentication credentials configured above. The Drupal Key module enables developer portal admins to define how and where sensitive information is stored. You can configure this module using the Apigee Edge connection settings page, as described below.

**Warning:** Apigee credentials are used by the Apigee Edge module to connect to Apigee organizations. If this information is compromised, the credentials can be used to connect to your Apigee organization and modify data.

### Apigee Edge credential key storage details

When you [configure credentials](#configuring-credentials), the Apigee Edge module creates a new Key module key named **Apigee Edge connection** in your Drupal site by default. To see the full details of the Apigee Edge key, select **Configuration > System > Keys** in the Drupal administration menu.

![](https://www.drupal.org/files/connection-key.png)

The key **type** will always be "Apigee Edge Authentication," as the data being stored is custom to Apigee credentials. The key **provider** is the configurable storage mechanism, in this case, "Apigee Edge: Private File." Key providers can be defined in the Key module or other modules to extend the ways the keys can be defined. For example, if you install the [Drupal Lockr module](https://www.drupal.org/project/lockr), it will add a new key provider to store the key in [Lockr](https://www.lockr.io/).

You can view and edit the Drupal Key module configuration for Apigee Edge credentials by selecting **Configuration > Apigee Edge > General** in the Drupal administration menu and then clicking “Advanced Settings.” This section will display the configured key provider, as shown in the figure below:

![](https://www.drupal.org/files/connection-key.png)

### Available key providers

Three key providers are made available by the Drupal Key module:

* Configuration
* Environment
* File

A detailed description of the storage type and security level of each of these [key provider](https://www.drupal.org/docs/8/modules/key/concepts-and-terminology#s-key-providers) plugins can be found in the Drupal Key module documentation.

The Apigee Edge module adds two additional key provider options:

* Apigee Edge: Private File: Apigee Edge credentials are stored in the `.apigee_edge/apigee_edge_connection_default.json` file located at the root of the Drupal private file system. See also [Store Apigee Edge credentials in a user-defined location. ](https://www.drupal.org/docs/8/modules/apigee-edge/configure-the-connection-to-apigee-edge#user-defined-credential-storage)Make sure the private filesystem is set to be a directory outside the web root. If you put your private filesystem under the web root, the files could be accessible to anyone through web server URLs. For more information, see [the Drupal documentation on the File module.](https://www.drupal.org/docs/8/core/modules/file/overview#s--private-file-system-settings-in-drupal-8)
* Apigee Edge: Environment Variables: This key provider is the same as the Drupal Key module's "Environment" plugin and will be deprecated.

### Key Provider Security

The following lists the relative security of each key provider:

| Configuration                                                                                                                                                                                                         | Use for local development only |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Apigee Edge: Private File                                                                                                                                                                                             | Better                         |
| File                                                                                                                                                                                                                  | Better                         |
| Environment                                                                                                                                                                                                           | Better                         |
| Apigee Edge: Environment Variables                                                                                                                                                                                    | Better                         |
| External (such as [Lockr](https://www.drupal.org/project/lockr), [Townsend Security Key Connection](https://www.drupal.org/project/townsec%5Fkey), or any other Drupal Key module-compatible key management solution) | Best                           |

<!-- note-warning -->
> WARNING: The configuration key provider is not considered a secure place to store credentials for a production site. Connection details are stored in the database which&nbsp;can cause the credentials to be vulnerable to SQL injection attacks and will be included in any database backup files or configuration exports.&nbsp;

### Default storage settings

To make configuration easy for evaluation and local development, the Apigee Edge module uses the following default storage settings for Apigee connection credentials:

* If you use a basic Drupal site install with the Apigee Edge module, the key is stored in the private filesystem. If you plan to use your portal on a production server, you may want to use a more secure key provider.
* If you install your site using the [Apigee Developer Portal Kickstart](https://www.drupal.org/project/apigee%5Fdevportal%5Fkickstart) distribution, the key is stored in the Drupal configuration. Apigee strongly recommends changing the key provider if you plan to use your portal for anything other than local development as the key data would be included in your Drupal database and configuration files if exported. Learn more by reading about [Drupal’s configuration management feature](https://www.drupal.org/docs/8/configuration-management/managing-your-sites-configuration).

### Update the key provider

To view the key provider associated with your Apigee Edge connection credentials, select **Configuration > System > Keys** in the Drupal administration menu. For the “Apigee Edge Connection” key, the value of the **type** field will always be "Apigee Edge Authentication," as the data stored in the key provides the Apigee Edge credentials. The **provider** field shows the selected storage mechanism.

You can update the Drupal Key module configuration for your Apigee Edge connection credentials by selecting **Configuration > Apigee Edge > General** in the Drupal administration menu and then clicking “Advanced Settings.” The dropdown will display the available key provide options, as shown in the figure below:

![](https://www.drupal.org/files/connection-key.png)

Key providers can be defined in the Drupal Key module or any other modules you may choose to install. For example, if you install the [Drupal Lockr module](https://www.drupal.org/project/lockr), it will add a new key provider to store the key in [Lockr](https://www.lockr.io/).

To update your Apigee Edge connection key provider and storage mechanism:

1. Select the desired key provider from the dropdown list.
2. Click **Save configuration.**

### Store Apigee credentials in a user-defined location with the File key provider

As shown in the figure above, the **provider** is set to **Apigee Edge: Private File**. The Apigee Edge: Private File key provider stores the Apigee Edge credentials in the `.apigee_edge/apigee_edge_connection_default.json` file located at the root of the Drupal private file system. 

As noted above, you can modify the Apigee Edge connection key to use a different provider to store the connection information more securely. For example, Acquia and Pantheon.io allow you to store private files in a separate user-defined location. You can configure the File key provider to use this user-defined location instead of the Drupal private file system so that the connection settings are not stored during the standard file backup process. 

To use the File key provider to store Apigee credentials in a user-defined location, such as `/var/private`:

1. Determine the location of the Drupal private file system root is by selecting **Configuration > Media > File system** and noting the path defined for **Private file system path**.
2. Copy the **apigee\_edge\_connection\_default.json** file in the **_private\_file\_path_/.apigee\_edge** directory to **/var/private**, where _**private\_file\_path**_ is the location of your private file path.  
**Note**: Ensure that the new file is readable by your web server or PHP process user/group.
3. Select **Configuration> System> Keys.**
4. Click **Edit** in the Operations column associated with the Apigee Edge connection key.
5. Under **Provider Settings**, change **Key provider** to **File**.
6. In the **File location** field, specify the location of the file. For example: **/var/private/apigee\_edge\_connection\_default.json**
7. Click **Save** to save key settings.
8. Go to **Configuration > Apigee Edge > General** and click **Send request** under **Test Connection** to validate the new settings are working properly.
9. Delete the **_private\_file\_path_/.apigee\_edge** directory.

### Recommended methods based on hosting provider

Apigee supports the following methods for configuring credential storage using an authentication key:

* Credential storage using a private file (Good)  
 By default, Apigee credentials are stored in the `.apigee_edge/apigee_edge_connection_default.json` file located at the root of the Drupal private file system. See also [Store Apigee credentials in a user-defined location with the File key provider](#user-defined-credential-storage).
* Credential storage using environment variables (Better)
* External key management solution, such as [Lockr](https://www.drupal.org/project/lockr), [Townsend Security Key Connection](https://www.drupal.org/project/townsec%5Fkey), or any other Key module-compatible key management solution (Best)

The following table summarizes the methods recommended for use in production environments based on hosting provider.

| **Hosting Provider** | **Recommendation for Production Environments**                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Acquia               | Use the [Lockr module](https://www.drupal.org/project/lockr).Alternatively, you can use the File key provider to store the credentials in the secrets.settings.php file, as described in [Storing sensitive information outside of your codebase](https://docs.acquia.com/index.php/resource/secrets). This file is private for each environment and is not included in any backups.                                               |
| Pantheon             | Use the [Lockr module](https://www.drupal.org/project/lockr).Alternatively you configure the File or Apigee Edge: Private File key provider to use sites/default/files/private location for private files. See [Private Paths for Files](https://pantheon.io/docs/private-paths/#private-path-for-files) in the Pantheon documentation for more information. **Note**: Using environment variables is not supported with Pantheon. |
| Other installations  | Use the [Lockr module](https://www.drupal.org/project/lockr).Alternatively, you can use environment variables stored on the server or a secure file location. **Note**: When configuring credentials using a private file, make sure to set file\_private\_path in the Drupal settings.php file to a location that is outside of the Drupal installation directory and not accessible over the web.                                |

### Storing Apigee credentials in environment variables

Storing credentials in environment variables another option for handling credentials - even in development environments.

By default, the Apigee Edge module stores and reads credentials from an (unencrypted) private file. To read the credentials from environment variables:

1\. Go to **Configuration > Apigee Edge > General**_._ 
_2\._ Expand the **Advanced settings** field set.  
3\. Select **Apigee Edge: Environment variables**_._  
4\. Save the form.

![Apigee Edge environment variables list](https://www.drupal.org/files/apigee_edge_credentials.png)

**You can only save the form if you have all the required environment variables set** as described below.

This configuration can be export and shared between environments that use the same configuration.

**IMPORTANT:** After you set or change the Apigee Edge credentials always visit `/admin/config/apigee-edge/settings` and click **Send request** to test the connection. You should get a `Connection successful` message.

**IMPORTANT:** Each time you set or change the Apigee Edge credentials you must **run the developer synchronization** to ensure that all users (including Drupal User 1 (uid1)) have a developer account in Apigee Edge.

Store Apigee Edge authentication credentials in the following environment variables:  
`APIGEE_EDGE_INSTANCE_TYPE, APIGEE_EDGE_AUTH_TYPE, APIGEE_EDGE_ORGANIZATION, APIGEE_EDGE_USERNAME, APIGEE_EDGE_PASSWORD, APIGEE_EDGE_ENDPOINT, APIGEE_EDGE_AUTHORIZATION_SERVER, APIGEE_EDGE_CLIENT_ID, APIGEE_EDGE_CLIENT_SECRET, APIGEE_EDGE_ACCOUNT_JSON_KEY`

#### Environment variables for basic authentication

`APIGEE_EDGE_AUTH_TYPE=basicAPIGEE_EDGE_ORGANIZATION APIGEE_EDGE_USERNAME=john.doe+acmelocal@email.comAPIGEE_EDGE_PASSWORD=<whateverpasswordyouchose>`

The `APIGEE_EDGE_ENDPOINT=http://on-prem-apigee-edge-address.test` environment variable is optional. **Set this if the Management server is on-prem**.

#### Environment variables for OAuth authentication  

They are the same as for basic authentication, but:

`APIGEE_EDGE_AUTH_TYPE=oauthAPIGEE_EDGE_CLIENT_ID=edgecliAPIGEE_EDGE_CLIENT_SECRET=edgeclisecret`

These are the default client id and client secret for Apigee Edge Public Cloud, but they could be changed by Apigee support. You can find more information about OAuth authentication in [Configuring OAuth2 Authentication for Apigee Edge](https://www.drupal.org/docs/8/modules/apigee-edge/configure-the-connection-to-apigee-edge#configuring-oauth2-authentication-for-apigee-edge).