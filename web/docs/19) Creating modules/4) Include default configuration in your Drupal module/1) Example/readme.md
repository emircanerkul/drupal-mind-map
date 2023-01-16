Create a file named `node.type.example_mytype.yml` and place it in your module's directory in a subdirectory called `config/install`. For example this file could be at `/modules/example/config/install/node.type.example_mytype.yml` if the module is in `/modules/example`.

Please respect the naming convention: prefix your content type with your module name followed by an underscore to prevent conflicts with other configuration files.

Then you can place the following code in this file:

```php
type: example_mytype
name: Example
description: 'Use <em>example</em> content to get to Drupal 8 development better.'
help: ''
new_revision: false
display_submitted: true
preview_mode: 1
status: true
langcode: en
dependencies:
  module:
    - example
  enforced:
    module:
      - example
```

See [node.type.article.yml](https://api.drupal.org/api/drupal/core!profiles!standard!config!install!node.type.article.yml/8) for a live example.

You can include default configuration for other things like block placement, views, text formats, editor configuration, user roles, etc. with your module the same way.

You can set default values for form fields like the node author as well.

If you installed the module before adding this content type, you'll need to uninstall and install it again for the configuration to take effect. The dependencies and enforced keys ensure that the configuration is removed when the module is uninstalled.