Twig is able to show you the HTML template resources for specific HTML objects on a given webpage. To accomplish that, the `docroot/sites/development.services.yml` file must be modified and the following property values must be set:

```php
parameters:
  twig.config:
    debug: true
```