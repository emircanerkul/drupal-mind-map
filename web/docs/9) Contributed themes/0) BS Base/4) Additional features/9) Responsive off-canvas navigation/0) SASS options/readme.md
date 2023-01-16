Next two SASS variables, defined in bs\_base/sass/variables/\_bs\_base.scss are controlling breakpoint used for navbar collapsing for small screens:

```php
// Defines screen size between 'bigger' and 'smaller' screens. Usually this is
// a size where navigation bar is hidden for smaller screen and toggler is show.
$responsive-break: "md" !default;

// If you need to always enable responsive navigation behaviour for all screens
// then use biggest breakpoint here, usually `xl`.
$navbar-collapse-responsive-break: $responsive-break !default;
```

So you have the option to always collapse navbar for all screen sizes, just override $navbar-collapse-responsive-break to the biggest breakpoint you are using.

SAS partials that are responsible for the styling of the off-canvas menu is bs\_base/themes/bs\_bootstrap/sass/components/navbar-offcanvas.scss.