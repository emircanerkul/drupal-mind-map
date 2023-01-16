---
url: >-
  https://www.drupal.org/docs/converting-drupal-7-modules-to-drupal-8/d7-to-d8-upgrade-tutorial-convert-hook_menu-and-hook
description: >-
  The new systems replacing hook_menu() Drupal 7 hook_menu() defines path to
  page callback relations as well as visually appearing menu items, tabs, local
  actions and contextual links. Drupal 8 has separate systems for these. Routes
  are responsible for associating paths to controllers (page callbacks in Drupal
  7) so if you need to define a menu item, local task (tab), local action or
  contextual link, all of these rely on having a route in place first. So
  converting Drupal 7 hook_menu() items to Drupal 8 APIs should start with
  defining the routes for the items.
published_time: '2013-10-22T23:50:05+00:00'
modified_time: '2019-04-16T02:27:25+00:00'
---
### The new systems replacing hook\_menu()

Drupal 7 hook\_menu() defines path to page callback relations as well as visually appearing menu items, tabs, local actions and contextual links.

Drupal 8 has separate systems for these. Routes are responsible for associating paths to controllers (page callbacks in Drupal 7) so if you need to define a menu item, local task (tab), local action or contextual link, all of these rely on having a route in place first. So converting Drupal 7 hook\_menu() items to Drupal 8 APIs should start with defining the routes for the items.

Then you can use each subsystem to define the related menu items, local tasks, contextual links and actions as appropriate. The following figure demonstrates the relations of the items and their Drupal 7 equivalents ([bigger version](https://www.drupal.org/files/Drupal7MenuToDrupal8.png)):

[![](/files/Drupal7MenuToDrupal8.png)](https://www.drupal.org/files/Drupal7MenuToDrupal8.png)

([Google drawing for this diagram](https://docs.google.com/drawings/d/1oiHWy9ERY3ySI8uulQtSxbGEsdlmmrN8ojv8G0LIhQs/edit))

### A practical example, porting hook\_menu() from Drupal 7

Although book module was not ported as a 100% equal system in terms of the hook\_menu() contents, we'll review a potential 1-1 port of book.module here to give you an idea.

#### Books listing on the content page

This was actually moved to `/admin/structure/book` but let's review how it would have been if it stays where it is.

```php
  # Drupal 7 menu item
  $items['admin/content/book'] = array(
    'title' => 'Books',
    'description' => "Manage your site's book outlines.",
    'page callback' => 'book_admin_overview',
    'access arguments' => array('administer book outlines'),
    'type' => MENU_LOCAL_TASK,
    'file' => 'book.admin.inc',
  );

```

This needs a route for the path/callback and a local task item that shows on the content page.

```php
# Drupal 8 book.routing.yml snippet
book.admin:
  path: '/admin/content/book'
  defaults:
    _controller: '\Drupal\book\Controller\BookController::adminOverview'
    _title: 'Books'
  requirements:
    _permission: 'administer book outlines'

```

The main components here are the path itself and the controller (the fully qualified class name provided in `_controller`) that makes the route work. We gave the route a name `'book.admin'` which is the most important detail about it for all the other systems we'll work with. We provide access requirements in the `'requirements'` section. This route in short means that if a visitor attempts to access `'/admin/content/book'` and the visitor meets all the requirements listed (in this case the permission), then output will be generated based on that method on the BookController class.

A very high level view of that class located in `core/modules/book/src/Controller/BookController.php` (which maps to the fully qualified class name `'\Drupal\book\Controller\BookController'` following [the PSR-4 standard](https://www.drupal.org/node/2246699)) is as follows:

```php
/**
 * @file
 * Contains \Drupal\book\Controller\BookController.
 */

namespace Drupal\book\Controller;

/**
 * Controller routines for book routes.
 */
class BookController {

  /**
   * Returns an administrative overview of all books.
   *
   * @return array
   *   A render array representing the administrative page content.
   */
  public function adminOverview() {
    // ...
  }
}

```

This tutorial is about the menu APIs so we will not delve into how to build the controllers behind the routes, you will find that the actual BookController is a lot more involved. To better understand the route system, [check out the introductory example to routes and controllers](https://www.drupal.org/node/2116767). (The conversion of this page callback to a controller is explained with more detailed class PHP code [in the WSCCI conversion guide](https://www.drupal.org/node/1953346).)

We'll need a local task as well for this item to show as a tab on the content admin page.

```php
# Drupal 8 book.links.task.yml snippet
book.admin:
  route_name: book.admin
  title: 'Books'
  base_route: system.admin_content

```

Here we defined the local task named `book.admin` that used the same name as the route we associated it with (also `book.admin`). This is best practice so its easier to understand what belongs to what. We gave it a nice label and put the tab into the list of tabs on `system.admin_content` which is the route name for the admin/content page itself. This ensures the tab is put to the right place.

These two files reproduce both the path/callback association and the tab definition, so we are done with converting this item.

#### Default list tab

The default list tab is a subtab under the 'Books' tab.

```php
  # Drupal 7 menu item
  $items['admin/content/book/list'] = array(
    'title' => 'List',
    'type' => MENU_DEFAULT_LOCAL_TASK,
  );

```

This one already has a route, so we don't need to define one. However, it needs a new tab entry that points to the same route as the above and specifies the above tab as the parent. The base\_route is automatically taken from the parent and is the same as the route for this tab, so this will be the default tab:

```php
# Drupal 8 book.links.task.yml snippet
book.admin.list:
  route_name: book.admin
  title: 'List'
  parent_id: book.admin

```

#### Settings form and tab

```php
  # Drupal 7 menu item
  $items['admin/content/book/settings'] = array(
    'title' => 'Settings',
    'page callback' => 'drupal_get_form',
    'page arguments' => array('book_admin_settings'),
    'access arguments' => array('administer site configuration'),
    'type' => MENU_LOCAL_TASK,
    'weight' => 8,
    'file' => 'book.admin.inc',
  );

```

This Drupal 7 menu item requires a new route definition as well as a tab.

```php
# Drupal 8 book.routing.yml snippet
book.settings:
  path: '/admin/content/book/settings'
  defaults:
    _form: '\Drupal\book\Form\BookSettingsForm'
    _title: 'Settings'
  requirements:
    _permission: 'administer site configuration'

```

We defined a form controller for this route, which is a class name. That will handle the building, validation and submission of this form. Drupal 8 form controllers are explained in [the Drupal 8 Form API documentation](https://www.drupal.org/node/2117411).

```php
# Drupal 8 book.links.task.yml snippet
book.settings:
  route_name: book.settings
  title: 'Settings'
  parent_id: book.admin
  weight: 8

```

The settings tab shows up alongside the 'List' tab then under the 'Books' tab.

#### Books admin tabs summary

In summary, we defined a _Books_ tab to show up on the admin/content page and a _List_ and _Settings_ subtab. In total, these are demonstrated by the following Drupal 7 screenshot with their Drupal 8 tab identifiers:

![](https://www.drupal.org/files/BookTabsSummary.png)

The _List_ and _Settings_ tabs specified their parent as `book.admin` which is why they are on a secondary level and _List_ has the same route as the parent which is why its the default. Finally, the parent _Books_ item was anchored to admin/content's base route which had the name `system.admin_content` which put the three tabs in the right place.

#### Book re-ordering page

```php
  # Drupal 7 menu item
  $items['admin/content/book/D7 to D8 upgrade tutorial: Convert hook_menu() and hook_menu_alter() to Drupal 8 APIs'] = array(
    'title' => 'Re-order book pages and change titles',
    'page callback' => 'drupal_get_form',
    'page arguments' => array('book_admin_edit', 3),
    'access callback' => '_book_outline_access',
    'access arguments' => array(3),
    'type' => MENU_CALLBACK,
    'file' => 'book.admin.inc',
  );

```

The route for this one is a bit more interesting. It includes a dynamic component (which changes from D7 to D8 upgrade tutorial: Convert hook\_menu() and hook\_menu\_alter() to Drupal 8 APIs in Drupal 7 to {node} in Drupal 8). This dynamic component is upcast to an actual node like in Drupal 7 and passed in to BookAdminEditForm's form builder in the route system, without us needing to do anything specifically for that.

The other new element here is the entity access requirement. The combination of the node view entity access and the book outline administration permission is exactly what used to be in [\_book\_outline\_access](https://api.drupal.org/api/drupal/modules%21book%21book.module/function/%5Fbook%5Foutline%5Faccess/7) so those are reproduced fully on the route. It is also possible to do much more [advanced access checking out routes](https://www.drupal.org/node/2122195).

```php
# Drupal 8 book.routing.yml snippet
book.admin_edit:
  path: '/admin/content/book/{node}'
  defaults:
    _form: 'Drupal\book\Form\BookAdminEditForm'
    _title: 'Re-order book pages and change titles'
  requirements:
    _permission: 'administer book outlines'
    _entity_access: 'node.view'

```

This item was a MENU\_CALLBACK in Drupal 7 so no tabs or other elements are needed in Drupal 8 either.

#### Books listing page

The page listing books on the site is another easy one:

```php
  # Drupal 7 menu item
  $items['book'] = array(
    'title' => 'Books',
    'page callback' => 'book_render',
    'access arguments' => array('access content'),
    'type' => MENU_SUGGESTED_ITEM,
    'file' => 'book.pages.inc',
  );

```

```php
# Drupal 8 book.routing.yml snippet
book.render:
  path: '/book'
  defaults:
    _controller: '\Drupal\book\Controller\BookController::bookRender'
    _title: 'Books'
  requirements:
    _permission: 'access content'

```

This is the only item from `book_menu()` that actually exposes a menu item in Drupal 7 in the sense of possibly showing up in a menu tree (not as a tab or an item-less callback). So we'll need to add a `book.links.menu.yml` entry for this:

```php
# Drupal 8 book.links.menu.yml snippet
book.render:
  title: Books
  route_name: book.render
  hidden: 1

```

Because this is a suggested menu item that does not appear by default, we used the hidden property to hide it by default. It can be unhidden on the user interface or with the API.

#### All pages book export

```php
  # Drupal 7 menu item
  $items['book/export/%/%'] = array(
    'page callback' => 'book_export',
    'page arguments' => array(2, 3),
    'access arguments' => array('access printer-friendly version'),
    'type' => MENU_CALLBACK,
    'file' => 'book.pages.inc',
  );

```

Another MENU\_CALLBACK, so we'll only need a route defined.

```php
# Drupal 8 book.routing.yml snippet
book.export:
  path: '/book/export/{type}/{node}'
  defaults:
    _controller: '\Drupal\book\Controller\BookController::bookExport'
  requirements:
    _permission: 'access printer-friendly version'
    _entity_access: 'node.view'

```

This route is even a bit more restrictive in Drupal 8\. It does not only require to access printer-friendly books but also to access the node itself. The two anonymous placeholders (%) are now named {type} and {node}. Note a key difference from the previous routes. This one uses `_controller` while previous ones used `_controller` (or `_form`). When using `_controller`, Drupal will produce a full page with blocks appropriate for the page using the current theme. When using `_controller`, it is the responsibility of the method invoked to build the full output.

#### Book outline tab on nodes

The book module also provides a tab that lets users place nodes in a book outline. Let's convert this one too:

```php
  # Drupal 7 menu item
  $items['node/D7 to D8 upgrade tutorial: Convert hook_menu() and hook_menu_alter() to Drupal 8 APIs/outline'] = array(
    'title' => 'Outline',
    'page callback' => 'book_outline',
    'page arguments' => array(1),
    'access callback' => '_book_outline_access',
    'access arguments' => array(1),
    'type' => MENU_LOCAL_TASK,
    'weight' => 2,
    'file' => 'book.pages.inc',
  );

```

This will need a route defined as well as a local task.

```php
# Drupal 8 book.routing.yml snippet
book.outline:
  path: '/node/{node}/outline'
  defaults:
    _entity_form: 'node.book_outline'
    _title: 'Outline'
  requirements:
    _permission: 'administer book outlines'
    _entity_access: 'node.view'

```

This is also a form based page, but this time the form is defined by the entity, so we refer back to the entity definition in \_entity\_form. Otherwise this is the same as the above routes.

```yaml
entity.node.book_outline_form:
  route_name: entity.node.book_outline_form
  base_route: entity.node.canonical
  title: Outline
  weight: 2
```

The local task is defined to be based on the node view route, which serves the base tab on nodes.

![](https://www.drupal.org/files/BookTabOnNode.png)

#### Remove from outline page

Finally, the remove from the outline page is another form:

```php
  # Drupal 7 menu item
  $items['node/D7 to D8 upgrade tutorial: Convert hook_menu() and hook_menu_alter() to Drupal 8 APIs/outline/remove'] = array(
    'title' => 'Remove from outline',
    'page callback' => 'drupal_get_form',
    'page arguments' => array('book_remove_form', 1),
    'access callback' => '_book_outline_remove_access',
    'access arguments' => array(1),
    'file' => 'book.pages.inc',
  );

```

```php
# Drupal 8 book.routing.yml snippet
book.remove:
  path: '/node/{node}/outline/remove'
  defaults:
    _form: '\Drupal\book\Form\BookRemoveForm'
    _title: 'Remove from outline'
  requirements:
    _permission: 'administer book outlines'
    _entity_access: 'node.view'
    _access_book_removable: 'TRUE'

```

The requirements are a bit more complicated here with the permission and node view access topped with an \_access\_book\_removable check. This is validated by a service defined by the book module tagged with \_access\_book\_removable. See `book.services.yml`. The combination of these reproduce `_book_outline_remove_access` from Drupal 7\. See the routing API documentation for [explanation on access checking services](https://www.drupal.org/node/2122195).

Also note that this item does not appear in the menu, its a button from the outline page, so no need to define menu item, tab, etc. for it. It lacked a type definition in Drupal 7 which made it a MENU\_NORMAL\_ITEM, but its parent was a tab and therefore never showed up in a menu.

### Contextual link and action examples from menu\_menu()

The above examples covered all items in `book_menu()` in Drupal 7\. Book module does not have contextual links or actions but these are very similarly done to the local tasks and menu items shown here. Let's see the following two examples from menu\_menu() if the module would be ported as-is (assume we did not rename the module to menu\_ui).

#### Local action to add a menu

```php
  # Drupal 7 menu item
  $items['admin/structure/menu/add'] = array(
    'title' => 'Add menu',
    'page callback' => 'drupal_get_form',
    'page arguments' => array('menu_edit_menu', 'add'),
    'access arguments' => array('administer menu'),
    'type' => MENU_LOCAL_ACTION,
    'file' => 'menu.admin.inc',
  );

```

This will need a route for the path as well as a local action defined.

```php
# Drupal 8 menu.routing.yml snippet
menu.menu_add:
  path: '/admin/structure/menu/add'
  defaults:
    _entity_form: 'menu.add'
    _title: 'Add menu'
  requirements:
    _entity_create_access: 'menu'

```

Additionally to the above this one uses a menu configuration entity and refers to its entity form and creation access checking for the configuration entity. [Read more about configuration entity types and forms](https://www.drupal.org/node/1809494).

For this item, the local action is more interesting:

```php
# Drupal 8 menu.links.action.yml snippet
menu.menu_add:
  route_name: menu.menu_add
  title: 'Add menu'
  appears_on:
    - menu.overview_page

```

The only special thing about this file is it contains a list of routes where the action appears on. It may appear on multiple routes. You can imagine the `menu.overview_page` route lists all menus on the admin interface (not covered here in the snippets though).

#### Tab and contextual link to edit a menu

Drupal 7's menu module defines an 'Edit menu' item which is both a tab on the menu and a contextual link to be shown in menu blocks.

```php
  # Drupal 7 menu item
  $items['admin/structure/menu/manage/%menu/edit'] = array(
    'title' => 'Edit menu',
    'page callback' => 'drupal_get_form',
    'page arguments' => array('menu_edit_menu', 'edit', 4),
    'access arguments' => array('administer menu'),
    'type' => MENU_LOCAL_TASK,
    'context' => MENU_CONTEXT_PAGE | MENU_CONTEXT_INLINE,
    'file' => 'menu.admin.inc',
  );

```

The Drupal 8 port of this item requires a route:

```php
# Drupal 8 menu.routing.yml snippet
menu.menu_edit:
  path: '/admin/structure/menu/manage/{menu}'
  defaults:
    _entity_form: 'menu.edit'
    _title_callback: '\Drupal\menu_ui\Controller\MenuController::menuTitle'
  requirements:
    _entity_access: 'menu.update'

```

This is mostly standard entity routing except the new title callback element, which is used to provide a dynamic title for the page based on the menu being edited. This was set from the page callback in Drupal 7\. Since this is both a tab and a contextual link, we need two entries for this one each in the respective files.

```php
# Drupal 8 menu.links.task.yml snippet
menu.menu_edit:
  title: 'Edit menu'
  route_name: menu.menu_edit
  base_route: menu.menu_edit

```

Not surprising at all. The menu editing tab will be the default tab here since it has the same route name and base route. That's it. We also need to define the contextual link:

```php
# Drupal 8 menu.links.contextual.yml snippet
menu.edit:
  title: 'Edit menu'
  route_name: 'menu.menu_edit'
  group: menu

```

Again only lists the menu editing route as a contextual link to appear in the 'menu' link group. The key thing here is the contextual link group. Drupal 8 does not collect contextual links based on paths anymore, but instead based on groups of links. [Read the complete documentation on contextual links to figure out how](https://www.drupal.org/node/2133283).

### Dynamic menu items from node\_menu()

Book module and menu module have no use case for dynamic items. However search\_menu() and node\_menu() are interesting examples where dynamic hook\_menu() items have been created in Drupal 7\. For Drupal 8 consider if you need actual dynamic routes or just dynamic menu items, contextual links, local tasks or actions respectively. Create your items accordingly.

For example, take this example of node/add/\* pages for each node type. Drupal 7 has the following code:

```php
  # Drupal 7 menu items
  foreach (node_type_get_types() as $type) {
    $type_url_str = str_replace('_', '-', $type->type);
    $items['node/add/' . $type_url_str] = array(
      'title' => $type->name,
      'title callback' => 'check_plain',
      'page callback' => 'node_add',
      'page arguments' => array($type->type),
      'access callback' => 'node_access',
      'access arguments' => array('create', $type->type),
      'description' => $type->description,
      'file' => 'node.pages.inc',
    );
  }

```

In Drupal 8 terms, this creates several routes and menu items. When converting this to Drupal 8 you may want to port this to create dynamic routes and dynamic menu items. Both are possible. However, routes do not need to be dynamic as it is very simple to create one route that would apply with all menu items. So we'll just create one route:

```php
# Drupal 8 menu.routing.yml snippet
node.add:
  path: '/node/add/{node_type}'
  defaults:
    _controller: '\Drupal\node\Controller\NodeController::add'
    _title_callback: '\Drupal\node\Controller\NodeController::addPageTitle'
  requirements:
    _node_add_access: 'node:{node_type}'

```

The `_node_add_access` requirement is the only new element here, this is similar to the `_access_book_removable`, a custom access checker service, but in this case registered in `node.services.yml`.

We do need the dynamic menu links though. (This was not in fact ported to Drupal 8 in node module but for this example, assume it was). Dynamic menu links should be added by defining a deriver class and plugin class. It's also possible to add them using [hook\_menu\_links\_discovered\_alter()](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Menu!menu.api.php/function/hook%5Fmenu%5Flinks%5Fdiscovered%5Falter/8), but this is generally not encouraged.

Or, since node types are config entities, and menu links rebuild would not normally be triggered by add or removing one, you can simply implement the relevant entity hooks to add or remove links. This is probably the best option. This is basically how menu\_link\_maintain() was used in Drupal 7.x. However, if we go to the trouble of adding logic to connect the link title and description to those of the node type configuration entity, we can take advantage of configuration translation to get our custom node types translated automatically.

```php
class NodeTypeMenuLink extends MenuLinkBase implements ContainerFactoryPluginInterface {
  /**
   * {@inheritdoc}
   */
  public function getTitle() {
    // todo
  }

  /**
   * {@inheritdoc}
   */
  public function getDescription() {
    // todo
  }

  /**
   * {@inheritdoc}
   */
  public function updateLink(array $new_definition_values, $persist) {
    // todo
  }
}


```

Entity hooks:

```php
/**
  * Implements hook_ENTITY_TYPE_insert()
  */
function node_node_type_insert(\Drupal\Core\Entity\EntityInterface $entity) {
  $manager = \Drupal::service('plugin.manager.menu.link');
  $id = 'node_type:' . $entity->id();
  $definition['provider'] = 'node';
  // todo the rest
  $manager->addDefinition($id, $definition);
}

/**
  * Implements hook_ENTITY_TYPE_update()
  */
function node_node_type_update(\Drupal\Core\Entity\EntityInterface $entity) {
  $manager = \Drupal::service('plugin.manager.menu.link');
  $id = 'node_type:' . $entity->id();
  // Makes sure it already exists
   $existing = $manager->getDefinition($id);
   if (!$existing) {
     return node_node_type_insert($entity);
   }
  // todo the rest
  $manager->updateDefinition($id, $definition)
}

/**
  * Implements hook_ENTITY_TYPE_predelete()
  */
function node_node_type_predelete(\Drupal\Core\Entity\EntityInterface $entity) {

}


```

This is just one example where the route did not need to be dynamically created anymore but the menu items were needed. There are examples and further documentation on [dynamic routes](https://www.drupal.org/node/2122201), [dynamic menu links](https://www.drupal.org/node/2122241), [dynamic local tasks](https://www.drupal.org/node/2122253), [dynamic contextual links](https://www.drupal.org/node/2133283) and [dynamic local actions](https://www.drupal.org/node/2133247) in their respective sections.

### Replacements for hook\_menu\_alter()

If you used hook\_menu\_alter() (incorrectly) to define dynamic items, see above for dynamic routes, actions, etc. Altering existing items in the new systems is different based on what you are trying to alter.

* [To alter routes, implement a RouteSubscriber](https://www.drupal.org/node/2187643)
* [To alter menu links, use hook\_menu\_links\_discovered\_alter()](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Menu!menu.api.php/function/hook%5Fmenu%5Flinks%5Fdiscovered%5Falter/8.2.x)
* [To alter tasks, use a hook\_menu\_local\_tasks\_alter()](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Menu!menu.api.php/function/hook%5Fmenu%5Flocal%5Ftasks%5Falter/8.2.x)
* [To alter contextual links, use a hook\_contextual\_links\_view\_alter()](https://api.drupal.org/api/drupal/core%21modules%21contextual%21contextual.api.php/function/hook%5Fcontextual%5Flinks%5Fview%5Falter/8)
* [To alter action links, use a hook\_menu\_local\_actions\_alter()](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Menu!menu.api.php/function/hook%5Fmenu%5Flocal%5Factions%5Falter/8.2.x)

### Further reading

1. [Routing system documentation (introduction, route structure, access checking, etc)](https://www.drupal.org/developing/api/8/routing)
2. [Menu API in Drupal 8 with subsections on menu links, contextual links, actions and local tasks](https://www.drupal.org/node/2122231)
3. [Form API in Drupal 8 (form class definition, routing integration)](https://www.drupal.org/node/2117411)
4. [Entity definitions and entity forms](https://www.drupal.org/node/2192175)

### Related change notices

1. [Routing functionality of hook\_menu() has been replaced by new routing system (and others)](https://drupal.org/node/1800686)
2. [FormInterface replaces form constructor, validation, and submission callbacks](https://drupal.org/node/1932058)