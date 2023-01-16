When working with objects, we've allowed calling certain set of getters and setters or objects through the `TwigSandboxPolicy` class. This is done to prevent accidental methods from being called in your templates. For example: `{{ node.delete }}` on the node object may delete the node if the allowed policy was not in place. You can extend the allowed policy by adding the following to your `settings.php`

```php
$settings['twig_sandbox_allowed_methods'] = [
  'id',
  'label',
  'bundle',
  'get',
  '__toString',
  'toString',
  'referencedEntities',
];
```

Where `'referencedEntities'` is the method you'd like to use in your template.