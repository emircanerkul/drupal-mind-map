Note that in this case, the `Content-Type` header is not necessary (because no request body is sent, so no data is sent, so there is nothing to have a MIME type).

### cURL (command line)

```php
curl --include \
  --request DELETE \
  --user klausi:secret \
  --header 'X-CSRF-Token: <obtained from http://example.com/rest/session/token>' \
  http://example.com/node/56?_format=hal_json \

```

### Guzzle

```php
<?php
$response = \Drupal::httpClient()
  ->delete('http://example.com/node/56?_format=hal_json', [
    'auth' => ['klausi', 'secret'],
    'headers' => [
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

function deleteNode(csrfToken) {
  jQuery.ajax({
    url: 'http://example.com/node/56?_format=hal_json',
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': csrfToken
    },
    success: function () {
      console.log('Node deleted.');
    })
  });
}

getCsrfToken(function (csrfToken) {
  deleteNode(csrfToken);
});

```