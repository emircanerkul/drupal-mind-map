### Protecting in Drupal 8 and later

Drupal 8+ (i.e. currently Drupal 8, 9 and 10) can be configured to use the _Symfony_ trusted host mechanism to prevent HTTP Host header spoofing. To enable the trusted host mechanism, you enable your allowable hosts in `$settings['trusted_host_patterns']` in settings.php (i.e. `sites/default/settings.php` below the webroot). This should be an array of regular expression patterns, without delimiters, representing the hosts you would like to allow. If the Host header of the HTTP request does not match the defined patterns, Drupal will respond with HTTP 400 with a message _The provided host name is not valid for this server._

In the example below, the site is only allowed to run from [www.example.com](http://www.example.com).

```php
$settings['trusted_host_patterns'] = [
  '^www\.example\.com$',
];

```

About regular expressions used in this example:

* ^ matches the start of the string
* $ matches the end of the string
* . matches any character. If you want to match a dot, it must be escaped by a backslash as in the example above.

If you are running multisite, or if you are running your site from different domain names (e.g. you run your site from example.com and example.org), you should specify all of the host patterns that are allowed by your site. The example below will allow the site to run from all variants of example.com and example.org, with all subdomains included.

```php
$settings['trusted_host_patterns'] = [
  '^example\.com$',
  '^.+\.example\.com$',
  '^example\.org$',
  '^.+\.example\.org$',
];

```

### Protecting Drupal 7

There are at least four potential solutions to this problem, though not all are necessary to stop the problem from happening. You should pick and choose as appropriate for your environment. Solutions 3 and 4 also work for Drupal 8+.

1. You can set a specific domain as your $base\_url in sites/default/settings.php. While the dynamic detection can be a handy feature it can also cause problems. One way to stop that is just to set a permanent value.
2. Use a specific sites/example.com/settings.php and let $base\_url be detected dynamically - this has the implication of letting Drupal respond to all subdomains of example.com which may or may not be a benefit.
3. Configure your webserver so that the default page served when an incoming request is something other than your default Drupal installation, such as an error page.
4. Configure your webserver to redirect all requests that reach your server _that are not for the appropriate domain_ to forward to the right domain name.