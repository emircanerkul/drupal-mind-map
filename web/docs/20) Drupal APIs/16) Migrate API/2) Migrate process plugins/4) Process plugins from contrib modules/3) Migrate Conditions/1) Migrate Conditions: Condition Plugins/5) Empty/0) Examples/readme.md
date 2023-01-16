### 1\. Skip on empty with clear array handling

The core skip\_on\_empty process plugin can have trouble with arrays. (See [#3254356: \[meta\] skip\_on\_empty problems with arrays](https://www.drupal.org/project/drupal/issues/3254356 "Status: Closed (works as designed)")). But unlike skip\_on\_empty, the skip\_on\_condition process plugin "handles multiples", which allows us to solve problems more exactly.

 Skip the row when the source is an empty array.

```php
process:
  skip_on_empty_array:
    plugin: skip_on_condition
    condition: empty
    source: my_source_array
    method: row
    message: 'The source array was empty'
```

Or we can skip if any value in the source array is empty.

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

###  2\. Negate a boolean

That is, change TRUE to FALSE and FALSE to TRUE. This can be done with a static map, but my goodness is the following clearer.

```php
process:
  field_boolean:
    plugin: evaluate_condition
    condition: not:empty
    source: my_source_boolean_with_the_wrong_sign

```