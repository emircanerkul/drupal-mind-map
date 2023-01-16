Entity types in core come in two variants.

Configuration Entity

Used by the [Configuration System](https://www.drupal.org/developing/api/8/configuration). Supports translations and can provide custom defaults for installations. Configuration entities are stored within the common `config` database table as rows.

Content Entity

Consist of configurable and base fields, and can have revisions and support translations. Content entities are stored within a custom database table as rows. The table name is the same as the content entity "id", and the columns are defined by the entity's "baseFieldDefinitions" method.

### Bundles

Bundles are different variants of an entity type. For example, with the node entity type, the bundles are the different node types, such as 'article' and 'page'.

Typically, a bundle is represented by a Configuration Entity, though other models exist in contrib modules. So in the node example, the 'article' node type is itself a configuration entity. The configuration stores the differences between the content entity types, such as settings and fields. When creating a new entity type that has bundle entities, you will create both a Content Entity that will manage the content's details and operations, and a Configuration Entity that will handle the differences between the content entity types.