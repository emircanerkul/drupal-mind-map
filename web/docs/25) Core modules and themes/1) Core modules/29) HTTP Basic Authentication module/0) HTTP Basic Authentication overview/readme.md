---
url: https://www.drupal.org/docs/8/core/modules/basic_auth/overview
description: >-
  The Basic Auth module takes a username and password out of the request and
  authenticates them against Drupal. It implements the HTTP Basic protocol, in
  which the username and password are encoded and added to the Authorization
  header within the request. You can find further details about how it works in
  its section on Wikipedia. This module does not offer any user interface. It
  simply provides an Authentication Provider for Drupal's Authentication Manager
  to use in order to authenticate a user for a given route.
published_time: '2014-01-11T16:44:40+00:00'
modified_time: '2022-07-06T15:26:26+00:00'
---
The Basic Auth module takes a username and password out of the request and authenticates them against Drupal.

It implements the [HTTP Basic](http://en.wikipedia.org/wiki/Basic%5Faccess%5Fauthentication) protocol, in which the username and password are encoded and added to the _Authorization_ header within the request. You can find further details about how it works in its [section on Wikipedia](http://en.wikipedia.org/wiki/Basic%5Faccess%5Fauthentication).

This module does not offer any user interface. It simply provides an Authentication Provider for Drupal's Authentication Manager to use in order to authenticate a user for a given route.

Here is an example of a route that uses Basic Auth to authenticate users:

```php
# core/modules/system/tests/modules/router_test_directory/router_test.routing.yml
module.router_test_11:
  path: '/router_test/test11'
  options:
    _auth: [ 'basic_auth' ]
  requirements:
    _user_is_logged_in: 'TRUE'
  defaults:
    _content: '\Drupal\router_test\TestContent::test11'

```

In order to access to `/router_test/test11`, you have to fill the Authentication header with a valid Drupal user who has permissions to access to that page.

The REST module supports this method to authenticate requests. There are practical examples of the [REST documentation](https://drupal.org/node/2098511).

Note that Basic Auth is NOT a means of logging into a Drupal site in order to make service GET requests that depend on the identity of the logged-in user (e.g. a views REST display that uses an Authored By relationship to return content belonging to the logged-in user). It is cookie authentication that makes views Relationships possible. See [Using other authentication protocols](https://www.drupal.org/node/2076725) for more on how to login from a client application and get the session cookie.