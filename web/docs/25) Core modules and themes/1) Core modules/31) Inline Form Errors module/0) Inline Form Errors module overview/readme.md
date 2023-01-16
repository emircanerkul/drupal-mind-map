---
url: >-
  https://www.drupal.org/docs/8/core/modules/inline-form-errors/inline-form-errors-module-overview
description: >-
  What is Inline Form Errors - for users? Inline Form Errors, or IFE, places
  form submission errors inline with the form elements. This is important for
  both usability and accessibility. Sites required to be WCAG 2.0 AA conformant
  that use web forms, should use this module. This error ensures that there is a
  semantic alert at the top of the page which lists the form fields which have
  errors. It also provides links to the elements of the page that require
  different input. Each inline form with an error is clearly highlighted. It
  also includes a description of the information which is required.
published_time: '2015-10-06T03:16:34+00:00'
modified_time: '2019-01-13T16:04:22+00:00'
---
### What is Inline Form Errors - for users?

Inline Form Errors, or IFE, places form submission errors inline with the form elements. This is important for both usability and accessibility. Sites required to be [WCAG 2.0 AA ](https://www.w3.org/TR/WCAG20/)conformant that use web forms, should use this module.

This error ensures that there is a semantic alert at the top of the page which lists the form fields which have errors. It also provides links to the elements of the page that require different input. Each inline form with an error is clearly highlighted. It also includes a description of the information which is required.

![Drupal Inline Form Errors example](https://www.drupal.org/files/drupal_inline_form_errors_example.png)

### Who benefits from Inline Form Errors?

* People who use screen magnifiers can find details of an error next to the input field which it applies to.
* Users with small screens (such as mobile phones) can see the field and error message on screen together, without needing to scroll up and down.
* People who only use a keyboard can reach fields with errors with less effort.
* Screen reader users can find the error message near the relevant field.

### Inline Form Errors for Developers

#### How to disable Inline Form Errors for an entire form

From Drupal 8.5 and up you can set the `#disable_inline_form_errors` property to `TRUE` on the top level of the `$form` array.

```php
$form['#disable_inline_form_errors'] = TRUE;
```

This should only be done when another appropriate accessibility strategy is in place.

#### How to hide inline error messages for certain elements

Set the `#error_no_message` property to `TRUE` for the specific element:

```php
$form['test4'] = [
  '#type' => 'textfield',
  '#title' => 'Test 4',
  '#parents' => ['test4'],
  '#array_parents' => ['test4'],
  '#id' => 'edit-test4',
  '#error_no_message' => TRUE,
];
```

### Known Limitations

#### Concerns considering HTML5 form element validation

_You can disable HTML5 validation by setting the_ `novalidate`_attribute on the `$form`._

* Inline form errors are not visible until the form is being sent. HTML5 errors come before Inline Form Errors and this may cause confusion.
* Loss of uniform and exhaustive error representation. Some elements have HTML5 validation and others don’t.
* In some cases a user can resolve the HTML5 message, but after submission will still get a server-side generated error because the validation rules are different on the client and server-side. The HTML5 version often doesn’t show the real problem. The styling of these errors is vastly different.
* Screen readers (JAWS and FF) read unhelpful messages (no context) out loud.
* HTML5 messages can't be translated.
* There is no overview of all errors.