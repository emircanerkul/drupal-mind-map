The #ajax property of a form element is an array. Here are the details of its known elements, all of which are optional:

* **callback**: The callback to invoke to handle the server side of the Ajax event. More information on callbacks is under "[Setting up a callback to process Ajax](https://api.drupal.org/api/drupal/core!core.api.php/group/ajax/8.8.x#sub%5Fcallback)".  
 If you use 'callback', your callback method is a function, which will receive the $form and $form\_state from the triggering form. You can use $form\_state to get information about the data the user has entered into the form.
* **wrapper**: The HTML 'id' attribute of the area where the content returned by the callback should be placed. Note that callbacks have a choice of returning content or JavaScript commands; 'wrapper' is used for content returns.
* **method**: The jQuery method for placing the new content (used with 'wrapper'). Valid options are 'replaceWith' (default), 'append', 'prepend', 'before', 'after', or 'html'. See <http://api.jquery.com/category/manipulation/> for more information on these methods.
* **effect**: The jQuery effect to use when placing the new HTML (used with 'wrapper'). Valid options are 'none' (default), 'slide', or 'fade'.
* **speed**: The effect speed to use (used with 'effect' and 'wrapper'). Valid options are 'slow' (default), 'fast', or the number of milliseconds the effect should run.
* **event**: The JavaScript event to respond to. This is selected automatically for the type of form element; provide a value to override the default.
* **prevent**: A JavaScript event to prevent when the event is triggered. For example, if you use event 'mousedown' on a button, you might want to prevent 'click' events from also being triggered.
* **progress**: An array indicating how to show Ajax processing progress. Can contain one or more of these elements:  
   * **type**: Type of indicator: 'throbber' (default) or 'bar'.  
   * **message**: Translated message to display.  
   * **url**: For a bar progress indicator, URL path for determining progress.  
   * **interval**: For a bar progress indicator, how often to update it.
* **url**: A [\\Drupal\\Core\\Url](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Url.php/class/Url/8.6.x "Defines an object that holds information about a URL.") to which to submit the Ajax request. If omitted, defaults to either the same URL as the form or link destination is for someone with JavaScript disabled, or a slightly modified version (e.g., with a query parameter added, removed, or changed) of that URL if necessary to support Drupal's content negotiation. It is recommended to omit this key and use Drupal's content negotiation rather than using substantially different URLs between Ajax and non-Ajax.  
 Note that if you use this url property, your route controller will be triggered with only the information you provide in the URL.