Within a module's \*.routing.yml file, create a route to the form. In many cases, it will be desirable to pass a parameter from the path to the confirmation form, as would be the case some kind of content was being deleted. This can be seen in the following example:

```yaml
example_module.delete:
  path: '/example/{id}/delete'
  defaults:
    _form: '\Drupal\example_module\Form\ConfirmDeleteForm'
    _title: 'Confirm Deletion'
  requirements:
    _permission: 'administer site configuration'
    id: ^\d+$
```

The value of _id_ is passed to the form's buildForm() function via a parameter appended to the standard parameter list. A regex to only allow numeric ids to be passed has been applied under the 'requirements' section.

_Note: The route parameters are user supplied content and is therefore **NOT SAFE**. The regex above guarantees that only numerics are passed along but other parameters will likely need to be sanitized or verified in some way to ensure malicious content doesn't get passed along._