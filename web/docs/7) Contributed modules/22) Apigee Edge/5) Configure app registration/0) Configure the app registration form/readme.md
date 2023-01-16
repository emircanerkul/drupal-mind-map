Configure the app registration form, including the fields displayed and how a developer associates an API product with an app. Configure app registration for developer apps and team apps.

![Configure app registration](https://www.drupal.org/files/myapps.png)

Configure the app registration form as described in the following sections:

* [Manage the displayed and required fields](#managing-the-displayed-and-required-fields)
* [Manage the order and appearance of fields in the form](#managing-the-order-and-appearance-of-fields-in-the-form)
* [Configure how a developer associates API products with an app](#configuring-how-a-developer-associates-api-products-with-an-app)
* [Allow app developers to select a single API product only](#allow-app-developers-to-select-a-single-API-product-only)
* [Configure the alias used to refer to applications](configure-aliases) in the developer portal

### Manage the displayed and required fields

A developer [registers an app](how-app-developers-interact-with-the-apigee-edge-module#registering-an-app) by clicking **Add app** on the My Apps page or **Add team app** to add a teams app and completing the developer or team app registration form. 

Manage the fields that are available and required for app registration for:

* **Developer apps** by selecting **Configuration > Apigee Edge > Apps > Developer Apps** to display the Developer Apps configuration page and clicking the **Manage fields** tab.
* **Team apps** by selecting **Configuration > Apigee Edge > Apps > Team Apps** to display the Team Apps configuration page and clicking the **Manage fields** tab.

![Manage fields](https://www.drupal.org/files/manage-fields-v2.png)

As highlighted in the previous figure, you can perform the following tasks from the Manage fields tab:

* [Add a field](#adding-a-field)
* [Manage fields](#managing-fields)
* [Configure the base fields](#configuring-the-base-fields)

#### Add a field

You add fields to the app registration form to prompt the developer to provide additional information such as a customer ID, the target platform of the app, or other information that can serve as a custom attribute of the app. The additional form fields can be:

* Required or optional
* Displayed by different HTML elements, such as text boxes, radio buttons, check boxes, and more
* Can be set to appear anywhere on the form between the Callback URL field and the Product field

When you add new fields to the app registration form, the field values are automatically uploaded to Apigee Edge, along with all the other fields, when the developer registers and submits the form. You can view or modify those fields on Apigee Edge, or use the Apigee Edge management API to access those fields from a script. The new field values appear as custom attributes with a name that corresponds to the field's internal name. Field values of the following field type are saved in CSV format (other field types are stored as JSON):

* Boolean
* Numbers (integer, float, decimal)
* List (integer, float, decimal)
* Text (plain)
* Text (plain, long)

To add a new field to the app registration form:

1. Click **Add field**.
2. Select the field type in the **Add a new field** drop-down.
3. Enter a label for the field.  
Optionally, click **Edit** to edit the internal name of the field.
4. Click **Save and continue**.
5. Configure the field by setting the options on the following tabs:  
**Note**: The configuration options vary based on the field type selected.  
| **Use this tab...** | **To configure...**                                                                                      |  
| ------------------- | -------------------------------------------------------------------------------------------------------- |  
| Edit                | Information about the field, such as label, help text, default value, whether it is required, and so on. |  
| Field settings      | How data in the field is stored, such as the total number of values that can be specified, and so on.    |
6. Click **Save settings** on the Edit tab or **Save field settings** on the Field settings tab to save the field. To delete the field without saving, click **Delete** on the Edit tab.

#### Managing fields

To manage a field, select one of the following from the Operations menu associated with the field:

* **Edit** \- Edit the field information.
* **Storage Settings** \- Edit how data in the field is stored.
* **Delete** \- Delete the field.

#### Configuring the base fields

The following base fields are displayed in the app registration form, by default:

| **Base field** | **Description**                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| App name       | Name of the application.                                                                                                                                                             |
| Description    | Description of the application.                                                                                                                                                      |
| Callback URL   | External site to which an app consumer is redirected to log in when using three-legged OAuth. Valid values must be prefixed with one of the following protocols: http:// or https:// |

To configure the base fields:

1. In the Base field settings section, configure whether each field is required or optional.
2. Click **Save** to save the new settings.

### Manage the order and appearance of fields in the form

A developer [registers an app](how-app-developers-interact-with-the-apigee-edge-module#registering-an-app) by clicking **Add app** on the My Apps page or **Add team app** on the Teams Apps page and completing the developer or team app registration form. If you are using the Kickstart distribution, you can click **Add app**  on the Apps page.

Manage the order and appearance of the fields displayed on the app registration form for:

* **Developer apps** by selecting **Configuration > Apigee Edge > Apps > Developer Apps** to display the Developer Apps configuration page and clicking the **Manage form display** tab.
* **Team apps** by selecting **Configuration > Apigee Edge > Apps > Team Apps** to display the Team Apps configuration page and clicking the **Manage form display** tab.

![Manage form display](https://www.drupal.org/files/manage-form-display-v2.png)

To manage the app registration form display, configure the following settings for each field, and click **Save**.

| **Setting**                     | **Description**                                                                                                                                                                                                                                                                                                |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Drag icon](/files/drag_1.png) | Rearrange fields. Click and hold the drag-and-drop handle and drag the field to the desired location. To disable a field, drag it into the Disabled section.**Note**: If you click **Show row heights**, you can change the order of fields by weight. In this case, lower values appear before higher values. |
| Widget                          | Select the widget to be used for the field from the drop-down menu (if there are multiple options).                                                                                                                                                                                                            |
| ![Gear](/files/gear.png)        | Configure the widget properties and click **Update** to save the changes. A quick summary of the configured properties are displayed. For example: Textfield size: 60                                                                                                                                          |

### Configure how a developer associates API products with an app

A developer associates API products with an app when [registering an app](how-app-developers-interact-with-the-apigee-edge-module#registering-an-app).

Configure how a developer associates API products with an app, including the following:

| Option                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display the API Product widget as a select box | Control the HTML element that appears on the app registration form that the developer uses to select the API product. Options include: Dropdown lists. Checkboxes or radio buttons. Checkboxes appear when the developer can select multiple API products and radio buttons appear when the developer can select only a single API product. **Note**: By default, developers can select multiple API products. You can restrict developers to select only a single API product, using drush, as described in [Allow app developers to select a single API product only](#allowing-app-developers-to-select-a-single-API-product-only). |
| Let users select the product(s)                | Select to enable developers to deselect the default API products when registering an app. If disabled, administrators must configure at least one default API product that will be selected for all developers by default. This ensures that at least one API product is selected.                                                                                                                                                                                                                                                                                                                                                     |
| Default API Products                           | Associate one or more API products to all apps, by default.**Note**: If **Let users select the product(s) is disabled, you must select at least one API product.**                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

To configure how a developer associates API products with an app:

1. Select **Configuration > Apigee Edge > Apps > General** to display the Apps configuration page.
2. Click the **API Product associations** tab.
3. Configure the desired options.
4. Click **Save configuration**.

### Allow app developers to select a single API product only

By default, app developers can select multiple API products when [registering an app](how-app-developers-interact-with-the-apigee-edge-module#registering-an-app).

To configure the Apigee Edge module to allow developers to select a **single API product only**, execute the following Drush command:

```php
drush config-set apigee_edge.common_app_settings multiple_products 0 
```

If any app developers had selected multiple API products before you enforce single API product selection, the next time that they edit the app they will be prompted to select a single API product, as follows:

`Developer Apps status now require selection of a single API; multiple API selection is no longer supported. Confirm your API selection below.`

To reconfigure the Apigee Edge module to allow developers to select multiple API products, execute the following Drush command:

```php
drush config-set apigee_edge.common_app_settings multiple_products 1 
```