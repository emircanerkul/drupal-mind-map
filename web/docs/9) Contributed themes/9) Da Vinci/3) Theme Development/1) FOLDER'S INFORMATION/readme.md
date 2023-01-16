### **ASSETS**

Tendremos la carpeta font, sass e images. 

Carpeta font junto a la carpeta sass para poder usar una carga limpia como lo hacemos con las imágenes ../fonts. 

Carpeta images será donde meteremos nuestras imágenes y estas se optimizarán y serán enviadas a la carpeta images. \*\*\* Puede que haya algún error por subcarpetas o por extensión de fichero, en ese caso recomendamos usar <https://tinypng.com/> y añadirla a la carpeta images. Verificar que la borra o que no pasa nada raro. 

### **CONFIG**

Tendremos dos carpetas, install y scheme. la que nos importa es la de install que básicamente es donde se definen que bloques se muestran en que región en la primera instalación.

### **CSS**

Tendremos los ficheros css compilados. esta carpeta como indica su readme no debe ser tocada

### **IMAGES**

Tendremos los recursos. leer README.md. Esta será tu carpeta images a usar tanto en rutas como en tu css. “../images”. tus imágenes optimizadas se mandarán aqui. Recuerda añadirlas a la carpeta assets/images para que el gulp las minimize, optimice y las mande a esta carpeta.

### **JS**

Tendremos ficheros

### **TEMPLATES**

Tendremos los templates modificados por mejoras de accesibilidad y apariencia.

OVERRIDING TEMPLATES: Da Vinci is using Classy as base theme so an override is as simple as copying one of Classy's templates into your templates directory.  
More info in templates directory (README.md file)

README.md  
block  
layout

bem y accesibilidad.   
comentar el diff de las 4 plantillas o 5 en caso de añadir el search o alguna más. Respecto a Classy del core.

### **SASS FOLDER**

IMPORTANT: Remember don't edit the main.css files, because your changes will be removed when Gulp compiles.  
For more info, check README in /assets/sass directory.

Readme.md → merece la pena leerlo, de todas formas 

Once you have your 'gulp watch' launched, everytime you write in a sass file  
and then save, Gulp will save your changes into main.css, so main.css will be  
overriden. Or if you have new changes and run 'gulp styles:dev' (for  
development enviroment) or 'gulp styles:pro' (production enviroment)  
you will be in the same situation.

Sass files are classified into different categories:

* Base → skinr file (which contains elements and typography styles)·
* Components → styles for component elements such as breadcrumbs, pager, buttons... and other elements you can be used anywhere on the website.
* Layout → styles for layout elements such as header, footer, sidebar...
* Pages → styles for specific kind of pages
* Utils → functions, helpers, mixins and variables.

Feel free to add your own sass files :)

For more info, check main.sass (located in da\_vinci/assets/sass)

Podemos empezar a trabajar con nuestro Theme usando 'gulp watch' y empezar a customizarlo a nuestro gusto e ir viendo los resultados.

Para ello vamos a realizar un pequeño check al fichero main.sass y luego iremos a las carpetas comentadas anteriormente (Base, Components, Layout, Pages & Utils).  