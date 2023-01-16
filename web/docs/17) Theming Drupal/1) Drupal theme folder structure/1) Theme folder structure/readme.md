This is an example of the files and folders that are found in typical theme folder structure:

```php
  |-fluffiness.breakpoints.yml
  |-fluffiness.info.yml
  |-fluffiness.libraries.yml
  |-fluffiness.theme
  |-config
  |  |-install
  |  |  |-fluffiness.settings.yml
  |  |-schema
  |  |  |-fluffiness.schema.yml
  |-css
  |  |-style.css
  |-js
  |  |-fluffiness.js
  |-images
  |  |-buttons.png
  |-logo.svg
  |-screenshot.png
  |-templates
  |  |-maintenance-page.html.twig
  |  |-node.html.twig

```

Below is a description of the most common files that you can find in a theme.

### \*.info.yml

A theme must contain an [.info.yml file to define the theme](/node/2349827). Among other things the .info.yml files define metadata, libraries, and block regions. This is the only required file in the theme.

### \*.libraries.yml

The [.libraries.yml file is used to define JavaScript and CSS libraries](/theme-guide/8/adding-javascript) that can be loaded by the theme.

### \*.breakpoints.yml

Breakpoints define where a responsive design needs to change in order to respond to different devices. [Breakpoints are defined in a .breakpoints.yml file.](/documentation/modules/breakpoint)

### \*.theme

The .theme file is a PHP file that contains all the conditional logic and data (pre)processing of the output. It may also extend basic theme settings. [Creating advanced theme settings](/node/2623936).

### css/

It is good practice to store .css files in the 'css' subfolder. [Drupal 8 core themes organize CSS files following the SMACSS style guide](/node/1887922). For a theme to load CSS files they must be [defined in .libraries.yml file](/theme-guide/8/adding-javascript) and can be [overridden or removed in .info.yml file](/node/2349827).

### js/

Theme specific JavaScript files are stored in the 'js' folder. For a theme to load JavaScript files they must be [defined in .libraries.yml file](/theme-guide/8/adding-javascript).

### images/

It is good practice to store images in the 'images' subfolder.

### screenshot.png

If a screenshot.png file is found in the theme folder, then it will be used on the Appearance page. Alternatively, you can [define a screenshot in .info.yml file](/node/2349827).

### logo.svg

If a SVG vector file of your theme's logo is found in the theme folder, then it may be used in the header of the website. Logos can also be uploaded at `Appearance > Settings`.

### templates/

Templates provide HTML markup and some presentation logic. Contrary to Drupal 7, in Drupal 8 template files (\*.html.twig files) _must_ be stored in the 'templates' subfolder. [If you follow particular naming conventions, then Drupal will replace the default core templates by the ones you provide](/node/2354645), allowing you to override the default markup. You also can organize your templates in subfolders, for example all block templates inside templates/block and all views templates inside templates/views.