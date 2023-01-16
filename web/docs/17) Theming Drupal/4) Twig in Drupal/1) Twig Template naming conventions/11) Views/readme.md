All views templates can be overridden with a variety of names, using the view, the display ID of the view, the display type of the view, or some combination thereof.

For each view, there will be a minimum of two templates used. The first is used for all views: [views-view.html.twig](https://api.drupal.org/api/drupal/core%21modules%21views%21templates%21views-view.html.twig/8.2.x "Default theme implementation for main view template.").

The second template is determined by the style selected for the view. Note that certain aspects of the view can also change which style is used; for example, arguments which provide a summary view might change the style to one of the special summary styles.

The default style for all views is [views-view-unformatted.html.twig](https://api.drupal.org/api/drupal/core%21modules%21views%21templates%21views-view-unformatted.html.twig/8.2.x "Default theme implementation to display a view of unformatted rows.").

Many styles will then farm out the actual display of each row to a row style; the default row style is [views-view-fields.html.twig](https://api.drupal.org/api/drupal/core%21modules%21views%21templates%21views-view-fields.html.twig/8.2.x "Default view template to display all the fields in a row.").

Patterns:

* views-view--\[_viewid_\]--\[_view-display-id_\].html.twig
* views-view--\[_viewid_\]--\[_view-display-type_\].html.twig
* views-view--\[_view-display-type_\].html.twig
* views-view--\[_viewid_\].html.twig
* views-view.html.twig

Base template: views-view.html.twig (base location: core/themes/stable/templates/views/views-view.html.twig)

For example, if we want to override "views-view.html.twig" template for our view, the following template names are valid:

* views-view--\[_viewid_\]--\[_view-display-id_\].html.twig
* views-view--\[_viewid_\]--page.html.twig
* views-view--block.html.twig
* views-view--\[_viewid_\].html.twig
* views-view.html.twig

views-view-field.html.twig based patterns are postfixed with the view's field id (as in replacement patterns) to display a single field in a view:

* views-view-field--\[_viewid_\]--\[_view-display-id_\]--\[_fieldid_\].html.twig
* views-view-field--\[_viewid_\]--page--\[_fieldid_\].html.twig
* views-view-field--block--\[_fieldid_\].html.twig
* views-view-field--\[_fieldid_\].html.twig
* views-view-field.html.twig

Here is an example of all the templates that will be tried in the following case:

View, named foobar. Style: unformatted. Row style: Fields. Display: Page.

* views-view--foobar--page.html.twig
* views-view--page.html.twig
* views-view--foobar.html.twig
* views-view.html.twig
* views-view-unformatted--foobar--page.html.twig
* views-view-unformatted--page.html.twig
* views-view-unformatted--foobar.html.twig
* views-view-unformatted.html.twig
* views-view-fields--foobar--page.html.twig
* views-view-fields--page.html.twig
* views-view-fields--foobar.html.twig
* views-view-fields.html.twig