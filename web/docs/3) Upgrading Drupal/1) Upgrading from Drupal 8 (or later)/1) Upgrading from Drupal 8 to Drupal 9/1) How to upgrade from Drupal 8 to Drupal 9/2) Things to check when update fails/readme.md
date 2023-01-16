Upgrading your site you may want to check composer.json for these lines:

```php
"drupal/core":"^8.8.0", -> delete this line
"laminas/laminas-diactoros":"1.8" -> change to "^2"
"drupal/core-dev": "^8.8.0" -> change to "^9"
```