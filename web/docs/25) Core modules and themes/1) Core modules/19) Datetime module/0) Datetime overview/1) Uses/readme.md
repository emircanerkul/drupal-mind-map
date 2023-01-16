### Managing and displaying date fields

The settings and the display of the Date field can be configured separately. See the [Field UI module documentation](https://www.drupal.org/docs/8/core/modules/field-ui/overview) for more information on how to manage fields and their display.

### Displaying dates

Dates can be displayed using either the Plain or Default formatter. The Plain formatter displays the date in the ISO 8601 format. If you choose the Default formatter, you can choose a format from a predefined list that can be managed on the Date and time formats page.

Adjust datetime formats at Manage > Configuration > Regional and language > Date and time formats (path: admin/config/regional/date-time).

For more information, see [Working With Content Types and Fields](https://drupal.org/documentation/modules/field-ui). For a list of the functions and their descriptions see the  
[API documentation.](http://api.drupal.org/api/drupal/core!modules!datetime!datetime.module/8)

#### Formatting dates programmatically

The Datetime module provides a DateFormatter service that can be used to format timestamps.

```php
use Drupal\Core\Datetime\DrupalDateTime;

/** @var Drupal\Core\Datetime\DateFormatterInterface $date_formatter */
$date_formatter = \Drupal::service('date.formatter');

// Get saved timestamp from a DateTimeFieldItemList field.
$date_value = $node->field_date->value;
$date_time = new DrupalDateTime($date_value, new \DateTimeZone('UTC'));
$timestamp = $date_time->getTimestamp();

// All other arguments are optional:
// See DateFormatterInterface for built-in options, or use machine name of a date format in config.
$type = 'medium';
// Custom PHP date format if $type="custom".
$format = '';
// > Drupal 8.8
// See https://www.drupal.org/node/3009387
$timezone = NULL;
$langcode = NULL;

$formatted = $date_formatter->format($timestamp, $type, $format, $timezone, $langcode);
```