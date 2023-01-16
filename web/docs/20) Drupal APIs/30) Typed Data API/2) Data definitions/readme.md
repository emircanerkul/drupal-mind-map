---
url: https://www.drupal.org/docs/drupal-apis/typed-data-api/data-definitions
description: >-
  A data definition describes how to interact with a given data type including
  configuration, constraints, and labels. This is most useful when defining
  complex data types such as a hierarchical data structure. The
  ComplexDataDefinitionBase class may be used as a base class. Data Definition
  The Drupal\Core\TypedData\DataDefinition class provides the definition for
  primitive data types such as StringData or FloatData. This allows for basic
  configuration and assumes one property stored on the data type.
published_time: '2015-05-13T03:24:25+00:00'
modified_time: '2021-05-03T22:09:19+00:00'
---
A data definition describes how to interact with a given data type including configuration, constraints, and labels. This is most useful when defining complex data types such as a hierarchical data structure. The ComplexDataDefinitionBase class may be used as a base class.

### Data Definition

The Drupal\\Core\\TypedData\\DataDefinition class provides the definition for primitive data types such as StringData or FloatData. This allows for basic configuration and assumes one property stored on the data type. 

### Complex Data Definition

The Drupal\\Core\\TypedData\\ComplexDataDefinitionBase class provides a way to define property definitions for complex data types such as Map where there is more than a single value property.

### List Data Definition

The Drupal\\Core\\TypedData\\ListDataDefinition class provides the definition of a standard item list data type constrained by its children data type.

A fictitious example: Create a definition for a Color data type that has 3 properties for red, green, and blue integer values.

```php
namespace Drupal\example\TypedData;

use Drupal\Core\TypedData\ComplexDataDefinitionBase;
use Drupal\Core\TypedData\DataDefinition;

class ColorDefinition extends ComplexDataDefinitionBase {

  /**
   * {@inheritdoc}
   */
  public function getPropertyDefinitions() {

    if (!isset($this->propertyDefinitions)) {
      $this->propertyDefinitions['Red'] = DataDefinition::create('integer')
        ->setLabel('Red')
        ->addConstraint('Range', ['min' => 0, 'max' => 255])
        ->setRequired(TRUE);
      $this->propertyDefinitions['Green'] = DataDefinition::create('integer')
        ->setLabel('Green')
        ->addConstraint('Range', ['min' => 0, 'max' => 255])
        ->setRequired(TRUE);
      $this->propertyDefinitions['Blue'] = DataDefinition::create('integer')
        ->setLabel('Blue')
        ->addConstraint('Range', ['min' => 0, 'max' => 255])
        ->setRequired(TRUE);
    }
    return $this->propertyDefinitions;
  }

}

```