---
url: >-
  https://www.drupal.org/docs/theming-drupal/twig-in-drupal/comparison-of-phptemplate-and-twig-theming-paradigms
description: >-
  About Twig Twig is a PHP-based compiled templating language. When your web
  page renders, the Twig engine takes the template and converts it into a
  'compiled' PHP template which is stored in a protected directory in
  sites/default/files/php/twig. The compilation is done once, template files are
  cached for reuse and are recompiled on clearing the Twig cache. The Drupal
  Twig initiative shares the same motivation as the Symfony initiative: to adopt
  a modern, powerful, OOP-based engine that will allow developers to concentrate
  on Drupal properly. 1.
published_time: '2013-02-16T10:24:56+00:00'
modified_time: '2021-06-19T06:19:16+00:00'
---
### About Twig

Twig is a PHP-based compiled templating language. When your web page renders, the Twig engine takes the template and converts it into a 'compiled' PHP template which is stored in a protected directory in `sites/default/files/php/twig`. The compilation is done once, template files are cached for reuse and are recompiled on clearing the Twig cache.

The Drupal Twig initiative shares the same motivation as the Symfony initiative: to adopt a modern, powerful, OOP-based engine that will allow developers to concentrate on Drupal properly.

### 1\. Docblock

PHPTemplate:

```php
<?php 
/** 
 * @file
 * File description
 */
?>
```

Twig:

```php
{# 
/** 
 * @file
 * File description
 */
#}
```

### 2\. File and function names

PHPTemplate file: `node--article.tpl.php`  
Twig file: `node--article.html.twig`

PHPTemplate function: `THEME_node_links()`  
Twig file: `node-links.html.twig`

### 3\. Variables

**Printing a variable:**  
PHPTemplate: `<div class="content"><?php print $content; ?></div>`  
Twig: `<div class="content">{{ content }}</div>`

**Printing a hash key item**[\[1\]](#footnote-1)  
PHPTemplate: `<?php print $item['#item']['alt']; ?>`  
Twig: `{{ item['#item'].alt }} `

**Assigning a variable:**  
PHPTemplate: `<?php $custom_var = $content->comments; ?>`  
Twig: `{% set custom_var = content.comments %}`

**Assigning an array:**  
PHPTemplate: `<?php $args = array('@author' => $author, '@date' => $created); ?>`  
Twig: `{% set args = {'@author': author, '@date': created} %}`

### 4\. Conditionals

PHPTemplate: `<?php if ($content->comments): endif; ?>`  
Twig: `{% if content.comments %} {% endif %}`

PHPTemplate: `<?php if (!empty($content->comments)): endif; ?>`  
Twig: `{% if content.comments is not empty %} {% endif %}`

PHPTemplate: `<?php if (isset($content->comments)): endif; ?>`  
Twig: `{% if content.comments is defined %} {% endif %}`

PHPTemplate: `<?php if ($count > 0): endif; ?>`  
Twig: `{% if count > 0 %} {% endif %}`

### 5\. Control structures

PHPTemplate: `<?php foreach ($users as $user) {} ?>`  
Twig: `{% for user in users %} {% endfor %}`

### 6\. Filters

**Escaped HTML special characters:**  
PHPTemplate: `<?php print check_plain($title); ?>`  
Twig[\[2\]](#footnote-2): `{{ title }}`

**Raw values:**  
PHPTemplate: `<?php print $title; ?>`  
Twig: `{{ title|raw }}`

**Translate:**  
PHPTemplate: `<?php print t('Home'); ?>`  
Twig: `{{ 'Home'|t }}`

**Translate with substitutions:**  
PHPTemplate: `<?php print t('Welcome, @username', array('@username' => $user->name)); ?>`  
Twig: `{{ 'Welcome, @username'|t({ '@username': user.name }) }}`  
Drupal 8 Twig (with [trans tag extension](https://drupal.org/node/2047135)):

```php
{% set username = user.name %}
{% trans %}
  Welcome, {{ username }}
{% endtrans %}

```

**Implode a list:**  
PHPTemplate: `<?php echo implode(', ', $usernames); ?>`  
Twig: `{{ usernames | join(', ') }}`

**Implode a list with Markup:**  
Twig: `{{ usernames | safe_join(', ') }}`

The PHPTemplate example requires `$usernames` to be an array of strings. The same goes for the Original Twig example where "usernames" is an array of strings. The Drupal 8 Twig example on the other hand requires an array of renderable objects. This is actually the fundamental difference between Drupal 8 Twig and the original Twig. Drupal 8 Twig "prints" both plain text and renderable arrays.

Another aspect of this example is that one expects all three example to produce the same output, but it doesn't (by default). Take this example:

```php
  {% set numbers = [{'#markup': 'One'}, {'#markup':'Two'}, {'#markup':'Three'}] %}
  {{ numbers }}

```

The above suggests that items are printed separated by commas. But the output is: OneTwoThree

### 7\. Whitespace control

Twig has whitespace control which allows for removing the whitespace used for structuring a template file.

```php
<div class="body">
  {{- block.content -}}
</div>

```

Is same as:

```php
<div class="body">{{ block.content }}</div>

```

### Notes

1. [The hash key item example might change in the future](/node/2160611) [↩︎︎](#footnote-ref-1 "Jump back to the footnote in the text.")
2. In the second example, we show how Twig is responsible for sanitizing data. Previously it was up to the template file or preprocess function to handle this as well. This last change is a really big deal for anyone hoping to create a PHPTemplate theme for Drupal 8 - you'll need to sanitize your own data. [↩︎︎](#footnote-ref-2 "Jump back to the footnote in the text.")

### **For more information, see:**

* [Twig issues in the core issue queue](https://drupal.org/project/issues/drupal?text=Twig&version=8.x)
* [Twig conversion instructions on drupal.org](https://drupal.org/node/2025313)
* [Twig documentation](https://twig.symfony.com/doc/2.x/)
* [Script to convert PHPTemplate to Twig ](https://github.com/makinacorpus/php-twig-converter)
* [Twigify module to convert PHPTemplate to Twig](https://www.drupal.org/project/twigify)