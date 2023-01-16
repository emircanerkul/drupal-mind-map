All things that either are directly renderable or are used to determine what to render provide cacheability metadata — ranging from [access results](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Access%21AccessResult.php/class/AccessResult/8) to [entities](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21EntityInterface.php/interface/EntityInterface/8) and [URLs](https://www.drupal.org/node/2480761).

Cacheability metadata consists of 3 properties:

[cache tags](/developing/api/8/cache/tags)

For dependencies on data managed by Drupal, like entities & configuration

[cache contexts](/developing/api/8/cache/contexts)

For variations, i.e. dependencies on the request context

[cache max-age](/developing/api/8/cache/max-age)

For time-sensitive caching, i.e. time dependencies