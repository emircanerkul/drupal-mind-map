The plugin system has three base elements:

1. ### Plugin Types  
The plugin type is the central controlling class that defines how the plugins of this type will be discovered and instantiated. The type will describe the central purpose of all plugins of that type, e.g., cache backends, image actions, blocks, etc.
2. ### Plugin Discovery  
Plugin Discovery is the process of finding plugins within the available code base that qualify for use within this particular plugin type's use case.
3. ### Plugin Factory  
The Factory is responsible for instantiating the specific plugin(s) chosen for a given use case.

Additionally, the plugin system includes several situationally useful components:

* ### [Plugin Derivatives](https://www.drupal.org/docs/8/api/plugin-api/plugin-derivatives)  
Plugin Derivatives allow a single plugin to act in place of many. This is useful for situations where user entered data might have an impact on available plugins. For example, if menus are placed on screen using a plugin, then when the site administrator creates a new menu, that menu must be available for placement without needing a new plugin to do so. Plugin Derivatives also support the user interface by allowing it to display multiple plugins in place of one, allowing for help text specific to the use case to be rendered and utilized. The primary purpose of plugin derivatives is to provide partially configured plugins as "first class" plugins that are indistinguishable in the UI from other plugins, thus reducing the burden on administrators using these plugins.
* ### [Discovery Decorators](https://www.drupal.org/docs/8/api/plugin-api/discovery-decorators)  
A discovery decorator is another available discovery method meant to wrap an existing discovery method. Core currently supplies the cacheDecorator which will cache the discovery process that is chosen for a plugin type. This pattern could be expanded to other use cases if necessary.
* ### Plugin Mappers  
Plugin Mappers allow you to map something (most often a string) to a specific plugin instance. Plugin types which use this approach can return fully configured and instantiated plugins based upon arbitrarily definable names instead of requiring developers using this api to manually instantiate and configure a plugin instance.

This document will give an in-depth discussion of all these concepts, with best practices and code examples.