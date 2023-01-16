---
url: >-
  https://www.drupal.org/docs/drupal-apis/entity-api/programming-custom-fields-into-your-content-type
description: >-
  Sometimes when you're pulling in a content type from a custom module, you'd
  also like to pull in fields specific to this content type. Being able to have
  the fields automatically created allows you to uninstall and reinstall in
  multiple sites without leaving excess fields behind and guaranteeing you won't
  forget to add them. There are two ways to add these fields to your codebase
  that we'll cover. Prerequisites Drupal 8.0.x installed. Have a custom module
  (the name of the module used in this example is foobar).
published_time: '2016-03-25T00:34:38+00:00'
modified_time: '2019-06-14T12:12:02+00:00'
---
Sometimes when you're pulling in a content type from a custom module, you'd also like to pull in fields specific to this content type. Being able to have the fields automatically created allows you to uninstall and reinstall in multiple sites without leaving excess fields behind and guaranteeing you won't forget to add them. There are two ways to add these fields to your codebase that we'll cover.

### Prerequisites

* Drupal 8.0.x installed.
* Have a custom module (the name of the module used in this example is `foobar`).
* Have a custom content type in the module (Please follow the steps in the [parent page](https://www.drupal.org/node/2629550). The content type name will be Car Brand).

### Adding additional fields to our content type

There are two ways to go about doing this step. You can either use the UI to create the fields and export the configuration into files or you can just write the files yourself. I like using the first option just to make sure you don't miss anything that would be needed, however the fields are exported with 'field\_' at the beginning rather than 'foobar\_car\_brand\_' to associate them with our custom content type. We'll cover hand coding the fields in your custom module on this page.

#### Hand coding the fields in your module

As stated before, this method requires a little more knowledge and knowing exactly what you want the field to do and look like. Each field you add needs to have two YAML files which contains config information. These are named like the following: field.field.node.car\_brand.field\_brand\_information.yml and field.storage.node.field\_brand\_information.yml.

**Uninstall the custom content type**  
If you already enabled the foobar module at the end of the last page, go ahead and uninstall it now.

**foobar/config/install/field.storage.node.field\_brand\_information.yml**

This file will inform Drupal that it should create our field.

```php
# field.storage.node.field_brand_information.yml
langcode: en
status: true
dependencies:
  module:
    - node
    - text
id: node.field_brand_information
field_name: field_brand_information
entity_type: node
type: text_with_summary
settings: {  }
module: text
locked: false
cardinality: 1
translatable: true
indexes: {  }
persist_with_no_fields: false
custom_storage: false

```

**foobar/config/install/field.field.node.car\_brand.field\_brand\_information.yml**

This file will inform Drupal that it should attach our field to our content type.

```php
# field.field.node.car_brand.field_brand_information.yml
langcode: en
status: true
dependencies:
  config:
    - field.storage.node.field_brand_information
    - node.type.car_brand
  module:
    - text
id: node.car_brand.field_brand_information
field_name: field_brand_information
entity_type: node
bundle: car_brand
label: 'Brand Information'
description: 'More specific information about the car brand'
required: false
translatable: false
default_value: {  }
default_value_callback: ''
settings:
  display_summary: false
field_type: text_with_summary

```

**foobar/config/install/core.entity\_form\_display.node.car\_brand.default.yml | foobar/config/install/core.entity\_view\_display.node.car\_brand.default.yml**

Both of these files will need to be updated from the previous page so that they include all new fields that you add. I've added two additional fields named "additional\_field\_1" and "additional\_field\_2" so that you can see how it would look like with multiple fields.

_Note: If you don't want to create the additional fields, remove the dependencies and information for those fields in the following code._

```php
# core.entity_view_display.node.car_brand.default.yml
langcode: en
status: true
dependencies:
  config:
    - field.field.node.car_brand.field_brand_information
    - field.field.node.car_brand.field_additional_field_1
    - field.field.node.car_brand.field_additional_field_2
    - node.type.car_brand
  module:
    - file
    - text
    - user
_core:
  default_config_hash: Nfnv6VMugBKl6EOqi_U0I_LQ1ZQpbNDN3a9GXHWUBz4
id: node.car_brand.default
targetEntityType: node
bundle: car_brand
mode: default
content:
  field_brand_information:
    weight: 101
    label: above
    settings: {  }
    third_party_settings: {  }
    type: text_default
  field_additional_field_1:
    weight: 103
    label: above
    settings:
      link_to_entity: false
    third_party_settings: {  }
    type: string
  field_additional_field_2:
    weight: 102
    label: above
    settings: {  }
    third_party_settings: {  }
    type: file_default
  links:
    weight: 100
hidden: {  }

```

```php
# core.entity_form_display.node.car_brand.default.yml
langcode: en
status: true
dependencies:
  config:
    - field.field.node.car_brand.field_brand_information
    - field.field.node.car_brand.field_additional_field_1
    - field.field.node.car_brand.field_additional_field_2
    - node.type.car_brand
  module:
    - file
    - path
    - text
_core:
  default_config_hash: qZE-qJ04DTTNggVVQdVOPQmpE_I69GQ_LqB32kXivVg
id: node.car_brand.default
targetEntityType: node
bundle: car_brand
mode: default
content:
  created:
    type: datetime_timestamp
    weight: 2
    settings: {  }
    third_party_settings: {  }
  field_brand_information:
    weight: 7
    settings:
      rows: 9
      summary_rows: 3
      placeholder: ''
    third_party_settings: {  }
    type: text_textarea_with_summary
  field_additional_field_1:
    weight: 6
    settings:
      size: 60
      placeholder: ''
    third_party_settings: {  }
    type: string_textfield
  field_additional_field_2:
    weight: 8
    settings:
      progress_indicator: throbber
    third_party_settings: {  }
    type: file_generic
  path:
    type: path
    weight: 5
    settings: {  }
    third_party_settings: {  }
  promote:
    type: boolean_checkbox
    settings:
      display_label: true
    weight: 3
    third_party_settings: {  }
  sticky:
    type: boolean_checkbox
    settings:
      display_label: true
    weight: 4
    third_party_settings: {  }
  title:
    type: string_textfield
    weight: 0
    settings:
      size: 60
      placeholder: ''
    third_party_settings: {  }
  uid:
    type: entity_reference_autocomplete
    weight: 1
    settings:
      match_operator: CONTAINS
      size: 60
      placeholder: ''
    third_party_settings: {  }
hidden: {  }

```

#### Enable the custom content type

Now you should enable the foobar module. If you now go to the _Create content_ page, you will see that you're able to create a new node of the content type "Car Brand" and it will include our new field named "Brand Information".

We'll cover adding these fields through the UI on the [next page](https://www.drupal.org/node/2693993).