Layout Defaults are layouts that apply to all nodes/entities of a given content type/bundle. Layout Overrides make it possible to override the Layout Default and create a custom layout for that entity. Once a Layout is overridden on an entity, that entity will not be impacted by changes to Layout Defaults.

Layout Overrides are not enabled by default. When you enable Layout Builder for a content type/bundle _in the default view mode_, an additional option is available: "Allow each content item to have its layout customized." Selecting this option will enable Layout Overrides for that content type/bundle.

![Checkbox for allow each item to have its layout customized](https://www.drupal.org/files/allow-each-item.gif)

When layout overrides are enabled for a content type, the local tasks for nodes of that type will include a "Layout" tab, where Layout Overrides can be created and edited.

![New layout task added to local tasks](https://www.drupal.org/files/layout-task.gif)