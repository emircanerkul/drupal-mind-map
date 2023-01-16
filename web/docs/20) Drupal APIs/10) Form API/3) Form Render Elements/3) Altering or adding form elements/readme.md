This chapter talks about adding new fields or altering existing fields on forms that are already available on your Drupal site. If you want to create new forms, you may follow the guide at _[Introduction to Form API](/docs/8/api/form-api/introduction-to-form-api)_ beforehand, which provides a basic form creation example that gets you started.

No matter if you want to change existing fields or add new fields to an existing form, you'll have to implement `hook_form_alter` or `hook_form_FORM_ID_alter`.

### Finding the form identifier

Because you only want to alter (a) specific form(s), you'll first have to find out which identifier (ID) the form(s) use(s).

`hook_form_alter` provides the `$form_id` as a parameter.

1. Create or reuse an existing custom module. For the purpose of this guide, the module's machine name is `mymodule`.
2. In the **mymodule.module** file, implement the `hook_form_alter` like the following and use your preferred variable dumper:  
```php  
/**  
 * Implements hook_form_alter().  
 */  
function mymodule_form_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state, $form_id) {  
  /**  
   * Use your debugging tool to print the $form_id value.  
   * Examples below:  
   */  
  // Symfony dump:  
  dump($form_id);  
  // kint:  
  kint($form_id);  
}  
```
3. Load the page which contains the form.
4. The ID should display somewhere in the page. Depending on your active theme, you may need to look in the DOM inspector or page source if it does not show up.

If configured on your work environment, you may also use a [PHP debugger](/docs/develop/development-tools/xdebug-debugger) like XDebug to get the `$form_id` value instead of printing it. Multiple hook calls will eventually occur, one for each form on the loaded page (there may be a lot of those calls: user login, search bar, autocompletes, etc!). You just have to remember the `$form_id` of the desired form(s) to alter.

### Decide between `hook_form_alter` and `hook_form_FORM_ID_alter`

You have your `$form_id`? Good! Now, that's when you'll have to decide between `hook_form_alter` and `hook_form_FORM_ID_alter`.

If you want to alter various forms at the same time, like adding/altering common fields to all of them, you'll want to use `hook_form_alter`. It is called for every forms loaded in your page. You'll need to use multiple `if` or a `switch` to handle all the form identifiers; the choice is yours.

If you want to alter a single form, you'll want to use `hook_form_FORM_ID_alter`. It is only called for the form when `FORM_ID` matches `$form_id`. For instance, `mymodule_form_user_login_alter` will only be called when the `user_login` form is rendered.

### Finally some examples

#### Alter existing form fields example

```php
/**
 * Implements hook_form_alter.
 *
 * Alters the display of a form
 */
function mymodule_form_alter(&$form, FormStateInterface $form_state, $form_id)
{
    //get the id of the form you want to alter
    //kint($form_id);

    //let's alter the edit form of your custom content type
    if($form_id == 'node_yourcontenttype_edit_form') {
        //get a look at the form array, which amongst other stuff
        //shows the available fields
        //kint($form);

        //hide revision settings form
        $form['revision_information']['#access'] = false;
        
        //set some number field to readonly.
	    $form['field_summe']['widget'][0]['value']['#attributes']['readonly'] = true;

        //change description of a telephone number field
        $form['phone_number']['#description'] = t('Start with + and your country code.');

        //attach our custom js library to the forms.
        //you'll have to define this library in your module's mymodule.libraries.yml
        $form['#attached']['library'][] = 'mymodule/mylibrary';                
    }

}
```

#### Add a new form field example

```php
/**
 * Implements hook_form_alter.
 *
 * Alters the display of a form
 */
function mymodule_form_alter(&$form, FormStateInterface $form_state, $form_id)
{
    //get the id of the form you want to alter.
    //kint($form_id);

    //let's alter the edit form of your custom content type
    if($form_id == 'node_yourcontenttype_edit_form') {
        //Get a look at the form array, which amongst other stuff shows the available fields
        //kint($form);

        //Add some custom markup to your form.
        //We can basically add any field here. But if we want to save it's value
        //we'll have to make sure to do something with the entered value in our form submit handler.
        $markup = '<div id="my-custom-markup"><h1>Here is my markup</h1></div>';
        $form['field_mycustommarkup'] = [
            '#type' => 'markup',
            '#markup' => $markup,
            //use #weight to move this field up and down on your form.
            //check other forms' weights to find out, what weight to use.
            '#weight' => 1,            
        ];

        //Let's say this form has some field groups, or group tabs.
        //We want to place the custom markup inside this group.
        
        //Get a list of all groups on this form and their children.
        //kint($form['#group_children'])

        //Let's say our group is called group_someoptions and we wnat to place the custom markup
        //inside this group.
        $form['#group_children']['field_mycustommarkup'] = 'group_someoptions';
    }
}
```