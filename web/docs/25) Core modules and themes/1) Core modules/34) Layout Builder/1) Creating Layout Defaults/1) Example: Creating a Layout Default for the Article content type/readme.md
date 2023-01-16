Go to the “Manage Display” tab of the Article content type (this will typically be located at admin/structure/types/manage/article/display)

Once there, enable Layout Builder for the display by checkmarking “Use Layout Builder”, then click **Save**

![](https://www.drupal.org/files/article-enable-layouts.png)

With Layout Builder enabled, the list of fields typically seen in Display Options is replaced with a “Manage Layout” button

![](https://www.drupal.org/files/standard-to-builder.png)

Click “Manage Layout” to access the Layout Builder UI to create your layout. The handbook section on using the Layout Builder UI [can be found here](/docs/8/core/modules/layout-builder/building-layouts-using-the-layout-builder-ui).

The layout you created will apply to all (non-overridden) nodes of the Article content type, when displayed in their Default view mode. View modes such as "Teaser" will not use Layout Builder unless it is specifically enabled on that view mode.

An entity doesn't _have_ to use its default layout. Any entity can override the default layout and use a custom entity-specific layout instead. More details here: [Creating Layout Overrides](https://www.drupal.org/docs/8/core/modules/layout-builder/creating-layout-overrides)