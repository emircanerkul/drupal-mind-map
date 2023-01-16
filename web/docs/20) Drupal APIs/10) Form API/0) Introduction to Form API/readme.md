---
url: https://www.drupal.org/docs/drupal-apis/form-api/introduction-to-form-api
description: >-
  Form classes implement the \Drupal\Core\Form\FormInterface and the basic
  workflow of a form is defined by the buildForm, validateForm, and submitForm
  methods of the interface. When a form is requested it's defined as a
  renderable array often referred to as a Form API array or simply $form array.
  The $form array is converted to HTML by the render process and displayed to
  the end user.
published_time: '2013-10-22T07:32:35+00:00'
modified_time: '2022-12-07T10:00:57+00:00'
---
### 

Form classes implement the [\\Drupal\\Core\\Form\\FormInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormInterface.php/interface/FormInterface/8.2.x) and the basic workflow of a form is defined by the `buildForm`, `validateForm`, and `submitForm` methods of the interface. When a form is requested it's defined as a renderable array often referred to as a Form API array or simply `$form` array. The `$form` array is converted to HTML by the render process and displayed to the end user. When a user submits a form the request is made to the same URL that the form was displayed on, Drupal notices the incoming HTTP POST data in the request and this time–instead of building the form and displaying it as HTML–it builds the form and then proceeds to call the applicable validation and submission handlers.

Defining forms as structured arrays, instead of as straight HTML, has many advantages including:

* Consistent HTML output for all forms.
* Forms provided by one module can be easily altered by another without complex search and replace logic.
* Complex form elements like file uploads and voting widgets can be encapsulated in reusable bundles that include both display and processing logic.

There are several types of forms commonly used in Drupal. Each has a base class which you can extend in your own custom module.

First, identify the type of form you need to build:

1. A generic form. Extend [FormBase](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormBase.php/class/FormBase/8).
2. A configuration form that enables administrators to update a module's settings. Extend [ConfigFormBase](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21ConfigFormBase.php/class/ConfigFormBase/8).
3. A form for deleting content or configuration which provides a confirmation step. Extend [ConfirmFormBase](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21ConfirmFormBase.php/class/ConfirmFormBase/8).

FormBase implements [FormInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormInterface.php/interface/FormInterface/8.3.x), and both ConfigFormBase and ConfirmFormBase extend FormBase, therefore any forms that extend these classes must implement a few required methods.

### Required Methods

[FormBase](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormBase.php/class/FormBase/8.3.x) implements [FormInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormInterface.php/interface/FormInterface/8.3.x), and therefore any form that has `FormBase` in its hierarchy is required to implement a few methods:

* [getFormId()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormInterface.php/function/FormInterface%3A%3AgetFormId/8.3.x)
* [buildForm()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormInterface.php/function/FormInterface%3A%3AbuildForm/8.3.x)
* [submitForm()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormInterface.php/function/FormInterface%3A%3AsubmitForm/8.3.x)

#### getFormId()

`public function getFormId()`

This needs to return a string that is the unique ID of your form. Namespace the form ID based on your module's name.

Example:

```php
  public function getFormId() {
    return 'mymodule_settings';
  }

```

#### buildForm()

`public function buildForm(array $form, FormStateInterface $form_state)`

This returns a Form API array that defines each of the elements your form is composed of.

Example:

```php
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['phone_number'] = [
      '#type' => 'tel',
      '#title' => $this->t('Example phone'),
    ];
        
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

```

### Validating Forms

After a user fills out the form and clicks the submit button it's common to want to perform some sort of validation on the data that's being collected. To do this with Drupal's Form API we simply implement the `validateForm` method from `\Drupal\Core\Form\FormInterface` in our `ExampleForm` class.

Form values submitted by the user are contained in the `$form_state` object at `$form_state->getValue('field_id')`, where 'field\_id' is the key used when adding the form element to the `$form` array in `ExampleForm::buildForm()`. We can perform our custom validation on this value. If you need to get all submitted values, you can do so by using `$form_state->getValues()`.

Form validation methods can use any PHP processing necessary to validate that the field contains the desired value and raise an error in the event that it is an invalid value. In this case since we're extending the `\Drupal\Core\Form\FormBase` class we can use `\Drupal\Core\Form\FormStateInterface::setErrorByName()` to register an error on a specific form element and provide an associated message explaining the error.

When a form is submitted, Drupal runs through all validation handlers for the form, both the default validation handlers and any validation handlers added by developers. If there are errors, the form's HTML is rebuilt, error messages are shown, and fields with errors are highlighted. This allows the user to correct any errors and re-submit the form. If no errors are present, the submit handlers for the form are executed.

The following is an example of a simple `validateForm()` method:

```php
/**
 * {@inheritdoc}
 */
public function validateForm(array &$form, FormStateInterface $form_state) {
  if (strlen($form_state->getValue('phone_number')) < 3) {
    $form_state->setErrorByName('phone_number', $this->t('The phone number is too short. Please enter a full phone number.'));
  }
}

```

If no errors are registered during form validation, Drupal continues processing the form. At this point it is assumed that values within `$form_state->getValues()` are valid and ready to be processed and used in whatever way our module needs to make use of the data.

### Submitting Forms / Processing Form Data

Finally, we're ready to make use of the collected data and do things, like save the data to the database, send an email, or any number of other operations. To do this with Drupal's Form API we need to implement the `submitForm` method from `\Drupal\Core\Form\FormInterface` in our `ExampleForm` class.

As with the validation method above, the values collected when the form was submitted are in `$form_state->getValues()` and at this point we can assume the data have been validated and are ready for use. For example, accessing the value of our 'phone\_number' field can be done by accessing `$form_state->getValue('phone_number')`.

Here's an example of a simple submitForm method which displays the value of the 'phone\_number' field on the page using the messenger service:

```php
/**
 * {@inheritdoc}
 */
public function submitForm(array &$form, FormStateInterface $form_state) {
  $this->messenger()->addStatus($this->t('Your phone number is @number', ['@number' => $form_state->getValue('phone_number')]));
}

```

This is a simple example of handling submitted form data. For more complex examples, take a look at [some of the classes that extend FormBase](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormBase.php/class/uses/FormBase/8) in core.

Here is a complete example of a form class:

File contents of `/modules/example/src/Form/ExampleForm.php` if the module is in `/modules/example`:

```php
<?php

namespace Drupal\example\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Implements an example form.
 */
class ExampleForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'example_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['phone_number'] = [
      '#type' => 'tel',
      '#title' => $this->t('Your phone number'),
    ];
    $form['actions']['#type'] = 'actions';
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Save'),
      '#button_type' => 'primary',
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    if (strlen($form_state->getValue('phone_number')) < 3) {
      $form_state->setErrorByName('phone_number', $this->t('The phone number is too short. Please enter a full phone number.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->messenger()->addStatus($this->t('Your phone number is @number', ['@number' => $form_state->getValue('phone_number')]));
  }

}

```

The id of the form is returned by the `getFormId()` method on the form class. The builder method is called `buildForm()` and contains dedicated methods for validation and submission.

### Integrate the form in a request

The routing system allows form classes to be provided as route handlers, in which case the route system takes care of instantiating this class and invoking the proper methods. To integrate this form into a Drupal site's URI structure, use a route like the following:

File contents for `/modules/example/example.routing.yml` if the module is in `/modules/example`:

```php
example.form:
  path: '/example-form'
  defaults:
    _title: 'Example form'
    _form: '\Drupal\example\Form\ExampleForm'
  requirements:
    _permission: 'access content'

```

The `_form` key tells the routing system that the provided class name is a form class to be instantiated and handled as a form.

Note that the form class and the routing entry are the only two pieces required to make this form work; there is no other wrapper code to write.

### Retrieving this form outside of routes

Although Drupal 7's `drupal_get_form()` is gone in Drupal 8, there is a FormBuilder service that can be used to retrieve and process forms. The Drupal 8 equivalent of `drupal_get_form()` is the following:

```php
$form = \Drupal::formBuilder()->getForm('Drupal\example\Form\ExampleForm');

```

The argument passed to the `getForm()` method is the name of the class that defines your form and is an implementation of `\Drupal\Core\Form\FormInterface`. If you need to pass any additional parameters to the form, pass them on after the class name.

Example:

```php
$extra = '612-123-4567';
$form = \Drupal::formBuilder()->getForm('Drupal\mymodule\Form\ExampleForm', $extra);
...
public function buildForm(array $form, FormStateInterface $form_state, $extra = NULL)
  $form['phone_number'] = [
    '#type' => 'tel',
    '#title' => $this->t('Your phone number'),
    '#value' => $extra,
  ];
  return $form;
}

```

In some special cases, you may need to manipulate the `$form` object before the `FormBuilder` calls your class's `buildForm()` method, in which case you can do `$form_object = new \Drupal\mymodule\Form\ExampleForm($something_special); `

`$form_builder->getForm($form_object);`

### Altering this form

Altering forms is where the Drupal 8 Form API reaches into basically the same hook-based approach as Drupal 7\. You can use `hook_form_alter()` and/or `hook_form_FORM_ID_alter()` to alter the form, where the ID is the form ID you provided when defining the form previously.

```php
/**
 * Implements hook_form_FORM_ID_alter().
 */
function example2_form_example_form_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state) {
  $form['phone_number']['#description'] = t('Start with + and your country code.');
}

```

We named the `hook_form_FORM_ID_alter()` implementation after our module name (example2) including the form ID (`example_form`). This is the same pattern used in Drupal 7 form alters.

### Gotchas

When using the #ajax property with your form and the form's class uses private properties, there are issues with serialization. See [Considerations for Serialization](/docs/drupal-apis/services-and-dependency-injection/dependency-injection-for-a-form#s-considerations-for-dependency-injection).

### See also

* [Drupal 8 Form API reference](https://api.drupal.org/api/drupal/elements/)
* [The Drupal 7 Form API](https://api.drupal.org/api/drupal/developer%21topics%21forms%5Fapi%5Freference.html/7.x)
* [Routing system in Drupal 8](https://drupal.org/node/2092643) details the routing file keys