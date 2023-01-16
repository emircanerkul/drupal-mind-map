Each layout definition **must** have the following keys:

label

The human-readable name of the layout.

category

The human-readable category to which the layout belongs.

regions

Array of regions in the layout. The keys are the regions' machine names and the values are sub-arrays containing the following elements:
* `label` (required): The human-readable name of the region.

theme\_hook

If specified, the theme hook which will be used to render this layout. It's expected that the module or theme which registers the layout will also register this theme hook. If you use this key, you cannot use `template`.

template

If specified, the template to use to render the layout, relative to the given `path`, without the .html.twig extension. If given, the template will be automagically registered with the theme system. If you use this key, you cannot use `theme_hook`.

Each layout definition can also have the following **optional** keys:

default\_region

Machine-readable name of the default region.

icon\_map

YML structure to describe the icon used in the layout builder interface

description

Optional description of the layout.

path

Path (relative to the module or theme) to resources like icon or template.

library

The asset library to load for this layout. If given, it's expected that the module or theme which registers the layout has also registered the library in its \*.libraries.yml file. If you use this key, you cannot use `css`. [Click here for more information about asset libraries in Drupal 8.](/developing/api/8/assets)