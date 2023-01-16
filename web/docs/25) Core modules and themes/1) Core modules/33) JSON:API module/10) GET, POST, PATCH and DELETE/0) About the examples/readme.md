All examples are working examples that you can try either in a browser or a JSON client (for example: Postman). You need a standard Drupal installation, a number of Article nodes and the JSON:API module enabled.

```php
http://example.com/jsonapi/node/article/{{article_uuid}}

```

All requests use the '/jsonapi' path prefix, which is the default value of the JSON:API module. In various examples placeholders are denoted by a double curly brace syntax, eg. `{{...}}`. Replace them with the designated data applicable for your environment.

To allow POST, PATCH and DELETE operation, visit  
_/admin/config/services/jsonapi_  
and check the "Accept all JSON:API create, read, update, and delete operations." option.

![jsonapi-accept-create-read-update-delete](https://www.drupal.org/files/jsonapi-accept-create-read-update-delete.png)