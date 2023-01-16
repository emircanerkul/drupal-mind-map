1. Download a font in **woff2**format, for example from [https://google-webfonts-helper.herokuapp.com/fonts/roboto-serif?subsets=...](https://google-webfonts-helper.herokuapp.com/fonts/roboto-serif?subsets=latin). As of today (Oct. 2022) [WOFF 2.0 supports 96.93% of all browsers](https://caniuse.com/woff2).
2. In your sub-theme, create a new folder called **fonts** and place the font file in it, ending up with this path:  
_b5subtheme/fonts/roboto-serif-v8-latin-regular.woff2_
3. Create a new file called **custom-style.css** in the **css** folder:  
_b5subtheme/css/custom-style.css_  
... and register the font, by adding this in the **custom-style.css** file, as well as display h2 with the Roboto Serif font:  
```yaml  
@font-face {  
  font-family: "Roboto Serif";  
  src:  
    local("Roboto Serif"),  
    url("../fonts/roboto-serif-v8-latin-regular.woff2") format("woff2");  
  font-weight: 400;  
  font-style: normal;  
}  
h2, .h2 {  
  font-family: "Roboto Serif";  
}  
```
4. Register the **css/custom-style.css** file by adding a reference to it in **b5subtheme.libraries.yml** like this, below the existing lines:  
```yaml  
global-styling:  
  css:  
    theme:  
      css/style.css: {}  
      css/custom-style.css: {}  
```
5. After clearing caches, h2 tags should now be displayed with the Roboto Serif font.