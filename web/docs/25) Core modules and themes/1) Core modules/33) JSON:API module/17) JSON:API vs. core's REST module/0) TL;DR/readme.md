**Choose REST if you have non-entity data you want to expose. In all other cases, choose JSON:API.**

Slightly more nuanced:

* Core's REST module allows for _anything_ (any format, any logic, any HTTP method) and extreme configurability. Powerful but complex and hence relatively brittle.
* JSON:API focuses on exposing Drupal's biggest strength (entities/data modeling) in a coherent manner. Simple yet sufficiently powerful for most use cases.