---
url: >-
  https://www.drupal.org/docs/contributed-modules/braintree-cashier/installation-walkthrough
description: >-
  Let's install and configure the subscription management module Braintree
  Cashier. This walkthrough will setup processing in the sandbox environment.
  Install Braintree Cashier using composer require drupal/braintree_cashier,
  then enable Braintree Cashier and its dependencies. Setup Braintree API Setup
  the Braintree API module using the instructions on the project page.
  Configuration according to your web host Depending on whether your web host
  supports PHP's intl extension, you will need one of the following
  configurations.
published_time: '2018-02-12T04:27:43+00:00'
modified_time: '2021-02-17T13:36:11+00:00'
---
Let's install and configure the subscription management module [Braintree Cashier](https://www.drupal.org/project/braintree%5Fcashier). This walkthrough will setup processing in the sandbox environment. Install Braintree Cashier using `composer require drupal/braintree_cashier`, then enable Braintree Cashier and its dependencies.

### Setup Braintree API

Setup the [Braintree API](http://drupal.org/project/braintree%5Fapi) module using the instructions on the project page.

### Configuration according to your web host

Depending on whether your web host supports PHP's `intl` extension, you will need one of the following configurations. Check whether this extension is installed by visiting `/admin/reports/status/php` and searching for `intl`.

1. Yes, PHP's [intl](http://php.net/manual/en/intl.installation.php) is supported, and PHP has version 5.6+: nothing to do! Carry on to configuring the Braintree Console.
2. No, PHP's `intl` is not supported. No problem, just do a few things.  
   1. Make sure PHP is version 7.1.3+  
   2. Run `composer require symfony/intl` to install the package suggested in Braintree Cashier's `composer.json. `Symfony's [intl](http://symfony.com/doc/current/components/intl.html) is made to substitute for the PHP `intl` extension.  
   3. Visit the Braintree Cashier settings page and select "Force using the _en_ locale" since the Symfony package supports only the _en_ locale. You can still use any currency you like, but it'll just be displayed as it would be in English.

### Configure the Braintree Console

1. In preparation for integrating a sandbox PayPal account, follow [these instructions](https://developers.braintreepayments.com/guides/paypal/testing-go-live/php#linked-paypal-testing) for creating a PayPal app in your sandbox PayPal account.
2. Log into your sandbox [Braintree Console](https://sandbox.braintreegateway.com)
3. Visit Settings -> Processing
4. If you're accepting PayPal, enter your PayPal app API credentials in the PayPal section, then enable the PayPal payment method.
5. Visit Settings -> Fraud Management and enable "Fraud Protection" under the "Advanced" section. Also review the Fraud Tools settings and in the "Basic" section and modify according to your needs.
6. Enable "Card Verification" in the Processing -> "Vaulting" section.
7. Enable Duplicate Transaction Checking under Processing -> Transactions.
8. Scroll down and select "Options" beside the "Recurring Billing" section.  
   * You'll probably want to enable proration.  
   * You'll probably want to enable some retries on failed payment.
9. Visit Settings -> API -> Webhooks
10. Select "Create New Webhook", and create a webhook to the path `https://[your-domain]/braintree/webhooks`. For testing locally you might wish to use [ngrok](https://ngrok.com/) to tunnel webhooks from the sandbox to your local machine. Adjust the domain for your webhook according to the domain provided by ngrok.  
   * Select **Expired, Canceled,** and **Trial Ended** from the list of Notifications.
11. Since it's important, it bears repeating. **Be sure to configure the webhooks** as explained in the two steps above, since the failure to do so will make Drupal unaware that a subscription has expired in Braintree.

### Create a Braintree Plan

1. Log into your sandbox [Braintree Console](https://sandbox.braintreegateway.com)
2. Select "Plans" under the Subscriptions section.
3. Click the "New" button.
4. Enter a plan id, and write it down since you'll enter this in the Drupal website later.
5. The price entered here will be the price that is charged to the customer, regardless of what is entered later in the Drupal website.
6. Optionally enter a trial period.
7. Braintree Cashier has been tested with "Bill Immediately" for the first bill date.
8. Choose your desired number of billing cycles.
9. Save.

### Configure the Braintree Cashier module

1. Visit `/admin/braintree-cashier/settings `on your Drupal site.
2. Enter the three letter currency code if you're not using USD. Keep in mind that the currency setting here is for display purposes only. The setting here has no effect on your Braintree account, and it has no effect on which currency is charged to your customer. Your customer is always charged in the currency of your default [Braintree merchant account.](https://articles.braintreepayments.com/control-panel/important-gateway-credentials#merchant-account-id)
3. If you're not using free trials you can enter "0" for the _Free Trial Notification Period_ to prevent periodically checking the Braintree API on cron runs for free trials about to end.
4. The Invoice Business Information is displayed on customer invoices when they review their transaction history with your website. Enter your business name and address.
5. Adjust other settings explained on the settings page to suit.

### Recommended configuration for user registration

At `/admin/config/people/accounts` in the "Registration and Cancellation" section:

1. "Who can register account?" should be set to **Visitors**
2. Remove the checkbox from "Require email verification when a visitor creates an account"

### Create a Billing Plan Entity

1. Click "Add Billing Plan" on `/admin/braintree-cashier/braintree_cashier_billing_plans` on your Drupal website.
2. Fill in the name, description, price, long description, and call to action.
3. Select "Sandbox" for the environment.
4. For the Braintree Plan ID, enter the ID you wrote down earlier that was entered in the Braintree Console for the Braintree Plan to which this Billing Plan Entity corresponds.
5. Select the Drupal Role(s) to assign upon checkout, and revoke upon subscription expiration.
6. Save.

### Display the Billing Plan Entities

By default, there is a View which provides the page at url `/plans--sandbox` which displays all of the enabled Billing Plan Entities in the sandbox environment. The `/plans` url displays the Billing Plan Entities in the production environment, and by default, a "Plans" menu item is placed by this View in your site main navigation. The ouput will need some styling. Notice that the View outputs Billing Plan Entities with the "Overview" display mode. This is helpful since `template_preprocess_billing_plan()` will output the call to action text as a URL with a `plan_id` query parameter that provides a more convenient checkout experience for users. `template_preprocess_billing_plan()` will do this only when the Billing Plan Entity is displayed with the "Overview" view mode.

### The checkout flow

Checkout always happens at `/signup`. The user selects a plan from the drop-down select list showing the "Description" field from each enabled Billing Plan Entity of the current environment (ie. sandbox/production). They may optionally enter a coupon code and optionally click the "Confirm Coupon" button. Then they enter a payment method (Card or PayPal), and click the "Sign Up" button to complete the checkout. Users must be logged in in order to reach the signup page.

For the checkout flow description, let's consider the most typical case where a user is anonymous and doesn't yet have an account with the Drupal website.

#### Recommended: Display Billing Plans with the _Overview_ display mode

1. Billing Plan Entities are displayed as entities with the "Overview" display mode. The provided default View at the `/plans--sandbox` path does this. As such, the call to action text is displayed as a link with the plan\_id query parameter, which is the numeric Drupal entity ID of the Billing Plan Entity. The link has the pattern `/signup?plan_id=1`, for example.
2. The user clicks the call to action link.
3. Since the signup page requires a user to be logged in, the user is automatically redirected to the account creation page at `/user/register`. The event subscriber which does this redirect, `\Drupal\braintree_cashier\EventSubscriber\KernelRequestSubscriber`, also saves the plan ID from the query parameter in the user's session.
4. After creating an account, or after logging in if they happen to already have an account, Braintree Cashier's implementation of `hook_user_login()` will redirect the user to `/signup?plan_id=1` with the plan\_id query parameter appended by retrieving it from the user's session. By implementing this redirect in `hook_user_login()`, this checkout flow is compatible with account creation using [Social Auth](https://www.drupal.org/project/social%5Fauth).
5. Upon arriving at the signup page, the plan\_id query parameter controls which Billing Plan is selected by default in the plan select list. The user may change their mind and select a different plan if they wish.
6. The user optionally enters a coupon code, then enters a payment method, and clicks the "Sign Up" button.
7. After successfully charging the payment method, the user is redirected to the "Subscription" tab of their user profile and a message is displayed using `drupal_set_message()` to confirm signup.

#### Alternative: Display custom links to `/signup`

A site builder/developer might wish to create their own links to `/signup` without using the provided default View at `/plans` or `/plans--sandbox`. This may be done with, or without, the plan\_id query parameter. Without the plan\_id query parameter, the Plan select list on the signup page will by default have the Billing Plan with the lowest weight selected. Also, without the plan\_id query parameter, Braintree Cashier's implementation of `hook_user_login()` will not redirect the user to `/signup`.

### Theming the Billing Plan _Overview_ display mode

Copy `templates/billing_plan--overview.html.twig` to your custom theme, and modify as required.

The user should have the Drupal Role(s) that were configured for the Billing Plan Entity that they chose during checkout. There should be a transaction listed on the **Invoices** sub-tab of the **Subscription** tab displayed above their user profile. The **Invoices** tab should also display the date and amount of their next recurring charge. The **My Subscription** tab should display the name of their current subscription, which is the name field of the Billing Plan Entity. The **My Subscription** tab will also give a select list of billing plans for them to choose from if they wish to switch plans.The **Payment Method** tab gives the option of replacing their payment method using Braintree's Drop-in UI.

### Subscription Cancellation

The **Cancel** sub-tab of the **Subscription** tab shown on the user profile enables canceling a user's subscription. After clicking _Cancel_ the module first presents a text area in which a user may optionally enter a reason for canceling, and subsequently displays a cancellation confirmation. After confirming cancellation the user's subscription is still valid until the end of the current billing period for which they have already paid, or until the end of the current free trial period. The Subscription Entity will be marked "Cancel at period end", which can be confirmed by editing the Subscription Entity at `/admin/braintree-cashier/subscriptions` and inspecting the checkbox beside "Cancel at period end". At the end of the current billing period, a [WebHook](https://developers.braintreepayments.com/reference/general/webhooks/subscription/php) will be received from Braintree indicating expiration of this subscription. Webhooks from Braintree are queued for processing upon cron runs. Using a `QueueWorker` is necessary to avoid a race condition where a cancellation webhook is received to cancel a subscription that is currently in the process of being canceled locally. Braintree sends webhooks instantly. Upon processing the webhook, the Subscription Entity will have its status set to "Canceled", and the user will have the Drupal Role(s) revoked that are configured on the Subscription Entity (which is a configuration copied from the Billing Plan Entity used as a template to create this Subscription).

### Emails to customers

Braintree Cashier relies mostly on Braintree to send emails to customers.

1. Visit Settings -> Processing -> Transactions and enable Email Receipts. This works only in the Production environment.
2. In the left sidebar in the Recurring Billing section, visit **Email Notifications.** Configure the email notifications related to declined recurring payments.

#### Email notification for free trial ending

To configure the email sent a configurable number of days prior to a free trial ending, visit `/admin/structure/message` and edit the "Free Trial Expiring Notification" message template.

### Cron

If running cron using Drush, be sure to include the `uri` option in order for tokens inserted into the free trial ending notification emails to contain the correct domain. Otherwise, the domain will be <http://default>. For example, you could run drush as `drush core-cron --uri=https://my-domain.com`.

### Going Live

You should make your website accessible only by HTTPS.

### Credit Card Dropin UI Panel and Advanced Aggregation

The credit card panel for the signup page of this module is a JavaScript loaded externally from Braintree. The script must be loaded over HTTPS; however, if you have Advanced Aggregation (AdvAgg) installed the URL could be changed so that the protocol for external resources are platform relative. What this means is that if your site happens to not be on HTTPS (you are using HTTP) the JavaScript will attempt to be loaded over HTTP. Braintree could block the loading of the JavaScript which will prevent the credit card dropin UI from loading. To stop this from happening within the "Obscure Options" of AdvAgg the option for "Convert absolute paths to be protocol relative paths." needs to be disabled.

In production, your site should be using HTTPS but in a protected development environment you may not be using HTTPS. It is in this use case that this issue may affect you.

![](https://www.drupal.org/files/braintree_cashier-installation_walkthrough-advagg_setting.png)

### Adding the money icon

Since 3rd party assets can't be included directly in the repository, the fontawesome money icon to the left of "Braintree Cashier" in the top level menu needs to be installed manually:

1. `cd` to the module directory. (Ensure you have [npm](https://www.npmjs.com/get-npm) installed).
2. `npm install`
3. `npm run install-icons`
4. Confirm that the `node_modules` directory is empty since the `fontello-svg` package has insecure dependencies. The `install-icons` script is meant to automatically remove `fontell-svg` and it's dependencies after installing the icon.

### Conclusion

That should do it! When you're ready to apply for a Braintree Production account, schedule at least a week to complete their application process. Good luck with your project, and I hope you find Braintree Cashier helpful!