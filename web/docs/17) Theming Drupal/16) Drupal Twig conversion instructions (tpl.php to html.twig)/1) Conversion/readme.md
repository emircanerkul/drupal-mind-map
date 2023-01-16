### Theme functions

#### Convert a theme function to a template file & preprocess function:

1. Identify the file your theme function came from (theme.inc? a core/modules/color/?)
2. Create a X.html.twig template file for your theme function:  
   * Name your new file appropriately  
   * Remove `theme_` from the start of your function and end the file name in `.html.twig`  
   * Convert underscores (“\_”) to hyphens (“-”).  
   * Examples:  
         * `theme_link()` becomes `link.html.twig`  
         * `theme_user_signature()` becomes `user-signature.html.twig`
3. Place your new Twig template in the templates folder in the stark theme (in the sandbox):  
   * for functions that came from a specific module, stark/templates/comment, etc  
   * for functions that came from theme.inc, stark/templates/theme.inc  
   * for functions that came from form.inc, stark/templates/form.inc
4. Go to [the Drupal 8 API](http://api.drupal.org/api/drupal/8) documentation and search for your function.  
   * (there are links for all functions in [the spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0ArHiL7dEQTuKdGhUQ0x0SjV3TEl2SDVmWUN4Vjg3OFE))
5. Add a PHP-style docblock at the top of the file, and wrap it in Twig comments `{# #}`  
   * Add an `@file` line at the very top.  
   * Copy the definition of the function just below the @file line. Rewrite “Returns HTML ...” as “Default theme implementation ...”. Rewrite it to fit on one line.  
   * Add “Available variables:” line (replace the @param variables)  
   * Copy the variables specified under ‘Parameters’ in docs on api.drupal.org  
   * Remove the `@see template_preprocess()` line, if it exists.  
   * Add an `@see template_preprocess_THEME_HOOK()` line.  
   * Add an `@ingroup themeable` line (see docblock example below).
6. Copy the source code for your function below the doc block (see example below)
7. Change the PHP code into mostly HTML and print statements  
   1. Remove PHP code from around the HTML, examples:  
         * `function whatever() {`  
         * `// …`  
         * `return $output; }`  
   2. Remove PHP print statements and replace with `{{ }}`  
         * Convert `$variables` into simple names:  
         `$variables['title']` becomes `{{ title }}`  
         * Replace array syntax with dot syntax:  
         `$variables['page']['tabs']` becomes `{{ page.tabs }}`  
   3. Remove PHP logic and replace with `{% %}` twig syntax.  
   `<?php foreach $items as $item ?>` becomes  
   `{% for item in items%}`  
   4. Replace PHP comments with twig syntax comments: `{# #}`  
   5. Replace `t()` functions around literals with the t _filter_:  
   `{{ 'text in quotes'|t }}`  
   6. Move all PHP logic for variables to a preprocess function. (for instructions on preprocessing, see below.)
8. If, as you do this, you notice things you want to improve, like consolidating seemingly redundant templates into a single one, or improving the markup or variable names, make a note of that [in this spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0AvlmQRaaidbndGV0anhkNDZ5OTYtRjVxaV9YcWNKSlE) or [create an issue](http://drupal.org/node/add/project-issue/1750250) on our sandbox. For example: <http://drupal.org/node/180591>

---

#### Convert or consolidate to preprocess functions

##### NOTES:

1. Preprocess functions will replace all theme functions.
2. If your template file has PHP logic in it that affects the variables that are being printed, that code will need to be moved to a preprocess function.
3. If your template began as a theme function, the theme function will need to be converted to a preprocess function.
4. In the case that some theme functions already have related preprocess functions, the variable handling code in those theme functions needs to be moved into preprocess.
5. Do not add a line to your hook\_theme implementation telling Drupal to use a template file instead of a theme function.

##### INSTRUCTIONS:

1. Rename `theme_YOURFUNCTION` to `template_preprocess_YOURFUNCTION`.
2. Pass the $variables by reference by adding an ampersand. i.e. `theme_select($variables)` becomes `template_preprocess_select(&$variables)`.
3. Edit the function to handle only the variable processing logic; Remove any markup (i.e. $output).

If there are missing functions in your twig templates...

If you need access to a filter or function in your Twig template that is not working yet, please add it to [this open issue](http://drupal.org/node/1696760). Keep in mind that most PHP or Drupal functions should be moved to preprocess functions instead. Only if you think a theme dev will need access to this function should it remain in the template.

---