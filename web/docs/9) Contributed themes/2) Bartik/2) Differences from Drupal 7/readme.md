Significant work has been done on Bartik in Drupal 8 to improve structure, extensibility, code quality, accessibility and responsive design.

Bartik uses breakpoint module to declare its responsive breakpoints.

```php
bartik.mobile:
  label: mobile
  mediaQuery: ''
  weight: 0
  multipliers:
    - 1x
bartik.narrow:
  label: narrow
  mediaQuery: 'all and (min-width: 560px) and (max-width: 850px)'
  weight: 1
  multipliers:
    - 1x
bartik.wide:
  label: wide
  mediaQuery: 'all and (min-width: 851px)'
  weight: 2
  multipliers:
    - 1x
```