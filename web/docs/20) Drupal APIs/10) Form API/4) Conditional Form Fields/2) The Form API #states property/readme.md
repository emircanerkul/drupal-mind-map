The [FormHelper::processStates()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormHelper.php/function/FormHelper%3A%3AprocessStates) API docs state:

A "state" means a certain property on a DOM element, such as "visible" or "checked". A state can be applied to an element, depending on the state of another element on the page. In general, states depend on HTML attributes and DOM element properties, which change due to user interaction.

Since states are driven by JavaScript only, it is important to understand that all states are applied on presentation only, none of the states force any server-side logic, and that they will not be applied for site visitors without JavaScript support. All modules implementing states have to make sure that the intended logic also works without JavaScript being enabled.

Additionally, field actions that trigger a re-evaluation of state conditions assume user interaction; if other javascript code programmatically updates the values or other properties of a targeted input, you may need to trigger a "user-like" action such as a [keyup](https://git.drupalcode.org/project/drupal/-/blob/6518f563c1402e4cd369ce2e663630342dbe958a/core/misc/states.es6.js#L549) event.  

**States that can be applied to a form field element:**

* enabled
* disabled
* required
* optional
* visible
* invisible
* checked
* unchecked
* expanded
* collapsed

**The following states may be used when checking values of other fields:**

* empty
* filled
* checked
* unchecked
* expanded
* collapsed
* value

**The following states exist for both elements and remote conditions.**   
Those might not be implemented in all browsers and may not change anything on the element:

* relevant
* irrelevant
* valid
* invalid
* touched
* untouched
* readwrite
* readonly

When referencing select lists and radio or option buttons in remote conditions, a 'value' condition must be used.

Find out more in the [Drupal API Docs for FormHelper::processStates()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Form%21FormHelper.php/function/FormHelper%3A%3AprocessStates)(..).  
A [list of all form field elements](https://api.drupal.org/api/drupal/elements/8.7.x) can be found in the [Form and render elements API docs](https://api.drupal.org/api/drupal/elements/8.7.x).