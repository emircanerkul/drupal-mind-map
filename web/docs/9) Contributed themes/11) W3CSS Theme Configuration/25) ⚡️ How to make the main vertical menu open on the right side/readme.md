1. Create a sub-theme.
2. copy page .../d8w3css/templates/layout/page.html.twig to the sub-theme.
3. Open page.html.twig in the sub-theme and find the words "main-navigation-v". On the same line, change "w3-animate-left" to "w3-animate-right".
4. Find the word "open-nav-inner". On the same line, change "w3-left" to "w3-right".
5. Copy and paste the following css in the sub-theme css style file:  
#main-navigation-v.w3-sidebar{right:0;}#open-nav-inner {margin:0 0 0 10px!important;}