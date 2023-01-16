URL: `http://example.com/jsonapi/node/article?filter[article-title][path]=title&filter[article-title][value]={{title_filter}}&filter[article-title][operator]==`

### Response

HTTP 200 response. The response body contains the JSON:API object of articles, filtered by 'title' field value matching the value '{{title\_filter}}'

For more information about filters, see: <https://www.drupal.org/node/2943641>