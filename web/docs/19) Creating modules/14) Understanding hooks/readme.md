---
url: https://www.drupal.org/docs/creating-modules/understanding-hooks
description: >-
  Hooks are one of the ways for modules to interact with contributed modules or
  Drupal core subsystems. Hooks are used for a variety of tasks including
  preprocessing variables for template files (hook_preprocess()), altering lists
  of information (hook_tokens_alter(), hook_views_data_alter()), and
  manipulating forms (hook_form_alter()) amongst other things. This page lists
  all the hooks provided by core. Modules can define additional hooks of their
  own.
published_time: '2016-12-21T16:23:20+00:00'
modified_time: '2022-12-19T09:37:16+00:00'
---
Hooks are one of the ways for modules to interact with contributed modules or Drupal core subsystems. Hooks are used for a variety of tasks including preprocessing variables for template files (`hook_preprocess()`), altering lists of information (`hook_tokens_alter()`, `hook_views_data_alter()`), and manipulating forms (`hook_form_alter()`) amongst other things. [This page](http://api.drupal.org/api/group/hooks "Drupal API reference - Hooks") lists all the hooks provided by core.

Modules can define additional hooks of their own. For example the Flag module defines `hook_flag_options_alter()`, which can be used by modules that want to alter an existing flag's default options. Most modules that define hooks will also provide documentation about them. This documentation is located in a \*.api.php file.

Hooks occur at various points in the thread of execution, where Drupal seeks contributions from all the enabled modules. For example, when a user visits a help page on a Drupal site, as Drupal builds the help page it will give each module a chance to contribute documentation about itself. It does this by scanning all enabled modules for implementations of [hook\_help()](https://api.drupal.org/api/drupal/core%21modules%21help%21help.api.php/function/hook%5Fhelp). That is, functions that have the name `mymodule_help($route_name, \Drupal\Core\Routing\RouteMatchInterface $route_match)`, where "mymodule" is the module's name, e.g., the block module's help hook is called `block_help()` and the node module's help hook is called `node_help()`. The hook may provide parameters; hook\_help's parameters `$route_name` and `$route_match` allow the developer to determine what page or pages the help messages will appear on.

A hook can be thought of as an event listener in the sense that an event triggers an action. The event in Drupal, such as deleting a node, would trigger the hook "hook\_node\_delete". If your module implemented hook\_node\_delete, that function would run when a node deletion occurred. As an example, your function might be to decrease the count of the total number of nodes, so when a node was deleted, your function would be called and lower the count by 1.

See also [the overview of module hooks](http://api.drupal.org/api/group/hooks "Drupal API reference - Hooks"), in the Drupal API Reference. You might want to check out also this [good article discussing how Drupal 7 module/hook system works](http://alanstorm.com/drupal%5Fmodule%5Fhooks), using simple PHP constructs/snippets.