It's easy! Just by adding a query parameter to the original request URL with the names of the relationship fields you would like to include, the server will know to look everything up for you and add it to the original response document.

In our example, the URL request you would make would be `GET /jsonapi/node/article/some-random-uuid?include=field_comments.uid`. In other words, you're saying "please add the [resource objects](https://www.drupal.org/docs/8/modules/json-api/glossary-of-terms-read-first#term-resource-object) for the `field_comments` field on the article, _then_ also add the resource objects for the `uid` field on whichever comments it references." These "relationship paths" can be as long as you'd like, there's no limit!

The response document that you'd get from the server would be:

```php
{
  "data": {
    "type": "node--article",
    "id": "some-random-uuid",
    "relationships": {
      "field_comments": {
        "data": [{
          "type": "comment",
          "id": "one-random-uuid",
        }, {
          "type": "comment",
          "id": "two-random-uuid",
        }],
        "links": {
          "related": {
            "href": "https://my.example.com/node/article/some-random-uuid/field_comments"
          }
        }
      }
    }
  },
  "included": [{
    "type": "comment",
    "id": "one-random-uuid",
    "relationships": {
      "uid": {
        "data": [{
          "type": "user",
          "id": "another-random-uuid",
        }],
        "links": {
          "related": {
            "href": "https://my.example.com/comment/one-random-uuid/uid"
          }
        }
      }
    }
  }, {
    "type": "comment",
    "id": "another-random-uuid",
    "relationships": {
      "uid": {
        "data": [{
          "type": "user",
          "id": "one-random-uuid",
        }],
        "links": {
          "related": {
            "href": "https://my.example.com/comment/two-random-uuid/uid"
          }
        }
      }
    }
  }, {
    "type": "user",
    "id": "another-random-uuid",
    "attributes": {
      "name": "c0wb0yC0d3r"
    }
  }]
}

```

Isn't that cool? We got all the data in one request! Notice how the user resource object is only included once, even though it's referenced twice. This keeps the response _size_ down. Also, notice how there is now a `data` key in each [relationship object](https://www.drupal.org/docs/8/modules/json-api/glossary-of-terms-read-first#term-relationship-object). That let's you correlate the included resource objects with the resource objects that referenced them.