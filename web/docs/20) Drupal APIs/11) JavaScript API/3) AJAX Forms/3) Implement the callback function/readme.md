Let's finally figure out a way to call our callback function that dynamically updates our form's textfield.

Drupal core calls our custom callback function using `call_user_func_array($callback, [&$form, &$form_state, $request]);` in FormAjaxResponseBuilder.php.

**A basic AJAX callback function example:**

```php
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Ajax\AjaxResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Ajax callback event.
 *
 * @param array $form
 *  The triggering form render array.
 * @param Drupal\Core\Form\FormStateInterface $form_state
 *  Form state of current form.
 * @param \Symfony\Component\HttpFoundation\Request $request
 *  The request object, holding current path and request uri.
 * @return mixed
 *  Must return AjaxResponse object or render array.
 *  Never return NULL or invalid render arrays. This
 *  could/will break your forms.
 */
function myAjaxCallback(array &$form, FormStateInterface $form_state, Request $request) {
  /** @var \Drupal\Core\Ajax\AjaxResponse $response */
  $response = new AjaxResponse();

  // Add some commands to the response object.

  // Make sure to ALWAYS return a response object or valid render array.
  return $response;
}
```

**Possible return values:**

There are different ways to respond to the ajax request, depending on what you want to achieve with your AJAX callback.

* [**Render array** ](#ajax%5Fcallback%5Frender%5Farray)\=> If you just want to update a field on your form you can simply return a render array, ie. `$form['field_yourfieldname'].` The resulting markup will be placed in the wrapper element, that was defined when attaching the `['#ajax']` render array to the form field.
* [**Custom HTML markup** ](#ajax%5Fcallback%5Fhtml%5Fmarkup)\=> If you want to display some information on your form that is not related to a field on your form, you can return HTML Markup that will be placed in the wrapper element, that was defined when attaching the `['#ajax'] `render array to the form field. Basically you also return a render array because you have to wrap your HTML markup in a render array return` ['#markup' => '<h1>Hello</h1>'];`.
* [**AJAX Command**](#ajax%5Fcallback%5Fajax%5Fcommands) \=> If you don't want to update your form at all but instead invoke an [AJAX Command,](http://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Ajax%21CommandInterface.php/interface/implements/CommandInterface) you have to return an AjaxResponse object.

**Important**: Make sure to **ALWAYS** return a response object or valid render array from your callback function. Returning NULL or an invalid render array can/will break your form. You will probably find an error message in your browser's JavaScript console:

```php
TypeError: Argument 1 passed to Drupal\Core\Render\MainContent\AjaxRenderer::renderResponse() must be of the type array, null given, called in /web/core/lib/Drupal/Core/Form/FormAjaxResponseBuilder.php on line 89 in Drupal\Core\Render\MainContent\AjaxRenderer->renderResponse() (line 53 of /web/core/lib/Drupal/Core/Render/MainContent/AjaxRenderer.php).
```

### Render Array

First we'll fetch the selected value of the select field from the $form\_state interface and save it to the output textfield. Then we return a render array of the prepared textfield. This replaces the original textfield on the form. 

![Dynamic Drupal AJAX Forms](https://www.drupal.org/files/ajaxforms1.gif)

```php
// Get the value from example select field and fill
// the textbox with the selected text.
public function myAjaxCallback(array &$form, FormStateInterface $form_state) {
  // Prepare our textfield. check if the example select field has a selected option.
  if ($selectedValue = $form_state->getValue('example_select')) {
      // Get the text of the selected option.
      $selectedText = $form['example_select']['#options'][$selectedValue];
      // Place the text of the selected option in our textfield.
      $form['output']['#value'] = $selectedText;
  }
  // Return the prepared textfield.
  return $form['output']; 
}
```

The returned array _replaces_ the element with the ID specified by the wrapper element (#edit-output). This is important to remember when deciding what to return from the callback! Whatever was specified by the given ID is completely replaced by the new HTML! Make sure that the returned field also contains the id #edit-output or the next AJAX callback will not find a target to place the rendered code into.

### HTML Markup

If you don't want to update the value of a form field but instead show some custom HTML markup on your form, you can also return HTML markup instead of a render array. Even though you can return raw HTML the return value must still be wrapped in a render array. Use `['#markup' => '<p>your markup</p>']` to return the response.

The returned markup entirely replaces the object with the id passed as **wrapper** in the #ajax render array, attached to the form field, so don't forget to add the id, that you specified as wrapper in the \['#ajax'\] render array in the custom markup you are returning from your callback.

The example below will replace the output textfield that was originally placed on our form with a DIV element that holds the selected text.

![Drupal AJAX Forms, Figure 3](https://www.drupal.org/files/ajaxforms2.gif)

```php
// Get the value from example select field and fill
// the textbox with the selected text.
public function myAjaxCallback(array &$form, FormStateInterface $form_state) {
  $markup = 'nothing selected';

  // Prepare our textfield. Check if the example select field has a selected option.
  if ($selectedValue = $form_state->getValue('example_select')) {
      // Get the text of the selected option.
      $selectedText = $form['example_select']['#options'][$selectedValue];
      // Place the text of the selected option in our textfield.
      $markup = "<h1>$selectedText</h1>";
  }

  // Don't forget to wrap your markup in a div with the #edit-output id
  // or the callback won't be able to find this target when it's called
  // more than once.
  $output = "<div id='edit-output'>$markup</div>";

  // Return the HTML markup we built above in a render array.
  return ['#markup' => $output];
}
```

### AJAX Commands (AjaxResponse)

You can also choose to return an AjaxResponse that issues AJAX commands via the client-side jQuery library when your callback function is executed. You can choose from a range of existing AJAX commands, implement a custom AJAX command or just run some JavaScript code in one of your scripts.

The example callback function below will create a new textbox with the selected text and replace our original output textbox with it. Then it will show a modal dialogbox with the selected text from our select form element.

![Drupal AJAX Forms, Figure 4](https://www.drupal.org/files/ajaxforms3.gif)

```php
// Dont't forget to add the required namespaces at the beginning of your class/module.
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\ReplaceCommand;
use Drupal\Core\Ajax\OpenModalDialogCommand;

/**
 * An Ajax callback.
 */
public function myAjaxCallback(array &$form, FormStateInterface $form_state) {
  // Try to get the selected text from the select element on our form.
  $selectedText = 'nothing selected';
  if ($selectedValue = $form_state->getValue('example_select')) {
    // Get the text of the selected option.
    $selectedText = $form['example_select']['#options'][$selectedValue];
  }

  // Create a new textfield element containing the selected text.
  // We're replacing the original textfield using an AJAX replace command which
  // expects either a render array or plain HTML markup.
  $elem = [
    '#type' => 'textfield',
    '#size' => '60',
    '#disabled' => TRUE,
    '#value' => "I am a new textfield: $selectedText!",
    '#attributes' => [
      'id' => ['edit-output'],
    ],
  ];

  // Attach the javascript library for the dialog box command
  // in the same way you would attach your custom JS scripts.
  $dialogText['#attached']['library'][] = 'core/drupal.dialog.ajax';
  // Prepare the text for our dialogbox.
  $dialogText['#markup'] = "You selected: $selectedText";

  // If we want to execute AJAX commands our callback needs to return
  // an AjaxResponse object. let's create it and add our commands.
  $response = new AjaxResponse();
  // Issue a command that replaces the element #edit-output
  // with the rendered markup of the field created above.
  // ReplaceCommand() will take care of rendering our text field into HTML.
  $response->addCommand(new ReplaceCommand('#edit-output', $elem));
  // Show the dialog box.
  $response->addCommand(new OpenModalDialogCommand('My title', $dialogText, ['width' => '300']));

  // Finally return the AjaxResponse object.
  return $response;
}
```

Much like the previous example, a render array is created that will produce HTML that replaces the previous element specified by the ID passed into the ReplaceCommand() function. In this case, the hashtag must be included (#edit-output) to identify the element to be replaced. After that a popup dialog box is displayed.

You can find a [list of all commands](http://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Ajax%21CommandInterface.php/interface/implements/CommandInterface) you can pass in the response [here](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Ajax%21CommandInterface.php/interface/implements/CommandInterface).