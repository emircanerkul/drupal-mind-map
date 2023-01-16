This assumes you've already authenticated and retrieved your CSRF token in another request.

```php
curl -s -X POST -b cookie.txt \
  --header "Accept: application/vnd.api+json" \
  --header "Content-Type: application/octet-stream" \
  --header "X-CSRF-Token: $TOKEN" \
  --header 'Content-Disposition: file; filename="test.jpg"' \
  --data-binary "@test.jpg" \
  http://localhost/jsonapi/user/user/$UUID/user_picture
```