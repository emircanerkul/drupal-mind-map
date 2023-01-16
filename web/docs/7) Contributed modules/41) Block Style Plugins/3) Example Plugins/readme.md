---
url: https://www.drupal.org/docs/8/modules/block-style-plugins/example-plugins
description: >-
  The tests directory has a module which demonstrates how to build your own
  plugins tests/modules/block_style_plugins_test.
published_time: '2018-12-06T00:11:46+00:00'
modified_time: '2018-12-06T00:11:46+00:00'
---
The tests directory has a module which demonstrates how to build your own plugins **tests/modules/block\_style\_plugins\_test**.

Example Block Style plugins can be found in the tests directory:

### PHP plugins

```php
tests/modules/block_style_plugins_test/src/Plugin/BlockStyle/SimpleClass.php
tests/modules/block_style_plugins_test/src/Plugin/BlockStyle/DropdownWithInclude.php
tests/modules/block_style_plugins_test/src/Plugin/BlockStyle/CheckboxWithExclude.php
```

### Plugins declared via Yaml

Also, check out the example Yaml file for easily declaring plugins at**:**

```php
tests/modules/block_style_plugins_test/block_style_plugins_test.blockstyle.yml
```