The system adds a "Style" field to many of its paragraphs. This style will produce a class on the paragraph on its outermost wrapper div.

To customize the list of styles the \[theme\_name\]\_configuration.yml needs to be added to the theme's config/custom folder. An example can be seen at web/profiles/cappuccino/themes/ino\_basetheme/config/custom/ino\_basetheme\_configuration.yml.  
This list is handled by the ino\_pt\_helper module.

The "Custom CSS class(es)" field can also be found on many of the paragraphs. This is another way to specify a custom class on the outermost wrapper div of the paragraph.