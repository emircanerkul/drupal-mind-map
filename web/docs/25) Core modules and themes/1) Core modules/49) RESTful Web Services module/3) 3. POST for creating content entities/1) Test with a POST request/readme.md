In this example, we will use HAL+JSON. HAL+JSON has the concept of relations. Most of the content in Drupal has relations. Make sure the relations are properly added to the payload (they live under the `_links` key).

For instance if you want to POST a new comment you need a `_links` entry to the user and to the entity the comment is for. Best way to get this is to first GET an example and study its `_links`.

Never POST a UUID (or node ID/comment ID/…) as you create a new entity.

_In all of the examples below, you should get a 201 response, which includes the serialized entity in the body (since Drupal 8.1.0, i.e. since [#2546216: Return entity object in REST response body after successful POST](https://www.drupal.org/project/drupal/issues/2546216 "Status: Closed (fixed)") — before then, you'll get a 201 response, with an empty body)_

_Prior to Drupal 8.3.0, instead of `/node` POST to `/entity/node` \- deprecated and will be removed in Drupal 9._

_Prior to Drupal 8.2.0, obtain the CSRF token if needed from `/rest/session/token` \- deprecated and will be removed in Drupal 9_

### cURL (command line)

```php
curl --include \
  --request POST \
  --user klausi:secret \
  --header 'Content-type: application/hal+json' \
  --header 'X-CSRF-Token: <obtained from http://example.com/session/token> (Only needed if authenticating with a cookie rather than user credentials)' \
  http://example.com/entity/node?_format=hal_json \
  --data-binary '{"_links":{"type":{"href":"http://example.com/rest/type/node/article"}},"title":[{"value":"Example node title"}],"type":[{"target_id":"article"}]}'

```

### Guzzle

```php
<?php
$serialized_entity = json_encode([
  'title' => [['value' => 'Example node title']],
  'type' => [['target_id' => 'article']],
  '_links' => ['type' => [
      'href' => 'http://example.com/rest/type/node/article'
  ]],
]);

$response = \Drupal::httpClient()
  ->post('http://example.com/entity/node?_format=hal_json', [
    'auth' => ['klausi', 'secret'],
    'form_params' => $serialized_entity,
    'headers' => [
      'Content-Type' => 'application/hal+json',
      'X-CSRF-Token' => <obtained from /session/token>
    ],
  ]);
?>

```

### jQuery

```php
function getCsrfToken(callback) {
  jQuery
    .get(Drupal.url('session/token'))
    .done(function (data) {
      var csrfToken = data;
      callback(csrfToken);
    });
}

function postNode(csrfToken, node) {
  jQuery.ajax({
    url: 'http://example.com/node?_format=hal_json',
    method: 'POST',
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
    value: 'Example node title'
  }
}; 

getCsrfToken(function (csrfToken) {
  postNode(csrfToken, newNode);
});

```

### Notes

#### Basic authentication

If using Basic Auth You need to set the "Authorization" header. Here is an example:

```php
function formatBasicAuth(userName, password) {
  var basicAuthCredential = userName + ":" + password;
  var bace64 =  btoa(basicAuthCredential);
  return 'Basic ' + bace64;
}

// then in your post
var basic = formatBasicAuth('userName', 'password');
...

'X-CSRF-Token': csrfToken,
'Authorization': basic,
```

#### CORS

Also note if having trouble with this you may also need to check your cors (Cross-Origin Resource Sharing) settings in sites/default/services.yml and for development only you can change it to the following .. but remember to lock it down on production. 

```yaml
   # Configure Cross-Site HTTP requests (CORS).
   # Read https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
   # for more information about the topic in general.
   # Note: By default the configuration is disabled.
  cors.config:
    enabled: true
    # Specify allowed headers, like 'x-allowed-header'.
    allowedHeaders: ['*']
    # Specify allowed request methods, specify ['*'] to allow all possible ones.
    allowedMethods: ['*']
    # Configure requests allowed from specific origins.
    allowedOrigins: ['*']
    # Sets the Access-Control-Expose-Headers header.
    exposedHeaders: false
    # Sets the Access-Control-Max-Age header.
    maxAge: false
    # Sets the Access-Control-Allow-Credentials header.
    supportsCredentials: false
```

### Dev HTTP client

[![](/files/Drupal_8_POST_DHC.png)](/files/Drupal%5F8%5FPOST%5FDHC.png)

### POST with Taxonomy Term entity reference using HAL+JSON: cURL (command line)

The following is an example of a `POST` request using HAL+JSON to create an `article` Node with a taxonomy term entity reference for a "tagging" vocabulary.

**This example applies only to HAL+JSON, since the concept of `_embedded` is specific to HAL+JSON, it does not exist in JSON or XML.**

Before you can actually POST the article node with a tag when using the HAL+JSON format, you first have to GET the tag to retrieve its UUID (because HAL+JSON requires references by UUID). If it's a new term, you must first POST it to create it. See also example 'POST term'.

```php
curl --request POST -k -i -s --user user:password --header 'Content-type: application/hal+json' -H 'Cache-Control: no-cache' --header 'X-CSRF-Token: <obtained from http://example.com/session/token>' 'http://example.com/entity/node?_format=hal_json' --data-binary '
{
  "_links": {
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
  "title": {
      "value": "My Article"
    },
  "body": {
      "value": "some body content aaa bbb ccc"
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

### POST New Taxonomy Term using HAL+JSON: cURL (command line)

Note: actual endpoint is '/entity/taxonomy\_term/'

```php
export JSON_DATA='
{
  "_links": {
    "type": {
      "href": "https://example.com/rest/type/taxonomy_term/tags"
    }
  },
  "vid": [
    {
      "target_id": "tags"
    }
  ],
  "name": [
    {
      "value": "RESTtag",
      "lang": "en"
    }
  ]
}'


curl --request POST \
  -k \
  -i \
  -s \
  --user "username:password" \
  --header 'Content-type: application/hal+json' \
  -H 'Cache-Control: no-cache' \
  --header "X-CSRF-Token: ####YourTokenHash####" \
  'https://example.com/entity/taxonomy_term/?_format=hal_json'  \
  --data-binary "$JSON_DATA"

```

**POST new user with CURL request using Command line:**

`curl --include --request POST --header 'Content-type: application/hal+json' http://localhost/xyz/web/user/register?_format=hal_json --data-binary '{"_links":{"type":{"href":"http://localhost/xyz/web/rest/type/user/user"}},"name":[{"value":"username"}],"mail":[{"value":"xyz@xyz.com"}],"pass":[{"value": "xyz"}]}'`