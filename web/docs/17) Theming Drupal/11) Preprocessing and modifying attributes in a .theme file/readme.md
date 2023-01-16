---
url: >-
  https://www.drupal.org/docs/8/theming-drupal-8/modifying-attributes-in-a-theme-file
description: >-
  Just like Drupal 7, you can affect the output of certain HTML via preprocess
  functions. For example, if you wanted to add a class to a menu and preferred
  to do this at the PHP level you can. This is a good way to alter
  theme-specific markup. If you want to make theme-independent markup you should
  add code to a custom module, where in place of mytheme.theme you have
  mymodule.module. For the purposes of documentation here "mytheme" is the
  machine name of your theme; for example "bartik" is a theme machine name.
published_time: '2015-12-19T20:45:29+00:00'
modified_time: '2022-10-21T03:29:13+00:00'
---
Just like Drupal 7, you can affect the output of certain HTML via preprocess functions. For example, if you wanted to add a class to a menu and preferred to do this at the PHP level you can.

This is a good way to alter theme-specific markup. If you want to make theme-independent markup you should add code to a custom module, where in place of `mytheme.theme` you have `mymodule.module`.

For the purposes of documentation here "mytheme" is the machine name of your theme; for example "bartik" is a theme machine name.

To work with preprocess functions:

1. Create or edit a file in your theme directory called `mytheme.theme`
2. Create a function such as `mytheme_preprocess_HOOK` where HOOK refers to the item you wish to affect. HOOK names follow twig template suggestions. To create a hook for `page.html.twig` you create `mytheme_preprocess_page`. To create a hook for `node--article.html.twig` you create `mytheme_preprocess_node__article` (replacing dashes with underscores). To discover hook names, see [Locating Template Files with Debugging](https://www.drupal.org/node/2358785).
3. Write your changes and save
4. Rebuild the cache so your changes are available (if you have drush installed, `drush cr` on the command line)

Let's assume we wanted to add a class of `my-menu` to all of the menus on your site. Assuming your theme is called "mytheme" you would write the following function:

```php
/**
* Implements hook_preprocess_HOOK() for menu.html.twig.
*/
function mytheme_preprocess_menu(&$variables) {
  // Allow the Attribute Class to deal with adding a css class to this element.
  $variables['attributes']->addClass('my-menu');
}

```

This is a lot more streamlined than Drupal 7 thanks to the addition of the [Attribute Class](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Template%21Attribute.php/class/Attribute/8.2.x)

You could inspect the $variables object with a condition to determine which menu you are working with. The elements within $variables become available in twig after theme Pre-Processing.

So now to extend our example, let's assume we want to add the class "my-main-menu" to the main menu of your site. This would be the function to do so:

```php
/**
* Implements hook_preprocess_HOOK() for menu.html.twig.
*/
function mytheme_preprocess_menu(&$variables) {
  if ($variables['menu_name'] == 'main') {
    $variables['attributes']->addClass('my-main-menu'); 
  }
}

```