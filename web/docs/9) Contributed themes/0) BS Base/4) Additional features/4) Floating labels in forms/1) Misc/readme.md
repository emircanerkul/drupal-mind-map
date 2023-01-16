Floating label implementation is done with \`:placeholder-shown\` CSS rule approach as demonstrated on <https://getbootstrap.com/docs/4.3/examples/floating-labels/>.

Floating labels option is a global option meaning it will affect all of your Drupal forms. In order to disable floating labels per form you have two options:

* In code you can use \`#floating\_labels\_off\` attribute in your form. For example:  
```php  
/**  
 * Implements hook_form_alter().  
 */  
function custom_theme_form_alter(&$form, FormStateInterface $form_state, $form_id) {  
  if ($form_id === 'custom_form') {  
    $form['#floating_labels_off'] = TRUE;  
  }  
}  
```
* Assign \`form--floating-labels-off\` CSS class to your form. You can use this class if you are using webforms to build your form:  
![](https://www.drupal.org/files/Selection_013_6.png)