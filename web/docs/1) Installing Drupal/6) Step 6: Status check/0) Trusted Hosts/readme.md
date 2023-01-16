Unless you created the `settings.php` file (in the directory `sites/default/` unless you are using a multisite installation) it was created for you by the installation script. However, the generated `settings.php` does not include "trusted host" configuration.

There is an issue to change this: [Allow trusted hosts to be configured with the installer](/node/2404259).

For an explanation of why this setting matters, see [Trusted Host settings](/node/1992030).

### Make sure settings.php is writable

The installation script tries to make `settings.php` read-only. On UNIX-like systems with shell access, you can change this with

```php
chmod u+w sites/default/settings.php
```

If you only have (S)FTP access to the server, then you should be able to use it to change permissions, or edit the file locally and then upload it.

### Edit settings.php

Search for the "Trusted host configuration" section in `settings.php` and read the comments there. Add lines (there or elsewhere in the file) listing the allowed patterns for the host name. For example, if your site is at `www.example.com`, you could add


```php
$settings['trusted_host_patterns'] = [
  '^www\.example\.com$',
];
```

The entries in this array are regular expressions, so the `.` must be escaped, and the `^` and `$` characters mark the start and end of the string being matched.

If you want to allow any subdomain of `example.com`, you can use the regular expression `\.example\.com$` or `(^|\.)example\.com$`: the second matches `example.com` as well as subdomains. If you want to allow both `example.com` and `www\.example\.com`, you can either use the regular expression `^(www\.)?example\.com$` or list two patterns:


```php
$settings['trusted_host_patterns'] = [
  '^www\.example\.com',
  '^example\.com$',
];
```

### Reset permissions on settings.php

If you made `settings.php` writable in an earlier step, then set it back to read-only:

```php
chmod a-w sites/default/settings.php
```