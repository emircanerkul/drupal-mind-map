URL: `http://example.com/jsonapi/node/article?page[limit]=10&page[offset]=10`

### Response

HTTP 200 response. The response body contains the JSON:API object of max. 10 articles, including links to prev, next, etc.

For more information about pagination, see: <https://www.drupal.org/docs/8/modules/jsonapi/pagination>