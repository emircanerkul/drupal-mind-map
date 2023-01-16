---
url: https://www.drupal.org/docs/8/modules/braintree-cashier/creating-discounts
description: >-
  Visit the Braintree console and click "Add-ons / Discounts" in the left
  sidebar. Click the "New Discount" button. Fill in the required fields. You'll
  probably want to enter something in the optional "Discount ID" field instead
  of having it randomly generated. The "Discount ID" is what customers will need
  to input in the Coupon field of the sign-up form. Visit
  /braintree-cashier/discount-list and click the "Add Discount" button. Give an
  admin name for the coupon, choose an environment, and enter the "Discount ID"
  you recorded from step 3 above. Note that the Discount ID is case sensitive.
published_time: '2018-06-16T04:09:29+00:00'
modified_time: '2018-06-29T19:35:41+00:00'
---
1. Visit the [Braintree console](https://sandbox.braintreegateway.com/login) and click "Add-ons / Discounts" in the left sidebar.
2. Click the "New Discount" button.
3. Fill in the required fields. You'll probably want to enter something in the optional "Discount ID" field instead of having it randomly generated. The "Discount ID" is what customers will need to input in the Coupon field of the sign-up form.
4. Visit `/braintree-cashier/discount-list` and click the "Add Discount" button.
5. Give an admin name for the coupon, choose an environment, and enter the "Discount ID" you recorded from step 3 above. Note that the Discount ID is case sensitive. Choose the billing plans for which this discount code is valid. Make sure the discount has Published selected.
6. Save!

Customers should be able to enter this discount code in the "Coupon" field of the sign-up form.