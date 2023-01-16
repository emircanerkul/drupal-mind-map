---
url: >-
  https://www.drupal.org/docs/drupal-apis/entity-api/using-the-ui-to-export-the-code-for-your-custom-fields
description: >-
  Sometimes when you're pulling in a content type from a custom module, you'd
  also like to pull in fields specific to this content type. Being able to have
  the fields automatically created allows you to uninstall and reinstall in
  multiple sites without leaving excess fields behind and guaranteeing you won't
  forget to add them. There are two ways to add these fields to your codebase
  that we'll cover. Prerequisites Drupal 8.0.x installed. Have a custom module
  (the name of the module used in this example is foobar).
published_time: '2016-03-25T03:10:16+00:00'
modified_time: '2019-06-14T12:12:46+00:00'
---
Sometimes when you're pulling in a content type from a custom module, you'd also like to pull in fields specific to this content type. Being able to have the fields automatically created allows you to uninstall and reinstall in multiple sites without leaving excess fields behind and guaranteeing you won't forget to add them. There are two ways to add these fields to your codebase that we'll cover.

### Prerequisites

* Drupal 8.0.x installed.
* Have a custom module (the name of the module used in this example is `foobar`).
* Have a custom content type in the module (Please follow the steps in the [parent page](https://www.drupal.org/node/2629550). The content type name will be Car Brand).

### Adding additional fields to our content type

There are two ways to go about doing this step. You can either use the UI to create the fields and export the configuration into files or you can just write the files yourself. I like using the first option just to make sure you don't miss anything that would be needed, however the fields are exported with 'field\_' at the beginning rather than 'foobar\_car\_brand\_' to associate them with our custom content type. We'll cover using the UI to create the fields and export the code to be used in your custom module on this page.

#### Using the UI to create fields

As stated before, this method is a little better for users who aren't very familiar with the requirements Drupal has for adding fields to a content type.

**Enable the custom content type**

If you didn't already enable the foobar module at the end of the [parent page](https://www.drupal.org/node/2629550), go ahead and do so now. If you now go to the _Create content_ page, you will see that you're able to create a new node of the content type "Car Brand".

**/admin/structure/types/manage/car\_brand/fields**

Now that you have the module enabled you can go to the manage fields section of your content type. Add all the fields that you want. Just make sure one of the fields you add is "Brand Information" (field\_brand\_information) of the field type Text(formatted, long, with summary), and delete the Body field. Leave everything else as default.

#### Using the UI to export field configuration

**/admin/config/development/configuration/single/export**

Once you get your fields added, go to the Configuration Synchronization page. At the top there are three tabs. Select "Export" from those three. Then select "Single item" just below those tabs.

**Get export configuration**

Attached below are four images showing which items you need to export for the field "field\_brand\_information".

* Field Storage
* Field
* Entity View Display
* Entity Form Display

Underneath the configuration code block you'll see a filename that you should create within your custom module. Copy everything in the configuration code into the specified file except for the first line starting with "uuid: ".

_Note: if you added any additional fields, you'll need to export the Field Storage and Field for each one of them. The same goes if you have created multiple displays such as a teaser. In this example we only show the default displays._

**modules/custom/foobar/config/install/field.storage.node.field\_brand\_information.yml**  
![Field Storage Export](https://www.drupal.org/files/field_storage.png)

**modules/custom/foobar/config/install/field.field.node.car\_brand.field\_brand\_information.yml**  
![Field Export](https://www.drupal.org/files/field_5.png)

**modules/custom/foobar/config/install/core.entity\_view\_display.node.car\_brand.default.yml**  
![Entity View Display Export](https://www.drupal.org/files/entity_view_display.png)

**modules/custom/foobar/config/install/core.entity\_form\_display.node.car\_brand.default.yml**  
![Entity Form Display Export](https://www.drupal.org/files/entity_form_display.png)

#### Uninstall and Re-enable the foobar module

Now that you have all of your field configurations in your codebase, it is time to uninstall the foobar module. Once you have uninstalled the module, go back and enable the module to see if it brings in your custom fields. If you now go to the _Create content_ page, you will see that you're able to create a new node of the content type "Car Brand" and it will include our new field named "Brand Information" and any other fields you've created.