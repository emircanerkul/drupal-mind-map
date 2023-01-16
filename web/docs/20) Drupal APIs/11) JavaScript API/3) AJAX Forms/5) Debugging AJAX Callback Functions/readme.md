[Kint](https://www.drupal.org/project/kint) can be used to debug AJAX callbacks, but that turns out to be a little tricky. Simply calling **kint($form\_state)** from your callback function results in an AJAX error or a WSOD. But you can use an AjaxResponse to display the output of **kint(..)** on your form in order to inspect variables in your callback.

Basically you use Kint::dump(..) method to get the kint output into a variable and display it's content in a DIV on our form.

Before you can use @Kint::dump in your module you'll have to include the Kint class. A good place to do that is your settings.local.php or settings.php. 

Add this to the end of your settings.php or settings.local.php. If you're putting it in settings.local.php also make sure that settings.local.php is included from within your settings.php. Make sure to rebuild your cache after that (`drush cr`).

**settings.php** or **settings.local.php**

```php
// Include Kint class.
include_once(DRUPAL_ROOT . '/modules/contrib/devel/kint/kint/Kint.class.php');

// If debugging is very slow or leads to WSOD reduce the number
// of levels of information shown by Kint.
// Change Kint maxLevels setting:
if (class_exists('Kint')){
  // Set the maxlevels to prevent out-of-memory. Currently there doesn't seem to be a cleaner way to set this:
  Kint::$maxLevels = 4;
}

```

This code goes into **your custom module**:

```php
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\ReplaceCommand;

/**
 * Implements hook_form_alter().
 *
 * Add debug output container and Ajax callback.
 */
function YOUR_MODULE_form_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id) {
  if ($form_id == 'your_form_id') {
    // Add empty container to the form. it gets filled with
    // the Kint output from our Ajax event callback.
    $form['debug'] = [
      '#type' => 'container',
      '#attributes' => [
        'id' => ['debug-out'],
      ],
    ];
  }

  // Here follows the code where you add the #ajax callback
  // to some field of this form. Let's say a taxonomy reference select box.
  $form['field_yourtaxonomy']['widget']['#ajax'] = [
    'event' => 'change',
    // Note how we declare the callback here. No :: and no [$this, 'myAjaxCallback']
    // because we are doing this from our .module file and not from within a class object.
    'callback' => 'your_module_ajax_callback',
  ];
}

// The callback function, triggered by changing selection of our taxonomy select box.
function your_module_ajax_callback(array &$form, FormStateInterface $form_state) {
  $response = new AjaxResponse();
  $debugOut = @Kint::dump($form_state);
  $response->addCommand(new ReplaceCommand('#debug-out', $debugOut ));
  return $response;
}
```