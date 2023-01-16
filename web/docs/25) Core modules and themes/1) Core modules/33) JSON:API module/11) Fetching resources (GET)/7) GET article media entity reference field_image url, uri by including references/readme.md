Newer syntax

URL: 

```php
http://example.com/jsonapi/node/article/{{article_uuid}}?include=field_image&fields[file--file]=uri,url
```

Older syntax

URL: `http://example.com/jsonapi/node/article/{{article_uuid}}?include=field_image,field_image.image,field_image.image.file--file&fields[field_image]=image&fields[file--file]=uri,url`

### 

### Response

HTTP 200 response. The response body contains the JSON:API object of included media image relationships, matching the single article node by '{{article\_uuid}}'