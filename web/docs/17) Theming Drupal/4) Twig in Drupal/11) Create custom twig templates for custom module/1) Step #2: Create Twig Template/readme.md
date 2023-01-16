In your module, inside of the templates folder, create your twig template. The name of the file has to match what you put into `hook_theme()` (**make sure replace underscores with dashes**). In this case, the file name would be `my-template.html.twig`.  
Here is the file I used to test:

```php
{# [module]/templates/my-template.html.twig #}
<p>Test twig template!</p>
 
<p>test_var: {{ test_var }}</p>

```

The beauty of this is that the template file defined in your module will be used if such a [file does not already exist in your theme](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Render!theme.api.php/group/themeable/8#sec%5Foverriding%5Ftheme%5Fhooks "Overriding theme hooks"). Just dump a file inside of the templates folder of your theme, clear cache (`drush cache-rebuild`), and it will read that file instead.

You can put the file in any nested sub-folder of the site theme to keep things organized.