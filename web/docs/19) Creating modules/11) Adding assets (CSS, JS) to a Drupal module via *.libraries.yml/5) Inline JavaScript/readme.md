**Inline JavaScript is highly discouraged**. It's recommended to put the JS you want to use inline in a file instead because that allows that JavaScript to be cached on the client side. It also allows JavaScript code to be reviewed and linted. Inline JS will also conflict with the Content Security Policy of many sites and make your module unusable by them.

### Inline JavaScript that generates markup

This is discouraged. Place the javascript in a file instead. Examples of this are ads, social media sharing buttons, social media listing widgets. These do use inline JavaScript. But they are just a special kind of content/markup, since they're not about decorating the site's content or making it interactive, instead they are about pulling in external content through JavaScript.

You want to put these in either a custom block or even directly in a Twig template.

E.g.:

```php
<script type="text/javascript"><!--
ad_client_id = "some identifier"
ad_width = 160;
ad_height = 90;
//--></script>
<script type="text/javascript" src="http://adserver.com/ad.js"></script>

```

```php
<a class="twitter-timeline" href="https://twitter.com/wimleers" data-widget-id="307116909013368833">Tweets by @wimleers</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

```

### Inline JavaScript that affects the entire page

**Inline JavaScript is highly discouraged**. Examples of inline JavaScript that affects the entire page are analytics (e.g. Google Analytics) and hosted font services. Inline JavaScript that affects the entire page can be in either of two categories: front-end/styling, or logical. Most of these cases can be satisfied with fixed javascript in a file plus added settings.

In the case of front-end/styling (e.g. hosted font services), it belongs in the theme, and for that, please see [“Adding stylesheets (CSS) and JavaScript (JS) to a Drupal theme”](https://www.drupal.org/node/2216195).

In the other case, the JS belongs in the module. In the appropriate hook — likely `hook_page_attachments()` — define attached HTML `<HEAD>` data by using the `'html_head'` key in the `#attached` property:

```php
function fluffiness_page_attachments(array &$attachments) {
  $attachments['#attached']['html_head'][] = [
    // The data.
    [
      '#type' => 'html_tag',
      // The HTML tag to add, in this case a <script> tag.
      '#tag' => 'script',
      // The value of the HTML tag, here we want to end up with
      // alert("Hello world!");.
      '#value' => 'alert("Hello world!");',
      // Set attributes like src to load a file.
      '#attributes' => ['src' => ''],

    ],
    // A key, to make it possible to recognize this HTML  element when altering.
    'hello-world',
  ];
}

```