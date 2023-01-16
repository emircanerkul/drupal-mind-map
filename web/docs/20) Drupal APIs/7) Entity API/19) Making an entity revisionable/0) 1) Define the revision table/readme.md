Entity types, both configuration and content entity are defined using [annotation](https://www.drupal.org/node/2207559).  
To define the revision table add `revision_table` information on your entity's annotation:

Example:

```php
File: foo_module/src/Entity/Foo.php

*   revision_table = "foo_revision",

```