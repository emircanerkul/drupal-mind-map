Let's say you want to display the custom colour textfield only if the user does **not** select the `'Other'` option. This can be achieved by prefixing the `'value'` with `!`.

```php
    '#states' => [
      // Show this textfield if any radio except 'other' is selected.
      'visible' => [
        ':input[name="field_select_colour"]' => ['!value' => 'other'],
      ],
    ],
```