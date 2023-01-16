You might want to use JavaScript that is externally on a CDN (Content Delivery Network) to improve page loading speed. This can be done by declaring the library to be "external". It is also a good idea to include some information about the external library in the definition.

```php
angular.angularjs:
  remote: https://github.com/angular/angular.js
  version: 1.4.4
  license:
    name: MIT
    url: https://github.com/angular/angular.js/blob/master/LICENSE
    gpl-compatible: true
  js:
    https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js: { type: external, minified: true }

```