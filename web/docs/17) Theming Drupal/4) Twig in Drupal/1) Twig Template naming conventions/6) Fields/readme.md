Pattern: _field--\[\[type|name\]|\[entity-type\]--\[field-name|content-type\]\].html.twig_  
Base template: _field.html.twig_ (base location: core/modules/system/templates/field.html.twig)

Theme hook suggestions are made based on these factors, listed from the most specific template to the least. Drupal will use the most specific template it finds:

1. field--node--\[_field-name_\]--\[_content-type_\].html.twig
2. field--node--\[_field-name_\].html.twig
3. field--node--\[_content-type_\].html.twig
4. field--\[_field-name_\].html.twig
5. field--\[_field-type_\].html.twig
6. field.html.twig

Note that underscores (\_) in a Field's machine name are replaced by hyphens (-). Also remember to include "field-" in custom field names, e.g: field--field-phone.html.twig.

See the [field.html.twig API documentation](https://api.drupal.org/api/drupal/core!modules!system!templates!field.html.twig/8).