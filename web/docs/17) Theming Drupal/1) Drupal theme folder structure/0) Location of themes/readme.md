You must place themes in the "themes" folder of your Drupal installation. Note that Drupal core themes such as Bartik and Seven are located in the core/themes folder of your installation.

It is good practice to place the [contributed themes](/node/196218) in a sub folder named "contrib" and your own themes in a folder named "custom".

Each individual theme is contained in a directory named after the theme itself. For example fluffiness/. The name must be all lowercase, start with a letter, and uses an underscore (\_) instead of spaces.

The (partial) structure of your [Drupal installation](https://www.drupal.org/documentation/install) could look as follows:

```php
  |-core
  |  |-modules
  |  |-themes
  |  |  |-bartik
  |  |  |-seven
  ..
  |-modules
  |-themes
  |  |-contrib
  |  |  |-zen
  |  |  |-basic
  |  |  |-bluemarine
  |  |-custom
  |  |  |-fluffiness

```