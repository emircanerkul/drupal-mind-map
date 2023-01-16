### Create

POST: <http://example.com/entity/comment>  
Content-type: application/json

```php
{
  "entity_id":[{"target_id":123}],
  "entity_type":[{"value":"node"}],
  "comment_type":[{"target_id":"comment"}],
  "field_name":[{"value":"comment"}],
  "subject":[{"value":"Goodbye World"}],
  "comment_body":[
    {"value":"<p>See you later!</p>","format":"basic_html"}
  ]
}
```

201 - Created

### Retrieve

GET: <http://example.com/comment/456?%5Fformat=json>  
200 - OK

### Update

[#2631774: Impossible to update Comment entity with REST (HTTP PATCH): bundle field not allowed to be updated, but EntityNormalizer::denormalize() requires it](https://www.drupal.org/project/drupal/issues/2631774 "Status: Closed (fixed)")

### Delete

DELETE: <http://example.com/comment/456>  
Content-type: \*  
`{"comment_type":[{"target_id":"comment"}]}`  
204 - No Content