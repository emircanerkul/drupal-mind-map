First, before we dive into the Typed Data API itself, we must understand how Drupal’s data model (Entity API) used to be perceived. This is important because this is where the Typed Data API is coming from, and the Entity API is one of the systems it was designed for.

An entity is a complex piece of data - composed of other pieces of data, like fields with a list of items. A field item is also complex - composed of more pieces of data, like text value and input format. However, the complexity only goes so far, until something can be described as some sort of primitive data type like string or integer.

A simplified example from Drupal 7 (the example is without language key because Drupal 8 handles that differently):

_Figure 1_

```php
// Entities are complex, they contain other pieces of data.
$entity;

// Fields are not complex, they only contain a list of items.
$entity->image;

// Items are complex, they contain other pieces of data. They’re also translatable and accessible (has permissions).
$entity->image[0];

// The file ID is a primitive integer.
$entity->image[0][‘fid’];

// The alternative text is a primitive string.
$entity->image[0][‘alt’];

```