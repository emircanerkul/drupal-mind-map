```php
loremipsum.generate:
  path: '/loremipsum/generate/{paragraphs}/{phrases}'
  defaults:
    _controller: '\Drupal\loremipsum\Controller\LoremIpsumController::generate'
  requirements:
    _permission: 'generate lorem ipsum'

loremipsum.form:
  path: '/admin/config/development/loremipsum'
  defaults:
    _form: '\Drupal\loremipsum\Form\LoremIpsumForm'
    _title: 'Lorem ipsum settings'
  requirements:
    _permission: 'administer site configuration'

```

The _routing_ file replaces the _hook\_menu()_ call. Each entry (without indentation) points to a _route_, with subsequent indented lines detailing specific settings.

The _loremipsum.generate_ route points to a page which takes two arguments between _{ }_; it corresponds to a _Controller_ (more on that later on), unlike _loremipsum.form_ which points to a (settings) _form_ with a title.

Both routes require permissions, but you can replace them with _\_access: 'TRUE'_ for unrestricted access.