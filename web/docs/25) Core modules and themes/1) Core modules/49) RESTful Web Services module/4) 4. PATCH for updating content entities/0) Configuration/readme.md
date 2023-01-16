This builds upon the GET and POST examples of the previous pages.

See [Getting started: REST configuration & REST request fundamentals — Configuration](/documentation/modules/rest/start#configuration)

Sample requests below assume this configuration:

```php
resources:
  entity:node:
    GET:
      supported_formats:
        - hal_json
      supported_auth:
        - basic_auth
        - cookie
    POST:
      supported_formats:
        - hal_json
      supported_auth:
        - basic_auth
        - cookie
    PATCH:
      supported_formats:
        - hal_json
      supported_auth:
        - basic_auth
        - cookie

```