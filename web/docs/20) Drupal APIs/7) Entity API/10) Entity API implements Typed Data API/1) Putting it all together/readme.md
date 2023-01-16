Below is a simplified example of how Entity API is implementing the different interfaces from the Typed Data API. In reality, Entity API extends these interfaces adding additional methods that Entity API needs. Still, all the below statements evaluate to true:

_Figure 2_

```php
// Entities are complex.
$entity instanceof ComplexDataInterface;

// Properties are not complex, they’re only a list of items.
$entity->get('image') instanceof ListInterface;

// Items are complex.
$entity->get('image')->offsetGet(0) instanceof ComplexDataInterface;

// The typed data object representing the alt value.
$entity->get('image')->offsetGet(0)->get('alt') instanceof TypedDataInterface;

// The alt value is a primitive string.
is_string($entity->get('image')->offsetGet(0)->get('alt')->getValue());

```

Below follows a brief overview of how Entity API extends the Typed Data API to accommodate some additional needs:

_Figure 3_

```php
interface EntityInterface extends ComplexDataInterface, TranslatableInterface, AccessibleInterface {
 // ...
}

interface FielditemListInterface extends ListInterface {
 // ...
}

// Note that this extends two interfaces. Explanation below.
interface FieldItemInterface extends ComplexDataInterface, TypedDataInterface {
 // ...
}

// Below follows some actual implementations.

// Extends an abstract class with some common logic.
class ImageItem extends FieldItemBase {
 // ...
}

// Extends an abstract class with some common logic.
class String extends TypedData {
 // ...
}

```

_\[The following two paragraphs needs more work\]_

The two most notable things above are that:

1. `EntityInterface` extends some utility interfaces for things like translation and access abilities. This should be pretty self-explanatory.
2. `FieldItemInterface` extends both `ComplexDataInterface` and `TypedDataInterface`. As explained earlier, _items_ are complex in the sense that they contain more pieces of data (like text value and format for text items). But at the same time, an item is a piece of typed data itself, thus having its own definition and data type.

So to sum this up, in addition to _Figure 2_, all the below statements evaluate to true as well:

_Figure 4_

```php
$entity instanceof EntityInterface;

$entity->get('image') instanceof FieldItemListInterface;

$entity->get('image')->offsetGet(0) instanceof FieldItemInterface;

$entity->get('image')->offsetGet(0)->get('alt') instanceof String;

is_string($entity->get('image')->offsetGet(0)->get('alt')->getValue());

```