---
url: >-
  https://www.drupal.org/docs/drupal-apis/menu-api/providing-module-defined-contextual-links
description: >-
  Contextual links have also been moved out of the hook_menu() system in Drupal
  8 and are very similar to local tasks. Use contextual links to provide
  contextual operations to users around common Drupal objects appearing on the
  frontend. Declaring contextual links Contextual links are defined in a YAML
  format, named after the module they are defined by.
published_time: '2013-11-11T15:41:15+00:00'
modified_time: '2022-12-03T12:27:30+00:00'
---
Contextual links have also been moved out of the hook\_menu() system in Drupal 8 and are very [similar to local tasks.](https://drupal.org/node/2122253) Use contextual links to provide contextual operations to users around common Drupal objects appearing on the frontend.

### Declaring contextual links

Contextual links are defined in a YAML format, named after the module they are defined by. Such as `block.links.contextual.yml` for this example from block module:

```php
block_configure:
  title: 'Configure block'
  route_name: 'block.admin_edit'
  group: 'block'

```

For contextual links, the resulting route of the contextual action is provided in `route_name`, so this is the route the user will end up on once the link is clicked. The title of the link is provided in the `title` key with an optional disambiguation in the `title_context` key (that is passed on to t() for translation). The key concept for contextual links is the `group`. When displaying contextual links, the output build system retrieves links belonging to the group to be displayed. The `weight` key can be used to order contextual links in the same group.

### Rendering contextual links

The contextual link rendering process takes the groups from the `#contextual_links` keys in the render array. For example the BlockViewBuilder provides this contextual links list:

```php
  public function viewMultiple(array $entities = array(), $view_mode = 'full', $langcode = NULL) {
    $build = array();
    foreach ($entities as $key => $entity) {
      // ...
      $build[$entity_id] = [
        '#theme' => 'block',
        // ...
        '#contextual_links' => [
          'block' => [
            'route_parameters' => ['block' => $entity->id()],
          ],
        ],
        // ...
      ];
    }
    // ...
  }

```

The `'block'` key in the #contextual\_links render array establishes the `'block'` group. All links belonging to the `'block'` group will be displayed as contextual links. The value provided for the key is an array with route parameters to be able to convert routes related to this block to paths for the links (with the assumption that routes used as contextual links on blocks will include the block identifier as a dynamic component). Only routes which can be fully resolved to a path with route parameters should be added to a group.

For example the `block.admin_edit` route that is referenced in the contextual link above is defined as follows (in `block.routing.yml`):

```php
block.admin_edit:
  path: '/admin/structure/block/manage/{block}'
  defaults:
    _entity_form: 'block.default'
    _title: 'Configure block'
  requirements:
    _entity_access: 'block.update'

```

The `'block'` route parameter defined in the `#contextual_links` array allows the system to resolve this to the proper path to the block edit page by replacing `{block}` with the provided parameter, the block id.

Contextual links are stored in title\_suffix. This variable needs to be printed in the html.twig file, such as in this example from `block.links.contextual.yml`.

```php
<div{{ attributes }}>
  {{ title_suffix }}
  ...
</div>
```

### Altering contextual links

To alter existing contextual links, implement a [hook\_contextual\_links\_view\_alter()](https://api.drupal.org/api/drupal/core%21modules%21contextual%21contextual.api.php/function/hook%5Fcontextual%5Flinks%5Fview%5Falter/8).

To add contextual links to existing site components that do not have a contextual links group yet, you need to establish a new group by altering the build array, defining a new key and providing the adequate set of route parameters. The exact process for doing that depends on how and where the render array is produced. An example for altering the render arrays with a new group is how menus get the menu group into the block contextual links. See [menu\_ui\_block\_view\_system\_menu\_block\_alter](https://api.drupal.org/api/drupal/core%21modules%21menu%5Fui%21menu%5Fui.module/function/menu%5Fui%5Fblock%5Fview%5Fsystem%5Fmenu%5Fblock%5Falter/8) which relies on [hook\_block\_view\_BASE\_BLOCK\_ID\_alter](https://api.drupal.org/api/drupal/core%21modules%21block%21block.api.php/function/hook%5Fblock%5Fview%5FBASE%5FBLOCK%5FID%5Falter/8):

```php
function menu_ui_block_view_system_menu_block_alter(array &$build, BlockPluginInterface $block) {
  // Add contextual links for system menu blocks.
  $menus = menu_list_system_menus();
  $menu_name = $block->getDerivativeId();
  if (isset($menus[$menu_name])) {
    $build['#contextual_links']['menu'] = [
      'route_parameters' => array('menu' => $menu_name),
    ];
  }
}

```

By including that new `'menu'` group in the block build array, now all menu contextual links will be added to this block as well. The following contextual link is defined in `menu_ui.links.contextual.yml` in the menu group:

```php
menu_ui_edit:
  title: 'Edit menu'
  route_name: 'menu_ui.menu_edit'
  group: menu

```

The result is that both `'block'` and `'menu'` contextual links appear in blocks that are displaying menus. The default tools menu for example has these two contextual links displayed thanks to that:

![](https://www.drupal.org/files/ContextualLinksBlocks.png)

### Dynamic contextual link generation

You can also implement dynamic contextual link generation along the same line as for local tasks. Provide a class in the `deriver` key of your `example.links.contextual.yml` file and implement that class based on `DerivativeBase`. Make sure to provide the keys in the same way in array format. See the [example in the local tasks documentation](https://www.drupal.org/node/2122253).

A core example is [config\_translation.links.contextual.yml](https://api.drupal.org/api/drupal/core%21modules%21config%5Ftranslation%21config%5Ftranslation.links.contextual.yml/8) and [ConfigTranslationContextualLinks](https://api.drupal.org/api/drupal/core%21modules%21config%5Ftranslation%21src%21Plugin%21Derivative%21ConfigTranslationContextualLinks.php/class/ConfigTranslationContextualLinks/8)

### Customizing contextual link behavior

The default contextual links implementation is in [ContextualLinkDefault](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Menu%21ContextualLinkDefault.php/class/ContextualLinkDefault/8). You can extend this class and modify the behavior of a desired contextual link by providing the class with the definition. Such as to use of a dynamic title for a contextual link, you can extend the class, override the `getTitle()` method and provide the class in the definition:

```php
example.customtitle:
  title: 'Custom title example'
  route_name: 'example.admin_edit'
  group: 'example'
  class: '\Drupal\example\Plugin\Menu\ContextualLink\CustomContextualLink'

```

A core example is [ConfigTranslationContextualLink](https://api.drupal.org/api/drupal/core%21modules%21config%5Ftranslation%21src%21Plugin%21Menu%21ContextualLink%21ConfigTranslationContextualLink.php/class/ConfigTranslationContextualLink/8).