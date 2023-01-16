---
url: https://www.drupal.org/docs/8/modules/braintree-cashier/module-overview
description: >-
  This module creates three content entities. Billing Plan Entity It serves
  three purposes Creates a template from which to create subscriptions. The
  template contains the following information, which is copied to subscription
  entities created from a purchase of this billing plan: Which Drupal Roles to
  grant a subscriber. Which Drupal Roles to revoke when the subscription has
  expired. Presents pricing and a description of the plan to users. Contains the
  Braintree Plan ID of the plan in the Braintree Console. The price entered in
  the Braintree Console is the price that will be charged.
published_time: '2018-02-12T04:26:38+00:00'
modified_time: '2018-09-14T17:42:02+00:00'
---
This module creates three content entities.

### Billing Plan Entity

It serves three purposes

1. Creates a template from which to create subscriptions. The template contains the following information, which is copied to subscription entities created from a purchase of this billing plan:  
   * Which Drupal Roles to grant a subscriber.  
   * Which Drupal Roles to revoke when the subscription has expired.
2. Presents pricing and a description of the plan to users.
3. Contains the Braintree Plan ID of the plan in the Braintree Console. The price entered in the Braintree Console is the price that will be charged. Prices entered on the Billing Plan entity are for display purposes only.

### Subscription Entity

* References a user entity.
* Records the status of a user's subscription.
* Records the Braintree subscription ID provided by the Braintree API. This is used to find the subscription when a webhook is received from Braintree notifying that the subscription has expired.
* When a user cancels their subscription, if they gave a reason for cancelling, this is recorded on the subscription entity.

Changes to a billing plan have no effect on Subscription entities created by that plan. If the Drupal Roles granted or revoked are adjusted for a Billing Plan from which Subscription entities have already been created, then if those same adjustments are needed for those existing subscriptions then each subscription would need to be manually edited.

### Discount Entity

* Enables a fixed amount coupon code to be entered at checkout.
* The coupon code is valid only for Billing Plan Entities that the Discount Entity references.
* Contains the ID of the discount in the Braintree Console.