Revisions are referenced by the revision ID, so every revision of a single content has a revision ID.

Add the `revision_id` key on the entity's keys block:

Example:

```php
File: <code>foo_module/src/Entity/Foo.php

...

 *   entity_keys = {
 *     "id" = "id",
 *     "revision" = "revision_id",
 *     "label" = "name",
 *     "uuid" = "uuid",
 *     "uid" = "user_id",
 *     "status" = "status",
 *   },

...

```

Note: The revision ID field will be automatically created by the parent class `ContentEntityBase` or `RevisionableContentEntityBase` if it is a content entity for example.