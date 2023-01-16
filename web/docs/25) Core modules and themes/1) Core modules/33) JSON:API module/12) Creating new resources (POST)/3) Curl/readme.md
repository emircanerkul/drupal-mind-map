Assume your data is in the file `payload.json`.

```php
curl \
    --user api:api \
    --header 'Accept: application/vnd.api+json' \
    --header 'Content-type: application/vnd.api+json' \
    --request POST http://drupal.d8/jsonapi/node/article \
    --data-binary @payload.json
```