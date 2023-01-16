As config entities (menu, node type, tour) are not equal to content entities (nodes, users) this is a little more tricky. Currently config entities are **read only**.

For easy testing we use user-1 and the basic\_auth module.

1. Enable basic auth module
2. Assume the user-1 name is admin and password is admin

Using the following command will list menu's.

```php
curl \
  --header 'Accept: application/vnd.api+json' \
  http://admin:admin@drupal.d8/jsonapi/menu/menu
```