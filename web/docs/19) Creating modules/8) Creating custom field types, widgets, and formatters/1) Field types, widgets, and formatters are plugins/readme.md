---
url: >-
  https://www.drupal.org/docs/creating-custom-modules/creating-custom-field-types-widgets-and-formatters/field-types-widgets
description: >-
  In Drupal 8, field types, widgets, and formatters are all plugins. They are
  automatically discovered if present in the expected directory and using the
  proper annotation. The directory structure of a module that implements all
  three looks as follows: foo_bar_fields foo_bar_fields.info.yml src/ Plugin/
  Field/ FieldType/ FooItem.php FieldFormatter/ FooBarFormatter.php FieldWidget/
  FooBarWidget.php  In this guide, we will create a custom field type, field
  formatter and field widget that generates a random string and displays it.
published_time: '2015-11-22T22:31:56+00:00'
modified_time: '2021-05-08T03:26:04+00:00'
---
In Drupal 8, field types, widgets, and formatters are all plugins.

They are automatically discovered if present in the expected directory and using the proper annotation.

The directory structure of a module that implements all three looks as follows:

foo\_bar\_fields

* foo\_bar\_fields.info.yml
* src/  
   * Plugin/  
         * Field/  
                  * FieldType/  
                              * FooItem.php  
                  * FieldFormatter/  
                              * FooBarFormatter.php  
                  * FieldWidget/  
                              * FooBarWidget.php

In this guide, we will create a custom field type, field formatter and field widget that generates a random string and displays it.

The name of the module will be random and it will contain the following structure:

random

* random.info.yml
* src/  
   * Plugin/  
         * Field/  
                  * FieldType/  
                              * RandomItem.php  
                  * FieldFormatter/  
                              * RandomDefaultFormatter.php  
                  * FieldWidget/  
                              * RandomDefaultWidget.php