Parameters on routes can be omitted when a default value for the parameter is supplied. Imagine you have a form controller that allows people to report different issues (e.g. bug reports, feature requests and support requests), and if the type is omitted it should default to 'support request'. Supply the default value for the optional parameter in the "defaults" section:

```php
issue.report_form:
  path: '/report/{issue_type}'
  defaults: 
    _controller: '\Drupal\issue\Controller\IssueController::report'
    issue_type: 'support-request'
  requirements: 
    _permission: 'report issue' 

```

Now if we do a request to '/report' the `$issue_type` parameter will default to 'support-request'. We can override the value by supplying it on the URL, like '/report/bug'.

The default values for arguments can also be used to provide routes with fixed paths to controllers that expect arguments. Imagine for example that our SEO expert finds it extremely important that our form to submit bug reports is available on the path 'report-a-bug'. We can reuse the same controller as in the previous example, and provide a different default for "issue\_type". The router knows that this parameter exists and will pass it on to the controller:

```php
issue.report_a_bug:
  path: '/report-a-bug'
  defaults: 
    _controller: '\Drupal\issue\Controller\IssueController::report'
    issue_type: 'bug'
  requirements: 
    _permission: 'report issue' 

```