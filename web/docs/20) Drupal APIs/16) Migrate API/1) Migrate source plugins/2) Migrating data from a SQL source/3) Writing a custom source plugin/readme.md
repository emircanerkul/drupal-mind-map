The heart and soul of this example is the custom source plugin shown below.

* The source plugin, Games.php in this example, must be saved in `src/Plugin/migrate/source` subdirectory of your custom module.
* Pay attention to the namespace. In this example the custom module is called ''mymodule' so the namespace is `Drupal\mymodule\Plugin\migrate\source`.
* Our migrate source plugin class extends the abstract [SqlBase](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21source%21SqlBase.php/class/SqlBase) class provided by the core Migrate module.
* The source plugin has @MigrateSource annotation with id 'games'. This ID will be used in the actual migration definition below.

The SQL source plugin must implement three methods:

* `query()`: Returns the query that selects the data from the source database.
* `fields()`: Returns available fields on the source.
* `getIds()`: Defines the source fields uniquely identifying a source row.

Our example plugin also implements `prepareRow()` to demonstrate how source properties can be added in the source plugin. Refer to [SqlBase](https://api.drupal.org/api/drupal/core%21modules%21migrate%21src%21Plugin%21migrate%21source%21SqlBase.php/class/SqlBase) API documentation for further details of the methods.

```php
<?php

namespace Drupal\mymodule\Plugin\migrate\source;

use Drupal\migrate\Annotation\MigrateSource;
use Drupal\migrate\Plugin\migrate\source\SqlBase;
use Drupal\migrate\Row;

/**
 * Minimalistic example for a SqlBase source plugin.
 *
 * @MigrateSource(
 *   id = "games",
 *   source_module = "mymodule",
 * )
 */
class Games extends SqlBase {

  /**
   * {@inheritdoc}
   */
  public function query() {
    // Source data is queried from 'curling_games' table.
    $query = $this->select('curling_games', 'g')
      ->fields('g', [
          'game_id',
          'title',
          'date',
          'time',
          'place',
        ]);
    return $query;
  }

  /**
   * {@inheritdoc}
   */
  public function fields() {
    $fields = [
      'game_id' => $this->t('game_id' ),
      'title'   => $this->t('title' ),
      'date'    => $this->t('date'),
      'time'    => $this->t('time'),
      'place'   => $this->t('place' ),
    ];
    return $fields;
  }

  /**
   * {@inheritdoc}
   */
  public function getIds() {
    return [
      'game_id' => [
        'type' => 'integer',
        'alias' => 'g',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function prepareRow(Row $row) {
    // This example shows how source properties can be added in
    // prepareRow(). The source dates are stored as 2017-12-17
    // and times as 16:00. Drupal 8 saves date and time fields
    // in ISO8601 format 2017-01-15T16:00:00 on UTC.
    // We concatenate source date and time and add the seconds.
    // The same result could also be achieved using the 'concat'
    // and 'format_date' process plugins in the migration
    // definition.
    $date = $row->getSourceProperty('date');
    $time = $row->getSourceProperty('time');
    $datetime = $date . 'T' . $time . ':00';
    $row->setSourceProperty('datetime', $datetime);
    return parent::prepareRow($row);
  }
}

```