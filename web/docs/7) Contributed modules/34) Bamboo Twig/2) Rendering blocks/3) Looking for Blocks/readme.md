You may sometimes stuck by looking for a block `id/machine_name`, I drop here some `drush` command which should help you found each types of them:

* **Block - plugin**

```php
drush ev "print_r(array_keys(\Drupal::service('plugin.manager.block')->getDefinitions()));"

```

* **Block - configuration entity**

```php
drush ev 'print_r(\Drupal::configFactory()->listAll("block.block."));'
```

* **Block - content entity**

```php
drush sqlq 'SELECT id, info FROM block_content_field_data'
```