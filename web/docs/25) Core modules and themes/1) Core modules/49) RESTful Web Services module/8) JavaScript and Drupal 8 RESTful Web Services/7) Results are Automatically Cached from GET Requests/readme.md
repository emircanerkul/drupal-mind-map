While developing, it's important to understand that when you make a **GET** request to _D8 Rest_, Drupal will cache the result so subsequent requests receive a speedy response. You can either **clear all of Drupal's caches** to get the new results, or append a timestamp to the URL query string:

`node/123?_format=json&time=123456789`

Or if you've created a custom resource, use `addCacheableDependency()` on the `ResourceResponse`:

```php
$response = new ResourceResponse(array('hello' => 'world'));
$response->addCacheableDependency($account);
return $response;
```