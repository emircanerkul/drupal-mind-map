You simply define an ordinary css selector of the target field in the #states property of your form field element. When the value of the targeted field changes, the state of your element will change as well. It does not matter whether that field is on the same form or not.

While you could also use an [AJAX Callback](/docs/8/api/javascript-api/ajax-forms) to achieve similar functionality the #states property allows creating dependent dynamic fields with little code.

Let's say you have a select field that let's users choose their favourite colour. You won't list all colours on the planet so you add the option "Other" at the end of the list. If a user selects "Other" you want to display a textfield where the user can enter their colour of choice.

![Drupal Form API #states - Conditional Fields, Figure 1](https://www.drupal.org/files/drupalformapistates.gif)