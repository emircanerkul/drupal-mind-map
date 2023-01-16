---
url: >-
  https://www.drupal.org/docs/drupal-apis/entity-api/dynamicvirtual-field-values-using-computed-field-property-classes
description: >-
  Sometimes it is necessary to have "computed" properties in a field, alongside
  actual values that are stored in the database. A good example of this in
  Drupal core is found in the text field, which stores both the raw text value
  entered by the user, as well as a "processed" version that has been filtered
  through a text format. The benefit of doing this is that the text only needs
  to be filtered (or "computed") once. It can then be saved in the field cache
  for later use. Drupal 7 (The Old Way) In Drupal 7, adding computed properties
  to fields was achieved with hook_field_load().
published_time: '2013-10-15T21:48:41+00:00'
modified_time: '2022-02-25T09:12:11+00:00'
---
Sometimes it is necessary to have "computed" properties in a field, alongside actual values that are stored in the database. A good example of this in Drupal core is found in the text field, which stores both the raw text value entered by the user, as well as a "processed" version that has been filtered through a text format. The benefit of doing this is that the text only needs to be filtered (or "computed") once. It can then be saved in the field cache for later use.