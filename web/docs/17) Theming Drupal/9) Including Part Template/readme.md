---
url: https://www.drupal.org/docs/8/theming-drupal-8/including-part-template
description: >-
  Many themers prefer to keep header/footer codes in a separate file and call
  the file in page.html.twig Process Let's say you have created following file
  in your theme folder for the header:
  THEME_NAME/templates/includes/header.html.twig And now you want to include
  this file in: page.html.twig The recommended method The correct method for
  Drupal 8 themes is to use Twig namespaces to declare the current theme
  "templates" directory. Here is an example: {% include
  '@THEME_NAME/includes/header.html.twig' %} Below is an example taken from a
  working theme on Drupal.org called Architect.
published_time: '2015-12-13T10:50:25+00:00'
modified_time: '2022-08-23T09:59:49+00:00'
---
Many themers prefer to keep header/footer codes in a separate file and call the file in page.html.twig