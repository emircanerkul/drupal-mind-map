You can use many clients to test requests.

### cURL

```php
curl http://example.com/node/1?_format=hal_json

```

### Guzzle

```php
$response = \Drupal::httpClient()
  ->get('http://example.com/node/1?_format=hal_json', [
    'auth' => ['username', 'password'],
  ]);

$json_string = (string) $response->getBody();

```

### jQuery

```php
jQuery.ajax({
  url: 'http://example.com/node/1?_format=hal_json',
  method: 'GET',
  success: function (comment) {
    console.log(comment);
  }
});

```

### Dev HTTP Client

An easy way to test is using a browser extension such as [Dev HTTP Client](https://chrome.google.com/webstore/detail/dev-http-client/aejoelaoggembcahagimdiliamlcdmfm). This exposes options for all of the HTTP headers that you may need to use.

[![GET request with Dev HTTP client](/files/DHC_by_Restlet.png)](https://drupal.org/files/DHC%5Fby%5FRestlet.png)