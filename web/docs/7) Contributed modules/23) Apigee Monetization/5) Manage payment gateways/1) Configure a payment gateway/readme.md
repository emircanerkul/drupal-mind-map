To configure a payment gateway:

1. Select **Commerce > Configuration > Payment > Payment Gateways**.
2. Click **\+ Add payment gateway**.
3. Enter a unique and descriptive name for the payment gateway.
4. Select the type of payment gateway.  
 The payment gateways that are listed depend on those that you have installed, as described in [Install payment gateways](#install-payment-gateways).
5. Configure the payment gateway or select **Manual** to self-manage the payment processing.
6. Configure the payment gateway, as required.
7. If you selected **Manual**:  
   1. Enter a display name.  
    The display name is shown to app developers during checkout.  
   2. Enter instructions for customers to provide payment manually.  
    Click **About text formats** help link for more information. The payment instructions are displayed to app developers once they've completed
8. Configure conditional access to the payment provider:  
   1. Click **Customer** to restrict access by app developer role, email, or billing address.  
   2. Click **Order** to restrict access by current order total, currency, type, or store.  
   3. Click **Products** to restrict access by orders that contain specific API products, categories, types, or variation types.  
   4. Select whether **All conditions must pass** or **Only one condition must pass** in order to allow access.
9. In the **Status** section, enable or disable the payment gateway.
10. Click **Save**.