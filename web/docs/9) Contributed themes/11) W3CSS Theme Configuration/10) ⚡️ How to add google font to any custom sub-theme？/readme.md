I will be using in this example google lexend. <https://fonts.google.com/specimen/Lexend>

1. Open your-sub-theme-name.libraries.yml and add:  
`google-font-ex-lexend: Version: VERSION css: base: 'https://fonts.googleapis.com/css2?family=Lexend&display=swap': { type: external, minified: true }`  
![Change Font](https://www.drupal.org/files/custom-font-step-1.png)
2. Open your-sub-theme-name.info.yml and add:  
`- w3css_subtheme/google-font-ex-lexend`  
![Change Font](https://www.drupal.org/files/custom-font-step-2.png)
3. Open your-sub-theme/css/style.css and add:  
`h1, h2, h3, h4, p, html, body { font-family: 'Lexend', sans-serif; }`  
![Change Font](https://www.drupal.org/files/custom-font-step-3.png)