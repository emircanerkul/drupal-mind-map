---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/step-by-step-tutorial-hello-world/add-a-menu-link
description: >-
  Now that we have created a placeholder for our module settings page, let us
  add a menu link for it. The instructions below show how to create a menu link
  to the hello_world module in the Development section of the Admin >
  Configuration page (http://example.com/admin/config).
published_time: '2015-04-02T05:34:56+00:00'
modified_time: '2021-07-21T06:22:25+00:00'
---
Now that we have created a placeholder for our module settings page, let us add a menu link for it. The instructions below show how to create a menu link to the hello\_world module in the **Development** section of the **Admin > Configuration** page (<http://example.com/admin/config>).

In the root folder of your module, create a new file, called `hello_world.links.menu.yml` and add the following to it:

```php
hello_world.admin:
  title: 'Hello module settings'
  description: 'example of how to make an admin settings page link'
  parent: system.admin_config_development
  route_name: hello_world.content
  weight: 100

```

Note that the first line is reserving a named space, just like our [routing file example](https://www.drupal.org/node/2464207). Also note the use of our route name on the 5th line (we use the named space from the first line of the routing file example). The **title** and **description** will be displayed in the Development section. Notice that parent line describes the parent link for the menu. In other words, the menu link will be created under admin, config, development.

This will add a link to the path referenced in `hello_world.content` (`hello_world.routing.yml` in this example) within the administration pages of your site under the Configuration tab (on /admin/config URL path) in the Development section. You will need, of course, to clear your cache for the change to take effect.

After you have cleared the cache, you will find a menu link "Hello module settings" in the Development section of Configuration page. On clicking the link, the hello\_world module will be called.

### Additional tips

The `.links.menu.yml` file is quite flexible. You can also use it to link to external resources, or link by path:

```php
hello_world.admin:
  title: 'Hello module settings'
  description: 'example of how to make an admin settings page link'
  parent: system.admin_config_development
  url: http://example.com/this-is-some-example
  weight: 100
hello_world.admin2:
  title: 'Hello module settings'
  description: 'example of how to make an admin settings page link'
  parent: system.admin_config_development
  url: internal:/some-internal-path

```

#### Non Editable :

Please note that when you create menu links via yml files and custom modules this way, you get UI un-editable menu links. You can only change the links via the yml file. They are considered module managed as opposed to admin managed. When you click on the edit button for the menu item you'll get a message that says "This link is provided by the XXX module. The title and path cannot be edited.".

![Not editable menu link screenshot](https://www.drupal.org/files/not-editable-menu-link.png)

To create editable menu links you need to do it more like this:

```php
  $my_menu = \Drupal::entityTypeManager()->getStorage('menu_link_content')
    ->loadByProperties(['menu_name' => 'my-menu-name']);
  foreach ($my_menu as $menu_item) {
    $parent_id = $menu_item->getParentId();
    if (!empty($parent_id)) {
      $top_level = $parent_id;
      break;
    }
  }
  $menu_link = MenuLinkContent::create([
    'title' => 'My menu link title',
    'link' => ['uri' => 'internal:/my/path'],
    'menu_name' => 'my-menu-name',
    'parent' => $top_level,
    'expanded' => TRUE,
    'weight' => 0,
  ]);
  $menu_link->save();
```