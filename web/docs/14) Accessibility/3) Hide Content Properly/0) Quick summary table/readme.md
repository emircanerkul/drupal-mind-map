| Technique                                           | Visually Hidden         | Screen reader hidden | Additional Info                                                                                                                                                                |
| --------------------------------------------------- | ----------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CSS: <div class="visually-hidden"\></div>           | Yes                     | No                   |                                                                                                                                                                                |
| CSS: <div class="hidden"\></div>                    | Yes                     | Yes                  |                                                                                                                                                                                |
| HTML5 attribute: <div hidden></div>                 | Yes                     | Yes                  | This is semantically the same as the CSS { display:none; }                                                                                                                     |
| ARIA attribute: <div aria-hidden="true"\></div>     | No                      | Yes                  | Only use if you cannot use [HTML5's hidden attribute](https://developer.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/), as described above. |
| CSS: <div class="visually-hidden focusable"\></div> | Yes, unless given focus | Yes                  |                                                                                                                                                                                |

## Making content invisible (visually-hidden)

If an element on the page:

* is an interactive element but needs to be made invisible, so it can be themed (e.g.: a link, checkbox, radio-button or form control with custom styles),
* is a heading or label for something whose purpose is visually-apparent (and therefore, the heading/label does not need to be shown to sighted users; e.g.: a section label or a form-element label), or,
* in general, shouldn't be visible to sighted users but should be visible to screen-reader users,

... then you should make it invisible (visually-hidden).

You can do this by:

* giving the element the `visually-hidden` class,
* in Drupal 8 or higher, configuring fields from the _Manage display_ page for entity subtypes (for example, the Tags field on the Article content type) to set a field's label to "- Visually Hidden -",
* using CSS to position it outside the visible area of the page, or,
* using the CSS  
```php  
position: absolute !important;  
clip: rect(1px, 1px, 1px, 1px);  
overflow: hidden;  
height: 1px;  
width: 1px;  
word-wrap: normal;  
```  
on the element.

Example:

Hiding the title of the error, warning and status messages.

Reasoning:

In most themes, the status messages are displayed prominently in a colored box so that they are eye-catching for sighted users, but, to conform with [WCAG 2.0 section 1.3.3](http://www.w3.org/TR/WCAG20/#content-structure-separation), understanding and operating content should not rely solely on sensory characteristics of components such as shape, size, visual location, or orientation.

Without a title to indicate what the status messages are, they might be confusing to screen-reader users.

Most screen-readers can skip through the page using headings on the page. Giving the messages a header will make the messages easier to find.