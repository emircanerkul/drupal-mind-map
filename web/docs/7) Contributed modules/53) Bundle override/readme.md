---
url: https://www.drupal.org/docs/contributed-modules/bundle-override
description: >-
  Bundle override is a module that provides you tools to defined php classes
  related to bundle. For example, if you have a node bundle called article, you
  can create a bundle_override_node plugin that defines a class that extends
  \Drupal\node\Entity\Node dedicated to the specific bundle article. Then, when
  you load a node of article bundle, you get a ArticleNode object. This can be
  helpfull to add logical function on specific bundled entities.
published_time: '2020-05-10T10:35:27+00:00'
modified_time: '2020-05-10T10:35:27+00:00'
---
Bundle override is a module that provides you tools to defined php classes related to bundle. For example, if you have a node bundle called article, you can create a bundle\_override\_node plugin that defines a class that extends \\Drupal\\node\\Entity\\Node dedicated to the specific bundle article. Then, when you load a node of article bundle, you get a ArticleNode object.

This can be helpfull to add logical function on specific bundled entities.