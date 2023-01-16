You could write a custom AJAX command, but you just might want to run a few lines of Javascript without the overhead. The [AJAX InvokeCommand](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Ajax%21InvokeCommand.php/class/InvokeCommand) can be used to call jQuery methods:

Your AJAX callback handler:

```php
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\InvokeCommand;

/**
 * An Ajax callback.
 */
public function myAjaxCallback(array &$form, FormStateInterface $form_state) {
  $response = new AjaxResponse();
  $response->addCommand(new InvokeCommand(NULL, 'myAjaxCallback', ['This is the new text!']));
  return $response;
}
```

Your JavaScript code:

```php
(function($) {
  // Argument passed from InvokeCommand.
  $.fn.myAjaxCallback = function(argument) {
    console.log('myAjaxCallback is called.');
    // Set textfield's value to the passed arguments.
    $('input#edit-output').attr('value', argument);
  };
})(jQuery);

```