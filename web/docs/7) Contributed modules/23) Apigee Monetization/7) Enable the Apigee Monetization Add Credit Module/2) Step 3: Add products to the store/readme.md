Add products to the store to enable prepaid developers to add credit to their balance using a fixed or custom value. See also [Products](https://docs.drupalcommerce.org/commerce2/user-guide/products) in the Drupal Commerce documentation.

To add and configure products automatically:

1. From the Drupal administration menu, select **Reports > Requirements report**.
2. Click **Create product type**.  
![add-credit-product-type](https://www.drupal.org/files/add-credit-product-type.png)
3. At the prompt, click **Submit** to create the product type and variation.
4. Click **Create products**.  
![add-credit-product](https://www.drupal.org/files/add-credit-product.png)
5. Select the supported currencies for your products.
6. Click **Submit**.

Alternatively, you can add and configure products manually:

1. Select **Commerce > Configuration > Products > Product types**.
2. Click **\+ Add product type**.
3. Configure the product type details.
4. Ensure that you select **Enable Apigee Monetization Add Credit for this product type**.
5. Configure any additional properties for this product type.  
   1. The first three properties are enabled by default upon installation of the Commerce module, but may be unchecked if you wish to limit the number of product variations for a product type, remove product variation details from the display of your product, or require manual publishing of your product in your store.  
   2. You can also choose to **Skip cart and go directly to checkout for this product type** if you wish to eliminate the Cart message from your portal’s Add Credit page, and proceed directly to checkout.  
   3. Click **Save**.
6. Customize the **Add Credit** product type:  
   1. Select **Commerce > Configuration > Products > Product variation types**.  
   2. In the Operations column for the Add Credit product type, select **Manage display**.  
   3. Drag the **Product** field from the Disabled section to the first field position.  
   4. Drag **List price** to the Disabled section.  
   5. For the **Product** and **Price** fields, select **Hidden** in the Label column.  
   6. Click **Save**.  
   7. Select **Commerce > Configuration > Products > Product types**.  
   8. For the Add Credit product type, select **Manage display** in the Operations column.  
   9. For the **Variations** field, select **Hidden** in the Label column.  
   10. Click **Save**.
7. Add a product using the Add Credit product type:  
   1. Select **Commerce > Products**.  
   2. Click **\+ Add product**.  
   3. Click on the product type of the product you wish to create, i.e. your Add Credit product type.  
   4. Configure the title and description of the product. Ensure that **This is an Apigee add credit product** is selected.  
   5. Click **Save and add variations**.  
   6. Click **\+ Add variation**.  
   7. Enter a title, SKU and price details, and select **Published**.  
   8. Click **Save**.
8. Customize the “Add to Cart” checkout page display for Add Credit products:  
   1. Select **Commerce > Configuration > Orders > Order Item types**.  
   2. Select **Manage form display** from the Operations column for your Order Item type. **Note**: Your Order Item type may be named “Default,” depending upon your configuration.  
   3. Click the **Add to Cart** tab.  
   4. Drag and drop the **Unit Price** or other data fields from **Disabled** to the displayed field list, as desired.  
   5. Use the field widgets to display the appropriate values for each field, as desired. For example, you can use the **Unit Price** field widget to select the **price** or **unit price** value for display.  
   6. Click **Save**.