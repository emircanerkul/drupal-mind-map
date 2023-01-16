---
url: >-
  https://www.drupal.org/docs/8/api/serialization-api/changing-the-way-serializer-handles-entities
description: >-
  Core supports serialization for content entities, their fields, and field
  items. It is easy to add support for other classes, and also to modify the way
  Serializer handles classes. For altering how Serializer handles a field item,
  one example is EntityReferenceFieldItemNormalizer. For this, they've created a
  class file in a module's src/Normalizer directory, which...
published_time: '2013-01-27T14:58:00+00:00'
modified_time: '2017-03-01T07:53:59+00:00'
---
Core supports serialization for content entities, their fields, and field items. It is easy to add support for other classes, and also to modify the way Serializer handles classes.

For altering how Serializer handles a field item, one example is EntityReferenceFieldItemNormalizer. For this, they've created a class file in a module's src/Normalizer directory, which...

1. extends ComplexDataNormalizer
2. sets $supportedInterfaceOrClass to the class that creates the field item
3. has a "normalize" function with logic to specify what to output

Here, the normalize function simply appends a "url" value to the field item's data output:

```php
class EntityReferenceFieldItemNormalizer extends ComplexDataNormalizer {

  protected $supportedInterfaceOrClass = EntityReferenceItem::class;

  public function normalize($field_item, $format = NULL, array $context = []) {
    $values = parent::normalize($field_item, $format, $context);

    $entity = $field_item->get('entity')->getValue();
    $url = $entity->url('canonical');
    $values['url'] = $url;

    return $values;
  }

}

```

Then they add an entry to the module's .services.yml file pointing to their normalizer, like so:

```php
  serializer.normalizer.entity_reference_field_item:
    class: Drupal\serialization\Normalizer\EntityReferenceFieldItemNormalizer
    tags:
      # Set the priority lower than the hal entity reference field item
      # normalizer, so that we do not replace that for hal_json.
      # @todo Find a better way for this in https://www.drupal.org/node/2575761.
      - { name: normalizer, priority: 5 }

```

If multiple modules attempt to provide different normalizers for the same entity, priority is used to select the right one. Try to create as specific a normalizer as possible, and be aware that other modules may override your own.

\--To be completed--