---
url: >-
  https://www.drupal.org/docs/8/converting-drupal-7-modules-to-drupal-8/d7-to-d8-upgrade-fields-widgets-and-formatters
description: >-
  Why not try the example module explained on this page yourself? Download For
  fields, their widgets and their formatters, hook-implementations in D7 are
  replaced by classes with annotations in D8. For instance, the schema
  definition that used to live in the .install file has moved to the class that
  lives in modulename/src/Plugin/Field/FieldType/ModuleNameItem.php. So often,
  after upgrading your project won't have a .install file anymore. Here's in
  summary what you'll have to add to re-instate the functionality provided by
  your field hook implementations.
published_time: '2013-05-03T03:34:45+00:00'
modified_time: '2016-10-15T22:23:45+00:00'
---
**Why not try the example module explained on this page yourself? [Download](http://flink.com.au/sites/default/files/geostore.gz)**

For fields, their widgets and their formatters, hook-implementations in D7 are replaced by classes with annotations in D8\. For instance, the schema definition that used to live in the _.install_ file has moved to the class that lives in _modulename_/src/Plugin/Field/FieldType/_ModuleName_Item.php. So often, after upgrading your project won't have a _.install_ file anymore.

Here's in summary what you'll have to add to re-instate the functionality provided by your field hook implementations.  
In the **/modules/_modulename_/src/Plugin/Field** folder you need to create the 3 following files, each holding a class and its magic annotations.

* .../FieldType/_ModuleName_Item.php
* .../FieldWidget/_ModuleName_Widget.php
* .../FieldFormatter/_ModuleName_Formatter.php

Below are examples of the files above, plus _.info.yml_ and _.module_ files that when put together form a working example of a module that programmatically creates a text field, widget and formatter. Through the "Manage fields" UI this field may be attached to any entity type. 

For the sake of simplicity, field validation has been omitted.  
The module is called **GeoStore**. This module is a functional example. But it's a toy. For the real geo-stuff seek out [Geofield](http://drupal.org/project/geofield).

file: **/modules/geostore/geostore.info.yml**

```php
name: GeoStore
type: module
description: The GeoStore module defines a simple geostore field type for collecting and saving geospatial objects in the Well-Known Text format (WKT).
version: VERSION
core: 8.x
dependencies:
  - field

```

file: **/modules/geostore/geostore.module**

```php
/**
 * @file
 * The GeoStore module defines a simple geostore field type for collecting and
 * saving geospatial objects in the Well-Known Text format (WKT).
 * Examples of valid WKT strings are:
 *
 * POINT(123 -12.3) // longitude first, then latitude
 * LINESTRING(30 10, 10 30, 40 40)
 * POLYGON((30 10, 10 20, 20 40, 40 40, 30 10))
 *
 * NOTE: this is a toy module. For a proper geospatial module go Geofield.
 * NOTE: even though it contains no code Drupal needs this file. See #340723.
 */

```

file: **/modules/geostore/src/Plugin/field/FieldType/GeoStoreItem.php**

```php
/**
* @file
* Contains \Drupal\geostore\Plugin\Field\FieldType\GeoStoreItem.
*/

namespace Drupal\geostore\Plugin\Field\FieldType;

use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\DataDefinition;
use Drupal\Core\Field\FieldItemBase;

/**
* Plugin implementation of the 'geostore' field type.
*
* @FieldType (
*   id = "geostore",
*   label = @Translation("Geospatial"),
*   description = @Translation("Stores a geospatial object like a point."),
*   default_widget = "geostore_wkt",
*   default_formatter = "geostore_wkt"
* )
*/
class GeoStoreItem extends FieldItemBase  {

  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    $columns = array(
      'value' => array(
        'type' => 'varchar',
        'length' => 256,
        'not null' => FALSE,
      ),
    );
    return array(
      'columns' => $columns,
    );
  }

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(
      FieldStorageDefinitionInterface $field_definition) {
    $properties['value'] = DataDefinition::create('string')
      ->setLabel(t('GeoStore spatial element'))
      ->setDescription(t('Represents the latitude(s) and longitude(s) of the element.'));
    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public function isEmpty() {
    $value = $this->get('value')->getValue();
    return $value === NULL || $value === '';
  }
}

```

file: **/modules/geostore/src/Plugin/Field/FieldWidget/GeoStoreWKTWidget.php**

```php
/**
* @file
* Contains \Drupal\geostore\Plugin\Field\FieldWidget\GeoStoreWKTWidget.
*/

namespace Drupal\geostore\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\WidgetBase;
use Drupal\Core\Form\FormStateInterface;

/**
* Plugin implementation of the 'geostore_wkt' widget.
*
* @FieldWidget (
*   id = "geostore_wkt",
*   label = @Translation("WKT format"),
*   field_types = {
*     "geostore"
*   },
*   settings = {
*     "placeholder" = "Enter a WKT specification, e.g. POINT(140.2 -89)"
*   }
* )
*/
class GeoStoreWKTWidget extends WidgetBase {

  /**
   * {@inheritdoc}
   */
  public function formElement(FieldItemListInterface $items, $delta,
    array $element, array &$form, FormStateInterface $form_state) {
    $element += array(
      '#type' => 'textfield',
      '#default_value' => $items[$delta]->value ?: NULL,
      '#placeholder' => $this->getSetting('placeholder'),
    );
    return array('value' => $element);
  }
}

```

file: **/modules/geostore/src/Plugin/Field/FieldFormatter/GeoStoreWKTFormatter.php**

```php
/**
* @file
* Contains \Drupal\geostore\Plugin\Field\FieldFormatter\GeoStoreWKTFormatter.
*/

namespace Drupal\geostore\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Form\FormStateInterface;

/**
* Plugin implementation of the 'geostore_wkt' formatter.
*
* @FieldFormatter (
*   id = "geostore_wkt",
*   label = @Translation("Geostore WKT format"),
*   field_types = {
*     "geostore"
*   }
* )
*/
class GeoStoreWKTFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    return array();
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = array();
    foreach ($items as $delta => $item) {
      $elements[$delta] = array(
        '#type' => 'markup',
        '#markup' => check_plain($item->value),
      //'#theme' => 'some_theme_function'
      );
    }
    return $elements;
  }
}

```

Don't have superfluous trailing comma's in your annotations -- the effect is calamitous.  
Implement `ConfigFieldItemBase::isEmpty` correctly or you may find that submitted form values don't save!