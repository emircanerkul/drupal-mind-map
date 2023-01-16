---
url: >-
  https://www.drupal.org/docs/8/core/modules/datetime-range/how-to-use-datetime-range-in-a-custom-entity
description: >-
  First, install the core Datetime Range module. It is a core module that ships
  with Drupal, but you may need to install it.
published_time: '2016-08-26T03:04:53+00:00'
modified_time: '2021-06-12T21:02:46+00:00'
---
First, install the core Datetime Range module. It is a core module that ships with Drupal, but you may need to install it. Then, in your[ baseFieldDefinitions](https://www.drupal.org/docs/8/api/entity-api/defining-and-using-content-entity-field-definitions) in a custom entity, you can use **daterange**:

```php
$fields['date'] = BaseFieldDefinition::create('daterange')
  ->setLabel(t('Date and time'))
  ->setDescription(t('When'))
  ->setRequired(true)
  ->setDisplayOptions('view', array(
    'label' => 'above',
    'type' => 'string',
    'weight' => -4,
  ))
  ->setDisplayOptions('form', array(
    'type' => 'daterange_default',
    'weight' => -4,
  ))
  ->setDisplayConfigurable('form', TRUE)
  ->setDisplayConfigurable('view', TRUE)
// This is not right:
  ->setDefaultValue(DrupalDateTime::createFromTimestamp(time()));
```

TODO: Add a more comprehensive example showing all options/methods that can be used.

With **daterange** you can also create only **date** field as well without having the **time** associated with it by setting the `datetime_type.`

```php
$fields['start_and_end_date'] = BaseFieldDefinition::create('daterange')
  ->setLabel(t('Donation Start and End Date'))
  ->setDescription(t('The Donation start and end date.'))
  ->setDefaultValue(DrupalDateTime::createFromTimestamp(time()))
  ->setSettings([
    'datetime_type' => 'date',
    // 'date source' => 'value',
  ])
  ->setDisplayOptions('view', [
    'label' => 'above',
    'type' => 'string',
    'weight' => -4,
  ])
  ->setDisplayOptions('form', [
    'type' => 'daterange_default',
    'weight' => -4,
  ])
  ->setDisplayConfigurable('form', TRUE)
  ->setDisplayConfigurable('view', TRUE)
  ->setRequired(FALSE);
```

How to properly set the default value?

// TODO: This is a node example, explore other entity types and field configurations.

```php
...

use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;

...

// Create a content with a datetime range.
$startDate = 1545033600;
$endDate = 1545064200;

$createArray = [
      'type' => 'custom_type',
      'date' => [
        'value' => gmdate(DateTimeItemInterface::DATETIME_STORAGE_FORMAT, $startDate),
        'end_value' => gmdate(DateTimeItemInterface::DATETIME_STORAGE_FORMAT, $endDate),
      ],
    ];

$storage = $this->entityTypeManager->getStorage('node');
$entity = $storage->create($createArray);
$entity->save();

...
```