```php
loremipsum.settings:
  type: config_object
  label: 'Lorem Ipsum settings'
  mapping:
    loremipsum:
      type: mapping
      mapping:
        page_title:
          type: text
          label: 'Lorem ipsum generator page title:'
        source_text:
          type: text
          label: 'Source text for lorem ipsum generation:'
block.settings.loremipsum_block:
  type: block_settings
  label: 'Lorem ipsum block'
  mapping:
    loremipsum_block_settings:
      type: text
      label: 'Lorem ipsum block settings'
```

The _schema_ file is used even if you don't define a custom table for your module - here you can see defaults being assigned to the fields of a configuration form.

While developing this code, I found that populating fields out-of-the-box was one of the most difficult tasks. But fortunately, _there's a module for that_: [Configuration inspector for Drupal 8](https://www.drupal.org/project/config%5Finspector) which will help you debug your defaults.

Also, the Schema YML file is super useful in [many different ways](https://www.drupal.org/node/1905070).