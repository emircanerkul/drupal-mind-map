Fluffiness is an example of a sub-theme that [uses Stable 9 as a base theme](/docs/theming-drupal/sub-theming-using-stablestable-9-as-a-base-theme).

This is the folder structure you'll end up with by implementing the following files.

```php
themes/
└──  fluffiness/
     ├── fluffiness.info.yml
     └── fluffiness.libraries.yml
```

The info file is named `fluffiness.info.yml`.

```yaml
name: Fluffiness
type: theme
description: This is a fluffy sub theme of Stable 9
core_version_requirement: ^8 || ^9 || ^10
# Defines the base theme
base theme: stable9
# Defines libraries group in which we can add CSS/JS.
libraries:
  - fluffiness/global-styling
# Regions, quote the names
regions:
  header: 'Header'
  featured: 'Featured'
  content: 'Content'
  sidebar_first: 'First sidebar'
  sidebar_second: 'Second sidebar'
  footer: 'Footer'

```

Include `fluffiness.libraries.yml` file to add CSS/JS in a `global-styling` group, defined above in the `libraries:` key.

```yaml
global-styling:
  css:
    component:
      css/style.css: {}

```

Read more about [adding stylesheets (CSS) and JavaScript (JS) to a Drupal 8 theme](/theme-guide/8/assets).

If you want to use a different name instead of _fluffiness_, just replace all occurrences of _fluffiness_ with your own name (including the folder name), like the following, for example.

```php
themes/
└──  my_custom_theme/
     ├── my_custom_theme.info.yml
     └── my_custom_theme.libraries.yml

```

The text you put in the `name:` line of the info.yml file is free-form and doesn't need to exactly match your sub-theme's filename. For example, it could be like this.

```yaml
name: My Custom Theme
# (all the other lines omitted for brevity)
```

### Sub-theme of a sub-theme

When creating a sub-sub-theme of a sub-theme, you must specify the sub-theme you want to extend as a base theme.

* Fluffiness: First sub-theme of Stable 9  
```yaml  
name: Fluffiness  
type: theme  
description: This is a fluffy sub theme of Stable 9  
# Defines the base theme  
base theme: stable9  
```
* Shaved: sub-theme of Fluffiness (sub-sub-theme of Stable 9)  
```yaml  
name: Shaved  
type: theme  
description: This is a reduced fluff sub theme of Fluffiness  
# Defines the base theme  
base theme: fluffiness  
```

Note that the `base theme:`parameter is the _machine name_ of the base theme, whereas the `name:` parameter is a descriptive name.

### Inheriting Theme Regions

Theme regions are not inherited from the specified `base theme`. If the `regions:` parameter is left blank in your sub-theme's `info.yml` file or doesn't contain all regions from your base theme, then Drupal [default regions](https://www.drupal.org/docs/8/theming/adding-regions-to-a-theme#default%5Fregions) may be used as fallbacks for block placement in your sub-theme. **We highly recommend copying all regions defined in your base theme into your sub-theme's `info.yml` file.**

```yaml
# Because regions are not inherited, any region including standard
# Drupal regions as well as base theme regions must be defined in
# the sub-theme. This example demonstrates a sub-theme that leverages
# a subset of the standard Drupal regions (1), plus some custom
# regions defined in the base theme (2), and finally three
# "colophon"-related regions defined in this sub-theme.  
regions:
  # 1. Standard Drupal regions (also defined and used by base theme).
  # 2. Regions copied from base theme.
  # 3. Additional custom sub-theme regions.
  header:             'Header'                    # 1
  primary_menu:       'Main menu'                 # 1
  secondary_menu:     'Secondary menu'            # 1
  highlighted:        'Highlighted'               # 1
  help:               'Help'                      # 1
  section_nav:        'Section Nav'               # 2
  breadcrumb:         'Breadcrumb'                # 1
  page_title:         'Page Title'                # 2
  local_tasks:        'Local Tasks'               # 2
  content:            'Content (Constrained)'     # 1
  content_fullwidth:  'Content (Edge-to-edge)'    # 2
  colophon_first:     'Colophon First Col'        # 3
  colophon_second:    'Colophon Second Col'       # 3
  colophon_third:     'Colophon Third Col'        # 3
  footer:             'Footer'                    # 1


```

### Inheriting Block Placement

In Drupal 8, themes may come with `config/install/` or `config/optional/` folders where pre-defined block configurations—including placement into theme regions—will be imported upon enabling the theme. If a sub-theme does not supply its own block configurations, Drupal will inherit these block configurations and region placement from the base theme. But, if the theme regions defined in your sub-theme's `info.yml` file do not match those available in the base theme, unpredictable placements in random regions can occur. 

Block placement inheritance only occurs:

* From the current default theme
* Only if the sub-theme does _not_ have _any_ of its own block placement configs
* Will place blocks in the theme's default region if a matching region could not be found

### Inheriting Block Templates

If the theme you are extending has custom block templates these won't be immediately inherited because a sub-theme creates copies of all the blocks in the parent theme and renames them with the sub-theme's name as a prefix. Twig block templates are derived from the block's name, so this breaks the link between these templates and their block. Fixing this problem currently requires a hook in the sub-theme. Following the examples above, we'd create a file called shaved.theme in the sub-theme's directory. In that file insert this code.

```php
/**
 * Implements hook_theme_suggestions_HOOK_alter for blocks.
 */
function shaved_theme_suggestions_block_alter(&$suggestions, $variables) {

  // Load theme suggestions for blocks from parent theme.
  foreach ($suggestions as &$suggestion) {
    $suggestion = str_replace('shaved_', 'fluffiness_', $suggestion);
  }
}
```

For your own sub-themes replace _shaved_ with the name of your sub-theme and _fluffiness_ with the name of your base theme. 