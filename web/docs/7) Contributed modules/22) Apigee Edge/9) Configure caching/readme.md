---
url: https://www.drupal.org/docs/8/modules/apigee-edge/configure-caching
description: >-
  To improve performance, you can configure the caching of specific data on the
  developer portal, including application, API product, and developer data.
  Caching data reduces the number of API calls required when displaying specific
  values. Note: By default, caching is set to 900 seconds for application, API
  product, and developer data. Set the caching value to: n where n specifies the
  number of seconds that you want to cache the data. -1 to use cached data until
  the value has been updated on the developer portal, ignoring any changes made
  on Apigee Edge or another external application.
published_time: '2018-05-12T13:11:06+00:00'
modified_time: '2020-05-07T22:28:05+00:00'
---
To improve performance, you can configure the caching of specific data on the developer portal, including application, API product, and developer data. Caching data reduces the number of API calls required when displaying specific values.

**Note**: By default, caching is set to 900 seconds for application, API product, and developer data.

Set the caching value to:

* **_n_** where _n_ specifies the number of seconds that you want to cache the data.
* **\-1** to use cached data until the value has been updated on the developer portal, ignoring any changes made on Apigee Edge or another external application.
* **0** to disable caching of the data.

To configure caching:

1. To configure the caching of:  
   * **Developer application data**, select **Configuration > Apigee Edge > Apps > Developer Apps** to display the Developer Apps configuration page.  
   * **Team application data**, select **Configuration > Apigee Edge > Apps > Team Apps** to display the Team Apps configuration page.  
   * **API product data**, select **Configuration > Apigee Edge > API Products** to display the API Product configuration page.  
   * **Developer data**, select **Configuration > Apigee Edge > Developers** to display the Developer configuration page.
2. Click the **Caching** tab.
3. Enter a value in the **Expires** field.
4. Click **Save configuration**.
5. To invalidate currently cached data, click **Invalidate cache**.