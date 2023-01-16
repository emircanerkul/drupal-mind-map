In each directory you can read information about it and its files. Let's talk about some files in our theme root directory!

README.md → Breve introducción al Theme, requerimientos, instalación y uso.

### JSON FILES

package.json → Npm dependencies, for 'npm install'. If you want a new dependency for your project 'npm install your-dependency --save' will save your dependency in this file.

composer.json → File to install Da Vinci with composer

da\_vinci.icons.json → File with icon information. This file is use for import and export into Icomoon.

package-lock.json → fichero generado tras el npm install, bloquea las versiones usadas paraa que no haya incompatibilidad si otro compañero trabaja.

### GULP FILE

gulpfile.js → Here we have all our tasks that we can do with Gulp. Write 'gulp' in your terminal and read some help about our tasks.

### YML/PHP FILES

da\_vinci.breakpoints.yml → Define Da Vinci breakpoints (Important for responsive).

da\_vinci.info.yml → The main file of our theme. We define name, version, base theme... Also we define our regions, and call to our css/js libraries.

da\_vinci.libraries.yml → To define our css and js libraries.

da\_vinci.theme → See Preprocess and suggestions for more info .

PREPROCESS: You can affect the output of certain HTML via preprocess functions. For example, if you wanted to add a class to a menu and preferred to do this at the PHP level you can.  
The main role of the preprocessors is to set up variables to be placed within the template. If you need to preprocess theme variables for templates, you only need to implement hooks for the chosen template in da\_vinci.theme file.  
Create a function such as da\_vinci\_preprocess\_HOOK where HOOK refers to the item you wish to affect.  
Write your changes and save.  
Rebuild the cache so your changes are available.

theme-settings.php → Config and Da Vinci settings that you can admin in admin/appearance/settings/da\_vinci

### IMG FILES

logo.svg & logo.png → Logo en ambas versiones, por defecto Drupal pilla el svg. en el caso que se quiera el png hay que hacer esto ….., y siempre está la opción de poder subirlo desde aqui.  
Default logo, you can override or add your own in the Da Vinci settings.

favicon.ico & favicon.png → Favicon en ambas versiones. por defecto Drupal pilla .ico el png es una issue abierta en el core, y siempre existe la opción de subirlo desde interfaz.   
<https://www.drupal.org/project/drupal/issues/3037922> y podemos instalar módulo responsive\_favicon  
Default Favicon, you can override or add your own in the Da Vinci settings.

screenshot.png → Screenshot que aparecerá en Apariencias, se recomienda poner un pantallazo del diseño de la home.  
The main image of the theme that you see in Appearance, you can override for add your own.