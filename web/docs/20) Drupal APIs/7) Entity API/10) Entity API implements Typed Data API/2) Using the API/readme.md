_\[This section needs some more examples\]_

Entity API defines some magic methods, like `__get()`, to allow for fast and easy access to field values. So using the API is very straightforward and the syntax reminds a lot of the pre Drupal 8 era.

Fetching the actual value of the image’s alternative text will be done as below:

_Figure 5_

```php
// The most verbose way.
$string = $entity->get('image')->offsetGet(0)->get('alt')->getValue();

// With magic added by the Entity API.
$string = $entity->image[0]->alt;

// With more magic added by Entity API, to fetch the first item
// in the list by default.
$string = $entity->image->alt;

```

The above example only adds some nice syntax to the old API. The below examples demonstrates where the real value of this API comes in - inspecting the data:

_Figure 6_

```php
// Returns an array with named keys for all fields and their
// definitions. For example the ‘image’ field.
$field_definitions = $entity->getFieldDefinitions();

// Returns an array with name keys for all properties and their
// definitions. For example the ‘file_id’ and ‘alt’ properties.
$property_definitions = $entity->image
  ->getFieldDefinition()
  ->getFieldStorageDefinition()
  ->getPropertyDefinitions();

// Returns only definition for the ‘alt’ property.
$string_definition = $entity->image
  ->getFieldDefinition()
  ->getFieldStorageDefinition()
  ->getPropertyDefinition('alt');

```

Based on the definitions we fetched above, we can now do clever things like serialization or other data massaging. We can also expose this data over semantically rich APIs, such as an JSON-LD endpoint so that other systems can understand the essentials of our data.

See <https://drupal.org/node/2078241> on more information about how to define and use field definitions of an entity type.