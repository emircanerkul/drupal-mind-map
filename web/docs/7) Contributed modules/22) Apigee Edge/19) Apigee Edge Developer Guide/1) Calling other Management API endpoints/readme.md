The Apigee Edge module provides endpoints for the most commonly used calls to the Apigee Management API. However, in some cases a custom module requires an endpoint that is not provided by the module. In that case, custom modules can leverage the Drupal Apigee Edge client and connection settings to connect to additional Management API endpoints.

The following code snippet demonstrates how to use the Edge client to make calls from your developer portal to a new Management API Endpoint:

```php
/** @var \Drupal\apigee_edge\SDKConnectorInterface $sdk_connector */
$sdk_connector = \Drupal::service('apigee_edge.sdk_connector');
try {
  $sdk_connector->testConnection();
  $client = $sdk_connector->getClient();
}
catch (\Exception $exception) {
  // Handle error in the connection to Apigee Edge.
}

$api_product = 'binproduct';
$query_params = [
  'query' =>'list',
  'entity' => 'apps',
];
$endpoint = $client->getUriFactory()
  ->createUri("/organizations/{$sdk_connector->getOrganization()}/apiproducts/{$api_product}")
  ->withQuery(http_build_query($query_params));
try {
  $response = $client->get($client->getEndpoint() . $endpoint);
}
catch (\Exception $exception) {
  // Handle exception.
}

$results = json_decode((string) $response->getBody());
```

Note: This approach is only recommended for cases where the Management API endpoints are not already accessible in Drupal through controllers, entity storage, or the[ apigee-client-php](https://github.com/apigee/apigee-client-php) library!