You can configure the access permissions in Apigee Edge by modifying the value of the `DRUPAL_RBAC` custom attribute for an API product.

**Note**: You can customize the custom attribute name used to store access permissions, as described in [Configure access permissions to API products individually](#by-apiproduct).

To configure access permissions in Apigee Edge:

1. Edit the API product in Apigee Edge. See [Editing an API product in the Apigee Edge documentation.](https://docs.apigee.com/api-platform/publish/create-api-products#editinganapiproduct)
2. In the Custom attributes section, update the **Value** field for the custom attribute used to store access permissions (for example, `DRUPAL_RBAC`). For example:  
![apigee edge product custom attribute](https://www.drupal.org/files/apigee-edge-custom-attribute-updated.png)
3. Click **Save**.