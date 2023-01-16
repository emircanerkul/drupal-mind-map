You do not need a running Drupal instance (with a database) in order to use drush create and update commands. However, if you do not have a running Drupal instance then you will need to add next symbolic link to your .drush home folder:

```php
ln -s /path/to/project/web/themes/contrib/bs_base/bs_base.drush.inc ~/.drush/bs_base.drush.inc
```