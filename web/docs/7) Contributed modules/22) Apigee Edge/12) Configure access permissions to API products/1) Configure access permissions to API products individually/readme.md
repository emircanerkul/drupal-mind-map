To configure access permissions to API products individually:

1. Enable the **Apigee Edge API Product RBAC** module:  
   1. Select **Extend** in the Drupal administration menu.  
   2. Select the **Apigee Edge API Product RBAC** module.  
   3. Click **Install**.
2. Select **Configuration > Apigee Edge > API products** in the Drupal administration menu.
3. Click the **API product access** tab.  
**Note**: If you do not have write permissions for API products within your organization, the page will be read-only.
4. Optionally, configure the custom attribute name used to store the role assignments for the API product.  
 The attribute name defaults to `APIGEE_EDGE_APIPRODUCT_RBAC`.
5. Enable **Show API products with missing or empty attribute to everyone** to allow app developers access to API products if access is not otherwise specified. If this option is disabled, only users with the **Bypass API product access control** permission set can see API products with missing or empty attribute. (See [Override access permissions by role](#override).)
6. Configure access permissions for each API product, as required.  
**Note**: If you override the access permissions for a specific role, as described in [Overriding access permissions by role](#override), then the role will be selected by default. You will not be able to change the access permissions for the role unless you disable the permission override.
7. Click **Save configuration**.