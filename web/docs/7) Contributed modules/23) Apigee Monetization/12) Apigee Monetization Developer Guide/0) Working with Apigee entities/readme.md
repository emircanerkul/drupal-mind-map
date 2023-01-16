Apigee Monetization adds Drupal entities for each of the corresponding needed entities in the [Apigee monetization APIs](https://apidocs.apigee.com/api-reference/content/monetization-apis "Apigee management APIs").

If you want to create a custom module that interacts with these entities, follow [Drupal.org’s documentation on how to use the Entity API](https://www.drupal.org/docs/8/api/entity-api/working-with-the-entity-api).

Another good way to get started is to download the [Examples module](https://www.drupal.org/project/examples), which has examples on Drupal best practices on using Drupal APIs:

`composer require drupal/examples --optimize-autoloader`

The `AjaxExample` module shows an example of loading an entity using the `EntityTypeManager` service via injection, which is the preferred approach:

1. Add an [EntityType attribute to your class](https://git.drupalcode.org/project/examples/blob/8.x-1.0/ajax%5Fexample/src/Form/EntityAutocomplete.php#L30)
2. Add a [class constructor that takes the EntityTypeManager as a parameter](https://git.drupalcode.org/project/examples/blob/8.x-1.0/ajax%5Fexample/src/Form/EntityAutocomplete.php#L56)
3. Add a [static create function that creates the object, passing the entityTypeManager service](https://git.drupalcode.org/project/examples/blob/8.x-1.0/ajax%5Fexample/src/Form/EntityAutocomplete.php#L41)