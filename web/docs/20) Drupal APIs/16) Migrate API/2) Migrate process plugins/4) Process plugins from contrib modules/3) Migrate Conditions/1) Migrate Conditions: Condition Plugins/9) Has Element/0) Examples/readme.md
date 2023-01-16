### 1\. Skip if any value in the source array is empty.

```php
process:
  skip_if_any_array_element_is_empty:
    plugin: skip_on_condition
    condition:
      plugin: has_element
      condition: empty
    source: my_source_array
    method: row
    message: 'At least one element of the array was empty'
```

###  2\. Set a boolean if at least one source date is in the future

```php
process:
  has_future_dates:
    plugin: evaluate_condition
    source: my_source_date_array
    condition:
      plugin: has_element
      condition:
        plugin: not:older_than
        format: 'U' #whatever my source date format is
        value: 'now'
```

### 3\. Determine if an image is missing alt text

Please note that this is intended as an example of setting the index configuration and may not exactly match the structure of all image data.

```php
process:
  is_missing_alt_text:
    plugin: evaluate_condition
    source: my_image_field
    condition:
      plugin: has_element
      index: 'alt'
      condition: empty
```