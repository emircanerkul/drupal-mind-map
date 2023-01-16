---
url: https://www.drupal.org/docs/8/core/modules/serialization/overview
description: >-
  The Serialization module is included in Drupal 8 core. It is built on top of
  the Symfony Serializer component. The Serialization module provides a
  framework to add additional serialization formats simply by installing
  additional modules. Drupal 8 core's HAL module adds support for HAL+JSON, the
  CSV serialization contrib module adds CSV support. Serialization? What about
  REST? This module is a dependency of the RESTful Web Services module in Drupal
  8 core.
published_time: '2016-02-12T10:00:54+00:00'
modified_time: '2016-11-09T16:38:49+00:00'
---
The Serialization module is included in [Drupal 8 core](/project/drupal).

It is built on top of the [Symfony Serializer component](http://symfony.com/components/Serializer).

The Serialization module provides a framework to add additional serialization formats simply by installing additional modules. Drupal 8 core's [HAL](/documentation/modules/hal) module adds support for HAL+JSON, the [CSV serialization](/project/csv%5Fserialization) contrib module adds CSV support.

### Serialization? What about REST?

This module is a dependency of the [RESTful Web Services](/documentation/modules/rest) module in Drupal 8 core. Without this, the RESTful Web Services module wouldn't know how to turn data (for example, comments, users, nodes) into formats such as JSON and XML. It's this process that is called serialization.

### Features

The Serialization module provides no user-facing features. It only provides infrastructure for other modules, such as the aforementioned RESTful Web Services module. However, it is not limited to purely serialization, it also takes care of _normalization_. Different serialization formats have different structures and expose slightly different information. For example, JSON is a serialization format, but the [HAL](/documentation/modules/hal) module's `HAL+JSON` format uses custom normalization. Hence the features of this module are:

* default serialization, other modules can add more
* default normalization, other modules can add more

### Issue queue

<http://drupal.org/project/issues/drupal?component=serialization.module>