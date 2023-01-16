The tests expect certain things to exist in the [Braintree Sandbox](https://sandbox.braintreegateway.com). First, follow instructions in the "Configure the Braintree Console" section of the [installation walkthrough](https://www.drupal.org/docs/8/modules/braintree-cashier/installation-walkthrough), then please add the following:

### Plans

Add plans by visiting the "Plans" link in the left sidebar below the Recurring Billing section, and select "New". Everything not mentioned below should be left at their defaults, and the Plan Name can be anything.

#### CI Monthly

* Plan ID => `ci_monthly`
* Price => 12.00
* Billing Cycle Every 12 Month(s)

#### Processor Declined

* Plan ID => `processor_declined`
* Price => 2000.00
* Billing Cycle can be anything.

### Discounts

Add a discount by navigating to the "Add-ons / Discounts" link in the left sidebar of the Braintree Sandbox, and select "New Discount".

#### CI Coupon

* Discount ID => `CI_COUPON` (note: this one is upper case)
* Amount => 3
* The name can be anything, and the duration should be left at it's default "For Duration of Subscription".