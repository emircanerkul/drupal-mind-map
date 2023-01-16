If an element on the page:

* shouldn't be shown until a JavaScript event makes it visible,
* isn't relevant to sighted users or screen-reader users in the context,
* contains values that are read/written by JavaScript but should never be shown directly, or,
* in general, shouldn't be visible to sighted users or screen-reader users,

... then you should completely hide it for all users.

You can do this by:

* giving the element the `hidden` class (in Drupal 8 or higher),
* if it is a field in an entity subtype, set its Format to "- Hidden -" on the _Manage display_ page for that entity subtype,
* if it is a field label in an entity subtype, set its label display to "- Hidden -" on the _Manage display_ page for that entity subtype, or,
* using the CSS `display: none;` on the element.

Example:

Hiding the color module's preview area until JavaScript has run:

```php
/* color.css (Drupal 7 and higher) */
#preview {
  display: none;
}

```

Reasoning:

The preview doesn't work if JavaScript is not running, so it is of no use to anyone.

### Misuse

A common inappropriate use of "display:none" is to remove a form label or heading in order to change the _visual appearance_ of a page. However, this will render the form element unusable to screen-reader users!

For example, if you remove a form label with "display: none," a screen-reader user might tell you, "I have a required text field to type into, but I have no idea what the field is for." In this situation, making the content invisible (visually-hidden) would be more appropriate.