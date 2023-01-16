Module and theme authors can define custom layouts by providing a `project_shortname.layouts.yml` file, which defines one or more layout types in the following format:

```yaml
layout_twocol_section:
  label: 'Two column'
  path: layouts/twocol_section
  template: layout--twocol-section
  library: layout_builder/twocol_section
  class: '\Drupal\layout_builder\Plugin\Layout\TwoColumnLayout'
  category: 'Columns: 2'
  default_region: first
  icon_map:
    - [first, second]
  regions:
    first:
      label: First
    second:
      label: Second

```

For more information, see the [Layout API](https://www.drupal.org/docs/8/api/layout-api) documentation.