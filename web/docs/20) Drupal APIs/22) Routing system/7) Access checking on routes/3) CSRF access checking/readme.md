---
url: >-
  https://www.drupal.org/docs/8/api/routing-system/access-checking-on-routes/csrf-access-checking
description: >-
  CSRF (Cross-Site Request Forgery) protection is now integrated into the
  routing access system and should be used for any URLs that perform actions or
  operations that do not use a form callback. In previous versions of Drupal, it
  was necessary to add a generated token as a query parameter to a URL and check
  this token manually in either the callback or the access callback. Now you can
  simply use the '_csrf_token' requirement on a route definition. Doing so will
  automatically add a token to the query string, and this token will be checked
  for you.
published_time: '2019-04-15T21:35:51+00:00'
modified_time: '2022-04-03T07:18:42+00:00'
---
CSRF (Cross-Site Request Forgery) protection is now integrated into the routing access system and should be used for any URLs that perform actions or operations that do not use a form callback. In previous versions of Drupal, it was necessary to add a generated token as a query parameter to a URL and check this token manually in either the callback or the access callback. Now you can simply use the '`_csrf_token`' requirement on a route definition. Doing so will automatically add a token to the query string, and this token will be checked for you.

```yaml
# example.routing.yml

example:
  path: '/example'
  defaults:
    _controller: '\Drupal\example\Controller\ExampleController::content'
  requirements:
    _csrf_token: 'TRUE'

```

Note that, in order for the token to be added, the link must be generated using the `url_generator` service via route name rather than as a manually constructed path.

```php
$url = Url::fromRoute(
  'node_test.report',
  ['node' => $entity->id()],
  ['query' => [
    'token' => \Drupal::getContainer()->get('csrf_token')->get("node/{$entity->id()}/report")
  ]]);
```

API reference \[9.0\]: [CsrfTokenGenerator::get](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Access%21CsrfTokenGenerator.php/function/CsrfTokenGenerator%3A%3Aget/9.0.x)

To validate token manually (e.g. without adding `_csrf_token: 'TRUE'` to `[module].routing.yml` file) at the route destination use token and value used for generating it. 

```php
// Validate $token from GET parameter.
\Drupal::getContainer()->get('csrf_token')->validate($token, "node/{$entity->id()}/report");
```

### Anonymous Users

Currently the `_csrf_token` check fails for users without an active session, which includes most anonymous users. See: [#2730351: CSRF check always fails for users without a session](https://www.drupal.org/project/drupal/issues/2730351 "Status: Needs review")