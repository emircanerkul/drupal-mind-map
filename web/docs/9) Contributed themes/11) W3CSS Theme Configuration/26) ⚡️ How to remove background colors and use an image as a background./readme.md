Create a sub-theme

Go to d8w3css/css/w3-css-theme-custom and copy w3-theme-00029.css file inside your-sub-theme/css folder.

Open your-sub-theme/css/w3-theme-00029.css: and update the image path. Look for page-wrapper and change `background-image: url(../../images/page-wrapper.jpg);` to `background-image: url(../images/page-wrapper.jpg);`  
  
Note: **The image name and the image extension must match the new image.**

 Example: `background-image: url(../images/my-custom-image.png);`

Open your-sub-theme.libraries.yml and paste css/w3-theme-00029.css: {} under css/styles.css: {}.

Note: **Spacing must be aligned exactly underneath.**

Create a folder inside the sub-theme and name it images. Add the image you want to use as a background inside images folder.