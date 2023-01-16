Using session authentication for a POST request is a bit more complicated than HTTP Basic Authentication, because we need to provide a CSRF protection token. This is necessary to protect web browser users from malicious sites that could trigger RESTful POST requests on the user's behalf.

Example of POSTing a node with Guzzle version 4:

```php
require_once($_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php');

use GuzzleHttp\Client;
use GuzzleHttp\Cookie\CookieJar;
use GuzzleHttp\Exception\RequestException;

$base_url = 'http://drupal8.local';

$jar = new CookieJar();

try {

  $client = new Client([
    'base_url' => $base_url,
    'cookies' => true,
    'allow_redirects' => true,
    'debug' => true
  ]);

  $response = $client->post($base_url . '/user/login', [
    "form_params" => [
      "name"=> "admin",
      "pass"=> "admin",
      'form_id' => 'user_login_form'
    ],
    'cookies' => $jar
  ]);

  $token = $client->get($base_url . '/rest/session/token', [
    'cookies' => $jar
  ])->getBody(TRUE);

  $token = $token->__toString();

  $node = array(
    '_links' => array(
      'type' => array(
        'href' => $base_url . '/rest/type/node/article'
      )
    ),
    'title' => array(0 => array('value' => 'New node title - Cookie')),
  );

  $response = $client->post($base_url . '/entity/node', [
    'cookies' => $jar,
    'headers' => [
      'Accept' => 'application/json',
      'Content-type' => 'application/hal+json',
      'X-CSRF-Token' => $token,
    ],
    'json' => $node
  ]);
  if ($response->getStatusCode() == 201) {
    print 'Node creation successful!';
  } else {
    print "unsuccessful... keep trying";
    print_r(get_defined_vars());
  }
} catch(RequestException $e) {
  echo $e->getRequest();
  echo "\n\n";
  if ($e->hasResponse()) {
    echo $e->getResponse();
  }
}

```