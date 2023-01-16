There are a number of responsive display classes that you can use to control the visibility of elements for small or big screens. All these classes are using \`$responsive-break\` SASS variables for media queries.

These classes are defined in /bs\_base/themes/bs\_bootstrap/sass/base/partials/\_display.scss and are:

```php
// Display only on screens smaller then responsive break width.
.only-size-small, .display-only-small

// Display only on screens bigger then responsive break width.
.only-size-big, .display-only-big

// Hide on small screens.
.hide-size-small

// Hide on big screens.
.hide-size-big

// Display label only on big screens and for other screens show it only for screen readers.
.label-only-size-big

// Hide label for all screens but still show them on screen readers.
.hide-label
```