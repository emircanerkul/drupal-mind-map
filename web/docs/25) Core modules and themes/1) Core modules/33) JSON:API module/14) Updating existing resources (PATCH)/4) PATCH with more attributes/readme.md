URL: `http://example.com/jsonapi/node/article/{{article_uuid}}`

### Request body

```php
{
  "data": {
    "type": "node--article",
    "id": "{{article_uuid}}",
    "attributes": {
      "title": "My updated title",
      "body": {
        "value": "Updated body text",
        "format": "plain_text",
        "summary": "Updated summary"
      }
    },
    "relationships": {
      "uid": {
        "data": {
          "type": "user--user",
          "id": "{{user_uuid}}"
        }
      }
    }
  }
}

```

### Response

HTTP 200 response. The response body with updated body, summary and author updated entity.