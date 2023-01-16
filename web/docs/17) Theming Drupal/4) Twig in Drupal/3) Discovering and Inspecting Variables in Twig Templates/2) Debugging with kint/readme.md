Twig's `dump()` function will often print a lot of text to the web page making it difficult to find the needle you want amidst the haystack of text.

An alternative to `dump()` is [kint, a PHP debugging tool](https://github.com/kint-php/kint). The `kint()` function works exactly same as the `dump()` function above, but provides an expandable/collapsible interface to the variables that it prints out.

Kint used to be included in the [devel project](/project/devel) but that is no longer the case. However, you will use Devel to configure Kint as your "Variables Dumper" of choice.

1. Download the [devel module](/project/devel) and install it. (See also [Downloading and Installing a Module from Drupal.org](https://www.drupal.org/docs/user%5Fguide/en/extend-module-install.html).)
2. From the root of your project (where your site's _composer.json_ lives), install the [kint\-php](https://github.com/kint-php/kint)library using Composer with `composer require kint-php/kint --dev`.
3. Clear the cache. Using the _Manage_ administrative menu, navigate to _Configuration_ \> _Development_ \> _Performance_ (_admin/config/development/performance_) and select _Clear all caches_.
4. Configure Kint as your "Variables Dumper" of choice. Using the _Manage_ administrative menu, navigate to _Configuration_ \> _Development_ \> _Devel settings_ (_admin/config/development/devel_) and under the heading, _Variables Dumper_, select _Kint_, then _Save configuration_.
5. Like the `dump` function, `kint()` will not display any output unless debugging is enabled. [Learn how to enable Twig debugging](/node/1903374).
6. In your .twig files, use `kint()` to inspect the variables just like `dump()` is described above.
7. Optionally, download and install the [Devel Kint Extras module](/project/devel%5Fkint%5Fextras) to search the nested variable list.

_If a default `{{ kint() }}` breaks your page, you can add a max depth of the dump. By default Kint has a depth of 7 levels which can be - in some cases - too heavy to render. As from **kint ^4** this can be adjusted by adding a depth limit in your settings(.local).php. [Read more in this Github Gist](https://gist.github.com/JPustkuchen/a5f1eaeb7058856b7ef087b028ffdfeb):_ 

```php
// Change kint max_depth setting.
if (class_exists('Kint')) {
  // Set the max_depth to prevent out-of-memory.
  \Kint::$depth_limit = 4;
}
```