### Enabling Contact module

To enable the Contact module:

1. Navigate to the Modules administration page _**Menu > Extend**_ or `http://example.com/admin/modules`
2. In the Core module section, enable the Contact module.
3. Click Save configuration.

### Configuring the site-wide Contact form

1. Navigate to the Contact Form administration page (_**Menu > Structure > Contact forms**_ or `http://example.com/admin/structure/contact`)
2. Click "Add contact form" and enter the following information:
* Label: Enter a title.
* Recipients: Enter one or more email addresses. Separate each address with a comma.
* Auto-Reply: Enter an optional response such as an acknowledgement of receipt. Leave this field empty if you do not want to send an automated response.
* Weights: Set the order in which the contact forms will be displayed.
* Selected: Specify whether you want this contact form selected by default.
* Click "Save".
* This form will render at /contact. It can also be rendered as a block using the [contact\_block](https://www.drupal.org/project/contact%5Fblock) module.

### Configure the user Contact form

1. Navigate to the Account Settings page (_**Administration > Configuration > People > Accounts**_ or `http://example.com/admin/config/people/accounts)`
2. In the Contact settings section specify whether the contact form is enabled for users by default.
3. Click "Save configuration."

### Controlling repeat submission blocking (flood control)

To prevent spam and other abuse, there are hard-coded limits on how frequently contact forms can be submitted. In Drupal 8+, you can view the current/default settings with a drush command:

```php
drush config-get contact.settings
```

You can change the submission limit and the time limit for resetting flood restriction with another drush command:

```php
drush cedit contact.settings
```

Menu link

If you want your contact form to appear in a menu, go to Structure → Menus → Footer. Click on the "Enabled" checkbox at the right of the Contact item, click on "Save" at the bottom. For other edit options click on "edit" at the right of the Contact item, and in "Parent link" you can choose a different menu if you prefer. Thanks to the "weight" you can choose where the item will appear in the menu. The heavier the item the lower it will appear (for a vertical menu) or more to the right for a horizontal menu. Don't forget to click on "Save". No matter which menu you choose, you can move the Contact item to the location you want by dragging and dropping its handle in the form of arrowed cross, on the left. This will change the item weight. Don't forget to click on "Save". If you want to translate the menu item for your contact form, do it with the interface translation feature of the contributed module "internationalization": see [HowTo: Basic Internationalization setup.](https://drupal.org/node/1268692)