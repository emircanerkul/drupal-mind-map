Cache contexts provide a declarative way to create context-dependent variations of something that needs to be cached. By making it declarative, code that creates caches becomes easier to read, and the same logic doesn't need to be repeated in every place where the same context variations are necessary.

Examples:

* Some expensive-to-calculate data depends on the active theme: different results for different themes. Then you'd vary by the `theme` cache context.
* When creating a render array that shows a personalized message, the render array varies per user. Then you'd vary (the render array) by the `user` cache context.
* Generally: when some expensive-to-calculate information varies by some environment context: vary by a cache context.