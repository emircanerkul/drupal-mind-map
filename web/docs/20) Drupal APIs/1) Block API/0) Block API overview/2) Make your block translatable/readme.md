Blocks are defined as plugins, which makes them configuration entities. In order for a configuration entity to be translatable, a schema representing the structure of the data needs to be provided in the module containing the block. Check here to see how to declare fields as translatable through their schema: [https://www.drupal.org/docs/drupal-apis/configuration-api/configuration-...](https://www.drupal.org/docs/drupal-apis/configuration-api/configuration-schemametadata#use). Once your schema is defined and your cache rebuilt, you should be able to translate your block configuration fields.

So if we were to make the 'fax\_number' field translatable: we would add a schema at `fax/config/schema/fax.schema.yml` with the following content:

```yaml
block.settings.fax_block:
  type: block_settings
  label: 'Fax Block'
  mapping:
    fax_number:
      type: label
      label: 'Fax number'
```

Note that if we do not want the 'fax\_number' field to be translatable, we could set the data `type` to `string` which is considered untranslatable.