You can use Drupal Console to do this; or make the changes manually.

### How to enable debugging with Drupal Console

First, [install Drupal Console](https://github.com/hechoendrupal/drupal-console). Then run:

```php
drupal site:mode dev 
```

Note that this changes a lot of settings, but includes a change to the following values in your sites/default/services.yml:

```php
twig.config: { debug: true } 
```

You should see something similar to this:

![](https://www.drupal.org/files/output_3.png)

### How to enable debugging manually

1. Locate your site's `services.yml` file, likely located in _sites/default/services.yml_
2. If services.yml does not yet exist; copy default.services.yml and rename it to services.yml.
3. Edit the `services.yml` file and enable one or more of the debugging options defined below:  
   * Twig debugging options  
   * Twig auto-reload  
   * Twig cache (more on this below, but in most cases you don't need to touch this)
4. Rebuild cache.

Locate the `twig.config` parameters in your services.yml and make changes there. Example:

```php
parameters:
  twig.config:
    debug: true 
```

### Twig debugging options

**Note: do not set these on production!** These three options should be left unset (i.e. as their defaults) on production environments.

#### debug (default: false)

When `debug: true` is set:

* The markup of each Twig template is surrounded by HTML comments that contain theming information, such as template file name suggestions.
* Note that this debugging markup will cause automated tests that directly check rendered HTML to fail. When running automated tests, 'twig\_debug' should be set to FALSE.
* The dump() function can be used in Twig templates to output information about template variables.
* Twig templates are automatically recompiled whenever the source code changes (see auto\_reload below).

#### auto\_reload (default: null, determined by debug above)

When `auto_reload: true` is set

* Automatically recompile Twig templates whenever the source code changes. If you don't provide a value for twig\_auto\_reload, it will be determined based on the value of twig\_debug.
* Unless you specifically want auto\_reload and NOT debug, you don't need to touch this setting. Just enable debug above.

#### cache (default: true, but overridden by debug above)

When `cache: false` is set:

* Unless you have a specific use case, do not disable the Twig cache. When you enable Twig debug (or just auto\_reload if for some reason you don't want to enable debug) the Twig cache won't get in your way. Disabling the Twig cache will only make for a slower development experience because each template would need to be compiled regardless of whether it's been edited or not. Also, you can't easily look at or debug the compiled Twig templates (PHP classes, by default in sites/default/files/php/twig) if they are not cached to disk.
* By default, Twig templates will be compiled and stored in the filesystem to increase performance. Disabling the Twig cache will recompile the templates from source each time they are used. In most cases the twig\_auto\_reload setting above should be enabled rather than disabling the Twig cache.