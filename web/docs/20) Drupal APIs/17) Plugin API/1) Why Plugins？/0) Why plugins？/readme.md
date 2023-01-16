Plugins are much like PHP native interfaces with a little extra: the plugin system can discover every implementation of an interface (the default is magic namespacing), deals with metadata (by default this is provided by annotations) and provides a factory for the plugin classes.

### Plugin, Tagged Service or Service?

#### Plugins and tagged services

Both plugins and [tagged services ](https://www.drupal.org/docs/8/api/services-and-dependency-injection/service-tags)implement different behaviors via a common interface.

For example, think of image transformations (for example scale, crop, and desaturate). Each transformation type acts in the same way on the same data: It accepts an image file, performs a transformation, and returns an altered image. However, each effect is very different.

Use plugins if a behavior needs to be selected and/or configured by the user. If there's no need for user interaction, use tagged services.

#### Service

Services provide the same functionality, and are [interchangeable/swappable/overridable](https://www.drupal.org/node/2026959), differing only in their internal implementation.

Think about a cache. A cache should provide `get()`, `set()`, and `expire()` methods. The user just expects a cache, and one should be able to replace another without any functional difference. The internal implementation of those methods and the mechanisms it uses to do so can be wildly different.

In this case, a service is more appropriate.

### Plugins (Drupal 8) versus info hooks (Drupal 7)

There's nothing we're doing here that can't be accomplished in hooks beyond the typical object oriented constructs that aren't available to procedural functions (like inheritance of abstract classes and enforcement of methods being present). In short, plugins are an OO replacement for info hooks and any hook associated with an info hook. At the same time, they provide a much more robust mechanism for replacement of logic, which is something we could not do previously. With plugins, you can actually swap a class for a particular plugin and run completely different code than what core or a contributed module provided, which is incredibly useful.

### Example of pluggable components: Drupal 8 versus Drupal 7

In Drupal 7, blocks used `hook_block_info()` and then a number of block hooks beyond that. When block info was replaced by the block plugin type, all of those block hooks became methods of the plugins representing each block. We build an abstract block class that provides same defaults for all of the core provided blocks and their methods, and then block plugins only override the methods they specifically need to provide for. A good example of this is `hook_block_view()` vs `BlockPluginInterface::build()`. The `build()` method is going to look very similar to `hook_block_view()` (at least at this current stage of the Drupal 8 cycle) but each of these is in the class that is responsible for them instead of being in a module hook with a case statement looking at module/delta. At the same time, we got a `hook_block_alter()` function for modules to implement. This essentially replaces `hook_block_info_alter()` and goes further still allowing you to do more than just manipulate the data representing a given block or blocks in the UI. This hook allows you to actually swap out the class that runs a block, so you have complete control over the final product in this regard. Customization of a block can be done in MANY other ways, this is just the ultimate override in a sense and is one of the many advantages of using plugins.