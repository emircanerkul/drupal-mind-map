Normalizers can define which classes and formats they support. For example, there are three Normalizers in core.

1. [ComplexDataNormalizer](https://api.drupal.org/api/drupal/core%21modules%21serialization%21src%21Normalizer%21ComplexDataNormalizer.php/class/ComplexDataNormalizer/8.2.x) for instances of ComplexDataInterface, e.g. entities.
2. [ListNormalizer](http://drupalcode.org/project/drupal.git/blob/HEAD:/core/modules/serialization/lib/Drupal/serialization/Normalizer/ListNormalizer.php) for instances of ListInterface, e.g. fields.
3. [TypedDataNormalizer](http://drupalcode.org/project/drupal.git/blob/HEAD:/core/modules/serialization/lib/Drupal/serialization/Normalizer/TypedDataNormalizer.php) for instances of TypedDataInterface, e.g. field items.

All three of these normalizers support any format.

When `Serializer::serialize()` is called, the Serializer iterates through the list of Normalizers to see which it should use. It calls `Normalizer::supportsNormalization($object, $format)` on each Normalizer in the list until it finds one which returns TRUE.

For example, if you pass an entity to `Serializer::serialize()`, the ComplexDataNormalizer will be used because it is first in the list and it supports entities.

![Diagram showing how Normalizer is chosen for entity](https://www.drupal.org/files/supportsNormalization-entity_0.png)

To handle the data contained in the fields on the entity, the ComplexDataNormalizer calls `Serializer::normalize()` itself, passing in each field object.

```php
foreach ($object as $name => $field) {
  $attributes[$name] = $this->serializer->normalize($field, $format, $context);
}

```

Fields do not implement the ComplexDataInterface so they bypass the first Normalizer. The supportsNormalization function is then called on the ListNormalizer.

![Diagram showing how Normalizer is chosen for field](https://www.drupal.org/files/supportsNormalization-field.png)

Order is important here. Both fields and field items support TypedDataInterface, so if TypedDataNormalizer came before ListNormalizer it would be used for fields instead.