#### **PHP code** from [http://api.drupal.org/api/drupal/core!includes!theme.inc/function/theme\_...](http://api.drupal.org/api/drupal/core!includes!theme.inc/function/theme%5Flink/8)


```php
function theme_link($variables) { return '' . ($variables['options']['html'] ? $variables['text'] : check_plain($variables['text'])) . ''; } 
```

#### **Twig template** (file name: `link.html.twig`)


```php
{# /** * @file * Default theme implementation to display a link. * * Available variables: * - text: The link text for the anchor tag. * - url: The complete URL being linked to, such as * "/node/34" or "http://example.com/foo". * - attributes: Remaining HTML attributes for the containing element. * * @see template_preprocess_link() * * @ingroup themeable */ #} <a href="{{ url }}" class="{{ attributes.class }}"{{ attributes }}>{{ text }}</a> 
```

Changes to system.module (preprocess function)


```php
/** * Prepares variables for link templates. * * Default template: link.html.twig. * * @param array $variables * An associative array containing: * - text: The translated link text for the anchor tag. * - path: The internal path or external URL being linked to. * - options: An associative array of additional options. */ function template_preprocess_link(&$variables) { $variables['url'] = url($variables['path'], $variables['options']); } 
```

---