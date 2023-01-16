Finally, the `include` query parameter is supported on [collection](https://www.drupal.org/docs/8/modules/json-api/glossary-of-terms-read-first#term-collection-resource) and [relationship resources](https://www.drupal.org/docs/8/modules/json-api/glossary-of-terms-read-first#term-relationship-resource) too! Includes on collections can save you _many_ more requests.

### Include for collection example

Fetch includes for collection might look like this `GET /jsonapi/node/article?include=uid`. The `included` are similar separated from the `data` (array instead of object) as shown below.

```php
{
  "data": [{...}]
  "included": [{
    "type": "user",
    "id": "another-random-uuid",
    "attributes": {
      "name": "c0wb0yC0d3r"
    }
  }]
}

```