Use \`link-icon\` helper CSS class to attach a FontAwesome icon to a link or a button. For example to easily create a favourite button with a hearth icon from a link you can do something like this:

```php
<a href="#" class="btn btn-secondary fa-heart link-icon">Favorite</a>
```

For more flexibility, you can use \`bs-icon()\` mixin from bs\_bootstrap/sass/base/partials/\_utils.scss:

```php
// Helper for attaching font awesome icon to element in pseudo before element.
// $icon-content font awesome icon character.
// $icon-space inner space between icon and the label - useful for menu items.
@mixin bs-icon($icon-content: false, $icon-space: $btn-icon-gap, $icon-position: 'before', $responsive_label: true);
```