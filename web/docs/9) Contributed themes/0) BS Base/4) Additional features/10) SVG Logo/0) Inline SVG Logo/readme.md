For advanced SVG logo styling with CSS rules, you can inline SVG logo into the HTML. On the same theme settings page find 'Inline SVG logo' section and turn it on:

![](https://www.drupal.org/files/bs-base--svg-logo-inline.png)

Now your site will use SVG logo which is inlined in HTML and you can add custom CSS rules to control logo display like hiding parts of logos on smaller screens, colour changes, etc.

<!-- note-tip -->
> TIP: When changing bs_bootstrap theme settings for your theme do not forget to clear site cache, otherways you will probably not see changes when you check them in a web browser.

<!-- note-tip -->
> TIP: If you want to support Internet Explorer 11 browser then you need to&nbsp;use width and height attributes in SVG tag. Without this attributes IE11 will render logo in wrong dimensions.
Firefox 60 doesn't display SVG logo if the file is "responsive" (without dimensions), so you need to provide SVG file with width and height . In Illustrator you can achieve this when uncheck the box "Responsive".