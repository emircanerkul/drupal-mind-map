The following key/value pairs provide meta-data about your theme and define some of the basic functionality. (See [\\Drupal\\Core\\Extension\\InfoParserInterface::parse()](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Extension%21InfoParserInterface.php/function/InfoParserInterface%3A%3Aparse/8.2.x).)

* [name](#name) _(required)_
* [type](#type) _(required)_
* [base theme](#base-theme) _(required in Drupal 9, optional for Drupal 8)_
* [core\_version\_requirement](#core%5Fversion%5Frequirement) _(required in Drupal 9, optional for Drupal 8)_
* [core](#core) _(required for Drupal 8, optional if you include_ `core_version_requirement` , _not valid for Drupal 9)_
* [description](#description) _(optional)_
* [dependencies](#dependencies) _(optional)_
* [package](#package) _(optional)_
* [php](#php) _(optional)_
* [version](#version) _(optional)_
* [libraries](#libraries) _(optional)_
* [libraries-override](#libraries-override) _(optional)_
* [libraries-extend](#libraries-extend) _(optional)_
* [hidden](#hidden) _(optional)_
* [engine](#engine) _(optional)_
* [logo](#logo) _(optional)_
* [screenshot](#screenshot) _(optional)_
* [regions](#regions) _(optional)_
* [regions\_hidden](#regions%5Fhidden) _(optional)_
* [features](#features) _(optional)_
* [stylesheets-remove](#stylesheets%5Fremove) _(deprecated)_
* [ckeditor\_stylesheets](#ckeditor%5Fstylesheets) _(optional)_

name _(required)_

The human-readable name. This will appear on the "Appearance" page where the theme is activated.

```yaml
name: Fluffiness
```

type _(required)_

Indicates the type of extension, i.e., "module", "theme", or "profile". For themes this should always be set to "theme". This value is case-sensitive.

```yaml
type: theme
```

base theme _(required)_

A theme can inherit the resources from another theme by [specifying it as a base theme](/node/2165673). It is [recommended](https://www.lullabot.com/articles/a-tale-of-two-base-themes-in-drupal-8-core) to use stable9\. If set to false, no base theme is being used. _(note, if you are changing the base theme of an already-enabled theme, and the base theme is not enabled, uninstall then reinstall the theme so it registers and enables the new base theme)_ 

```yaml
base theme: stable9
```

core\_version\_requirement _(required)_

Allows modules, themes, and profiles to also specify that they are [compatible with multiple major versions of Drupal core](https://www.drupal.org/node/3070687).

```yaml
core_version_requirement: ^8 || ^9
```

description _(optional)_

The description, displayed on the "Appearance" page.


`description: An extra cuddly Drupal theme available in grey and blue.`

dependencies (optional)

List of machine names of other themes necessary to be present and installed to get this theme installed. The base theme is not necessary to get listed here in extra.

module\_dependencies _(optional)_

<!-- note-version -->
> VERSION: Introduced in 8.9.x
See change record.

List of machine names of modules necessary to be present and installed to get this theme installed.

```yaml
dependencies:
  - my_custom_module:my_custom_module
  - drupal:views
  - paragraphs:paragraphs
  - components:components (>=8.x-2.x)
```

package _(optional)_

Specifies a "package" that allows you to group themes together.

```yaml
package: Core
```

core _(required for Drupal 8)_

Specifies the version of Drupal core that the theme is compatible with.

```yaml
core: 8.x
```

It can be omitted if you specify **core\_version\_requirement** and don't support Drupal 8.7.7 and below. See [change record](https://www.drupal.org/node/3070687).

php _(optional)_

The minimum version of PHP required. Defaults to the value of `DRUPAL_MINIMUM_PHP` constant.

```yaml
php: 5.5.9
```

version _(optional)_

Specifies a version. For themes hosted on drupal.org, the version number will be filled in by the packaging script. Do not specify it manually, but leave out the version line entirely.

```yaml
version: 8.x-1.0
```

or

```yaml
version: '1.0'
```

libraries _(optional)_

A list of libraries (which can contain both CSS and JavaScript assets) to add to all pages where the theme is active. [Read more about themes and asset libraries.](/node/2216195) 

```yaml
libraries:
  - fluffiness/global-styling
```

libraries-override _(optional)_

A collection of libraries and assets to override. Read more at [Overriding and extending libraries](https://www.drupal.org/node/2216195#override-extend).

```yaml
libraries-override:
  contextual/drupal.contextual-links:
    css:
      component:
        /core/themes/stable/css/contextual/contextual.module.css: false
```

libraries-extend _(optional)_

A collection of libraries and assets to add whenever a library is attached. Read more at [Overriding and extending libraries](https://www.drupal.org/node/2216195#override-extend).

```yaml
libraries-extend:
  core/drupal.user: 
    - fluffiness/user1
    - fluffiness/user2
```

hidden _(optional)_

Indicates whether or not to hide the theme from the "Appearance" page so that it cannot be enabled/disabled via the UI.

```yaml
hidden: true
```

engine _(optional)_

The theme engine. Defaults to "twig".

```yaml
engine: twig
```

logo _(optional)_

<!-- note-version -->
> VERSION: Introduced in 8.6.x
See change record.

The path to logo relative to the theme's `.info.yml` file. By default, Drupal will look for a file named "logo.svg" in the root of your theme folder and use that as the theme's logo.

```yaml
logo: images/logo.png
```

screenshot _(optional)_

The path to screenshot relative to the theme's `.info.yml` file. Screenshots should be 588 pixels wide and 438 pixels high, though they are displayed at a smaller size. By default, Drupal will look for a file named "screenshot.png" in the root of your theme folder and use that as the theme image on the "Appearance" page.

```yaml
screenshot: fluffiness.png
```

regions _(optional)_

A list of theme regions. (Note that region keys are not preceded by a dash.) A `content` region is required. [Read more about adding regions to a theme.](https://www.drupal.org/node/2469113) 

```yaml
regions:
  header: Header
  content: Content
  sidebar_first: 'First sidebar'
```

regions\_hidden _(optional)_

A list of inherited regions to remove.

```yaml
regions_hidden:
  - sidebar_last
```

features _(optional)_

A list of features to expose on the theme "Settings" page.

```yaml
features:
  - comment_user_verification
  - comment_user_picture
  - favicon
  - logo
  - node_user_picture
```

stylesheets-remove _(deprecated)_

A list of stylesheets from other modules or themes to remove from all pages where the theme is active. Each value must be a full path relative to the docroot to resolve ambiguity when more than one file with the same name exists. In cases where the file is part of a library that belongs to a module or theme, a token in the form `@module_or_theme_name` can be used in place of the full path. Note that when using the token the value must be quoted because "@" is a reserved indicator in YAML. **Note:** This key is deprecated and will be removed in Drupal 9\. In most cases [libraries\-override](#libraries-override) should be used.

```yaml
stylesheets-remove:
  - core/assets/vendor/normalize-css/normalize.css
  - '@stable9/css/core/assets/vendor/normalize-css/normalize.css'
```

ckeditor\_stylesheets _(optional)_

A list of stylesheets to add to the CKEditor frame.

```yaml
ckeditor_stylesheets:
  - https://fonts.googleapis.com/css?family=Open+Sans
  - css/base/elements.css
```