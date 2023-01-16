By default, multiple local files will be aggregated where possible. To disable this for a file, set its 'preprocess' flag to false.

```php
cuddly-slider:
  version: 1.x
  js:
    js/cuddly-slider.js: {preprocess: false}
  dependencies:
    - core/jquery
    - core/drupalSettings

```