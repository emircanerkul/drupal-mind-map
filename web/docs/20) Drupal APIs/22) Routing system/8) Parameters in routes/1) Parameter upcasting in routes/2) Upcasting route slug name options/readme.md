Routing parameters are not limited to raw entity IDs (like `/node/123`) but can also use arbitrary string placeholders known as "slugs". A [slug](https://en.wikipedia.org/wiki/Clean%5FURL#Slug) is a short human readable name that uniquely identifies a piece of content. For example if you have a node called "The best recipe for Crème Brûlée!" then you can identify this with the slug `best-recipe-creme-brulee`. You can use the `options:` for defining slugs:

```yaml
foobar.view:
  path: '/foobar/{foobar_placeholder}'
  defaults:
    _controller: '\Drupal\foobar\Controller\Foobar::content'
    _title: 'Oh yeah foobar'
  options:
    parameters:
      foobar_placeholder:
        type: entity:foobar
```

In this example, my entity type is called `foobar` and the first argument on the callback should be named the same as the slug name.

```php
class Foobar extends ControllerBase {
  public function content(\Drupal\foobar\Entity\Foobar $foobar_placeholder, Request $request) {
  }
}
```