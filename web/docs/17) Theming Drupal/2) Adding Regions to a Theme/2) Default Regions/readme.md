See the [page.html.twig documentation](https://api.drupal.org/api/drupal/core%21modules%21system%21templates%21page.html.twig/8) for a list of default regions.

```yaml
regions:
  header: 'Header'
  primary_menu: 'Primary menu'
  secondary_menu: 'Secondary menu'
  highlighted: 'Highlighted'
  help: 'Help'
  content: 'Content'
  sidebar_first: 'Left sidebar'
  sidebar_second: 'Right sidebar'
  footer: 'Footer'
  breadcrumb: 'Breadcrumb'
  page_top: 'Page top'
  page_bottom: 'Page bottom'

```

The default regions are defined in `core/lib/Drupal/Core/Extension/ThemeExtensionList.php`

**If your theme doesn't declare any regions, Drupal will assume this set of defaults.** 

These regions correspond with what the default `core/modules/system/templates/page.html.twig` file expects, as well as two hidden regions, `page_top`, and `page_bottom` \- you don't need to declare these final two if you override the defaults, however the `{{ page_top }}` and `{{ page_bottom }}` Twig variables should be retained in the `html.html.twig` template.