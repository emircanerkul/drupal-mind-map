_\[To be reviewed\]_

A Typed Data object can be created with a Data Definition for a given Data Type.

The Typed Data Manager service allows you to create Typed Data objects, and is the preferred way to instantiate primitive or Map-based Typed Data. You should use the Entity Manager or Field Plugin Manager for those respectively.

```php
  // Create a data definition for the data type plugin.
  $definition = \Drupal::typedDataManager()->createDataDefinition('uri');
  // Create the Typed Data object for the data definition with the Typed Data Manager service. Note that the "typed_data_manager" service should be injected into your own class.
  $uri = \Drupal::typedDataManager()->create($definition);
  // Set some value on the object.
  $uri->setValue('http://www.example.com');

```

The Typed Data Manager service also allows to create an IteratorAggregate object of Typed Data objects using the List Data Definition class.

```php
  $listDefinition = \Drupal::typedDataManager()->createListDataDefinition('uri');
  $urls = \Drupal::typedDataManager()->create($listDefinition, ["http://example.com", "http://drupal.org"]);

  // Get a specific index value.
  $exampleurl = $urls->get(0)->getValue();

  // Iterate over each item in the list.
  foreach ($urls as $url) {
    // Do something with the Uri Typed Data.
  }

```

The Data Definition class can set constraints upon the Typed Data object.

```php
  $definition = \Drupal::typedDataManager()->createDataDefinition('uri');
  // Add a Symfony Choice constraint to this data definition.
  $definition->addConstraint('Choice', ['choices' => ['http://example.com']]);
  $uri = \Drupal::typedDataManager()->create($definition, 'http://drupal.org');
  
  $errors = $uri->validate();
  if (!empty($errors)) {
    // Iterate through \Symfony\Component\Validator\ConstraintViolationListInterface.
    foreach ($errors as $error) {
       // $error->getMessage();
    }
  }

```

The Typed Data API can be used with the Serialization API to serialize Drupal data types into JSON or XML easily.

```php
  // Serialize Typed Data into JSON.
  $listDefinition = \Drupal::typedDataManager()->createListDataDefinition('uri');
  $list = \Drupal::typedDataManager()->create($listDefinition, ['http://example.com', 'http://drupal.org']);
  $serializer = \Drupal::service('serializer');
  echo $serializer->serialize($list, 'json');
  // ["http://example.com", "http://drupal.org"]

  // Deserialize JSON into Typed Data.
  $encoded = json_encode(["http://example.com", "http://drupal.org"]);
  $myList = $serializer->deserialize($encoded, 'Drupal\Core\TypedData\Plugin\DataType\Uri', 'json', ['plugin_id' => 'uri']);
  echo $myList->get(0)->getValue();
  // 'http://example.com'

```