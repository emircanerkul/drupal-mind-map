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

```

**NOTE:** latest versions of Drupal 8 (at time of writing 8.9.x) don't have _hal\_json_ format available just _json._ Thus you need to substitute _json_ wherever you see _hal\_json_ below.