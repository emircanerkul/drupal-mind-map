If you're doing development on your local environment, you need to add your localhost (or localhost IP address, 127.0.01 in this example) to trusted host patterns like in the examples below.

```php
$settings['trusted_host_patterns'] = [
  '^localhost$',
  '127\.0\.0\.1',
];
```

### Trusted host setting for MAMP

If `'^localhost$'` does not work your MAMP environment, you can try these:

In MAMP (3.5.2) and a site called 'drupal', you need to define:

```php
$settings['trusted_host_patterns'] = [
  '^drupal$',
];

```

On MAMP PRO 6.2 Version for Name MY.local and Document root Mylocal.ch

```php
$settings['trusted_host_patterns'] = [
 '^MY.local$',
];
```

### Trusted host settings for Lando

```php
$settings['trusted_host_patterns'] = [
  '^'.getenv('LANDO_APP_NAME').'\.lndo\.site$',      # lando proxy access
  '^localhost$',                                     # localhost access
  '^'.getenv('LANDO_APP_NAME').'\.localtunnel\.me$', # lando share access
  '^192\.168\.1\.100$'                               # LAN IP access
];
```

Note: The Lando container has more environment variables that can be used to set the correct database credentials. For that take a look at `$lando_info=json_decode(getenv('LANDO_INFO'), TRUE);` or check out `phpinfo();`.