To load CSS or JS assets:

1. Save the CSS or JS to a file using the [proper naming conventions and file structure](https://www.drupal.org/docs/develop/standards/css/css-file-organization-for-drupal-8).
2. [Define a "library", which registers these CSS/JS files with your theme.](#define)
3. "Attach" the library [to _all_ pages](#all-pages), to [specific Twig templates](#twig-template), or [target specific pages via a render element in a preprocess function.](#preprocess)

### Defining a library

Define all of your asset libraries in a `*.libraries.yml` file in your theme folder. If your theme is named `fluffiness`, the file name should be `fluffiness.libraries.yml`. Each "library" in the file is an entry detailing CSS and JS files (assets), like this:

```yaml
# fluffiness.libraries.yml
cuddly-slider:
  version: 1.x
  css:
    theme:
      css/cuddly-slider.css: {}
  js:
    js/cuddly-slider.js: {}

```

In this example, the JavaScript: `cuddly-slider.js` and CSS `cuddly-slider.css `are located in the respective `js` and `css`directories of your theme.

_Note that while this example demonstrates adding a single css and js file + jquery. There are significantly more options available when defining libraries. These can be found in the [Defining Libraries: Options & Details ](#libraries-options-details) section_

#### Including jQuery in your Library

Remember, Drupal no longer loads jQuery on all pages by default, so for example if `cuddly-slider` needs jQuery you must declare a dependency on the core library that contains jQuery (Drupal core provides jQuery, not a module or theme). Declare the dependency with an extension name followed by a slash, followed by the library name, in this case `core/jquery`. If another library required `cuddly-slider` it would declare:`fluffiness/cuddly-slider`, the theme name, followed by the library name. You cannot declare an individual file as a dependency, only a library.

So, to make jQuery available for `cuddly-slider`, we update the above to:

```yaml
# fluffiness.libraries.yml

cuddly-slider:
  version: 1.x

  css:
    theme:
      css/cuddly-slider.css: {}

  js:
    js/cuddly-slider.js: {}
  dependencies:
    - core/jquery

```

#### Declaring dependencies

To declare a dependency, the required library is declared in the form _resource/library_. For core libraries, the resource is _core_, while for others it is the module name or the theme name. So if _new\_library_ is dependent on jQuery from core, _my\_library_ declared in _my\_theme,_ and _my\_library_ declared in _my\_module_, you would declare the dependencies as:

```yaml
# fluffiness.libraries.yml
new_library:
  js:
    js/new_library.js: {}
  dependencies:
    - core/jquery
    - my_module/my_library
    - my_theme/my_library

```

The module and theme names provide namespacing for libraries of the same name.

### Attaching a library to all pages

Most themes will use a `global-styling` asset library, for the stylesheets (CSS files) that need to be loaded on every page where the theme is active. It is also possible to do with JS via a `global-scripts` asset library

```yaml
# fluffiness.libraries.yml (multiple libraries can be added to a libraries.yml file, these would appear below the cuddly-slider libraries added earlier)
global-styling:
  version: 1.x
  css:
    theme:
      css/layout.css: {}
      css/style.css: {}
      css/colors.css: {}
global-scripts:
  version: 1.x
  js: 
    js/navmenu.js: {}   

```

**Attaching libraries from your theme's info.yml**

To be available everywhere in the theme, the global-styling/global-scripts libraries must then be added to your **theme's info.yml** (in this case `fluffiness.info.yml). `Do not confuse this with your module's info.yml file.

```yaml
#fluffiness.info.yml
name: Fluffiness
type: theme
description: 'A cuddly theme that offers extra fluffiness.'
core: 8.x
# by adding global-styling and global-scripts here, the css/js files in the library become 
# available to every page presented by the theme
libraries:
  - fluffiness/global-styling
  - fluffiness/global-scripts
base theme: stable9
regions:
  header: Header
  content: Content
  sidebar_first: 'Sidebar first'
  footer: Footer

```

**Attaching libraries globally from your .module file**

If you prefer attaching a library from within your module you can use [hook\_preprocess\_HOOK](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Fpreprocess%5FHOOK/9.3.x)() or [hook\_page\_attachments](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Render%21theme.api.php/function/hook%5Fpage%5Fattachments/9.3.x)(). Find some more examples for `hook_preprocess_HOOK()` below.

In your theme's .module file add 

```php
function fluffiness_page_attachments(&$variables) {
  $variables['#attached']['library'][] = 'fluffiness/global-styling';
}
```

or

```php
function fluffiness_preprocess_page(&$variables) {
  $variables['#attached']['library'][] = 'fluffiness/global-styling';
}
```

If you want to conditionally change the libraries, see `hook_page_attachments_alter()` which is called after `hook_page_attachments()`. An example can be found further down below.

### Attaching a library via a Twig template

You can attach an asset library to a Twig template using the `attach_library()` function in any `*.html.twig`, file like so:

```php
{{ attach_library('fluffiness/cuddly-slider') }}
<div>Some fluffy markup {{ message }}</div>

```

### Attaching a library to a subset of pages

In some cases, you do not need your library to be active for all pages, but just a subset of pages. For example, you might need your library to be active only when a certain block is being shown, or when a certain node type is being displayed.

A theme can make this happen by implementing a `THEME_preprocess_HOOK()` function in the `.theme` file, replacing "THEME" with the machine name of your theme and "HOOK" by the machine name of the theme hook.

For instance, if you want to attach JavaScript to the maintenance page, the "HOOK" part is "maintenance\_page", and your function would look like this:

```php
function fluffiness_preprocess_maintenance_page(&$variables) {
  $variables['#attached']['library'][] = 'fluffiness/cuddly-slider';
}

```

You can do something similar for other theme hooks, and of course your function can have logic in it — for instance to detect which block is being preprocessed in the "block" hook, which node type for the "node" hook, etc.

**Important note!** In this case, you need to specify the [cacheability metadata](/developing/api/8/cache) that corresponds to your condition! The example above works unconditionally, so no cacheability metadata is necessary. The most common use case is likely where you attach some asset library based on the current route:

```php
function fluffiness_preprocess_page(&$variables) {
  $variables['page']['#cache']['contexts'][] = 'route';
  $route = "entity.node.preview";
  if (\Drupal::routeMatch()->getRouteName() === $route) {
    $variables['#attached']['library'][] = 'fluffiness/node-preview';
  }
}

```