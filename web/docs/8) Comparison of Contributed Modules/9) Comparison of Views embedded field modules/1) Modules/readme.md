### [Viewfield](/project/viewfield)

![a screenshot of Drupal viewfield 3x version ui](https://www.drupal.org/files/issues/2019-11-16/viewfield_ui.png)

#### Features

* Field config options include:  
   * Default option  
   * Always use default value: Hides this field in entity edit forms and enforces the configured default value for all entities in the bundle, making it unnecessary to assign values individually to each one.  
    If this is checked, you must provide a default value.  
   * Allowed views  
   * Allowed display types
* Field Widget: None, provides one custom widget
* Field Formatter options  
   * Config options for label as expected  
   * 1) Title and display name  
   * 2) Viewfield  
         * Title option: Option to render the view display title.  
         * Always build output option: Produce renderable output even if the view produces no results.  
          This option may be useful for some specialized cases, e.g., to force rendering of an attachment display even if there are no view results. Includes additional config to render Empty view title.

### [Views Reference Field](/project/viewsreference)

#### 8.x-1.x Features

![a screenshot of Drupal viewsreference 1x version ui](https://www.drupal.org/files/issues/2019-11-16/viewsreferenece-field-ui.png)

* Provides a custom field type
* Field config options include:  
   * Default option  
   * Reference method: ? Is this provided by the EntityReferenceItem base field type  
   * View display plugins to allow: configurable allowed/disallowed views plugins: master, block, page, etc. Note: this only displays options from among existing, already created, view displays.  
   * Preselect View Options: provides option to restrict the views that can be selected when authoring content.
* Field Widget  
   * 1) Views Reference Autocomplete widget with standard config: Autocomplete matching: Contains, Textfield size, and placeholder  
   * 2) Views Reference Select list widget without any config  
   * DX: both widgets use trait for shared functionality
* Field Formatter
* Config options for label as expected
* Config options for "View display plugins to allow", which seems redundant from the field config

#### 8.x-2.x Features

_TBD_

### [Views Field View](/project/views%5Ffield%5Fview)

_TBD_  

### [View Entity Reference Field Formatter](https://www.drupal.org/project/view%5Fentity%5Fref%5Ffield%5Fformatter)

_TBD_