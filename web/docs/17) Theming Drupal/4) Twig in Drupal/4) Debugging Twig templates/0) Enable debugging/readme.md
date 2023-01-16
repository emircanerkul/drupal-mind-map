You enable Twig Debugging in` sites/default/services.yml`.

Set the debug variable to **true**. And clear cache.

```php
parameters:
  twig.config:
    debug: true 

```

* If `services.yml` does not yet exist; copy `default.services.yml` to `services.yml`.
* If Drupal has already been installed, permissions on the `sites/default` directory may need to be temporarily changed to allow write access.
* [How to change directory permissions](https://www.pluralsight.com/blog/it-ops/linux-file-permissions)
* Once `services.yml` has been created and edited, **change permissions back to lock down** the `sites/default` directory.

To verify that Drupal is getting the `twig.config` parameter set as expected, run:

```php
drush php:eval "var_export(\Drupal::getContainer()->getParameter('twig.config'));"
```

And check that the printed PHP array shows `debug` set as TRUE. If other `twig.config` sub-options are set, they should show as well.

You can also use the following options to enable Twig debugging:

1. You can use [Twig Debugger](https://www.drupal.org/project/twig%5Fdebugger) module to enable twig debugging.
2. [Enable Twig Debugging with Drupal Console](/docs/theming-drupal/twig-in-drupal/debugging-compiled-twig-templates#s-1-configuring-twig-for-debugging)