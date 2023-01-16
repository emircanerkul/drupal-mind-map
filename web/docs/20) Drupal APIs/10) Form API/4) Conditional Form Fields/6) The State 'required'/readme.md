The state `'required'` is a special case. You can't use `'required'` with the field containers, instead you'll have to target the actual input field. Thanks to @[tresti88](https://www.drupal.org/u/tresti88) for his examples in the comments.

Example code by @[tresti88](https://www.drupal.org/u/tresti88). from the [comments for the API docs](https://api.drupal.org/comment/62866#comment-62866).

```php
// From https://api.drupal.org/comment/62866#comment-62866 .

      $form['my_select_list'] = [
        '#type' => 'select',
        '#options' => [
          'user' => t('User'),
          'group' => t('Group'),
        ],
      ];

      $form['auto_complete_field_0']['#states'] = [
        'visible' => [
          [':input[name="my_select_list"]' => ['value' => 'user']],
        ],
      ];

      $form['auto_complete_field_0']['widget']['0']['target_id']['#states'] = [
        'required' => [
          [':input[name="my_select_list"]' => ['value' => 'user']],
        ],
      ];

      $form['auto_complete_field_1']['#states'] = [
        'visible' => [
          [':input[name="my_select_list"]' => ['value' => 'group']],
        ],
      ];

      $form['auto_complete_field_1']['widget']['0']['target_id']['#states'] = [
        'required' => [
          [':input[name="my_select_list"]' => ['value' => 'group']],
        ],
      ];
```