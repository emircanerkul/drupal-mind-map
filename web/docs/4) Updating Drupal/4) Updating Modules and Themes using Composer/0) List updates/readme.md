Use Composer's built-in command for listing packages that have updates available:

```php
composer outdated "drupal/*"
```

You can get the same information with the Composer's `show` command.

### List security updates

The security status from Drupal.org isn't available through Composer. Luckily Drush comes to the rescue:

```php
drush pm:security
```