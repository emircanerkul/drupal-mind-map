Once the OpenAPI spec is added to the developer portal as an API Doc, it is rendered on its own API Doc page using Apigee SmartDocs, which is an Angular application that is embedded in the API Doc page. However, you can use other rendering formats, such as the Swagger UI Field Formatter, to display documentation within your API Catalog.

For example, to render the OpenAPI spec using Swagger UI:

1. Install and enable the [Swagger UI Field Formatter](https://www.drupal.org/project/swagger%5Fui%5Fformatter) module.
2. Install the Swagger UI JS library as documented [on the module page](https://www.drupal.org/project/swagger%5Fui%5Fformatter).
3. Log in to your portal as a user with admin or content creation privileges.
4. Go to **Structure > API Doc settings > Manage** **display** in the admin menu.
5. Change the **OpenAPI specification** field format to use the Swagger UI field formatter.
6. Click **Save**.