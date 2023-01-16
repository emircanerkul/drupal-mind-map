---
url: https://www.drupal.org/docs/drupal-apis/plugin-api/discovery-decorators
description: >-
  A discovery decorator is a class which wraps another discovery mechanism in
  order to provide additional functionality (Wiki: Decorator pattern). Discovery
  decorators conform to the same interfaces as regular discovery classes, but
  they are intended to be used in tandem with another discovery class. Discovery
  decorators should take a DiscoveryInterface typed variable in their
  __construct method and any other parameters that are necessary to make them
  work. There are two included discovery decorators in core, we'll look at the
  CacheDecorator first.
published_time: '2012-06-22T15:36:26+00:00'
modified_time: '2021-03-25T14:50:28+00:00'
---
A discovery decorator is a class which wraps another discovery mechanism in order to provide additional functionality (Wiki: [Decorator pattern](http://en.wikipedia.org/wiki/Decorator%5Fpattern)). Discovery decorators conform to the same interfaces as regular discovery classes, but they are intended to be used in tandem with another discovery class. Discovery decorators should take a DiscoveryInterface typed variable in their `__construct` method and any other parameters that are necessary to make them work. There are two included discovery decorators in core, we'll look at the CacheDecorator first.