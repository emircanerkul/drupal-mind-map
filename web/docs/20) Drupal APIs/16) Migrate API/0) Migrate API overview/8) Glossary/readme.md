**Migration as configuration:** Migrations written in YAML format that require the contributed [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus) module to work. They are placed in a location where the [Configuration Management system](https://www.drupal.org/docs/configuration-management) can detect new configuration. This can be your site's `/config/sync` directory or a module's `/config/install` directory. The file naming convention is `migrate_plus.migration.[migration_id].yml` Adding, removing, or changing these files require syncing the configuration to Drupal's active storage. This can be done using `drush config:import` if modifying the files directly on your site's `/config/sync` directory. If the files are placed in a custom module, you can execute `drush config:import --partial --source=modules/custom/my_module/config/install/` for the changes to be detected.

**Migration as plugins:** Migrations written in YAML format that work with Drupal core's Migrate module. They are placed in a `/migrations` directory and follow the following naming convention `[migration_id].yml` Adding, removing, or changing these files require rebuilding Drupal's plugin cache. This can be done using `drush cache:rebuild`

**Migration runner:** Once the migration YAML files have been created, there are many options to execute them. Migrations as plugins can be executed from the command line with the [Drush](https://www.drush.org/) commands provided by the [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) module. Migrations as configuration can be also be executed from the command line or from the user interface provided by the Migrate Tools module at `/admin/structure/migrate`. Other migrations runners include [Migrate Upgrade](https://www.drupal.org/project/migrate%5Fupgrade), [Migrate Manifest](https://www.drupal.org/project/migrate%5Fmanifest), [Migrate Scheduler](https://www.drupal.org/project/migrate%5Fscheduler), [Migrate Cron](https://www.drupal.org/project/migrate%5Fcron), and [Migrate source UI](https://www.drupal.org/project/migrate%5Fsource%5Fui).

**Process pipeline**: A sequence of process plugins to apply multiple transformations to a source value. They act like [Unix pipelines](https://en.wikipedia.org/wiki/Pipeline%5F%28Unix%29) in that the output of one process plugin becomes the input of the next one in the pipeline. The return value of the last plugin is assigned to the field mapping. Read [this article](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/migrate-process-overview#full%5Fpipeline) and see example below for information.

**Pseudofield**: Placeholders values to use later in the process pipeline. They are defined in the in the `process` section. The name can be arbitrary as long as it is ignored by the destination plugin. If you are doing content migrations, using or extending the `EntityContentBase` plugin, the name should not conflict with a property or field name attached to the target entity. For example, a node migration into Drupal's Article content type, that uses the `entity:node` plugin, cannot have a pesudofield named `title` (entity property) or `field_tags` (field name). To use the value, you refer to it with `'@name'`. To set the value of the pseudofield, it is possible to use any process pipeline. See example below.

**Source constants**: Placeholders values to use later in the process pipeline. They are defined in the in the `source` section under a `constants` key (by convention). The constants themselves are defined in `name: value` format. To use the value, you refer to it with `constants/name`. Read [this article](https://www.drupal.org/docs/8/api/migrate-api/migrate-process/constant-values) and see example below for information.

**Subfield**: A field might store complex data. This data is stored in multiple subfields. For example, a rich text field has one to store the text value and another for the text format. To set the value of the subfield you follow this pattern: `[field_name]/[subfield_name]: [source_value]`. See example below.

The example below defines two _source constants_: `title_suffix` and `text_format`. It also defines a _pseudofield_ named `pseudo_title` which uses a _process pipeline_ consisting of two transformations by the `callback` plugin. Note, only the first process in the pipeline requires a `source` configuration. The _psuedofield_ is later used when setting the `title` property for the node. There are mappings for two _subfields_ of the body field: `value` and `format`.

```yaml
id: example_migration
label: 'Example migration'
source:
  constants:
    title_suffix: ' (example)'
    text_format: plain_text
  plugin: embedded_data
  data_rows:
    - unique_id: 1
      src_title: 'DRUPAL MIGRATIONS'
      src_content: 'Example content'
    - unique_id: 2
      src_title: 'DRUPAL UPGRADES'
      src_content: 'Example content'
  ids:
    unique_id:
      type: integer
process:
  pseudo_title:
    - plugin: callback
      source: src_title
      callable: mb_strtolower
    - plugin: callback
      callable: ucwords
  title:
    plugin: concat
    source:
      - '@pseudo_title'
      - constants/title_suffix
  body/value: src_content
  body/format: constants/text_format
destination:
  plugin: 'entity:node'
  default_bundle: page
```