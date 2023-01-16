URL: `http://example.com/jsonapi/node/article`

### Request body

```php
{
  "data": {
    "type": "node--article",
    "attributes": {
      "title": "Article by admin",
      "body": {
        "value": "Custom value",
        "format": "plain_text"
      }
    },
    "relationships": {
      "uid": {
        "data": {
          "type": "user--user",
          "id": "{{UUID of user 1}}"
        }
      }
    }
  }
}

```

### Response

HTTP 201 (Created) response. The response body contains the JsonApi response of the created entity.