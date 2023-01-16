---
url: https://www.drupal.org/docs/drupal-apis/typed-data-api/data-type-plugins
description: >-
  A data type plugin defines the setting and getting of values for a primitive
  or complex data type. A primitive data type refers to data that has a single
  property such as a boolean, string, URI, or date time value. Conversely a
  complex data type has multiple properties that are also data types such as the
  EntityAdapter or Map data type plugins. This plugin is defined by the DataType
  annotation with the following properties: id: The plugin id that is passed
  into the create method for a data definition class.
published_time: '2012-09-26T18:28:44+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
A data type plugin defines the setting and getting of values for a primitive or complex data type. A primitive data type refers to data that has a single property such as a boolean, string, URI, or date time value. Conversely a complex data type has multiple properties that are also data types such as the EntityAdapter or Map data type plugins.

This plugin is defined by the DataType annotation with the following properties:

* **id**: The plugin id that is passed into the create method for a data definition class.
* **label**: A translated label to use for the data type wrapped in @Translation()
* **definition\_class**: The definition class to use for a complex data type. This is not necessary for primitive data types. This is defined as the fully-qualified class name.
* **list\_class**: An optional class that will be used when instantiating a sequence of this data type. This is useful for implementing custom normalization.
* **constraints**: An optional array of validation constraints. This is unused in default implementations of TypedData. It is preferred to add constraints to the data definition instance instead.

The EntityAdapter data type is ready-made for Drupal entities. The Map data type is an example for developers to extend, and is a way of representing hierarchical data without any assumptions about storage and requires a corresponding data definition to describe the properties.

This is a fictitious example of a simple Color class, which extends the Map data type.

```php
/**
  * @DataType(
  *   id = "example_color",
  *   label = @Translation("Color"),
  *   constraints = {},
  *   definition_class = "\Drupal\example\TypedData\ColorDefinition"
  * )  
  */
class Color extends Map { }

```

A data type plugin may have methods to interact with the values, but validation (constraints) should be handled by the data definition class. For instance, a Color class could have methods for helping to get the value as RGB or CMYK. It is not necessary to implement any methods on this class to use the basic functionality described in the Typed Data API Overview.

```php
class Color extends Map {
   // @todo add some example methods.
}

```

The data type plugins provided by core may be found in core/lib/Drupal/Core/TypedData/Plugin/DataType. Their ids are listed in their annotations, and include (as of Drupal 8.9): any, binary, boolean, datetime\_iso8601, duration\_iso8601, email, float, integer, list, language, language\_reference, map, string, timespan, timestamp, and uri.