NOTE: this section of documentation needs review!

Migrate Source JCR supports multilingual migrations because Migrate API supports them. The process for writing such a migration should look similar. If you need a place to start, a suggestion is this:

1. Write a migration for your default language.
2. Write a migration for each additional language, ensuring the migration is using the same entity ID as the default language migration.

Here's a sketch of what that might look like, assuming the JCR data has a property "jcr:language" containing a valid langcode:

**Default language migration**

```yaml
id: blog_en
source:
  query: 'SELECT * FROM [nt:unstructured] AS node WHERE ISDESCENDANTNODE(node, "/migrate_source_jcr_example/blog") AND [sling:resourceType] = "components/structure/page" AND [jcr:language] = "en"'
  keys:
    - title
...
process:
  langcode:
    plugin: default_value
    default_value: 'en'
```

**Spanish translation**

```yaml
id: blog_es
source:
  query: 'SELECT * FROM [nt:unstructured] AS node WHERE ISDESCENDANTNODE(node, "/migrate_source_jcr_example/blog") AND [sling:resourceType] = "components/structure/page" AND [jcr:language] = "es"'
  keys:
    - title
...
process:
  nid:
    plugin: migration_lookup
    source: title
    migration: blog_en
    no_stub: true
  langcode:
    plugin: default_value
    default_value: 'es'
...
migration_dependencies:
  required:
    - blog_en
```

There are plenty of variations to this approach, for example you could turn the Spanish translation migration into a generic migration of any non-default languages by making the langcode a static map instead of a default value.