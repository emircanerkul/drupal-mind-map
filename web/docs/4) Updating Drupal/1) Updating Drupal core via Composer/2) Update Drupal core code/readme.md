**if you are using** `drupal/core-recommended`:

```php
composer update "drupal/core-*" --with-all-dependencies
```

Note: some shells (eg. zsh, fish) handle [asterisks](https://www.jeffgeerling.com/comment/7897#comment-7897) package wildcards [differently](https://github.com/ohmyzsh/ohmyzsh/issues?q=is%3Aissue+%22no+matches+found%22+asterisk), so they need to be quoted.

**If you are not using** `drupal/core-recommended` but instead only `drupal/core`:

```php
composer update drupal/core --with-dependencies

```

To simulate the update, and show you what would happen, without actually changing anything, add `--dry-run`.

### Update to the latest patch version of core

If you want to update your site to the latest patch version, but not the latest minor version, then add `--with=` options for each `drupal/core-*` dependency listed in `composer.json`.

For example, if 9.4 is the current minor version and you want to update your site to the latest patch version of 9.3:

`composer update "drupal/core-*" --with-all-dependencies --with=drupal/core-recommended:~9.3.0 --with=drupal/core-composer-scaffold:~9.3.0`

This example assumes that `drupal/core-recommended` and `drupal/core-composer-scaffold `are the only Drupal core dependencies in `composer.json`.

### Update to a specific version of core

In general, we recommend that you do not specify a specific version of Drupal core when updating, unless you know that you want to pin to a specific version. If you do want to pin your site to a specific version, you can use the following example: 

To pin your site to version 9.3.6 and update all dependencies accordingly: 

```php
composer require drupal/core-recommended:9.3.6 drupal/core-composer-scaffold:9.3.6 drupal/core-project-message:9.3.6 --update-with-all-dependencies
```

<!-- note-warning -->
> WARNING: Warning: If you pin your site to a specific core version, that version will be added to the lock file, and future updates will not go past this version. Re-run the require command as specified below to return to an 'unpinned' version of core.

### Unpinning from a specific version of core

If you are running a pinned version of Drupal core, and want to update your site to another version, you have two choices.

1. You can run the composer require command above to specify a new, pinned version of core.
2. You can unpin your core version, and update to the latest version of Drupal.

To unpin your version of Drupal, run this command: 

```php
composer require drupal/core-recommended drupal/core-composer-scaffold drupal/core-project-message --update-with-all-dependencies
```