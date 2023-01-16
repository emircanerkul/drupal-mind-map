---
url: >-
  https://www.drupal.org/docs/drupal-apis/menu-api/providing-module-defined-menu-links
description: >-
  In Drupal +8 routing is handled by the routing system and menu links are now
  defined in static .yml files. The naming of the .yml file should be
  module_name.links.menu.yml.
published_time: '2013-10-28T13:42:20+00:00'
modified_time: '2022-08-18T23:08:30+00:00'
---
In Drupal +8 routing is handled by the [routing system](https://www.drupal.org/docs/drupal-apis/routing-system/routing-system-overview) and menu links are now defined in static .yml files. The naming of the .yml file should be `module_name.links.menu.yml`. To provide a configuration menu item under the development settings, you can do the following:

```php
example.admin:
  title: 'Example settings'
  description: 'Manage example settings for your site'
  parent: system.admin_config_development
  route_name: example.admin
  weight: 100
  # The menu link is enabled by default, we can override it with:
  enabled: 0
  route_parameters: { key: 'value' }
  # If menu_name is omitted, the "Tools" menu will be used.
  menu_name: devel 
  options:
    query:
      uid: 1
    attributes:
      target: _blank
      class:
        - some-class
        - anotherclass
```

Only the title key is required. This example defines a local menu link so it uses a route\_name to tie the menu link to a route. (External pointing menu links would use an `url` value). The description is shown either as a tooltip on the item or in the admin UI as the description of the option on the page. The weight is used to order the items (higher weights get placed towards the end of the menu among items on the same level). Finally, the item can be put into the menu hierarchy by referring to the parent menu link name. See further possible keys on the [hook\_menu\_links\_discovered\_alter()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Menu%21menu.api.php/function/hook%5Fmenu%5Flinks%5Fdiscovered%5Falter/8) documentation.

Determining the parent menu\_link name can be a little tricky at first. If you know the path of the parent menu item, you would need to search for it in all available \*.routing.yml files (most text editors and IDEs should allow you to search all files in a project) and find the route name for that path. Then, you would need to search for the route name in all available \*.links.menu.yml files. The menu\_link whose route\_name matches is your link. Alternatively, if you know which module is defining the parent menu link (or one of the parent menu link's children), you can go straight to that module and perform your search (or you can see the available routes by **<http://www.example.com/devel/routes>** URL if devel module is installed).

Finally, you can provide string context for the menu link title in a `title_context` key, so if the link text is ambiguous (such as 'Extend', 'May', etc.) the string context helps translators pick the right translation. This is later passed on to `t()`.

The route name for paths created by Views pages is in the format `view.name.display_id`.

#### Using anchor links

Anchor links in .menu.yml

```php
example.anchor:
  title: "Anchor example"
  description: "Scroll to top on the current page"
  url: "internal:#top"
```

### Altering menu links and adding menu links dynamically

Statically defined menu items may be altered using [hook\_menu\_links\_discovered\_alter()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Menu%21menu.api.php/function/hook%5Fmenu%5Flinks%5Fdiscovered%5Falter/9.1.x) (but note there is no hook\_menu\_link\_discovered(), the menu links are built from the .yml files as explained above). This hook may also be used to add new dynamic menu items.

More often, you may want to use a deriver class to add new menu link plugins. For example, Views provided menu links are added in [views.links.menu.yml](https://api.drupal.org/api/drupal/core%21modules%21views%21views.links.menu.yml/9.1.x), which specifies the deriver class [\\Drupal\\views\\Plugin\\Derivative\\ViewsMenuLink](https://api.drupal.org/api/drupal/core%21modules%21views%21src%21Plugin%21Derivative%21ViewsMenuLink.php/class/ViewsMenuLink/9.1.x).

Finally, you can use the plugin manager directly to add, update, and remove definitions. For example, this creates a simplified version of the menu link at the top of the page:

```php
$link_properties = ['title' => 'Example settings', 'route_name' => 'example.admin', 'menu_name' => 'devel'];
\Drupal::service('plugin.manager.menu.link')->addDefinition('example.admin', $link_properties);

```

### A little change history...

The original replacement for menu links via `hook_menu()` was proposed to be called `hook_default_menu_links()` [#2047633: Move definition of menu links to hook\_menu\_link\_defaults(), decouple key name from path, and make 'parent' explicit](https://www.drupal.org/project/drupal/issues/2047633 "Status: Closed (fixed)"), but that eventually changed to the method above [hook\_menu\_link\_defaults() moved to \*.links.menu.yml files](https://drupal.org/node/2228089 "hook_menu_link_defaults() moved to *.links.menu.yml files").

### Routing

[Refer to the routing system documentation](https://drupal.org/node/2122071) on how to define the `'example.admin'` route. The routing system will associate the path to a controller, while the menu system will make the item appear in the administration section.