The subtheme 'README.txt' file also speaks of changing an additional line of code in the file 'my\_zen\_sub.info.yml'. That line is:  
`description: Read the <a href="... `

That 'description' is only displayed on your site's administrative 'Appearance' page, alongside the name and screen-shot for your subtheme.

I do not bother with that line of code, because I am the only one who will ever see the 'Appearance' page, and so I leave the 'description' as it is.

If you will have other administrators who will have access to the 'Appearance' page, and you want to change the description, then feel free. You can use some html in the 'description', like hyper-links (<a href=""...), but not all html tags are allowed.

**Warning:** For both

* zen-8.x-7.0-alpha14
* zen-8.x-7.x-dev \[2016-Jul-14\]

### Do Not set the Zen base-theme as your site's 'Administrative Theme'.

If you set the Zen Base-theme as your 'Administrative Theme', it will break your site, and will render Zen permanently unusable on that site.

See this issue, which includes instructions for recovering the site: [Setting Zen Base-theme as Administrative Theme breaks site, and renders Zen permanently unusable \~ drupal.org/node/2769557](https://www.drupal.org/node/2769557 "   This link opens in a new tab/window. [https://www.drupal.org/node/2769557]") (This link opens in a new tab/window.)

### Prevention

To prevent yourself from accidentally enabling the base-theme Zen as the 'Administration theme'  
 add the code...  
`hidden: true`  
 ...to file...  
`zen.info.yml`  
 ...at...  
`[d8-root]/zen/zen.info.yml`

Note: That code is Not to be placed in the \*.info.yml file for your subtheme, but rather, in the zen.info.yml file for the Zen base-theme.

By setting the Zen base-theme to 'hidden', it simply prevents it from appearing on the 'Appearance page', and so you will not have to worry about accidentally setting it as the 'Administration theme'.