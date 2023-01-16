Annotations are read and parsed at runtime by an annotation engine. Drupal 8 uses the Doctrine annotation parser, which turns it into an object that PHP can use.

**Syntax** \- The annotation syntax is surrounded with `@ClassName()`, is predominantly made up of key/value pairs, and can contain arrays that use curly braces. Top level keys must not be surrounded with quotation marks, while array keys must. Each key/value pair should be on their own line, and that line should end with a comma. Certain functions can be executed on values, notably the `@Translation()`function.

Non-working example of annotation syntax:

```php
/**
 * @ContentEntityType(
 *   id = "my_entity_type_id",
 *   label = @Translation("My entity type label"),
 *   example_pair = "this_examples_value",
 *   example_array = {
 *     "array_key" = "array_value",
 *     "some_other_key" = "some_other_value",
 *   },
 * )
 */
```

### Common top level annotations

| Key = "Example Value",                                    | Description                                                                                                                                                 | Entity Variant   |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| id \= "node",                                             | The machine name for the entity type.                                                                                                                       | Content & Config |
| label \= @Translation("Node"),                            | The human-readable name for the entity type.                                                                                                                | Content & Config |
| admin\_permission \= "administer nodes",                  | Permission that allows administrative access to configure and manage the entity type. This is necessary if your entity does not define an "access" handler. | Content & Config |
| bundle\_label \= @Translation("Content type"),            | The optional human-readable name for the bundle entity type.                                                                                                | Content          |
| bundle\_entity\_type \= "node\_type",                     | When creating a Content Entity that has bundles, this value should be the "id" of the Content Entity. In this case, "node\_type" is a Content Entity.       | Content          |
| base\_table \= "node",                                    | Database table name for the entity type.                                                                                                                    | Content          |
| field\_ui\_base\_route \= "entity.node\_type.edit\_form", | The name of the route the Field UI is attached to on a fieldable entity.                                                                                    | Content          |

### Handlers

Handlers are defined in the entity annotation as an array. They support the entity by mapping certain parts of its execution to other PHP classes. Those classes will "handle" the assigned parts of the entity's execution.

**Storage** \- handles the loading, saving and deleting of the entity. By default, Content Entities use `Drupal\Core\Entity\Sql\SqlContentEntityStorage` while Config Entities use `Drupal\Core\Config\Entity\ConfigEntityStorage`. You can define a storage handler to extend the default storage methods of your entity. You may want to do this to provide additional methods for gathering entity revision ids, or determining the number of translations an entity has.  
Example: `"storage" = "Drupal\node\NodeStorage", `

**Form** \- In any entity's handlers annotation there are multiple form handlers that map the entity's add, edit, and delete forms to other PHP classes.   
Example: 

```php
"form" = {
  "add" = "Drupal\block\BlockForm",
  "edit" = "Drupal\block\BlockForm",
  "delete" = "Drupal\block\Form\BlockDeleteForm",
​​​​​​​}
```

Alternatively, you can define a "default" form to handle both the "add" and "edit" form instead of defining them separately. Worth noting is that the "delete" form will almost always be handled by a separate class from the other forms. This is because the delete form is generally a "confirmation form" that simply asks if the user is sure they want to delete the entity.

**View builder** \- This handler provides a class that will handle the output of the entity when viewed by the end user. For example, when visiting a node on a Drupal 8 site, entity's output is handled by the NodeViewBuilder class.  
Example: `"view_builder" = "Drupal\node\NodeViewBuilder",`

**List builder** \- The list builder class will handle the list of entities for administrative purposes. This class will define the contents of the headers, rows, and operations when visiting the entities management page for the entity. For example, when visiting the /admin/content URI of your Drupal site, the table contents are provided by the Node entity's list builder class.  
Example: `"list_builder" = "Drupal\node\NodeListBuilder",`

**Route provider** \- An optional handler that, if implemented, generates routes for your entity management. Implementing this handler can replace the need for entity routes defined in the routing.yml file of your module. Note, the route\_provider works in conjunction with the Links defined on your entity (see example below Links section). The route\_provider annotation is an array.  
Example: 

```php
"route_provider" = {
  "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider",
}
```

**Access** \- The access handler can be used to dynamically check permissions for your entity. It is a mapping to a class that implements the `EntityAccessControlHandlerInterface`. Core provides an implementation of this interface as `EntityAccessControlHandler`, but for reliable control over your entity you will want to extend that class with your own.  
Example: `"access" = "NodeAccessControlHandler",`

**Views data** \- The views\_data handler allows an entity to extend the Views module with custom data provided by your entity. This can be for adding your entity's baseFieldDefinitions as Views fields, joining tables on entity relationships, or other Views related data alterations.  
​​​​​​​Example: `"views_data" = "Drupal\node\NodeViewsData",`

**Storage schema** \- The storage\_schema handler can be implemented to further alter the entity's database storage settings. For instance, adding additional table indexes.  
Example: `"storage_schema" = "Drupal\node\NodeStorageSchema",` 

**Translation** \- The translation handler can be used to alter the way in which your entity forms interact with translations.  
Example: `"translation" = "Drupal\node\NodeTranslationHandler",` 

#### Full handlers example:

Drupal core provides handlers that you can use out of the box, but in many cases you'll want to extend these classes with your own for greater control and customization of your entity. This example shows a more-complete handlers annotation, using the core classes you can extend.

```php
handlers = {
  "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
  "list_builder" = "Drupal\Core\Entity\EntityListBuilder",
  "access" = "Drupal\Core\Entity\EntityAccessControlHandler",
  "views_data" = "Drupal\views\EntityViewsData",
  "storage" = "Drupal\Core\Entity\Sql\SqlContentEntityStorage",
  "storage_schema" = "Drupal\Core\Entity\Sql\SqlContentEntityStorageSchema",
  "translation" = "Drupal\content_translation\ContentTranslationHandler",
  "form" = {
    "default" = "Drupal\Core\Entity\ContentEntityForm",
    "add" = "Drupal\Core\Entity\ContentEntityForm",
    "edit" = "Drupal\Core\Entity\ContentEntityForm",
    "delete" = "Drupal\Core\Entity\ContentEntityDeleteForm",
  },
  "route_provider" = {
    "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider",
  },
},
```

### Links

Links are defined in the entity annotation with the array syntax. Links have a specific set of keys whose value are URIs where the entity type or single entities of that type can be managed. Both Content and Configuration Entities can have these links defined.

Example:

```php
id = "node",
handlers = {
  "route_provider" = {
    "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider"
  }
},
links = {
  "canonical" = "/node/{node}",
  "add-page" = "/node/add",
  "add-form" = "/node/add/{node_type}",
  "edit-form" = "/node/{node}/edit",
  "delete-form" = "/node/{node}/delete",
  "collection" = "/admin/content",
},
```

Note, this is not taken verbatim from the Node module, it is only an example.

Creating these links does not automatically create the routes for those URIs. To make these links accessible, your module will need to implement its own routing.yml file, or use a "route\_provider" handler in the entity annotation.

### Links & Route Provider

The above links working together with a "route\_provider" will make the following named routes available to Drupal.  

| Links Key   | Route Name               | Route Example URI | Description                       |
| ----------- | ------------------------ | ----------------- | --------------------------------- |
| canonical   | entity.node.canonical    | /node/1           | View a specific node              |
| add-page    | entity.node.add\_page    | /node/add         | Select bundle of node to be added |
| add-form    | entity.node.add\_form    | /node/add/article | Add a node (of a specific bundle) |
| edit-form   | entity.node.edit\_form   | /node/1/edit      | Edit form for a specific node     |
| delete-form | entity.node.delete\_form | /node/1/delete    | Delete form for a specific node   |
| collection  | entity.node.collection   | /admin/content    | View all nodes as a list          |

#### Using Links

These links can be accessed with an entity's toUrl() method:

```php
$view_url_object = $entity->toUrl();  // Default is 'canonical'
$edit_url_string = $entity->toUrl('edit-form')->toString();
```