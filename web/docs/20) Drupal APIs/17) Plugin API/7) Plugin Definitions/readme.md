---
url: https://www.drupal.org/docs/8/api/plugin-api/plugin-definitions
description: >-
  Plugins play an integral role in facilitating user interface components. While
  the plugin system can be used for more situations than this one, all of its
  components conspire together to make this use case really shine. In order to
  help facilitate this a set of metadata or "definitions" are associated with
  every single plugin. This data can vary from one plugin type to the next with
  only a handful of required keys. Plugin definitions have an analog within the
  more traditional Drupal approach as info hooks. The plugin system has however
  built an abstraction layer around what we call Discovery.
published_time: '2012-06-23T04:48:20+00:00'
modified_time: '2016-10-13T17:24:04+00:00'
---
Plugins play an integral role in facilitating user interface components. While the plugin system can be used for more situations than this one, all of its components conspire together to make this use case really shine. In order to help facilitate this a set of metadata or "definitions" are associated with every single plugin. This data can vary from one plugin type to the next with only a handful of required keys. Plugin definitions have an analog within the more traditional Drupal approach as info hooks. The plugin system has however built an abstraction layer around what we call [Discovery](/node/1638040). This is a separate topic, but plugin definitions play a vital role in how discovery works.

The most basic approach a plugin definition can take is simply defining the class the plugin utilizes, and the plugin id as a key to this array. If we were to define a block plugin for menus (i.e. MenuBlock) at bare minimum it would have to look like this:

```php

[
  'menu_block' => [
    'class' => 'Drupal\system\Plugin\block\block\MenuBlock',
  ],
];


```

This is useful enough for the factory in our plugin type to actually get and load the appropriate class, and make it useful to us, however it doesn't support the user interface at all. In all likelihood we would want at least a title and description attached to this plugin type. Perhaps something more like this:

```php

[
  'menu_block' => [
    'title' => t('Menu Block'),
    'description' => t('A block for displaying system or user generated menus.'),
    'class' => 'Drupal\system\Plugin\block\block\MenuBlock',
  ],
];


```

If our plugin type's discovery method is hook based, then assuming we're looking for hook\_block\_info() the code would look like this:

```php

function system_block_info() {
  return [
    'menu_block' => [
      'title' => t('Menu Block'),
      'description' => t('A block for displaying system or user generated menus.'),
      'class' => 'Drupal\system\Plugin\block\block\MenuBlock',
    ],
  ];
}


```

There are multiple ways a plugin definition might be defined. StaticDiscovery actually allows this to be registered directly into the plugin type, HookDiscovery works as outlined in this document, YamlDiscovery reads plugin definitions from data in YAML format, and the AnnotatedClassDiscovery class uses @plugin annotations in plugin docblocks for discovery. Other discovery mechanisms can be created. Plugin definitions can come in all shapes and sizes, this is just one of many potential approaches.