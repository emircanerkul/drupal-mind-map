Download the [Guardr profile](http://ftp.drupal.org/files/projects/guardr-7.x-1.x-dev.tar.gz).

**Build the instance:**

```php
$ drush --no-patch-txt make <path-to-guardr>/build-guardr.make <path-to-make-results>

```

Note: --no-patch-txt is optional, but recommended for production use. It prevents the creation of PATCHES.txt files in any project which has patches applied by the Guardr distribution.

**And finally install the site with drush site-install:**

```php
$ cd <path-to-make-results>

```

```php
$ drush si --db-url=mysql://[db_user]:[db_pass]@localhost/[db_name] --account-name=admin --account-pass=[account-password] --account-mail=admin@example.com --site-name=Guardr --site-mail=admin@example.com guardr

```

**Or if you have drush 5 you can use drush qd to test Guardr:**

```php
$ cd <path-to-make-results>

```

```php
$ drush qd --root=<path-to-make-results> --use-existing --profile=guardr --cache --watchdog --yes

```

**You can also download, install, and run Guardr from one drush qd command:**

```php
$ drush qd guardr --core=guardr --profile=guardr --cache --watchdog --yes

```