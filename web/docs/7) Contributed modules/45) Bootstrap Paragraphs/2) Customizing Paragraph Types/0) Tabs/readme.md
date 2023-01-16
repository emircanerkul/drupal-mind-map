### Linking to a specific tab

To link to a specific tab, [add the following JavaScript to your theme or a custom module](https://www.drupal.org/docs/8/theming/adding-stylesheets-css-and-javascript-js-to-a-drupal-8-theme).

```php
jQuery(document).ready(function($) {

  // Javascript to enable link to tab.
  var url = document.location.toString();
  if (url.match('#')) {
    $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
  } 

  // Change hash for page-reload.
  $('.nav-tabs a').on('shown.bs.tab', function (e) {
      window.location.hash = e.target.hash;
  });
});

```

You will then be able to link to the specific tab using <http://example.com/#tab-123-1>