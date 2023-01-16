---
url: https://www.drupal.org/docs/contributed-themes/reactify/local-development
description: >-
  React components and build tools are located in 'react' folder. Enter 'react'
  folder and install node modules necessary for theme and development by running
  'npm i'. Theme uses Webpack for development and build processes. There are 2
  webpack configuration files for development and production build. For
  development run 'npm run dev' and theme will be available on the address
  'http://localhost:8080' with hot reloading enabled. It uses
  webpack.dev.config.js For building run 'npm run build' and it will use
  webpack.prod.config.js.
published_time: '2018-04-06T06:44:17+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
React components and build tools are located in 'react' folder.  
Enter 'react' folder and install node modules necessary for theme  
and development by running 'npm i'.

Theme uses Webpack for development and build processes.  
There are 2 webpack configuration files for development and  
production build.

For development run 'npm run dev' and theme will be available on  
the address '<http://localhost:8080>' with hot reloading enabled.  
It uses webpack.dev.config.js

For building run 'npm run build' and it will use  
webpack.prod.config.js. Created files are called  
bundle.js and bundle.css and files will be placed to 'build'  
folder in theme root. Theme's libraries.yml file defines  
created files as theme's assets.

Reactify uses 'reactify\_utilities' module for creation of theme settings,  
REST endpoints and authentication.

Even though Drupal 8 provides good foundation for REST services,  
some features still were added.  
Module can serve as example for building custom functionality.