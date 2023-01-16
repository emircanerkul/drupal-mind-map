To complete the connection between your Drupal developer portal service provider and your IdP, you must exchange XML data with your IdP.

1. Find the metadata for your Drupal developer portal at https://\[portal.com\]/simplesaml/module.php/saml/sp/metadata.php/default-sp, where \[portal.com\] is the URL of your Drupal developer portal.
2. Copy the XML document found there and send it to the administrator of your IdP.
3. Ask your IdP for their metadata XML. You should specifically request the name of the attributes used by the IdP for the following:  
   * email  
   * first name  
   * last name  
   * user name  
   * unique identifier.  
Each of these attributes must be included in the SAML response from the IdP to your Drupal developer portal.
4. Convert the XML response from your IdP, using the converter tool available at `simplesaml/admin/metadata-converter.php`  
   * Paste the XML response from your idP into the tool.  
   * Click **Parse**.  
   * Check the parsed file. If the file says `saml20-idp-remote` at the top, use the following command to create a `metadata/saml20-idp-remote.php `file in your SimpleSAMLphp directory:  
   `cp vendor/simplesamlphp/simplesamlphp/metadata-templates/saml20-idp-remote.php vendor/simplesamlphp/simplesamlphp/metadata/saml20-idp-remote.php`  
   * If the parsed file does not say `saml20-idp-remote`, run the command above using the appropriate template filename that matches.
5. Open the `saml20-idp-remote.php` (or appropriate file) and paste in the parsed XML response from the IdP.  
**Note:** You can see that the key of the `$metadata` array is the entityID of the idP. For example, if the line is:  
`$metadata['https://openidp.feide.no']`  
the key is `'https://openidp.feide.no'`.
6. Open `authsources.php` once again, and add this line at the bottom, where `[METADATA-KEY]`is the entityID or the IdP:  
`    $config['default-sp']['idp'] = '[METADATA-KEY]';`