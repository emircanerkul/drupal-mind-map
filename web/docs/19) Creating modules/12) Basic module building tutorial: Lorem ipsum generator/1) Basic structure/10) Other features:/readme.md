This is a simple example, but other features might be added for more complex solutions: 

* LICENSE.txt (or similar): Must not be included, because the packaging script creates one for you.
* loremipsum.services.yml: Allows to declare a custom [service](https://api.drupal.org/api/drupal/core!core.api.php/group/container/).
* loremipsum.links.task.yml: The definitions for creating additional [local tasks (tabs)](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Menu!menu.api.php/group/menu/#sec%5Ftasks) for a specific route.
* loremipsum.links.action.yml: The definitions for creating additional [local actions (buttons)](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Menu!menu.api.php/group/menu/#sec%5Factions) for a specific route.
* loremipsum.links.contextual.yml: The definitions for creating additional [contextual actions](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Menu!menu.api.php/group/menu/#sec%5Fcontextual) for a specific UI element.
* loremipsum.libraries.yml: Used to record dependencies for CSS and Javascript libraries. More details in [the appropriate section](https://www.drupal.org/docs/8/creating-custom-modules/adding-stylesheets-css-and-javascript-js-to-a-drupal-8-module).

Next Step: [Theming](/docs/8/creating-custom-modules/theming).

Followed by: 

* [Building the settings form](/docs/8/creating-custom-modules/settings).
* [Defining a block](/docs/8/creating-custom-modules/defining-a-block) for this module.
* [Writing tests](/docs/8/creating-custom-modules/testing) for this module.