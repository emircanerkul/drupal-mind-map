---
url: >-
  https://www.drupal.org/docs/drupal-apis/render-api/render-elements/what-are-render-elements
description: >-
  Render elements are prepackaged render arrays of common properties with sane
  defaults that describe commonly-used HTML components like tables, links, and
  form input elements. In a render array, the #type property points to a render
  element. Render elements are useful for encapsulating elements that have
  complex display or logic, such as voting widgets, table elements that can
  format an array of data into an HTML table, or a placeholder that is
  dynamically replaced by a list of user-configured content.
published_time: '2022-11-02T18:55:06+00:00'
modified_time: '2022-11-02T19:02:05+00:00'
---
Render elements are prepackaged [render arrays](https://www.drupal.org/docs/drupal-apis/render-api/render-arrays) of common properties with sane defaults that describe commonly-used HTML components like tables, links, and form input elements. 

In a render array, the `#type` property points to a render element. 

Render elements are useful for encapsulating elements that have complex display or logic, such as voting widgets, table elements that can format an array of data into an HTML table, or a placeholder that is dynamically replaced by a list of user-configured content.

Instead of rewriting the properties and code for complex elements every time they are used, you can use an [existing render element](https://api.drupal.org/api/drupal/elements) (in core or contributed modules) or define a render element in a custom module. Then use the element name in the `#type` property of relevant render array.

There are 2 main kinds of render elements:

1. **Generic render elements**: Encapsulate HTML along with attaching CSS and JavaScript for HTML elements or chunks of HTML like a link, pager, or status messages.
2. **Form input elements**: HTML elements for most types of form fields like checkbox, button, date selection widget, file upload. These are meant to be used in conjunction with a form controller class along with additional properties such as `#required` and `#element_validate`, since they are used within the context of a form.

### Where to find documentation for render elements

Go to <https://api.drupal.org/api/drupal/elements> for a complete list of render elements, including form elements. Click on an element’s PHP class name to see a list of its properties and a code usage example.

### How to define a new render element type

Render elements are [plugins](https://www.drupal.org/docs/drupal-apis/plugin-api/plugin-api-overview) (see also [Plugin API topic](https://api.drupal.org/api/drupal/core%21core.api.php/group/plugin%5Fapi/)) defined in a [module](https://www.drupal.org/docs/creating-modules) (see also [Concept: Modules](https://www.drupal.org/docs/user%5Fguide/en/understanding-modules.html)).

* **Generic elements**: Generic render element plugins implement [\\Drupal\\Core\\Render\\Element\\ElementInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21ElementInterface.php/interface/ElementInterface/), are annotated with [\\Drupal\\Core\\Render\\Annotation\\RenderElement](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Annotation%21RenderElement.php/class/RenderElement/) annotation, go in plugin namespace Element, and generally extend the [\\Drupal\\Core\\Render\\Element\\RenderElement](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21RenderElement.php/class/RenderElement/) base class.
* **Form input elements**: Render elements representing form input elements implement [\\Drupal\\Core\\Render\\Element\\FormElementInterface](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21FormElementInterface.php/interface/FormElementInterface/), are annotated with [\\Drupal\\Core\\Render\\Annotation\\FormElement](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Annotation%21FormElement.php/class/FormElement/) annotation, go in plugin namespace Element, and generally extend the [\\Drupal\\Core\\Render\\Element\\FormElement](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21Element%21FormElement.php/class/FormElement/) base class.