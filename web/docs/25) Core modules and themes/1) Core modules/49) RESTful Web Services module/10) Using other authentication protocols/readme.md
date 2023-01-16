---
url: >-
  https://www.drupal.org/docs/8/core/modules/rest/using-other-authentication-protocols
description: >-
  In the previous examples, we have used HTTP Basic authentication for all
  requests. You can also use other authentication protocols. Core includes:
  Cookie HTTP Basic Contrib provides: Key Auth API Authentication OAuth Simple
  OAuth IP OAuth2 JWT SSO Enabling supported_auth The auth method must be
  enabled for the specific resource and method. For example: resources:
  'entity:node': GET: supported_formats: - json # Support both the core provided
  auth protocols.
published_time: '2013-08-29T08:39:34+00:00'
modified_time: '2022-12-06T15:47:59+00:00'
---
In the previous examples, we have used HTTP Basic authentication for all requests. You can also use other authentication protocols.

Core includes:

* Cookie
* [HTTP Basic](https://drupal.org/documentation/modules/basic%5Fauth "HTTP Basic Authentication")

Contrib provides:

* [Key Auth](https://www.drupal.org/project/key%5Fauth)
* [API Authentication](https://www.drupal.org/project/rest%5Fapi%5Fauthentication)
* [OAuth](https://drupal.org/node/2110825)
* [Simple OAuth](https://www.drupal.org/node/2831022)
* [IP](https://www.drupal.org/project/ip%5Fconsumer%5Fauth)
* [OAuth2 JWT SSO](https://www.drupal.org/project/oauth2%5Fjwt%5Fsso)