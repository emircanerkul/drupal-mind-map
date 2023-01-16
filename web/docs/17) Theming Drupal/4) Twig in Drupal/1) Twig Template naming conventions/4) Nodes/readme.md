Pattern: _node--\[content-type|nodeid\]--\[viewmode\].html.twig_  
Base template: _node.html.twig_ (base location: core/modules/node/templates/node.html.twig)

Theme hook suggestions are made based on these factors, listed from the most specific template to the least. Drupal will use the most specific template it finds:

1. node--\[_nodeid_\]--\[_viewmode_\].html.twig
2. node--\[_nodeid_\].html.twig
3. node--\[_content-type_\]--\[_viewmode_\].html.twig
4. node--\[_content-type_\].html.twig
5. node--\[_viewmode_\].html.twig
6. node.html.twig

Note that underscores (\_) in a content type's machine name are replaced by hyphens (-).

See the [node.html.twig API documentation](https://api.drupal.org/api/drupal/core!modules!node!templates!node.html.twig/8).