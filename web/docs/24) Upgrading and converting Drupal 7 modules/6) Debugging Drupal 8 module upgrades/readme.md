---
url: >-
  https://www.drupal.org/docs/upgrading-and-converting-drupal-7-modules/debugging-drupal-8-module-upgrades
description: >-
  This page is still under development. Read the error message! :) debug($var);
  If WSOD, tail your PHP error log. tail -f /path/to/php_error.log Comment out
  hook_install()/hook_uninstall(). Remove stale compiled PHP files. (new!) sudo
  rm -rf sites/default/files/php Clear the cache. drush cr (Requires the "8.x"
  drush version). Uninstall/reinstall your module. Reinstall your site. (There
  are no 8.x->8.x upgrades yet.)
published_time: '2013-10-22T22:08:31+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
_This page is still under development._

* _Read_ the error message! :)
* `debug($var);`
* If WSOD, tail your PHP error log.  
```php  
   tail -f /path/to/php_error.log  
    
```
* Comment out `hook_install()`/`hook_uninstall()`.
* Remove stale compiled PHP files. (new!)  
```php  
sudo rm -rf sites/default/files/php  
    
```
* Clear the cache.
* `drush cr` (Requires the "8.x" [drush](https://github.com/drush-ops/drush) version).
* Uninstall/reinstall your module.
* Reinstall your site. (There are no 8.x->8.x upgrades yet.)