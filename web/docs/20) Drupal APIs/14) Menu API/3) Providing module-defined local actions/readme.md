---
url: >-
  https://www.drupal.org/docs/drupal-apis/menu-api/providing-module-defined-local-actions
description: >-
  Local actions have also been moved out of the hook_menu() system in Drupal 8
  and are very similar to local tasks. Use actions to define local operations
  such as adding new items to an administrative list (menus, contact categories,
  etc). Local actions are defined in a YAML format, named after the module they
  are defined by.
published_time: '2013-11-11T14:55:08+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
Local actions have also been moved out of the hook\_menu() system in Drupal 8 and are very [similar to local tasks.](https://drupal.org/node/2122253) Use actions to define local operations such as adding new items to an administrative list (menus, contact categories, etc).

Local actions are defined in a YAML format, named after the module they are defined by. Such as `menu_ui.links.action.yml` for this example from menu\_ui module:

```php
menu_ui.link_add:
  route_name: menu_ui.link_add
  title: 'Add link'
  appears_on:
    - menu_ui.menu_edit

menu_ui.menu_add:
  route_name: menu_ui.menu_add
  title: 'Add menu'
  appears_on:
    - menu_ui.overview_page

```

These actions appear like the following:

![](https://www.drupal.org/files/AddItemAction.png)

![](https://www.drupal.org/files/AddMenuAction.png)

As with local tasks, best practice is to name the local actions the same as the route for the action. Specify the route in a `route_name` key and provide a `title` that appears on the local action button. You can also specify a `title_context` to disambiguate text that may have multiple meanings.

Finally, the `appears_on` key is used to define a list of routes where this action will appear. You can specify multiple routes in a list.

### Dynamic local action generation

You can also implement dynamic local action generation along the same line as for local tasks. Provide a class in the `deriver` key of your `example.links.action.yml` file and implement that class based on `DerivativeBase`. Make sure to provide the keys in the same way in array format. See the [example in the local tasks documentation](https://www.drupal.org/node/2122253).

### Customizing local action behaviour

The default local action implementation is in [LocalActionDefault](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Menu%21LocalActionDefault.php/class/LocalActionDefault/8). You can extend this class and modify the behaviour of a desired local action by providing the class on the local action. Such as to use a dynamic title for a local action:

```php
<?php

namespace Drupal\example\Plugin\Menu\LocalAction;

use Drupal\Core\Menu\LocalActionDefault;
use Drupal\Core\StringTranslation\TranslatableMarkup;

/**
 * Defines a local action plugin with a dynamic title.
 */
class CustomLocalAction extends LocalActionDefault {

  /**
   * {@inheritdoc}
   */
  public function getTitle() {
    $title = new TranslatableMarkup("My @arg action", array(
      '@arg' => 'dynamic-title',
    ));
    return $title;
  }

}

```

And refer this class in your `example.links.action.yml` file:

```php
example.content.action:
  route_name: example.content.action
  title: 'Example dynamic title action'
  weight: -20
  class: '\Drupal\example\Plugin\Menu\LocalAction\CustomLocalAction'
  appears_on:
    - example.content

```

### Altering existing local actions

To alter existing local actions, use [hook\_menu\_local\_actions\_alter](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Menu!menu.api.php/function/hook%5Fmenu%5Flocal%5Factions%5Falter/8).