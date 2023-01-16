Configure the desired behavior if a user attempts to register on the developer portal using an email address that already exists on Apigee Edge but not in Drupal.

Configuration options include:

* **Allow developer to register with the email address**. Display a notification message and send an email verification email link to register.
* **Do not allow developer to register with the email address**. Display an error message.

In each case, you can configure the message displayed to the user. If you select the first option, you can also configure the contents of the verification email.

In addition, you can configure the error message that is displayed to a Drupal user when attempting to _change_ an email address to one that already exists on Apigee Edge, but not in Drupal.

**Note**: The default message content will be used, if not modified.

To configure developer registration, select **Configuration > Apigee > Developers** and click the **Registration** tab.