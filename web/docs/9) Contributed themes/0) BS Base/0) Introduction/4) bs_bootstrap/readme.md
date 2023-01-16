Bs\_bootstrap is a child sub-theme implementation of \`bs\_base\` base theme. You start from this theme in your custom theme.

With this theme, your child theme will get Bootstrap 4 support and implementation, a ton of SASS variables you can override and various frontend options in theme settings like:

* Header top container type: fixed or fluid,
* Navbar container type: fixed or fluid,
* Navbar type:  
   * Second level horizontal - your second level menu items will be laid out in a horizontal row. They can have third level menu items in a dropdown. With this option you have one additional option:  
         * Navbar show sub-level on hover - should we display the second level on first menu level hover or not.  
   * Second level dropdown - your second level menu items are in a dropdown.
* Navbar off canvas type. This is for responsive main navigation menu support and it basically controls the type of reveal animation for sidebar responsive navigation menu.
* Navbar off canvas position. Works with previous option.
* Language block type. With this, you can control how language block links will be rendered as a regular block navigation links or as a dropdown menu.
* Language block title. Controls the label of language links as a language label or language ISO code.
* Inline SVG logo. If the theme logo is SVG you can inline it in HTML code with this option. Useful when you want to have more CSS control with SVG logo parts.

As you see you will get a lot of help and options out of the box with this base theme system, but hold on, there is even more ;) Instead of writing more boring text lets dive into an example and explain other advanced concepts in real life example.