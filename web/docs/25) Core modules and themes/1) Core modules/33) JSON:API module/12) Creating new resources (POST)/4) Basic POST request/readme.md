URL: `http://example.com/jsonapi/node/article`

### Request body

```php
{
  "data": {
    "type": "node--article",
    "attributes": {
      "title": "My custom title",
      "body": {
        "value": "Custom value",
        "format": "plain_text"
      }
    }
  }
}

```

### Response

HTTP 201 (Created) response. The response body contains the JsonApi response of the created entity.