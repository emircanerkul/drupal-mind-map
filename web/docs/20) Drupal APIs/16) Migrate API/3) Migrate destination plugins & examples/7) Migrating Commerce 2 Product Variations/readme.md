---
url: >-
  https://www.drupal.org/docs/8/api/migrate-api/migrate-destination-plugins-examples/migrating-commerce-2-product-variations
description: >-
  The contributed Drupal Commerce module can be used to build eCommerce websites
  and applications of all sizes. The key entity in the Commerce solution is the
  Product Variation. This examples shows how the Product Variations can be
  migrated from an external data source. Commerce Product Variations can be
  migrated to Drupal 8 by using the entity:commerce_product_variation
  destination plugin. The example below uses the URL source plugin provided by
  the contributed Migrate Plus module. Migrate Plus provides also the HTTP
  fetcher and JSON parser plugins used in this example.
published_time: '2018-02-02T13:14:38+00:00'
modified_time: '2020-05-09T19:48:15+00:00'
---
The contributed [Drupal Commerce](https://www.drupal.org/project/commerce) module can be used to build eCommerce websites and applications of all sizes. The key entity in the Commerce solution is the Product Variation. This examples shows how the Product Variations can be migrated from an external data source.

Commerce Product Variations can be migrated to Drupal 8 by using the `entity:commerce_product_variation` destination plugin. The example below uses the URL source plugin provided by the contributed [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus) module. Migrate Plus provides also the HTTP fetcher and JSON parser plugins used in this example.

**Note:** If your Commerce 2 shop utilizes product **attribute entities** they **should exist before running the product variation migration** as they have dependency. The same way the variation(s) should exist before the attached products are created. This might sound odd but if you're using Commerce 2 via the web interface you cannot create products without variation(s) and the variation is actually created before the product it belongs to. The variation entity has a field called _target\_id_ to store the information of it's parent product. After the parent product is created that information is used to bind the entities.

The plugin system is described elsewhere, but the reader may refer for example [Migrating Configuration Entities](https://www.drupal.org/docs/8/api/migrate-api/migrate-destination-plugins-examples/migrating-configuration-entities) to learn more about it.

This example shows a REST call where a JSON input is fetched from a non-Drupal source. It is quite typical that the product master data is mastered in another system. Authentication method in this example is HTTP Basic authentication. The proper solution for authentication would be to hide authentication credentials using for example environment variables but the example below shows the authentication credentials for the sake of simplicity. It is also worth noting that Symfony supports this but Drupal 8.4 doesn't yet have v.3.3 Symfony components ("symfony/config”, "symfony/console”, "symfony/dependency-injection”, "symfony/yaml").

```php
id: migrate_products_json_product_variation
label: 'JSON migration - Product variations'
migration_tags: null
migration_group: migrate_products
source:
  plugin: url
  # Specifies the http fetcher plugin.
  data_fetcher_plugin: http
  # Specifies the JSON parser plugin.
  data_parser_plugin: json
  authentication:
    plugin: basic
    username: 'hamster'
    password: 'GummyBear2389'
  headers:
    Accept: 'application/json; charset=utf-8'
    Content-Type: 'application/json'
  # One or more URLs from which to fetch the source data.
  urls: https:/...some.source/object.json?className=/object/structure/product/sku&~attributes=name_fi product_id product_id_for_sku ean_code retail_price_vat status_desc hidden_prod combined_long_desc_fi
  # For JSON, item_selector is the xpath used to select 
  # our source items (tags in this case).
  item_selector: object
  # For each source field, we specify a selector,
  # the field name which will be used to access the field in the 
  # process configuration, and a label to document the meaning 
  # of the field in front-ends.
  fields:
    -
      name: variation_product_id
      label: 'Product Id'
      selector: /attributes/product_id/value
    -
      name: name_fi
      label: 'Name FI'
      selector: /attributes/name_fi/value
    -
      name: product_id_for_sku
      label: 'Product Id for SKU'
      selector: /attributes/product_id_for_sku/value
    -
      name: hidden_product
      label: 'Published'
      selector: /attributes/hidden_prod/value
    -
      name: combined_long_desc_fi
      label: 'Combined long description'
      selector: /attributes/combined_long_desc_fi/value
   # continues...

  # Under ids, we specify which of the source fields retrieved 
  # above (product_id in this case) represent our unique 
  # identifier for the item, and the schema type for that field.
  ids:
    variation_product_id:
      type: string
```

After the source information is imported it's mapped to the field names which are then used in the process configuration. The next important definition is the 'ids' that tells that unique piece of information that is used to create the migrated entities to Drupal, and the type of that field.

```php
destination:
  plugin: entity:commerce_product_variation
process:
  type:
    plugin: default_value
    # default below is the default commerce_product_variation 
    # bundle initially installed in the shop.
    default_value: default
  title:
    -
      plugin: skip_on_empty # This plugin skips empty values
      method: row
      source: name_fi
  target_id:
    -
      plugin: skip_on_empty
      method: row
      source: product_id_for_sku
  field_product_id_for_sku: product_id_for_sku
  sku:
    -
      plugin: skip_on_empty
      method: row
      source: variation_product_id
  status:
    -
      plugin: switch_boolean # This plugin makes true to be false and vice versa.
      source: hidden_product
    -
      plugin: skip_on_empty # Pipelined functionality
      method: row
```

Finally in the process phase the source information is saved to the Drupal Commerce structures. The Drupal Migrate API has several good [process plugins](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins) to fulfill the needs but it's easy to make new (swith\_boolean above) or extend them (entity\_lookup\_array below).

```php
  # The entity_lookup process plugin allows you to populate 
  # these references introspectively i.e. it finds out the 
  # entity_type and the other details automagically.
  attribute_a_size: 
      plugin: entity_lookup
      source: variation_code
  attribute_b_outer_color: 
      plugin: entity_lookup
      source: outer_material
  attribute_c_inner_color: 
      plugin: entity_lookup
      source: inner_material
  attribute_d_heater: 
      plugin: entity_lookup
      source: heater
  # The real life migration used is lengthy so all of the 
  # details are not copied here. However, to make this
  # example more useful below are some field_foos 
  # which are firstly filled like this...
  field_foo_1:
    -
      plugin: skip_on_empty # This plugin skips empty values.
      method: process
      source: accessories
    -
      plugin: extract
      default: 'N/A'
      index:
        - 1
        - attributes
        - accessory_id
        - value
  #...and then used like this to provide us the array we 
  # need (there must be simpler solution also):
  field_foo:
    -
      plugin: flatten # Just in case.
      source: ['@field_foo_0', '@field_foo_1', '@field_foo_2', '@field_foo_3']
  # The entity_lookup(_array) process plugin allows you to 
  # populate references to entities which already exist in 
  # Drupal, whether they were migrated or not.
  # The 1st key for the process is given as source i.e. what 
  # to look for in each existing entity.
  # The 2nd key is the value_key i.e. from where to look 
  # in each existing entity.
  field_skus_accessories:
    -
      plugin: entity_lookup_array
      source: '@field_foo'
      value_key: sku
      bundle: default
      entity_type: commerce_product_variation
  # The next one shows how to store text in some exact format:
  'field_combined_long_description/value': combined_long_desc_fi
  'field_combined_long_description/format':
    plugin: default_value
    default_value: "full_html"

```

**Hint:** Read the yml code snippets and their comment lines carefully as they might provide useful extra information.