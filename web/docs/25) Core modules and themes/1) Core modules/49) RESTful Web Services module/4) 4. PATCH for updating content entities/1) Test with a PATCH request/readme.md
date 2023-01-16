Just like it was required in the POST example, this PATCH example will also require the presence of `_links` because we're using HAL+JSON.

When PATCHing resources, only send the _changes_. Omit anything that is not changed. This means less data to transmit, but it also means you won't get 403 (Forbidden) responses because you're not allowed to modify certain parts. For example, it never makes sense to send a UUID (since the UUID must by definition remain the same).  
On the other hand, certain information _must always_ be sent, despite it not being changed, because otherwise it's impossible for the server to [deserialize](/developing/api/8/serialization) that information. In the case of content entities that have bundles (e.g. Node entities have different "content types", in this case "content type" == bundle), you must always send the bundle.

_In all of the examples below, you should get a 200 response, which includes the serialized entity in the body (since Drupal 8.1.0, i.e. since [#2662284: Return complete entity after successful PATCH](https://www.drupal.org/project/drupal/issues/2662284 "Status: Closed (fixed)") — before then, you'll get a 204 response, with an empty body)_

### cURL (command line)

```php
curl --include \
  --request PATCH \
  --user klausi:secret \
  --header 'Content-type: application/hal+json' \
  --header 'X-CSRF-Token: <obtained from http://example.com/rest/session/token>' \
  http://example.com/node/56?_format=hal_json \
  --data-binary '{"_links":{"type":{"href":"http://example.com/rest/type/node/article"}},"title":[{"value":"Example node title UPDATED!"}],"type":[{"target_id":"article"}]}'

```

### Guzzle

```php
<?php
$serialized_entity = json_encode([
  'title' => [['value' => 'Example node title UPDATED']],
  'type' => [['target_id' => 'article']],
  '_links' => ['type' => [
      'href' => 'http://example.com/rest/type/node/article'
  ]],
]);

$response = \Drupal::httpClient()
  ->patch('http://example.com/node/56?_format=hal_json', [
    'auth' => ['klausi', 'secret'],
    'body' => $serialized_entity,
    'headers' => [
      'Content-Type' => 'application/hal+json',
      'X-CSRF-Token' => <obtained from /rest/session/token>
    ],
  ]);
?>

```

### jQuery

```php
function getCsrfToken(callback) {
  jQuery
    .get(Drupal.url('rest/session/token'))
    .done(function (data) {
      var csrfToken = data;
      callback(csrfToken);
    });
}

function patchNode(csrfToken, node) {
  jQuery.ajax({
    url: 'http://example.com/node/56?_format=hal_json',
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/hal+json',
      'X-CSRF-Token': csrfToken
    },
    data: JSON.stringify(node),
    success: function (node) {
      console.log(node);
    }
  });
}

var newNode = {
  _links: {
    type: {
      href: 'http://example.com/rest/type/node/article'
    }
  },
  type: {
    target_id: 'article'
  },
  title: {
    value: 'Example node title UPDATED'
  }
}; 

getCsrfToken(function (csrfToken) {
  patchNode(csrfToken, newNode);
});

```

### PATCH with Taxonomy Term entity reference using HAL+JSON: cURL (command line)

The following is an example of a `PATCH` request using HAL+JSON to update an `article` Node with a taxonomy term entity reference for a "tagging" vocabulary.

**This example applies only to HAL+JSON, since the concept of `_embedded` is specific to HAL+JSON, it does not exist in JSON or XML.**

Before you can actually PATCH the article node with a tag when using the HAL+JSON format, you first have to GET the tag to retrieve its UUID (because HAL+JSON requires references by UUID). If it's a new term, you must first POST it to create it.

```php
curl --request PATCH -k -i -s --user user:password --header 'Content-type: application/hal+json' -H 'Cache-Control: no-cache' --header 'X-CSRF-Token: <obtained from http://example.com/rest/session/token>' 'http://example.com/node/2081?_format=hal_json' --data-binary '
{
  "_links": {
      "self": {
        "href": "http://example.com/node/2081?_format=hal_json"
      },
    "type": {
      "href": "http://example.com/rest/type/node/article"
    },
    "http://example.com/rest/relation/node/article/field_tags": {
       "href": "http://example.com/taxonomy/term/1?_format=hal_json"
    }
  },
  "type": {
      "target_id": "article"
    },
    "nid": [
      {
        "value": "2081"
      }
    ],
  "title": {
      "value": "My Article PATCHED"
    },
  "body": {
      "value": "PATCHED"
  },
    "_embedded": {
      "http://example.com/rest/relation/node/article/field_tags": [
        {
          "_links": {
            "self": {
              "href": "http://example.com/taxonomy/term/1?_format=hal_json"
            },
            "type": {
              "href": "http://example.com/rest/type/taxonomy_term/tags"
            }
          },
          "uuid": [
            {
              "value": "ff61ea71-2540-47fe-a4bb-384b12d4de47"
            }
          ],
          "lang": "en"
        }
      ]
    }
}'

```