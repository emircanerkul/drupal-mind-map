Pattern: _search-result--\[search-type\].html.twig_  
Base template: _search-result.html.twig_ (base location: core/modules/search/templates/search-result.html.twig)

search-result.html.twig is the default wrapper for individual search results. Depending on type of search different suggestions are made. For example, "example.com/search/node/Search+Term" would result in "search-result--node.html.twig" being used. Compare that with "example.com/search/user/bob" resulting in "search-result--user.html.twig". Modules can extend search types adding more suggestions of their type.

See the [search-result.html.twig API documentation](https://api.drupal.org/api/drupal/core!modules!search!templates!search-result.html.twig/8).