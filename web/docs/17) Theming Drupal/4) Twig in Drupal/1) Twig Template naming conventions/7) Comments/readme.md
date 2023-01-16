Pattern: _comment--\[comment-field-name\]--\[node-type\].html.twig_  
Base template: _comment.html.twig_ (base location: core/modules/comment/templates/comment.html.twig)

Support was added to create comment--\[comment-field-name\]--\[node-type\].html.twig files, to format comments of a certain node _type_ differently than other comments in the site. For example, a comment made on an article-type node would be "comment--field-comments--article.html.twig".

See the [comment.html.twig API documentation](https://api.drupal.org/api/drupal/core!modules!comment!templates!comment.html.twig/8).

### Comment wrappers

Pattern: _field--node--\[comment-field-name\]--\[content-type\].html.twig_  
Base template: field--_comment.html.twig_