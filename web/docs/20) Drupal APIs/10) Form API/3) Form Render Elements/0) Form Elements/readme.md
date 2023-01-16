Form render elements are a subset of render elements, representing elements for HTML forms, which can be referenced in form arrays. 

### List of form and render elements

The class [Drupal\\Core\\Render\\Element\\FormElement](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21FormElement.php/class/FormElement/8.7.x) provides a base class for form element plugins.

The Drupal API docs provides a comprehensive [list of Drupal form and render elements](https://api.drupal.org/api/drupal/elements).

### Properties

Here is a list of properties that are used during the rendering and form processing of form elements:

* **#after\_build**: (array) Array of callables or function names, which are called after the element is built. Arguments: $element, $form\_state.
* **#ajax**: (array) Array of elements to specify Ajax behavior. See the [Javascript API ](/docs/8/api/javascript-api)and [AJAX Forms](/docs/8/api/javascript-api/ajax-forms) guides for more information.
* **#array\_parents**: (string\[\], read-only) Array of names of all the element's parents (including itself) in the render array. See also #parents, #tree.
* **#default\_value**: Default value for the element. See also #value.
* **#description**: (string) Help or description text for the element. In an ideal user interface, the #title should be enough to describe the element, so most elements should not have a description; if you do need one, make sure it is translated. If it is not already wrapped in a safe markup object, it will be filtered for XSS safety.
* **#description\_display**: (string) Where and how to display the #description. Possible values:  
   * after: Description goes after the element (default).  
   * before: Description goes before the element.  
   * invisible: Description is there but is made invisible using CSS.
* **#disabled**: (bool) If TRUE, the element is shown but does not accept user input.
* **#element\_validate**: (array) Array of callables or function names, which are called to validate the input. Arguments: $element, $form\_state, $form.
* **#prefix**: (string) Prefix to display before the HTML input element. Should be translated, normally. If it is not already wrapped in a safe markup object, will be filtered for XSS safety.
* **#suffix**: (string) Suffix to display after the HTML input element. Should be translated, normally. If it is not already wrapped in a safe markup object, will be filtered for XSS safety.
* **#input**: (bool, internal) Whether or not the element accepts input.
* **#parents**: (string\[\], read-only) Array of names of the element's parents for purposes of getting values out of $form\_state. See also #array\_parents, #tree.
* **#process**: (array) Array of callables or function names, which are called during form building. Arguments: $element, $form\_state, $form.
* **#processed**: (bool, internal) Set to TRUE when the element is processed.
* **#required**: (bool) Whether or not input is required on the element.
* **#required\_error**: (string) Override default error message "@field\_title is required" will be used if this is undefined.
* **#states**: (array) Information about JavaScript states, such as when to hide or show the element based on input on other elements. Refer to [FormHelper::processStates](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormHelper.php/function/FormHelper%3A%3AprocessStates/8.8.x).
* **#title**: (string) Title of the form element. Should be translated.
* **#title\_display**: (string) Where and how to display the #title. Possible values:  
   * before: Label goes before the element (default for most elements).  
   * after: Label goes after the element (default for radio elements).  
   * invisible: Label is there but is made invisible using CSS.  
   * attribute: Make it the title attribute (hover tooltip).
* **#tree**: (bool) TRUE if the values of this element and its children should be hierarchical in $form\_state; FALSE if the values should be flat. See also #parents, #array\_parents.
* **#value**: Used to set values that cannot be edited by the user. **Should NOT be confused with #default\_value**, which is for form inputs where users can override the default value. Used by: [button](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21Button.php/class/Button/8.2.x), [hidden](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21Hidden.php/class/Hidden/8.2.x), [image\_button](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21ImageButton.php/class/ImageButton/8.2.x), [submit](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21Submit.php/class/Submit/8.2.x), [token](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21Token.php/class/Token/8.2.x), [value](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21Value.php/class/Value/8.2.x).
* **#value\_callback**: (callable) Callable or function name, which is called to transform the raw user input to the element's value. Arguments: $element, $input, $form\_state.