A `settings.local.php` is used for local overrides for each site instance, which is not checked into source control. For example, you may have different database configuration or performance settings set on your production and test environments, or want to follow the best practice of keeping your production database username and password out of source control.

See the comments about this located at the end of the `settings.php` file.

```php
/**
 * Load local development override configuration, if available.
 *
 * Use settings.local.php to override variables on secondary (staging,
 * development, etc) installations of this site. Typically used to disable
 * caching, JavaScript/CSS compression, re-routing of outgoing emails, and
 * other things that should not happen on development and testing sites.
 *
 * Keep this code block at the end of this file to take full effect.
 */

if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
  include $app_root . '/' . $site_path . '/settings.local.php';
}
```

Make sure to remove the `#` signs in the `settings.php` default code block as shown above to enable this feature.

The `settings.php` can then be checked into source control, while the `settings.local.php` is placed in the `web/sites/default` directory on each environment. Here is an example of using a `settings.local.php` file to set reverse proxy configuration on the production instance:

```php
<?php

# Reverse proxy configuration.
$settings['reverse_proxy'] = TRUE;
$settings['reverse_proxy_addresses'] = ['developers.acme.com'];
$settings['reverse_proxy_trusted_headers'] = \Symfony\Component\HttpFoundation\Request::HEADER_X_FORWARDED_ALL
```

Hosting providers such as Acquia or Pantheon.io also inject a variable that you can use to determine the environment you are on. Acquia uses `$_ENV['AH_SITE_ENVIRONMENT']` and Pantheon uses `$_ENV['PANTHEON_ENVIRONMENT']`. See the hosting provider's documentation for more information.