Pattern: _forums--\[\[container|topic\]--forumID\].html.twig_  
Base template: _forums.html.twig_ (base location: core/modules/forum/templates/forums.html.twig)

Theme hook suggestions are made based on these factors, listed from the most specific template to the least. Drupal will use the most specific template it finds:

For forum containers:

1. forums--containers--\[_forumid_\].html.twig
2. forums--\[_forumid_\].html.twig
3. forums--containers.html.twig
4. forums.html.twig

For forum topics:

1. forums--topics--\[_forumid_\].html.twig
2. forums--\[_forumid_\].html.twig
3. forums--topics.html.twig
4. forums.html.twig

See the [API documentation for forums.html.twig](https://api.drupal.org/api/drupal/core!modules!forum!templates!forums.html.twig/8).