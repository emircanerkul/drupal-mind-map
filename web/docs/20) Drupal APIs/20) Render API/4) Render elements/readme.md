---
url: https://www.drupal.org/docs/drupal-apis/render-api/render-elements
description: >-
  In a render array, the #type property points to a render element, a
  prepackaged render array of common properties with sane defaults that describe
  display logic for commonly-used HTML components such as tables, links, and
  form input elements. There are 2 main kinds of render elements: Generic render
  elements: Encapsulate HTML along with attaching CSS and JavaScript for HTML
  elements or chunks of HTML like a link, pager, or status messages. Form input
  elements: HTML elements for most types of form fields like checkbox, button,
  date selection widget, file upload.
published_time: '2022-11-02T18:46:19+00:00'
modified_time: '2022-11-02T19:01:30+00:00'
---
In a render array, the `#type` property points to a render element, a prepackaged render array of common properties with sane defaults that describe display logic for commonly-used HTML components such as tables, links, and form input elements.

There are 2 main kinds of render elements:

1. **Generic render elements**: Encapsulate HTML along with attaching CSS and JavaScript for HTML elements or chunks of HTML like a link, pager, or status messages.
2. **Form input elements**: HTML elements for most types of form fields like checkbox, button, date selection widget, file upload. These are meant to be used in conjunction with a form controller class along with additional properties such as `#required` and `#element_validate`, since they are used within the context of a form.