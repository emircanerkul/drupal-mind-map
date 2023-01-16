### From \_self

It's possible to place the macro within the same twig from which you call it. The \_self context is used in this case...

{{ _self.input(name, value, type, size) }}


### From External File

However, it's best practice to place macro(s) in a separate file (e.g., macros.twig) so that macro(s) can be used in more than one template.

For example, in a custom theme called "mytheme", we place the macros file here...

[site_root]/themes/custom/mytheme/templates/macros.twig

_Note: the macros file can be named anything.twig, but cannot have the 'html' extension (i.e., macros.html.twig will not work). The file must also be placed in the "templates" directory regardless of where it is being used (i.e. for Layout Builder layouts that you've placed into .../mytheme/layouts, the macro must exist in ../mytheme/templates)._

In the template where you want to use the macro, add this import statement.

{% import '@mytheme/macros.twig' as myMacros %}

The @mytheme magically locates your theme's "templates" directory but you must define any further directory structure in your import statement, as in:

{% import '@mytheme/foo/bar/macros.twig' as myMacros %}

Note that older versions of this documentation stated that defining the nested directory structure wasn't needed, so ymmv. If you're doing this in a custom module, use the same technique, just use the module name instead of the theme name (e.g., @mycustommodule).

Then to use the macro...

{{ myMacros.input(name, value, type, size) }}