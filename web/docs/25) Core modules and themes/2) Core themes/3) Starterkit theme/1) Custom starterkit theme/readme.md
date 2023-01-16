The starterkit theme command line tool supports using contrib and custom themes as a starting point. In order to be used as a starterkit theme, a theme named `source_theme_name` should:

* Make specific design decisions (e.g. default markup and CSS vs PostCSS).
* Add a line containing `starterkit: true` to the theme’s `source_theme_name.info.yml` file.

A new theme called `my_new_theme` can be generated using any custom starterkit theme with following command:

```php
php core/scripts/drupal generate-theme --starterkit source_theme_name my_new_theme
```

Starterkit themes can perform additional post-processing of the generated theme in a `\Drupal\source_theme_name\StarterKit` class that must implement `\Drupal\Core\Theme\StarterKitInterface`. See the [core Starterkit theme](https://git.drupalcode.org/project/drupal/-/blob/10.0.x/core/themes/starterkit%5Ftheme/src/StarterKit.php) for an example implementation.