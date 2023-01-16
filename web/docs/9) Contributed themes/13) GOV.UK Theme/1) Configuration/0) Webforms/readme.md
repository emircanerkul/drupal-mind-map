The theme includes full client side GOV.UK validation for Webform required fields. In order to enable this functionality, HTML5 client side validation needs to be disabled.

In the administration view of your Webform, select the "Settings" tab and then select "Form". Scroll down to the "FORM BEHAVIORS" section and check the "Disable client-side validation" checkbox as below:

![Config3](https://www.drupal.org/files/config3.png)

If the user does not complete a required field (or other validation rule fails) then the GOV.UK validation error CSS is applied as below:

![Config4](https://www.drupal.org/files/config4.png)

Along with the "There is a problem" box at the top of the page:

![Config5](https://www.drupal.org/files/config5.png)

The "Enter the first line of your address" text is the normal Webform "Required message" under the "Form validation" section.

For Composite Elements like the Address element, the required error message must be added as custom properties under the "Advanced" tab as below:

![Config6](https://www.drupal.org/files/config6.png)

The field name is composed of the field ID, 2 underscores and "required\_error" as above.