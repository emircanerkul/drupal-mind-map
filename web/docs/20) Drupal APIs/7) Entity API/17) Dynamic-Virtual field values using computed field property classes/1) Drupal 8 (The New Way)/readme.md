In Drupal 8, `hook_field_load()` has been removed in favor of computed field properties. In addition to what's described in this documentation, you can read more about the change in <http://drupal.org/node/2064123>.

Depending on your needs, there are three different ways to accomplish incorporating calculated/computed fields into entities:

1. **At field level:** When defining a custom field type.
2. **At entity level:** When altering the fields defined for an entity  
   1. With database storage  
   2. Without database storage

The next few sections describe each of these approaches.

### Approach 1: At Field Level, with a Computed Field Item Property

This approach is best if you're trying to define a new field that you can use again and again in different entity types, or as part of a module that you might want to share with the community.

If you've worked with fields in Drupal before, you may have noticed that they have the following structure:

* Field  
   * Items/Deltas  
         * Properties

For a multi-valued field, you can think of the _items_ of the field as each distinct value you'd see on the form when editing the field. What you may not realize is that even fields that only allow a single value still have a single item/delta, making the structure of the data more consistent under-the-hood.

What's more important for our purposes here is that third level of data -- the _properties_ of the field -- which define what data we're actually working with within each item of the field. It may surprise you to learn that many fields within Drupal core store more than a single value per item. Although most of these properties are backed by values stored in the database, some are computed.

Let's look at the [TextItemBase class](https://api.drupal.org/api/drupal/core!modules!text!src!Plugin!Field!FieldType!TextItemBase.php/8), which provides the base class for text fields. It defines three field properties:

1. _value_ \- (stored in the database) the raw text value.
2. _format_ \- (stored in the database) the input format that should be used to filter the value.
3. _processed_ \- (computed) stores the text after it has been processed/filtered by the text format.

Looking at the `TextItemBase::propertyDefinitions()`method, you'll notice that the "processed" property is defined a little differently than the others:

```php
<?php

  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    $properties['value'] = DataDefinition::create('string')
      ->setLabel(t('Text'))
      ->setRequired(TRUE);

    $properties['format'] = DataDefinition::create('filter_format')
      ->setLabel(t('Text format'));

    $properties['processed'] = DataDefinition::create('string')
      ->setLabel(t('Processed text'))
      ->setDescription(t('The text with the text format applied.'))
      ->setComputed(TRUE)
      ->setClass('\Drupal\text\TextProcessed')
      ->setSetting('text source', 'value');

    return $properties;
  }

?>

```

The highlights of the `processed` property are:

* `setComputed(TRUE)` \- This tells the Field API that this field is computed so that it doesn't look for it in the database.
* `setClass('\Drupal\text\TextProcessed')` \- This defines the class to use for generating the property value. This class should implement [TypedDataInterface](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!TypedData!TypedDataInterface.php/interface/TypedDataInterface/8).
* `->setSetting('text source', 'value')` \- This defines a setting for the field property.

The main purpose of the [TextProcessed class](https://api.drupal.org/api/drupal/core!modules!text!src!TextProcessed.php/8) is to define how the value of the `processed` field property is computed. This is done in the `TextProcessed::getValue()` method (see below). Part of this process involves loading the parent field item and extracting values from it, then using those to generate the computed property value.

```php
/**
 * A computed property for processing text with a format.
 *
 * Required settings (below the definition's 'settings' key) are:
 *  - text source: The text property containing the to be processed text.
 */
class TextProcessed extends TypedData implements CacheableDependencyInterface {

  /**
   * Cached processed text.
   *
   * @var string|null
   */
  protected $processed = NULL;

...

  /**
   * Implements \Drupal\Core\TypedData\TypedDataInterface::getValue().
   */
  public function getValue() {
    if ($this->processed !== NULL) {
      return FilteredMarkup::create($this->processed->getProcessedText());
    }

    $item = $this->getParent();
    $text = $item->{($this->definition->getSetting('text source'))};

    // Avoid doing unnecessary work on empty strings.
    if (!isset($text) || $text === '') {
      $this->processed = new FilterProcessResult('');
    }
    else {
      $build = [
        '#type' => 'processed_text',
        '#text' => $text,
        '#format' => $item->format,
        '#filter_types_to_skip' => [],
        '#langcode' => $item->getLangcode(),
      ];
      // Capture the cacheability metadata associated with the processed text.
      $processed_text = $this->getRenderer()->renderPlain($build);
      $this->processed = FilterProcessResult::createFromRenderArray($build)->setProcessedText((string) $processed_text);
    }
    return FilteredMarkup::create($this->processed->getProcessedText());
  }

...

}

```

The `TextProcessed` class also overrides `TypedData::__construct()` to enforce the necessary setting for it. That is specific to the `TextProcessed` class requirements, and are not necessary for simple computed field implementations.

### Approach 2: At Entity Level, Extending the Fields of an Existing Entity

This approach is best if you just want to supplement what fields are available for an entity, without necessarily making your computed data available for generic use as a traditional field.

For our purposes here, let's look at an example of using [hook\_entity\_base\_field\_info()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Entity%21entity.api.php/function/hook%5Fentity%5Fbase%5Ffield%5Finfo/8.2.x) to define some additional fields on a hypothetical "Profile" (`profile`) entity type:

```php
/**
 * Implements hook_entity_base_field_info().
 */
function mymodule_entity_base_field_info(EntityTypeInterface $entity_type) {
  if ($entity_type->id() === 'profile') {
    $fields = [];

    // Add a field that shows the completeness of the user profile.
    // This is computed whenever the profile changes, and then saved
    // to the database.
    $fields['completeness'] = BaseFieldDefinition::create('float')
      ->setLabel(t('Complete profile'))
      ->setDescription(t('User profile complete percentage, such as 0.40, i.e, 40%'))
      ->setDisplayOptions('view', [
        'label' => 'above',
        'weight' => -5,
      ]);

    // Add a field that shows a link to the user's current company.
    $fields['current_company'] = BaseFieldDefinition::create('current_company_link')
      ->setName('current_company')
      ->setLabel(t('Current company'))
      ->setComputed(TRUE)
      ->setClass('\Drupal\mymodule\CurrentCompanyLinkItemList')
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED) // You only need this if your computed field is multi-value.
      ->setDisplayConfigurable('view', TRUE)
      ->setDisplayOptions('view', [
        'label' => 'hidden',
        'weight' => -5,
      ]);

    return $fields;
  }
}

```

In above example, we are actually adding two different kinds of fields to our Profile entity:

1. The "Complete profile" (`completeness`) field demonstrates approach 2.1 of a field that's calculated and stored in the database. This approach works for values that need to be retrieved often and that don't need to be calculated in real-time. This definition only describes part of what's needed to make Drupal aware of the field; we'll cover what code is necessary to keep the value of this field up-to-date shortly.
2. The "Current company" (`current_company`) field demonstrates approach 2.2, which is the traditional approach one thinks of when thinking of computed fields -- a field that does not store any data in the database, but instead derives or calculates its value from values elsewhere in the entity. We'll cover how to define how this value gets calculated shortly as well.

The choice of whether to use approach 2.1 or 2.2 -- of whether you want to store the calculated field in the database or not -- is up to you. Often, the choice is driven by what performs best. If a calculation is CPU-intensive or involves data from other systems, you may want to consider approach 2.1\. Otherwise, approach 2.2 will give you the most timely information without having to keep track of when the value gets updated.

#### Approach 2.1 - Storing a Calculated Field and Updating it on Entity Save

This section provides the code that was promised earlier for the (`completeness`) field. We need to start with a place for the data to be stored in the database. You would put this code in an `.install` file. Here's the code to update DB table `profile` to have one extra column called `completeness`:

```php
/**
 * Implements hook_install().
 */
function mymodule_install() {
  // Different approaches for this update, see https://www.drupal.org/node/2078241.
  // Create field storage for the 'completeness' base field.
  $entity_manager = \Drupal::entityManager();
  $definition = $entity_manager->getFieldStorageDefinitions('profile')['completeness'];
  $entity_manager->onFieldStorageDefinitionCreate($definition);
}

/**
 * Implements hook_uninstall().
 */
function mymodule_uninstall() {
  $entity_manager = \Drupal::entityManager();
  $definition = $entity_manager->getLastInstalledFieldStorageDefinitions('profile')['completeness'];
  $entity_manager->onFieldStorageDefinitionDelete($definition);
}


```

Now, we need to make sure the field is updated when the entity gets created or updated. Here's the code to calculate the `completeness` field whenever the Profile entity is saved:

```php
/**
 * Implements hook_ENTITY_TYPE_presave().
 */
function mymodule_profile_presave(Drupal\Core\Entity\EntityInterface $entity) {
  if ($entity->bundle() === 'profile') {
    // Add the profile entity's completeness field value.
    $completeness = 0;

    // Check expertise field.
    $field_profile_expertise = $entity->get('field_profile_expertise')->isEmpty();
    if (!$field_profile_expertise) {
      $completeness += 0.2;
    }

    // Other field calculations.

    $entity->set('completeness', $completeness);
  }
}

```

#### Approach 2.2 - Providing a Value that is Calculated in Real-time

This section provides the code that was promised earlier for the "Current company" (`current_company`) field.

First, we'll start with a _field item list_ \-- `\Drupal\mymodule\src\CurrentCompanyLinkItemList`, which controls how each of the items ("deltas") described earlier get instantiated. In earlier versions of Drupal 8, this used to require a fair amount of boilerplate code; but thankfully [#2392845: Add a trait to standardize handling of computed item lists](https://www.drupal.org/project/drupal/issues/2392845 "Status: Closed (fixed)") was resolved and shipped in Drupal 8.4\. This allows us to make use of a new trait called `ComputedItemListTrait`, as follows:

```php
<?php

namespace Drupal\mymodule;

use Drupal\Core\Field\FieldItemList;
use Drupal\Core\TypedData\ComputedItemListTrait;

/**
 * Item list for a computed field that displays the current company.
 *
 * @see \Drupal\mymodule\Plugin\Field\FieldType\CurrentCompanyLinkItem
 */
class CurrentCompanyLinkItemList extends FieldItemList {

  use ComputedItemListTrait;

  /**
   * {@inheritdoc}
   */
  protected function computeValue() {
    $this->ensurePopulated();
  }

  /**
   * Computes the calculated values for this item list.
   *
   * In this example, there is only a single item/delta for this field.
   *
   * The ComputedItemListTrait only calls this once on the same instance; from 
   * then on, the value is automatically cached in $this->items, for use by
   * methods like getValue().
   */
  protected function ensurePopulated() {
    if (!isset($this->list[0])) {
      $this->list[0] = $this->createItem(0);
    }
  }

}

```

This small amount of code ensures that our new calculated field is a single-delta field. Now, let's actually implement the code for calculating the vault that is exposed in that delta.

The code that follows implements an example class, `\Drupal\mymodule\src\Plugin\Field\FieldType\CurrentCompanyLinkItem` which displays a link to the page of the "current company" associated with the entity that contains the field. This is not stored in the database but dynamically generated from other available data on the entity.

```php
<?php

namespace Drupal\mymodule\Plugin\Field\FieldType;

use Drupal\link\Plugin\Field\FieldType\LinkItem;

/**
 * Variant of the 'link' field that links to the current company.
 *
 * @FieldType(
 *   id = "current_company_link",
 *   label = @Translation("Current company"),
 *   description = @Translation("A link to the current company that is associated with the entity."),
 *   default_widget = "link_default",
 *   default_formatter = "link",
 *   constraints = {"LinkType" = {}, "LinkAccess" = {}, "LinkExternalProtocols" = {}, "LinkNotExistingInternal" = {}}
 * )
 */
class CurrentCompanyLinkItem extends LinkItem {

  /**
   * Whether or not the value has been calculated.
   *
   * @var bool
   */
  protected $isCalculated = FALSE;

  /**
   * {@inheritdoc}
   */
  public function __get($name) {
    $this->ensureCalculated();
    return parent::__get($name);
  }
  /**
   * {@inheritdoc}
   */
  public function isEmpty() {
    $this->ensureCalculated();
    return parent::isEmpty();
  }

  /**
   * {@inheritdoc}
   */
  public function getValue() {
    $this->ensureCalculated();
    return parent::getValue();
  }

  /**
   * Calculates the value of the field and sets it.
   */
  protected function ensureCalculated() {
    if (!$this->isCalculated) {
      $entity = $this->getEntity();
      if (!$entity->isNew()) {
        // Some custom code that retrieves the current company.
        $company = mymodule_get_company($this->getEntity());
        $value = [
          'uri' => $company->toUrl()->toUriString(),
          'title' => t('Current company'),
        ];
        $this->setValue($value);
      }
      $this->isCalculated = TRUE;
    }
  }

}
```

Since we are reusing the standard Link field we also need to add our custom computed field to the list of field formatters:

```php
/**
 * Implements hook_field_formatter_info_alter().
 */
function mymodule_field_formatter_info_alter(array &$info) {
  $info['link']['field_types'][] = 'current_company_link';
}

/**
 * Implements hook_field_widget_info_alter().
 */
function mymodule_field_widget_info_alter(array &$info) {
  $info['link_default']['field_types'][] = 'current_company_link';
}

```

ps: don't forget to implement _mymodule\_get\_company()_ to return the value.

You may get these virtual field values as usual. For example:

```php
$profile = entity_load('profile', 23);
$company = $profile->get('current_company')->getvalue();
$completeness = $profile->get('completeness')->getvalue();

```

### Views Integration

From Drupal 8.4, Views supports both [computed fields](https://www.drupal.org/node/2904410) and computed field properties.

Here is an example for views integration of the computed property.

Firstly, add this property to profile base table in views:

```php
/**
 * Implements hook_views_data_alter().
 */
function mymodule_views_data_alter(array &$data) {
  if (isset($data['profile'])) {
    // Add the current company computed field to Views.
    $data['profile']['current_company'] = [
      'title' => t('Current company'),
      'field' => [
        'id' => 'mymodule_view_current_company',
      ],
    ];
  }
}

```

Here is the Views ID plugin. It is important that the namespace follows the Views convention. Also, please note that a property value is accessed within the view via `$row->_entity->{field_name}->{property_name}`, since it's a property attached to the field and not a field itself.

```php
namespace Drupal\mymodule\Plugin\views\field;

use Drupal\views\ResultRow;
use Drupal\views\Plugin\views\field\FieldPluginBase;

/**
 * A handler to provide proper displays for profile current company.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("mymodule_view_current_company")
 */
class MyModuleViewCurrentCompany extends FieldPluginBase {

  /**
   * {@inheritdoc}
   */
  public function render(ResultRow $values) {
    $relationship_entities = $values->_relationship_entities;
    $company = '';
    // First check the referenced entity.
    if (isset($relationship_entities['profile'])) {
      $profile = $relationship_entities['profile'];
    }
    else {
      $profile = $values->_entity;
    }

    $type = get_class($profile);
    if ($type === 'Drupal\profile\Entity\Profile') {
      $company = $profile->get('current_company')->getvalue();
    }

    return $company;
  }

  /**
   * {@inheritdoc}
   */
  public function query() {
    // This function exists to override parent query function.
    // Do nothing.
  }
}

```

Two things:

1. Function query() overrides parent query function so the SQL query won't include this computed field 'current\_company'. This field doesn't exist in the database at all. The SQL query will definitely give fatal errors if this field exists in SQL.
2. Function render() considers two scenarios. This view field is rendered by profile relationship, and this field is rendered by profile base table. To the end, return whatever value this computed field should have.

#### Configuration Schema

When adding a new views field plugin, you must also take care of declaring the schema that describes the configuration supported by instances of the plugin. For the plugin shown above, a very minimal schema definition should do (saved as mymodule/config/schema/mymodule.schema.yml):

```yaml
views.field.mymodule_view_current_company:
  type: views_field
  label: 'The current company'
```

If adding custom configuration options to the plugin (via ::buildOptionsForm()), each custom configuration value must be declared in the schema; for more details, see:

* [Configuration schema/metadata - Dynamic type references](https://www.drupal.org/docs/drupal-apis/configuration-api/configuration-schemametadata#dynamic-types).
* [Configuration schema/metadata - Properties](https://www.drupal.org/docs/drupal-apis/configuration-api/configuration-schemametadata#properties).