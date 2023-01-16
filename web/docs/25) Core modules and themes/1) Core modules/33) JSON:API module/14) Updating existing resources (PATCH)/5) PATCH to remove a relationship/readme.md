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
      "my_entity_reference_field": {
        "data": {},
      }
    }
  }
}

```

### Response

HTTP 200 response. The response body with the updated body, summary, and entity reference removed.