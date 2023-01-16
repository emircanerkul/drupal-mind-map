---
url: https://www.drupal.org/docs/8/core/modules/field-ui/overview
description: >-
  About The Field UI module provides an administrative user interface (UI) for
  managing and displaying fields. Fields can be attached to most content entity
  sub-types. Different field types, widgets, and formatters are provided by the
  modules enabled on your site, and managed by the Field module. For background
  information and terminology related to fields and entities, see the Field
  module documentation. Uses Creating a field On the Manage fields page for your
  entity type or sub-type, you can add, configure, and delete fields for that
  entity type or sub-type.
published_time: '2018-01-04T17:24:07+00:00'
modified_time: '2018-01-04T17:30:16+00:00'
---
### About

The Field UI module provides an administrative user interface (UI) for managing and displaying fields. Fields can be attached to most content entity sub-types. Different field types, widgets, and formatters are provided by the modules enabled on your site, and managed by the Field module. For background information and terminology related to fields and entities, see the [Field module documentation](https://www.drupal.org/docs/8/core/modules/field).

### Uses

Creating a field

On the _Manage fields_ page for your entity type or sub-type, you can add, configure, and delete fields for that entity type or sub-type. Each field has a _machine name_, which is used internally to identify the field and must be unique across an entity type; once a field is created, you cannot change the machine name. Most fields have two types of settings. The field-level settings depend on the field type, and affect how the data in the field is stored. Once they are set, they can no longer be changed; examples include how many data values are allowed for the field and where files are stored. The sub-type-level settings are specific to each entity sub-type the field is used on, and they can be changed later; examples include the field label, help text, default value, and whether the field is required or not. You can return to these settings by choosing the _Edit_ link for the field from the _Manage fields_ page.

Re-using fields

Once you have created a field, you can use it again in other sub-types of the same entity type. For instance, if you create a field for the article content type, you can also use it for the page content type, but you cannot use it for custom blocks or taxonomy terms. If there are fields available for re-use, after clicking _Add field_ from the _Manage fields_ page, you will see a list of available fields for re-use. After selecting a field for re-use, you can configure the sub-type-level settings.

Configuring field editing

On the _Manage form display_ page of your entity type or sub-type, you can configure how the field data is edited by default and in each form mode. If your entity type has multiple form modes (on most sites, most entities do not), you can toggle between the form modes at the top of the page, and you can toggle whether each form mode uses the default settings or custom settings in the _Custom display settings_ section. For each field in each form mode, you can select the widget to use for editing; some widgets have additional configuration options, such as the size for a text field, and these can be edited using the Edit button (which looks like a wheel). You can also change the order of the fields on the form. You can exclude a field from a form by choosing _Hidden_ from the widget drop-down list, or by dragging it into the _Disabled_ section.

Configuring field display

On the _Manage display_ page of your entity type or sub-type, you can configure how each field is displayed by default and in each view mode. If your entity type has multiple view modes, you can toggle between the view modes at the top of the page, and you can toggle whether each view mode uses the default settings or custom settings in the _Custom display settings_ section. For each field in each view mode, you can choose whether and how to display the label of the field from the _Label_ drop-down list. You can also select the formatter to use for display; some formatters have configuration options, which you can edit using the Edit button (which looks like a wheel). You can also change the display order of fields. You can exclude a field from a specific view mode by choosing _Hidden_ from the formatter drop-down list, or by dragging it into the _Disabled_ section.

Configuring view and form modes

You can add, edit, and delete view modes for entities on the View modes page (/admin/structure/display-modes/view), and you can add, edit, and delete form modes for entities on the Form modes page (/admin/structure/display-modes/form). Once you have defined a view mode or form mode for an entity type, it will be available on the Manage display or Manage form display page for each sub-type of that entity.

Listing fields

There are two reports available that list the fields defined on your site. The Entities (/admin/reports/fields) report lists all your fields, showing the field machine names, types, and the entity types or sub-types they are used on (each sub-type links to the Manage fields page). If the [Views](https://www.drupal.org/docs/8/core/modules/views) and [Views UI](https://www.drupal.org/docs/8/core/modules/views-ui) modules are enabled, the Used in views (/admin/reports/fields/views-fields) report lists each field that is used in a view, with a link to edit that view.