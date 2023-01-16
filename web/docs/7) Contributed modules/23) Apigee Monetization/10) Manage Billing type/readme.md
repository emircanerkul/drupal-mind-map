---
url: >-
  https://www.drupal.org/docs/contributed-modules/apigee-monetization/manage-billing-type
description: >-
  Monetization in Apigee supports the following account types: A prepaid
  developer pays in advance for the use of your API products. Funds are deducted
  from a prepaid developer's balance when the API product is used. See Manage
  prepaid account balances. A postpaid developer is billed monthly (through an
  invoice) for the use of your API products. See Managing postpaid balances. If
  you have an Apigee Edge-connected developer portal, the billing type cannot be
  managed through the portal but must be set for an organization as described in
  Configure prepaid and postpaid billing types using the API.
published_time: '2021-10-26T22:47:49+00:00'
modified_time: '2021-10-26T22:49:43+00:00'
---
Monetization in Apigee supports the following account types:

* A **prepaid** developer pays in advance for the use of your API products. Funds are deducted from a prepaid developer's balance when the API product is used. See [Manage prepaid account balances](https://docs.apigee.com/api-platform/monetization/manage-prepaid-balances).
* A **postpaid** developer is billed monthly (through an invoice) for the use of your API products. See [Managing postpaid balances](https://docs.apigee.com/api-platform/monetization/manage-postpaid-balances).

If you have an Apigee Edge-connected developer portal, the billing type cannot be managed through the portal but must be set for an organization as described in [Configure prepaid and postpaid billing types using the API.](https://docs.apigee.com/api-platform/monetization/edit-organization-profile#billing-type-api)

If you have an Apigee X or hybrid-connected developer portal, the billing type for developers can be managed as an admin in the developer portal with the appropriate permissions.

By default, the billing type for developers in a developer portal is set to **Postpaid**. The billing type of a developer can be viewed in the developer's **Profile** details. Portal admins can update the billing type as desired, by following the steps described below. 

To manage the billing type of an individual developer using the portal:

1. Sign in to the developer portal with admin credentials.  
**Note**: Only admins with the permission "Update any billing type" can view the Billing Type tab on the **My Account** screen.
2. Go to **People** in the admin toolbar and select the name of the developer's account to be edited.
3. Click **My account**.
4. Select **Billing type** from the drop-down list of available options.
5. Select either **Postpaid** or **Prepaid** to set the billing type of the developer.
6. Click **SAVE CHANGES.**

To manage the billing type of all developers at an organization level using the portal:

1. Sign in to the developer portal with admin credentials.
2. Go to **Configuration > Apigee Monetization> General> Settings.**
3. Select either **Postpaid** or **Prepaid** to set the billing type for all developers in the organization.
4. Click **Save configuration**.