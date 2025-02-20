Bartiks CSS files have been separated out into components following the Drupal 8 CSS architecture guidelines.

```php
global-styling:
  version: VERSION
  css:
    base:
      css/base/elements.css: {}
    component:
      css/components/block.css: {}
      css/components/book.css: {}
      css/components/breadcrumb.css: {}
      css/components/captions.css: {}
      css/components/comments.css: {}
      css/components/contextual.css: {}
      css/components/demo-block.css: {}
      # @see https://www.drupal.org/node/2389735
      css/components/dropbutton.component.css: {}
      css/components/featured-top.css: {}
      css/components/feed-icon.css: {}
      css/components/field.css: {}
      css/components/form.css: {}
      css/components/forum.css: {}
      css/components/header.css: {}
      css/components/help.css: {}
      css/components/highlighted.css: {}
      css/components/item-list.css: {}
      css/components/list-group.css: {}
      css/components/list.css: {}
      css/components/main-content.css: {}
      css/components/menu.css: {}
      css/components/messages.css: {}
      css/components/node.css: {}
      css/components/node-preview.css: {}
      css/components/page-title.css: {}
      css/components/pager.css: {}
      css/components/panel.css: {}
      css/components/primary-menu.css: {}
      css/components/search-form.css: {}
      css/components/search-results.css: {}
      css/components/secondary-menu.css: {}
      css/components/shortcut.css: {}
      css/components/skip-link.css: {}
      css/components/sidebar.css: {}
      css/components/site-branding.css: {}
      css/components/site-footer.css: {}
      css/components/table.css: {}
      css/components/tablesort-indicator.css: {}
      css/components/tabs.css: {}
      css/components/text-formatted.css: {}
      css/components/toolbar.css: {}
      css/components/featured-bottom.css: {}
      css/components/password-suggestions.css: {}
      css/components/ui.widget.css: {}
      # @see https://www.drupal.org/node/2389735
      css/components/vertical-tabs.component.css: {}
      css/components/views.css: {}
      css/components/buttons.css: {}
      css/components/image-button.css: {}
      css/components/ui-dialog.css: {}
    layout:
      css/layout.css: {}
    theme:
      css/colors.css: {}
      css/print.css: { media: print }
```