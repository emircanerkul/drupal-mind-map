![](https://www.drupal.org/files/1.content-header.png)

#### Markup

```php
<header class="content-header clearfix">
  <div class="layout-container">
    <div class="region region-header">
      <div id="block-seven-page-title" class="block block-core block-page-title-block">
        <h1 class="js-quickedit-page-title page-title">
        Content</h1>
        <a href="#" class="shortcut-action shortcut-action--remove">
          <span class="shortcut-action__icon">
          </span><span class="shortcut-action__message">Remove from <em>class="placeholder">Default</em>shortcuts</span>
        </a>
      </div>
    </div>
  </div>
</header>
```

In Drupal 7 “add to shortcuts” icon was a plus symbol. In Drupal 8 this is now a star icon to avoid confusion with 'add' actions that use the plus. The various states for the shortcut add/remove component are shown inset, from left to right: inactive, inactive:hover, activated, activated:hover and finally inactive again.

The header background is #ebeae4 or hsl(51, 15%, 91%).