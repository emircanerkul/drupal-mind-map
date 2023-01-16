The auth method must be enabled for the specific resource and method. For example:

```php
resources:
  'entity:node':
    GET:
      supported_formats:
        - json
      # Support both the core provided auth protocols.
      supported_auth:
        - cookie
        - http_basic

```