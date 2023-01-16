URL: `http://example.com/jsonapi/node/article/{{article_uuid}}`

### Request body

```php
{
  "data": {
    "type": "node--article",
    "id": "{{article_uuid}}",
    "attributes": {
      "title": "My updated title"
    }
  }
}

```

The "id" is required. Add the attributes that should be updated.

### Response

HTTP 200 response. The response body with the JsonApi response of the updated entity.