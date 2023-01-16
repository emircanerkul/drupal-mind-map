### Create

POST: <http://example.com/entity/node>  
Content-type: application/json

```php
{
  "type":[{"target_id":"article"}],
  "title":[{"value":"Hello World"}],
  "body":[{"value":"How are you?"}]
}
```

201 - Created

For setting the value of an **entity reference field** referencing another entity type, all you need is its uuid:

```php
"_embedded": {
  "https://example.com/rest/relation/node/article/my_entity_reference_field": [
    { 
      "uuid":[{"value":"yourUUID-xxx-xxxx-xxxx-xxxxxxxxx"}]
    }
  ]
}
```

### Retrieve

GET: <http://example.com/node/123?%5Fformat=json>  
Content-type: \*  
Accept: application/json  
200 - OK

### Update

PATCH: <http://example.com/node/123>  
Content-type: application/json

```php
{
  "nid":[{"value":"123"}],
  "type":[{"target_id":"article"}],
  "title":[{"value":"Goodbye World"}]
}
```

204 - No Content

### Delete

DELETE: <http://example.com/node/123>  
Content-type: \*  
`{"type":[{"target_id":"article"}]}`  
204 - No Content