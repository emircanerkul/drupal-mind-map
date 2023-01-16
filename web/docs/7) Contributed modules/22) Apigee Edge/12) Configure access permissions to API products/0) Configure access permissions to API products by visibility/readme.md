Configure access permissions for public, private, and internal API products by defining their visibility by role. 

**Note**: You configure the public, private, or internal access settings when creating or editing an [API product](https://docs.apigee.com/api-platform/publish/create-api-products) in Apigee Edge.

To configure access permissions to API products by visibility:

1. Ensure the Apigee Edge API Product RBAC module is disabled.  
**Note**: This module is disabled by default.  
   1. Select **Extend** \> **Uninstall Module** in the Drupal administration menu.  
   2. Select the **Apigee Edge API Product RBAC** module.  
   3. Click **Uninstall**.
2. Select **Configuration > Apigee Edge > API products** in the Drupal administration menu.
3. Click the **API product access** tab.  
**Note**: If you do not have write permissions for API products within your organization, the page will be read-only.
4. In the **Access by Visibility** section, assign access permissions (visibility) by role to public, private, and internal API products, as required.  
**Note**: If you override the access permissions for a specific role, as described in [Overriding access permissions by role](#override), then the role will be selected by default. You will not be able to change the access permissions for the role unless you disable the override.
5. Click **Save configuration**.