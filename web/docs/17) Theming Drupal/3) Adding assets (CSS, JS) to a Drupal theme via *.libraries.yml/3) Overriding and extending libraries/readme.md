**You must go to `*.info.yml` to override libraries** defined in `*.libraries.yml` They can be either overridden or extended using `libraries-override` or `libraries-extend`. Overrides you add to `*.info.yml` will be inherited by sub-themes.

[The stylesheets\-remove property](/node/2473869) used in the `*.info.yml` file has been deprecated[ ](https://api.drupal.org/api/drupal/core!lib!Drupal!Core!Theme!ThemeInitialization.php/function/ThemeInitialization%3A%3AprepareStylesheetsRemove/8)and [is planned to be removed in Drupal 10.0.x](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Theme%21ThemeInitialization.php/function/ThemeInitialization%3A%3AprepareStylesheetsRemove/9.3.x). The `stylesheets-override` property has already been removed.

`libraries-override`

The logic you will need to use when creating overrides is:

1. Use the original module (or core) namespace for the library name.
2. Use the path of the most recent override as the key.
3. That path should be the full path to the file.

For example:

```yaml
libraries-override:
  contextual/drupal.contextual-links:
    css:
      component:
        /core/themes/stable/css/contextual/contextual.module.css: false
    
```

Here `contextual/drupal.contextual-links` is the namespace of the core library and `/core/themes/stable/css/contextual/contextual.module.css:` is the full path to the most recent override of that library. In this case, the file has been overridden with`false.`

It's important to note here that only the last part is an actual file system path, the others refer to namespaces. The `css:` and `component:`lines reflect [the structure of the library](https://www.drupal.org/docs/develop/standards/css/css-file-organization-for-drupal-8) that is being overridden.

When using this remember that reliance on the file system path means that if the file structure of your site changes, it may break this path. For that reason, there is an issue to remove reliance on the full path by [using stream wrappers](http://www.drupal.org/node/1308152).

Here are a few other ways to use `libraries-override` to remove or replace CSS or Javascript assets or entire libraries your theme has inherited from modules or themes.

```yaml
libraries-override:
  # Replace an entire library.
  core/drupal.collapse: mytheme/collapse
  
  # Replace an asset with another.
  subtheme/library:
    css:
      theme:
        css/layout.css: css/my-layout.css

  # Replace an override asset from stable.
  contextual/drupal.contextual-toolbar:
    css:
      component:
        core/themes/stable/css/contextual/contextual.toolbar.css: css/contextual.toolbar.css

  # Replace a core module JavaScript asset.
  toolbar/toolbar:
    js:
      js/views/BodyVisualView.js: js/views/BodyVisualView.js

  # Remove an asset.
  drupal/dialog:
    css:
      theme:
        dialog.theme.css: false
  
  # Remove an entire library.
  core/modernizr: false
  
  # Replace very specific assets from a contributed module's library.
  # Note: The module's libraries available for overriding can be found in the module's *.libraries.yml file. In this example, you would find the libraries.yml file at the following location: /modules/contrib/webform/webform.libraries.yml 

  webform/webform.element.location.places:
    css:
      component:
        css/webform.element.location.places.css: css/my-themes-replacement-file.css
    js:
      js/webform.element.location.places.js: js/my-themes-replacement-file.js


```

### `libraries-extend`

`libraries-extend` provides a way for themes to alter the assets of a library by adding in additional theme-dependent library assets whenever a library is attached.  
`libraries-extend` are specified by extending a library with any number of other libraries.

This is perfect for styling certain components differently in your theme, while at the same time not doing that in the global CSS. I.e. to customize the look of a component without having to load the CSS to do so on _every_ page.

```yaml
# Extend drupal.user: add assets from custom_theme libraries.
libraries-extend:
  core/drupal.user: 
    - custom_theme/user1
    - custom_theme/user2

```

### Attaching specific css or js files from an existing library to a twig template

You can attach a specific css stylesheet or a js file to your twig template.

In this example, we will attach the pager.css from the Claro theme to a twig template in our own custom theme called `mytheme`.

`# mytheme.libraries.yml
pager:
  css:
    theme:
      /core/themes/claro/css/components/pager.css: {}
`

`# mytheme.info.yml
libraries:
  - mytheme/pager
`

We've declared a new library called `mytheme/pager` by adding the above to our theme's `libraries.yml` and `info.yml`.

We then attach the new library to our twig template by using the `attach_library` function

`# custom.html.twig
{{ attach_library('mytheme/pager') }}
`