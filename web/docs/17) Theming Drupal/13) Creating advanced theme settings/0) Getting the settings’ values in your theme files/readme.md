In order to use a setting in a Twig file, you'll have to add a new variable to the Twig file by adding it with a preprocess function in your `THEMENAME.theme` file: `$variables['varname'] = theme_get_setting('varname')`

For example, to add our `foo_example` setting to the `node.html.twig` file, add this to the `foo.theme` file:

```php
<?php
function foo_preprocess_node(&$variables) {
  $variables['foo_example'] = theme_get_setting('foo_example');
}
```

Then in the `node.html.twig` file, you can access `foo_example` like any normal Twig variable:

```php
{{ foo_example }}

```