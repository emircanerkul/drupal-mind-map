---
url: >-
  https://www.drupal.org/docs/contributed-modules/apigee-monetization/manage-supported-currencies
description: >-
  As part of the initial configuration of the Monetization module, Apigee
  configures available currencies and the default currency supported by your
  organization. You can view the currencies that your organization supports, add
  supported currencies, or delete supported currencies through the Apigee UI, or
  through your Drupal developer portal. To manage supported currencies and set
  the default currency for your organization in the Apigee UI, see Managing the
  organization profile using the UI.
published_time: '2021-10-26T22:37:55+00:00'
modified_time: '2021-10-26T22:38:54+00:00'
---
As part of the initial configuration of the Monetization module, Apigee configures available currencies and the default currency supported by your organization.

You can view the currencies that your organization supports, add supported currencies, or delete supported currencies through the Apigee UI, or through your Drupal developer portal.

To manage supported currencies and set the default currency for your organization in the Apigee UI, see [Managing the organization profile using the UI](https://docs.apigee.com/api-platform/monetization/edit-organization-profile#ui).

To manage supported currencies from your Drupal Developer portal:

1. Log in to your developer portal using Admin credentials.
2. Go to **Commerce > Configuration >** **Store > Currencies**  to view and manage your currencies, as shown in the figure below: ![Image of currencies screen in UI](https://www.drupal.org/files/currencies.png)

To add a new currency:

1. Click **\+ Add currency.**
2. Select an available currency from the scrolling list.
3. Click **Add**.

To add a new currency that does not appear in list of available currencies:

1. Click **\+ Add custom currency.**
2. Fill out the required fields, as described in the table below:  
| **Name**            | The name of the currency.                                                                          |  
| ------------------- | -------------------------------------------------------------------------------------------------- |  
| **Currency Code**   | The I[SO 4217](https://www.iso.org/iso-4217-currency-codes.html) alphabetic code for the currency. |  
| **Numeric Code**    | The [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) numeric code for the currency.    |  
| **Symbol**          | The graphic symbol used to represent the currency.                                                 |  
| **Fraction digits** | The number of digits permitted after the decimal sign.                                             |
3. Click **Save.**  
**Note**: When you add a currency to an Apigee-X connected portal, the **Add Credit** button is enabled in the developer portal by default. For information on enabling the **Add Credit** button for Apigee-Edge connected portals, or enabling the Add Credit button without adding a currency, see [Add an Add Credit button to your prepaid balance page](https://www.drupal.org/docs/contributed-modules/apigee-monetization/enable-the-apigee-monetization-add-credit-module#step-4-add-an-add-credit-button)**.**

To edit a currency:

1. Click **Edit**  in the **OPERATIONS** column for the currency you wish to update.
2. From the dropdown list, select **Edit** to return to the currency details page.
3. After editing, click **Save.**

To delete a currency:

1. Click **Edit**  in the **OPERATIONS** column for the currency you wish to delete.
2. From the dropdown list, select **Delete**.
3. On the confirmation page, click **Delete.**

**Note:** A currency that is in use by a developer or rate plan can **not** be deleted from the developer portal.