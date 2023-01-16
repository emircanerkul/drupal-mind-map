Using HTTP Basic authentication for a GET request is quite straightforward. Given the following resource configuration, which allows GET access on nodes through HTTP Basic authentication and supports hal+json format:

```php
resources:
  'entity:node':
    GET:
      supported_formats:
        - hal_json
      supported_auth:
        - basic_auth

```

_Note: make sure that hal and basic\_auth modules are enabled._

If a node is created, its nid is 1 and the Authenticated role has the permission _Access GET on Content resource_, we can make the following cURL request:

```php
curl --request GET --user myusername:mypassword --header 'Accept: application/hal+json' \
http://d8.local/node/1?_format=hal_json

```

And the response should be something like this:

```php
{"_links":{"self":{"href":"http:\/\/d8.local\/node\/1"},"type":{"href":"http:\/\/d8.local\/rest\/type\/node\/page"},"http:\/\/d8.local\/rest\/relation\/node\/page\/uid":[{"href":"http:\/\/d8.local\/user\/1","lang":"en"}],"http:\/\/d8.local\/rest\/relation\/node\/page\/revision_uid":[{"href":"http:\/\/d8.local\/user\/0"}]},"uuid":[{"value":"f8e0ab5f-8066-49cf-815e-94f8f38b172b"}],"type":[{"target_id":"page"}],"langcode":[{"value":"en"}],"title":[{"value":"asdfasdf","lang":"en"}],"_embedded":{"http:\/\/d8.local\/rest\/relation\/node\/page\/uid":[{"_links":{"self":{"href":"http:\/\/d8.local\/user\/1"},"type":{"href":"http:\/\/d8.local\/rest\/type\/user\/user"}},"uuid":[{"value":"d3fdfeaf-926f-4258-a905-5fe88f1065e2"}],"lang":"en"}],"http:\/\/d8.local\/rest\/relation\/node\/page\/revision_uid":[{"_links":{"self":{"href":"http:\/\/d8.local\/user\/0"},"type":{"href":"http:\/\/d8.local\/rest\/type\/user\/user"}},"uuid":[{"value":"2cb087e9-60f5-4bf9-9905-5d3dd34483c4"}]}]},"status":[{"value":"1","lang":"en"}],"created":[{"value":"1396992603","lang":"en"}],"changed":[{"value":"1396992608","lang":"en"}],"promote":[{"value":"0","lang":"en"}],"sticky":[{"value":"0","lang":"en"}],"revision_timestamp":[{"value":"0"}],"log":[{"value":"","lang":"en"}],"body":[{"value":"<p>asdfasfd<\/p>\r\n","format":"basic_html","summary":""}]}

```