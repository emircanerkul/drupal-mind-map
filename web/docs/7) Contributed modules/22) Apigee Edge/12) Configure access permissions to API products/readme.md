---
url: >-
  https://www.drupal.org/docs/contributed-modules/apigee-edge/configure-access-permissions-to-api-products
description: >-
  Configure access permissions to API products in one of the following ways:
  Configure access permissions to API products by visibility Configure access
  permissions to API products individually Configure access permissions to API
  products using Apigee Edge Note: You must have write permission for API
  products within your organization in order to configure the access permissions
  in Drupal. You can also override access permissions by role. In this case, the
  role will be selected by default.
published_time: '2018-06-06T17:54:31+00:00'
modified_time: '2021-02-05T21:05:45+00:00'
---
Configure access permissions to API products in one of the following ways:

* [Configure access permissions to API products by visibility](#by-visibility)
* [Configure access permissions to API products individually](#by-apiproduct)
* [Configure access permissions to API products using Apigee Edge](#edge)

**Note**: You must have write permission for API products within your organization in order to configure the access permissions in Drupal.

You can also [override access permissions by role](#override). In this case, the role will be selected by default. You will not be able to change the access permissions for the role unless you disable the permission override.

If you disable access permissions for a particular role, app developers assigned to that role will not be able to view the API product when [registering an app](how-app-developers-interact-with-the-apigee-edge-module#registering-an-app). Optionally, you can manage API products on behalf of the app developers from the Apigee Edge Administration UI, as described in [Managing API products](https://docs.apigee.com/api-platform/publish/creating-apps-surface-your-api#managingapiproducts).

**Note**: By default, public API products are visible to app developers.