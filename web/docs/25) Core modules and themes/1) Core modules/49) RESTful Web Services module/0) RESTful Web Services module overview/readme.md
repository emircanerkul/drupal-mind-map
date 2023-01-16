---
url: https://www.drupal.org/docs/8/core/modules/rest/overview
description: >-
  The RESTful Web Services module is included in Drupal 8 core. It is inspired
  by the Drupal 7 RESTful Web Services module. For serializing data, it depends
  on the Serialization module in Drupal 8 core. What is REST? Web Services make
  it possible for other applications to read and update information on your site
  via the Web. REST is one of a number of different ways of making Web Services
  available on your site. In contrast to other techniques such as SOAP or
  XML-RPC, REST encourages developers to rely on HTTP methods (such as GET and
  POST) to operate on resources (data managed by Drupal).
published_time: '2013-04-16T17:55:31+00:00'
modified_time: '2018-04-26T19:24:00+00:00'
---
The RESTful Web Services module is included in [Drupal 8 core](/project/drupal).

It is inspired by the Drupal 7 [RESTful Web Services](https://www.drupal.org/project/restful) module. For serializing data, it depends on the [Serialization](/documentation/modules/serialization) module in Drupal 8 core.

### What is REST?

Web Services make it possible for other applications to read and update information on your site via the Web. REST is one of a number of different ways of making Web Services available on your site. In contrast to other techniques such as SOAP or XML-RPC, REST encourages developers to rely on HTTP methods (such as GET and POST) to operate on resources (data managed by Drupal).

If you are new to REST, you can find out more about HTTP methods, and other REST topics such as media types, and hypermedia, in the [More info on REST](http://drupal.org/node/1972060) section.

### Features

This module builds on top of Drupal 8's [Serialization](/documentation/modules/serialization) module to provide a customizable, extensible RESTful API of data managed by Drupal. Out of the box, it allows you to interact with any content entity (nodes, users, comments …) or since Drupal 8.2.0 config entity (vocabularies, user roles…) as well as watchdog database log entries.

* modules can expose additional resources
* supports GET/POST/PATCH/DELETE (PUT is not supported for [good reasons](https://groups.drupal.org/node/284948))
* integrates with Drupal's role-based authentication system automatically: one permission per resource (and per verb)
* modules can add authentication mechanisms, these can then be applied to any of the resources
* modules can add more serialization formats — see the [ Serialization](/documentation/modules/serialization) module

### Issue queue

<http://drupal.org/project/issues/drupal?component=rest.module>