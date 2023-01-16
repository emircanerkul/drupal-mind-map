---
url: https://www.drupal.org/docs/8/api/layout-api/how-to-render-layouts
description: >-
  Getting the layout plugin manager $layoutPluginManager =
  \Drupal::service('plugin.manager.core.layout'); Listing available layouts
  $layoutPluginManager = \Drupal::service('plugin.manager.core.layout');
  $layoutDefinitions = $layoutPluginManager->getDefinitions(); $definedLayouts =
  []; foreach ($layoutDefinitions as $key => $layoutDefinition) {
  $definedLayouts[] = $layoutDefinition->getLabel(); } return [ '#theme' =>
  'item_list', '#items' => $definedLayouts, ]; Instantiating a layout plugin
  $layoutPluginManager = \Drupal::service('plugin.manager.core.layout'); //
  Provide any configuration to the
published_time: '2017-03-29T20:28:33+00:00'
modified_time: '2020-03-25T11:49:28+00:00'
---
