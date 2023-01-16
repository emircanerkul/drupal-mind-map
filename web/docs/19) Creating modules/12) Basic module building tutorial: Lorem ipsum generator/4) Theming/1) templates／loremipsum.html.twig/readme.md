```php
{#
/**
 * @file
 * Default theme implementation to print Lorem ipsum text.
 *
 * Available variables:
 *   - source_text
 *
 * @see template_preprocess_loremipsum()
 *
 * @ingroup themeable
 */
#}
<div class="loremipsum">
{% for item in source_text %}
  <p>{{ item }}</p>
{% endfor %}
</div>
```

Now the _$source\_text_ array is processed using a simple _for_ loop inside our twig, surrounded by `<p>` tags.

Notice the correspondence between _hook\_theme()_, _template\_preprocess\_hook()_ and our Twig file:

![hook_theme() variable](https://www.drupal.org/files/06_0.png)  
![template_preprocess_hook() variable](https://www.drupal.org/files/07_0.png)  
![twig variable](https://www.drupal.org/files/08_0.png)