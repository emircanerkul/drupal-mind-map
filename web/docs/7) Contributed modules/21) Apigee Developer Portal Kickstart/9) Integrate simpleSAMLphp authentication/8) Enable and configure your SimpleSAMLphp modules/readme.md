You can enable the SimpleSAMLphp Authentication and SimpleSAMLphp Custom Attribute Mapping modules by either:

1. Navigating to /admin/modules in your Drupal portal admin and enabling the modules, or
2. Using the following Drush command:  
`drush en -y simplesamlphp_auth simplesamlphp_custom_attributes `

To configure the SimpleSAMLphp Authentication module, navigate to **Config > People > simplesamlphp\_auth** in your Drupal portal admin:

1. Check "Activate authentication via SimpleSAMLphp." This will **require** all users to authenticate via SimpleSAMLphp, except those users listed under the "Local authentication" tab.
2. Enable both settings under "Security." This includes the “Cookie only transmitted over HTTPS” setting and the “Cookie only accessible over HTTP protocol” setting.
3. Click the "Local authentication" tab:  
   * Uncheck "Allow SAML users to set Drupal passwords."  
   * Add any user IDs or roles that you wish to allow to log in with local accounts. For example, you may wish to allow some users to log in locally for testing purposes, or in the even that your idP is unavailable.
4. Click the "User info and syncing" tab.  
   * Set the attributes you wish to use for “username,” “email,” and “unique identifier.”  
   * **Optional**: Set any roles you wish to auto-assign to Drupal user accounts upon successful login. These can be configured based on SAML attributes.

To configure the SimpleSAMLphp Custom Attribute mapping module, navigate to **Config > People > simplesamlphp\_custom\_attributes** in your Drupal portal admin:

1. Click **Add mapping**.
2. Select “First Name” from the available dropdown and enter the attribute name provided by your IdP.
3. Click **Save**.
4. Click **Add mapping**.
5. Select “Last Name” from the available dropdown and enter the attribute name provided by your IdP.
6. Click **Save**.