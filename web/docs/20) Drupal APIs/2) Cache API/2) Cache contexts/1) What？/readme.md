A cache context is a string that refers to one of the available cache context services (see below).

Cache contexts are passed around in sets (order doesn't matter) of strings, so they are typehinted to `string[]`. They're sets because a single cache item can depend on (vary by) many cache contexts.

Typically, cache contexts are derived from the request context (i.e., from the `Request`) object. Most of the environment for a web application is derived from the request context. After all, HTTP responses are generated in large part depending on the properties of the HTTP requests that triggered them.  
But, this doesn't mean cache contexts _have_ to originate from the request — they could also depend on deployed code, e.g., a `deployment_id` cache context.

Second, cache contexts are _hierarchical_ in nature. The clearest example: when varying something per user, it's pointless to also vary that per permissions (i.e., the set of permissions that a user has), because per-user is already more granular. A user has a set of permissions, so per-user caching _implies_ per-permissions caching.  
Now for the most interesting aspect: if one part of the page is varied per user and another per permissions, then Drupal needs to be smart enough to make the combination of the two: only vary per user. That is where Drupal can exploit the hierarchy information to not create unnecessary variations.

### Syntax

* periods separate parents from children
* a plurally named cache context indicates a parameter may be specified; to use: append a colon, then specify the desired parameter (when no parameter is specified, _all_ possible parameters are captured, e.g., _all_ query arguments)

### Drupal core's cache contexts

Drupal core ships with the following hierarchy of cache contexts:

```php
cookies
  :name
headers
  :name
ip
languages
  :type
protocol_version // Available in 8.9.x or higher.
request_format
route
  .book_navigation
  .menu_active_trails
    :menu_name
  .name
session
  .exists
theme
timezone
url
  .path
    .is_front // Available in 8.3.x or higher.
    .parent
  .query_args
    :key
    .pagers
      :pager_id
  .site
user
  .is_super_user
  .node_grants
    :operation
  .permissions
  .roles
    :role

```

**Note:** To use the `url.path.is_front` cache context in prior branches/releases, see the [change record](https://www.drupal.org/node/2830442).

Everywhere cache contexts are used, that entire hierarchy is listed, which has 3 benefits:

1. no ambiguity: it's clear what parent cache context is based on wherever it is used
2. comparing (and folding) cache contexts becomes simpler: if both `a.b.c` and `a.b` are present, it's obvious that `a.b` encompasses `a.b.c`, and thus it's clear why the `a.b.c` can be omitted, why it can be "folded" into the parent
3. no need to deal with ensuring each level in a tree is unique in the entire tree

So, examples of declarative cache contexts from that hierarchy:

* `theme` (vary by negotiated theme)
* `user.roles` (vary by the combination of roles)
* `user.roles:anonymous` (vary by whether the current user has the 'anonymous' role or not, i.e., "is anonymous user")
* `languages` (vary by all language types: interface, content …)
* `languages:language_interface` (vary by interface language — `LanguageInterface::TYPE_INTERFACE`)
* `languages:language_content` (vary by content language — `LanguageInterface::TYPE_CONTENT`)
* `url` (vary by the entire URL)
* `url.query_args` (vary by the entire given query string)
* `url.query_args:foo` (vary by the `?foo` query argument)
* `protocol_version` (vary by HTTP 1 vs 2)

### Optimizing/folding/combining/simplifying of cache contexts

Drupal automatically uses the hierarchy information to simplify cache contexts as much as possible. For example, when one part of the page is varied per user (`user` cache context) and another part of the page is varied per permissions (`user.permissions` cache context), then it doesn't make sense to vary the final result (e.g.,: the page) per permissions, since varying per user is already more granular.  
In other words: `optimize([user, user.permissions]) = [user]`.

However, that is oversimplifying things a bit: even though `user` indeed implies `user.permissions` because it is more specific, if we optimize `user.permissions` away, any _changes to permissions_ no longer cause the `user.permissions` cache context to be evaluated on every page load. Which means that if the permissions change, we still continue to use the same cached version, even though it should change whenever permissions change.

That is why cache contexts that depend on configuration that may change over time can associate cacheability metadata: [cache tags](/developing/api/8/cache/tags) and a max-age. When such a cache context is optimized away, its cache tags are associated with the cache item. Hence whenever the assigned permissions change, the cache item is also invalidated.

(Remember that "caching" is basically "avoiding unnecessary computations". Therefore, optimizing a context away can be thought of as caching the result of the context service's `getContext()` method. In this case, it's an implicit cache (the value is discarded rather than stored), but the effect is the same: on a cache hit, the `getContext()` method is not called, hence: computations avoided. And when we cache something, we associate the cacheability of that thing; so in the case of cache contexts, we associate tags and max-age.)

A similar, but more advanced example are node grants. Node grants apply to a specific user, so the node grants cache context is `user.node_grants` Except that node grants _can_ be extremely dynamic (they could, e.g., be time-dependent, and change every few minutes). It depends on the node grant hook implementations present on the particular site. Therefore, to be safe, the node grants cache context specifies `max-age = 0`, meaning that it can _not_ be cached (i.e., optimized away). Hence `optimize([user, user.node_grants]) = [user, user.node_grants]`.  
Specific sites can override the default node grants cache context implementation and specify `max-age = 3600` instead, indicating that all their node grant hooks allow access results to be cached for _at most_ an hour. On such sites, `optimize([user, user.node_grants]) = [user]`.

### Uncacheable contexts

Drupal core treats cache contexts with poor cacheability as uncacheable. The definition of what constitutes "poor cacheability" depends on the `renderer.config.auto_placeholder_conditions` service container parameter (defined in `core.services.yml`), which can be overridden by sites.