For custom form file upload element we are not showing placeholder text 'Choose file...'. If you want to show it you need to define \`custom\_file\_label\` variable for input--file.html.twig template. Example of a custom theme called design:

```php
/**
 * Implements hook_preprocess_input() for input file type.
 */
function design_preprocess_input__file(&$variables) {
  $variables['custom_forms'] = bs_bootstrap_get_setting('custom_forms');
  if ($variables['custom_forms']) {
    $variables['custom_file_label'] = t('Choose file...');
  }
}
```

We deliberately decided not to render 'Choose file...' text by default. Drupal upload file element already has the main label for upload filed and showing one more label is duplication of labels for the same field. Additionally 'Choose file...' and button 'Browse' labels means the same thing. If you do not agree with this decision or you are not rendering the main label then just define \`custom\_file\_label\` variable like in previous code example.