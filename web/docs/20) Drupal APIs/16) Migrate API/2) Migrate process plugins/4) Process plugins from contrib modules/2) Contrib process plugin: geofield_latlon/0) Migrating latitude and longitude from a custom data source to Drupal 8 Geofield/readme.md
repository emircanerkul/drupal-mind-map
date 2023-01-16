The `geofield_latlon` plugin can transform latitude and longitude from custom data sources to Drupal 8 Geofield values.

Example migration\_plus manifest:

```php
  Drupal 8 Target field : field_drupal8_geofield
  Custom sources of data :
    lat
    lon

```

```php
 field_drupal8_geofield:
    plugin: geofield_latlon
    source:
      - lat
      - lon

```