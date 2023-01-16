In order for regions to display any content placed into them, you'll need to make sure your new regions are also added to your `page.html.twig` file. Regions will be represented as Twig variables whose name corresponds with the key used in your THEMENAME.info.yml file with the string `page.` prepended.

Example:

```yaml
header: 'Header' 
```

...will become:

```php
{{ page.header }} 
```

These behave like any other Twig variable and may be wrapped in whatever markup makes sense for your use case.

(The syntax for the default hidden regions is different, see below.)