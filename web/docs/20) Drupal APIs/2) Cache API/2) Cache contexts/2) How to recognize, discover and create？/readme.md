Cache contexts are `cache.context`\-tagged services. Any module can thus add more cache contexts. They implement `\Drupal\Core\Cache\Context\CacheContextInterface` or `\Drupal\Core\Cache\Context\CalculatedCacheContextInterface` (for cache contexts that accept parameters — i.e., cache contexts that accept a `:parameter` suffix).

Hence, all you have to do to find all cache contexts you have available for use, is to go to the `CacheContextInterface` and `CalculatedCacheContextInterface` and use your IDE to find all of its implementations. (In PHPStorm: Type Hierarchy → Subtypes Hierarchy, in NetBeans: right-click on Interface name → Find Usages → Find All Subtypes.)

Alternatively you can use Drupal Console (`drupal debug:cache:context`) to display all current cache contexts for your site or application:

```php
$ drupal debug:cache:context
 Context ID               Label                             Class path                                               
 cookies                  HTTP-Cookies                      Drupal\Core\Cache\Context\CookiesCacheContext            
 headers                  HTTP-Header                       Drupal\Core\Cache\Context\HeadersCacheContext            
 ip                       IP-Adresse                        Drupal\Core\Cache\Context\IpCacheContext                 
 languages                Language                          Drupal\Core\Cache\Context\LanguagesCacheContext          
 request_format           Anfrageformat                     Drupal\Core\Cache\Context\RequestFormatCacheContext      
 route                    Route                             Drupal\Core\Cache\Context\RouteCacheContext              
 route.book_navigation    Buchnavigation                    Drupal\book\Cache\BookNavigationCacheContext             
 route.menu_active_trails Aktiver Menüpfad                  Drupal\Core\Cache\Context\MenuActiveTrailsCacheContext
```

In every class you find, you will see a comment like this one in `\Drupal\Core\Cache\Context\UserCacheContext`:

```php
Cache context ID: 'user'.

```

This means that `'user'` is the actual cache context you can specify in code. (Alternatively, find where this class is being used in a `*.services.yml` file and look at the service ID. More about that below.)

> Tip: You can get an up-to-date, complete listing of all cache contexts in _Drupal core only_ by [looking at the services tagged with cache.context! ](https://api.drupal.org/api/drupal/services/8.1.x?tag=cache.context)

The service ID is standardized. It always begins with `cache_context.`, followed by the parents of the cache context, finally followed by the name of the cache context. So, for example: `cache_context` (mandatory prefix) + `route` (parents) + `book_navigation` (this cache context's name):

```php
cache_context.route.book_navigation:
    class: Drupal\book\Cache\BookNavigationCacheContext
    arguments: ['@request_stack']
    tags:
      - { name: cache.context }

```

This defines the `route.book_navigation` cache context.