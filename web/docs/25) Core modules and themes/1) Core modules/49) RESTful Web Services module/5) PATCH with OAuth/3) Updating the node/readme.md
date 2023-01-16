With the above setup, you can make OAuth requests to update content on your Drupal site. Here is a Guzzle script that changes the title of the node with nid 56:

```php
require 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\HandlerStack;
use GuzzleHttp\Subscriber\Oauth\Oauth1;

$stack = HandlerStack::create();

$middleware = new Oauth1([
  'consumer_key'    => 'yourconsumerkey',
  'consumer_secret' => 'yourconsumersecret',
]);
$stack->push($middleware);

$client = new Client([
  'base_uri' => 'http://d8.local',
  'handler' => $stack,
]);

// Prepare the entity data.
$serialized_entity = json_encode([
  'title' => [['value' => 'Updated node title']],
  'type' => [['target_id' => 'article']],
  '_links' => ['type' => [
      'href' => 'http://d8.local/rest/type/node/article'
  ]],
]);

$response = $client->patch('node/56?_format=hal_json', [
  'auth' => 'oauth',
  'headers' => [
    'Accept' => 'application/hal+json',
    'Content-Type' => 'application/hal+json',
  ],
  'body' => $serialized_entity,
  'debug' => true,
]);

```

This is the full response from the server when you run this script:

![](https://www.drupal.org/files/patch_request.jpg)