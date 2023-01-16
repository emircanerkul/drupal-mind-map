Adding AJAX callback events to form fields allows to dynamically update fields and other markup, while users interact with the forms.

More general information about Drupal and Ajax can be found at [Drupal Ajax API Guide](/docs/8/api/ajax-api) and[ Drupal's Ajax API documentation (at api.drupal.org)](https://api.drupal.org/api/drupal/core%21core.api.php/group/ajax/9.4.x).

**AJAX callback functions on forms can be used to:**

* Update existing or add new form fields,
* update values in form fields
* execute a variety of predefined [AJAX commands](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Ajax%21CommandInterface.php/interface/implements/CommandInterface) or
* run custom JavaScript code

If you simply want to create [conditional form fields](/docs/8/api/form-api/conditional-form-fields) that can be shown, hidden, enabled or disabled based on the value of other fields, you might want to take a look at the [Form API #states property](/docs/8/api/form-api/conditional-form-fields), it allows you to easily create conditional form fields with little code.

**The typical steps involved:**

1. Create a new form or use [hook\_form\_alter](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21form.api.php/function/hook%5Fform%5Falter) to change an existing form.
2. Add an '#ajax' render element to a field that should trigger a callback function.
3. Define name of the callback function and type of event that will trigger it.
4. When the event is triggered by changing a form field's value the callback function is called.
5. The callback function allows accessing the $form array and the FormStateInterface and must finally return a render array or some HTML markup or can execute an [AJAX Command](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Ajax%21CommandInterface.php/interface/implements/CommandInterface).

**Ajax Forms example**

In the example below, we create a simple form with a select field that triggers an event whenever the user changes selection. The callback function fills the textbox element with the selected text. As we progress with the different kinds of callbacks we'll show different ways to dynamically update form fields and other elements as well as run custom AJAX commands.

When the form is submitted it simply displays all $form\_state values using \\Drupal::messenger().

![Dynamic AJAX Forms with Drupal](https://www.drupal.org/files/ajaxforms1.gif)