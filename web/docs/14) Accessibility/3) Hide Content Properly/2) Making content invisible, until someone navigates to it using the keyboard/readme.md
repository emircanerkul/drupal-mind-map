If an element on the page:

* is a link to help users jump to the main content or main navigation,
* is an alternative to other elements which can only be used with a mouse, or,
* in general, shouldn't be visible to sighted users unless they are using a keyboard to navigate the page,

... then you should make it invisible, until someone navigates to it using the keyboard.

You can do this by:

* giving the element BOTH the `visually-hidden` and `focusable` classes, or,
* using the CSS  
```php  
css_selector_for_my_element {  
  position: absolute !important;  
  clip: rect(1px, 1px, 1px, 1px);  
  overflow: hidden;  
  height: 1px;  
  width: 1px;  
  word-wrap: normal;  
}  
css_selector_for_my_element:active,  
css_selector_for_my_element:focus {  
  position: static !important;  
  clip: auto;  
  overflow: visible;  
  height: auto;  
  width: auto;  
}  
```  
Where `css_selector_for_my_element` is the selector for the element you want to make invisible until someone navigates to it using the keyboard.

Example:

The "Skip to main content" link at the top of every page in Core themes.

Reasoning:

Keyboard-only and screen-reader users want a way to quickly jump to the main content of the page.

To conform to [WCAG 2.0 section 2.4.1](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip) standards, you must provide a way to skip blocks of content that are repeated on multiple pages.