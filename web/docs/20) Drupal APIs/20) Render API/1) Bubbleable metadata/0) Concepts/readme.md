* Cacheability metadata: contexts, tags, max-age. **TO BE EXPANDED**
* Bubbleable metadata: cacheability metadata + `#attached` \+ `#post_render_cache` callbacks. **TO BE EXPANDED**
* Default render cache contexts: every render array that uses `#theme` uses templates of the negotiated theme, and almost every render array contains translated strings (i.e. text wrapped in a `t()` call). That's why Drupal adds the corresponding cache contexts (`'theme'` and `'languages:' . LanguageInterface::TYPE_INTERFACE`, respectively) by default. The default cache contexts are specified in the `%renderer.config%` container parameter's `required_cache_contexts` key.  
_(Note: for very advanced use cases, sites can choose to override those default required cache contexts.)_

**TO BE EXPANDED**