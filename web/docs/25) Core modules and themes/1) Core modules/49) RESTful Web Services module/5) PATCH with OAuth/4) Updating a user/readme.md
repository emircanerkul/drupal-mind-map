This is an example using the hal\_json format to update the email and password:

```php
$serialized_entity = json_encode([
  "_links": {
    "type": {
      "href": "http://d8/rest/type/user/user"
    }
  },
  "mail": [{
    "value": "marthinal@drupalisawesome.com"
  }],
  "pass": [{
    "existing": "existingSecretPass",
    "value": "myNewSuperSecretPass"
  }],
]);
```