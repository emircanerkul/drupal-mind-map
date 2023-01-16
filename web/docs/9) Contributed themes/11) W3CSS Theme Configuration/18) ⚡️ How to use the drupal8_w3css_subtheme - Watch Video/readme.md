Inside the folder your-drupal-site-directory/themes/drupal8\_w3css\_theme/drupal8\_w3css\_subtheme you will have all the necessary files for start up sub-theme.

### Steps for creating a new sub-theme for W3CSS Theme.

1. Copy the sub-theme from the W3CSS Theme and paste it in your custom theme directory.
2. Re-name the copied folder to have the new sub-theme name. Example: my new sub-theme is w3css\_subtheme. I will rename the folder from "drupal8\_w3css\_subtheme" to "w3css\_subtheme".
3. Open the new named sub-theme folder "w3css\_subtheme" and change the following files' names from:  
   * drupal8\_w3css\_subtheme.theme >> To >> w3css\_subtheme.theme  
   * drupal8\_w3css\_subtheme.info.yml >> To >> w3css\_subtheme.info.yml  
   * drupal8\_w3css\_subtheme.libraries.yml >> To >> w3css\_subtheme.libraries.yml
4. Open the file w3css\_subtheme.info.yml in your text editor and edit the following:  
   * line 1 from "Drupal8 W3CSS Subtheme" >> To "W3css Subtheme", This is human readable name.  
   * line 8 from "drupal8\_w3css\_subtheme/d8w3css-subtheme-global" >> To >> "w3css\_subtheme/d8w3css-subtheme-global".  
   * _We are only changing the drupal8\_w3css\_subtheme to the new sub theme name. The name "d8w3css-subtheme-global" is the library name and MUST match the name in w3css\_subtheme.libraries.yml._  
    _If you would like to change the library name you MUST change it in both files._
5. Make sure the spaces in this file are not changed. The sub-theme now is ready to be enabled.

### Steps for creating a new sub-theme of a sub-theme.

#### I will be using the sub-theme Amun as an example and you can follow these steps with any of the sub-themes.

1. Copy the amun\_subtheme from the Amun Sub-Theme and paste it in your custom theme directory.
2. Re-name the copied folder to have the new sub-theme name. Example: my new sub-theme is amun\_custom\_subtheme. I will rename the folder from "amun\_subtheme" to "amun\_custom\_subtheme".
3. Open the new named sub-theme folder "amun\_custom\_subtheme" and change the following files' names from:  
   * amun\_subtheme.theme >> To >> amun\_custom\_subtheme.theme  
   * amun\_subtheme.info.yml >> To >> amun\_custom\_subtheme.info.yml  
   * amun\_subtheme.libraries.yml >> To >> amun\_custom\_subtheme.libraries.yml
4. Open the file amun\_custom\_subtheme.info.yml in your text editor and edit the following:  
   * line 1 from "Amun Sub-Theme" >> To "Amun Custom Sub-theme", This is human readable name.  
   * line 8 from "amun\_subtheme/amun-subtheme-global" >> To >> "amun\_custom\_subtheme/amun-subtheme-global".
5. Make sure the spaces in this file are not changed. The sub-theme now is ready to be enabled.