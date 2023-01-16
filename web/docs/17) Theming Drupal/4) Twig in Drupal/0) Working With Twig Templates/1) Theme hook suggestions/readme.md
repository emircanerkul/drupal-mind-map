Sometimes you want to make changes to a template file, but only for some of the places that it's used. A common example is making changes to the node template file for only nodes of a specific type. Drupal's theme layer allows you to target specific use cases of a template file by following a specific naming convention. When rendering an article node Drupal will first look for the _node--article.html.twig_ template file and use it if it exists. If it doesn't, Drupal will fall back to the default _node.html.twig_ template. The process by which Drupal determines what possible names a template file could use is called theme hook suggestions.

Theme hook suggestions allow you to implement targeted overrides in your theme for template files with [a specific naming convention](/node/2354645).

All layers from core, modules, theme engines and themes can provide the suggestions. You can add or modify suggestions using the hooks:

* [hook\_theme\_suggestions\_HOOK(array $variables)](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Ftheme%5Fsuggestions%5FHOOK/8)
* [hook\_theme\_suggestions\_alter(array &$suggestions, array $variables, $hook)](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Ftheme%5Fsuggestions%5Falter/8)
* [hook\_theme\_suggestions\_HOOK\_alter(array &$suggestions, array $variables)](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Ftheme%5Fsuggestions%5FHOOK%5Falter/8)