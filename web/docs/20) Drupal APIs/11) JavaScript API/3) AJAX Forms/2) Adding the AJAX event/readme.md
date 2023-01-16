In order to attach the AJAX callback, an \['#ajax'\] tag has to be added to the desired form field. It defines the function that will be triggered, the type of event and some other parameters like a throbber type. See the [Ajax API](https://api.drupal.org/api/drupal/core%21core.api.php/group/ajax) docs for a detailed explanation of the render elements.

Add an AJAX callback to the select field, which will show the selected Text in the textbox:

```php
// Create a select field that will update the contents
// of the textbox below.
$form['example_select'] = [
  '#type' => 'select',
  '#title' => $this->t('Example select field'),
  '#options' => [
    '1' => $this->t('One'),
    '2' => $this->t('Two'),
    '3' => $this->t('Three'),
    '4' => $this->t('From New York to Ger-ma-ny!'),
  ],
  '#ajax' => [
    'callback' => '::myAjaxCallback', // don't forget :: when calling a class method.
    //'callback' => [$this, 'myAjaxCallback'], //alternative notation
    'disable-refocus' => FALSE, // Or TRUE to prevent re-focusing on the triggering element.
    'event' => 'change',
    'wrapper' => 'edit-output', // This element is updated with this AJAX callback.
    'progress' => [
      'type' => 'throbber',
      'message' => $this->t('Verifying entry...'),
    ],
  ]
];
```

This adds an AJAX event that triggers the method myAjaxCallback() when the selection in the example select field changes.

**Explanation of the #ajax tags used above:**

* **callback** \=> The function or class method to call via the AJAX request. Note the different notations you'll find when looking for examples on the net. If you created your own forms class as we did in the example above you're passing a class method as a callback and will have to use `'callback' => '::myAjaxCallback'` or `'callback' => [$this, 'myAjaxCallback']`. But if you instead used **hook\_form\_alter**(..) to change an existing form, you're very likely are passing a function that is defined in your own .module file. In that case only use `'callback' => 'myAjaxCallback'`.
* **event** \=> The event to trigger on; any valid DOM event for the element can be used, simply omit the 'on' portion of the event. 'onclick' => 'click', 'onkeyup' => 'keyup', 'onchange' => 'change', etc.
* **wrapper** \=> The id of the element you wish to change. If your callback returns a render array or markup, the wrapper with this id is replaced with your result.
* **progress** \=> The indicator to use during the request so the user knows the page is waiting on a response from the server

A full list of [known #ajax properties ](#ajax%5Fproperties%5Flist)is described below.

The wrapper element is optional and useful only when returning HTML in the next step. This ID should match the ID on the HTML/Form element you want to act upon. In the above example, the 'output' input element was given an ID of 'edit-ouput' and so 'wrapper' reflects that same ID.

_Note: The wrapper does not contain a hashtag prefix (#edit-output) as you would use in CSS._ 

If you run this code now, you'll already see a Throbber icon appear when you select a value in the example select field, but you will find an error message in your JavaScript console: 

```php
The website encountered an unexpected error. Please try again later.Symfony\Component\HttpKernel\Exception\HttpException: The specified #ajax callback is empty or not callable. in Drupal\Core\Form\FormAjaxResponseBuilder->buildResponse() (line 67 of core/lib/Drupal/Core/Form/FormAjaxResponseBuilder.php)
```

This happens because we haven't implemented our callback function yet.