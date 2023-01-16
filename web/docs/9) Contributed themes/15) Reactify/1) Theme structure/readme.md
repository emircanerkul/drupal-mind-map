---
url: https://www.drupal.org/docs/contributed-themes/reactify/theme-structure
description: >-
  Compiled React app is located in 'build' folder and is attached as a library
  in theme info.yml file App's source code lives in 'src' folder and structured
  in various folders for further maintainability. The theme uses Redux for state
  management and React router for routing. Theme was designed as single page
  app, though it excludes paths to '/user*' and '/admin*' sections for accessing
  Drupal backend. This is relevant for projects using theme on the same domain
  as Drupal's backend. It can be used as well on another domains.
published_time: '2018-04-06T06:33:09+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
Compiled React app is located in 'build' folder and is attached as a library in theme info.yml file  
App's source code lives in 'src' folder and structured in various folders for further maintainability.

The theme uses Redux for state management and React router for routing.  
Theme was designed as single page app, though it excludes paths to '/user\*' and '/admin\*' sections for accessing Drupal backend.  
This is relevant for projects using theme on the same domain as Drupal's backend.

It can be used as well on another domains. In that case it would need only 'build' folder and some .html file for mounting app.  
Also, backend's url should be specified in 'src/config.js' file for REST requests to backend. By default there is empty string and,  
thus, theme requests endpoints on the same domain.

The theme has public and protected areas. Protected area is available after signing in on /dashboard\* urls.