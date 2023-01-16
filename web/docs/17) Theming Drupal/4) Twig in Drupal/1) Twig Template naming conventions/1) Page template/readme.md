Pattern: _page--\[front|internal/path\].html.twig_  
Base template: _page.html.twig_ (base location: core/modules/system/templates/page.html.twig)

The suggestions are numerous. The front page takes precedence. The rest is based on the internal path of the current page. The front page can be set at _"**Administration > Configuration > System > Site information**."_ (<http://example.com/admin/config/system/site-information>). The front page template is page--front.html.twig.  
Do not confuse the internal path with path aliases, which are not accounted for.

The list of suggested template files is in order of specificity based on internal paths. One suggestion is made for every element of the current path, though numeric elements are not carried to subsequent suggestions. For example, "<http://www.example.com/node/1/edit>" would result in the following suggestions:

1. page--node--edit.html.twig
2. page--node--1.html.twig
3. page--node.html.twig
4. page.html.twig

See the [page.html.twig API documentation](https://api.drupal.org/api/drupal/core!modules!system!templates!page.html.twig/8). Also see below for the [maintenance page template](#maintenance-page).