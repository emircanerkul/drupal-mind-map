Block IDs identify block lists entered into two sections.

For each section below, list each name or value on a new line in the appropriate section. 

### Listing a Block

To remove or allow a block within Drupal, add the **block machine ID (block ID)** to the appropriate available matchings:

* Match: all blocks that have an exact block ID match.
* Prefix: all blocks that have a specific prefix followed by a colon.
* Regex: all blocks determined from a regular expression (regex) string.

Lists are configurable for two list-types:

### Block Lists

Block List Override also provides a full listing of active Drupal blocks. Use the lists to identity block IDs and figure out which patterns and items you want to remove. The lists will be updated whenever Block List Override settings have been updated.

**System-Wide List**

Block List Override provides a list of system blocks ( admin/config/block\_list\_override/system-list ).

### Layout Builder List

Block List Override provides a list of Layout Builder blocks ( admin/config/block\_list\_override/layout-list ).

### Examples

#### Match

Remove or allow the system branding block:

`system_branding_block`

#### Prefix

Remove or allow all system menu blocks (blocks like system\_menu\_block:main):

`system_menu_block`

#### Regex

Remove or allow all devel blocks:

/devel(.\*)/

![](https://www.drupal.org/files/live-module-demo_pantheonsite_io_admin_config_block_list_override_settings.jpg)