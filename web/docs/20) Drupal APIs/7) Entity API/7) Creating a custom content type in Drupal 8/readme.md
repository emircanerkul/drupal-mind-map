---
url: >-
  https://www.drupal.org/docs/drupal-apis/entity-api/creating-a-custom-content-type-in-drupal-8
description: >-
  This page appears to be a duplicate of Include default configuration in your
  Drupal 8 module. It should be considered for deprecation. Creating a custom
  content type became quite easy, thanks to the new Configuration API that comes
  with Drupal 8. Prerequisites Drupal 8.0.x installed Have a custom module (the
  name of the module used in this example is foobar) Creating the custom content
  type As mentioned in the introduction, creating a custom content type is done
  by creating several YAML files that contain all the required configuration.
published_time: '2015-12-05T16:52:42+00:00'
modified_time: '2021-11-01T17:04:26+00:00'
---
_This page appears to be a duplicate of [Include default configuration in your Drupal 8 module](/node/2087879). It should be considered for deprecation._

Creating a custom content type became quite easy, thanks to the new [Configuration API](https://www.drupal.org/developing/api/8/configuration) that comes with Drupal 8.

### Prerequisites

* Drupal 8.0.x installed
* Have a custom module (the name of the module used in this example is `foobar`)

### Creating the custom content type

As mentioned in the introduction, creating a custom content type is done by creating several YAML files that contain all the required configuration. In this example, we will create a content type _Car Brand_ that will contain two (default) fields: body and title.

#### foobar/config/install/node.type.car\_brand.yml

This file will inform Drupal that it should create a new content type.

**Note:** Be advised that we're adding an _enforced_ dependency to the `foobar` module. If we don't add this dependency, Drupal will not remove the content type when we uninstall our module. When a site builder decides that this module is no longer required, we don't want to have the content type available anymore.

```php
# node.type.car_brand.yml
langcode: en
status: true
dependencies:
  enforced:
    module:
      - foobar # This is the name of the module we're using for this example
name: 'Car Brand'
type: car_brand
description: 'Content type that can be used to provide additional information on <em>Car Brands</em>'
help: ''
new_revision: false
preview_mode: 1
display_submitted: true

```

#### foobar/config/install/field.field.node.car\_brand.body.yml

This file will add the body field to our content type.

```php
# field.field.node.car_brand.body.yml
langcode: en
status: true
dependencies:
    config:
        - field.storage.node.body
        - node.type.car_brand
    module:
        - text
id: node.car_brand.body
field_name: body
entity_type: node
bundle: car_brand
label: Body
description: 'More specific information about the car brand.'
required: false
translatable: true
default_value: {  }
default_value_callback: ''
settings:
    display_summary: true
field_type: text_with_summary

```

#### foobar/config/install/core.entity\_view\_display.node.car\_brand.teaser.yml

This file tells Drupal how the teaser of our custom content type should be displayed.

```php
# core.entity_view_display.node.car_brand.teaser.yml
langcode: en
status: true
dependencies:
    config:
        - core.entity_view_mode.node.teaser
        - field.field.node.car_brand.body
        - node.type.car_brand
    module:
        - text
        - user
id: node.car_brand.teaser
targetEntityType: node
bundle: car_brand
mode: teaser
content:
    body:
        label: hidden
        type: text_summary_or_trimmed
        weight: 101
        settings:
            trim_length: 600
        third_party_settings: {  }
    links:
        weight: 100
hidden: {  }

```

#### foobar/config/install/core.entity\_view\_display.node.car\_brand.default.yml

This file tells Drupal how the content of our custom content type should be displayed by default.

```php
# core.entity_view_display.node.car_brand.default.yml
langcode: en
status: true
dependencies:
    config:
        - field.field.node.car_brand.body
        - node.type.car_brand
    module:
        - text
        - user
id: node.car_brand.default
targetEntityType: node
bundle: car_brand
mode: default
content:
    body:
        label: hidden
        type: text_default
        weight: 101
        settings: {  }
        third_party_settings: {  }
    links:
        weight: 100
hidden: {  }

```

#### foobar/config/install/core.entity\_form\_display.node.car\_brand.default.yml

This file tells Drupal how the form should be displayed when creating a new node of our custom content type.

```php
# core.entity_form_display.node.car_brand.default.yml
langcode: en
status: true
dependencies:
    config:
        - field.field.node.car_brand.body
        - node.type.car_brand
    module:
        - text
        - user
id: node.car_brand.default
targetEntityType: node
bundle: car_brand
mode: default
content:
    body:
        label: hidden
        type: text_textarea_with_summary
        weight: 101
        settings: {  }
        third_party_settings: {  }
    links:
        weight: 100
hidden: {  }

```

### Enable the custom content type

Now that we have our configuration files in place, we need to inform Drupal about our new custom content type. This is done by re-installing the module. If your module has not yet been enabled, then just enable the module. If your module was already enabled, uninstall the module and enable it again.  
If you now go to the _Create content_ page, you will see that you're able to create a new node of the content type "Car Brand".