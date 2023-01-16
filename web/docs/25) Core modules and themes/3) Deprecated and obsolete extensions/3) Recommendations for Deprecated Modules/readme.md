* If you are using a deprecated module on your website, it is recommended that you start planning to switch to a different, supported module.
* The Upgrade Status module can provide recommendations for alternative modules.
* Be sure to test the new module thoroughly to ensure that it works properly with your website and does not cause any issues.

Deprecated Modules:

* **Aggregator**  
 The Aggregator module has been deprecated in Drupal 9.4 and will be removed from Drupal 10.0, because fewer than 5% of Drupal sites use it. You can add a dependency on the [contributed aggregator module](https://www.drupal.org/project/aggregator) in order to continue using on Drupal 10.x.
* **CKEditor**  
 The old CKEditor module (which integrates with CKEditor 4) has been removed from core in Drupal 10 and is replaced by a new "CKEditor 5" module that integrates with CKEditor 5\. The older version still appears as 'CKEditor' when displayed, such as on the extension page.  
Most Drupal sites use CKEditor 4, and must do one of the following:  
   1. Switch to CKEditor 5 (strongly recommended), or  
   2. [Install the CKEditor 4 contributed module](//www.drupal.org/project/ckeditor), which will be supported until late 2023\. Choose this option only if the site has additional Drupal modules installed that provide additional CKEditor 4 plugins with no CKEditor 5 equivalents yet. (Consult the [Upgrade coordination for modules providing CKEditor 4 plugins](https://www.drupal.org/docs/core-modules-and-themes/core-modules/ckeditor-5-module/upgrade-coordination-for-modules-providing-ckeditor-4-plugins) wiki page for the current status.)  
#### How to upgrade from from CKEditor 4 to CKEditor 5  
   1. Upgrade to Drupal 9.4.4 or higher  
   2. Update modules providing additional CKEditor 4 plugins to the latest release of the major version you're on. Modules that have added CKEditor 5 support _should_ provide support for _both_ CKEditor 4 and 5, and provide an automated upgrade path (for toolbar items and plugin settings) from 4 to 5.  
   3. Enable the CKEditor 5 module  
   4. Converting text formats to use CKEditor 5  
         1. Go to Text Formats ⮕ Editors in the Drupal user interface.  
         2. Text formats must be updated one at a time, but switching the editor to "CKEditor 5" will automatically migrate your text format configuration to CKEditor 5.  
<!-- note-warning -->  
> WARNING: A contributed CKEditor 4 module is available. However, CKEditor 4 is reaching its end-of-life at the end of 2023. The contributed module will receive coordinated security releases alongside Drupal 9 core, and no other maintenance or bug fixes. Once Drupal 9 is end-of-life, core maintainers will no longer provide security coverage for the module.  
Therefore, sites should only use the CKEditor 4 module if they use contributed modules extending CKEditor that have not yet been updated to work with CKEditor 5.
* **Color**  
The Color module has been deprecated in Drupal 9.4 and will be removed from Drupal 10.0\. In most cases, you will only need the Color module if one of your installed themes (such as Bartik) has overridden colors using the Color module's color picker wheel. You can add a dependency on the [contributed Color module](https://www.drupal.org/project/color) in order to continue using on Drupal 10.x. The contributed module works with Drupal 9.4+ and Drupal 10.  
If none of your themes allow color customization through the user interface, consider uninstalling the Color module before you upgrade to Drupal 10.  
The core Olivero theme includes its own, more modern user interface for re-coloring without the Color module. This API may eventually be generalized and replace the legacy Color module.
* **HAL**  
The core HAL module has been deprecated in Drupal 9.4 and will be removed from Drupal 10.0\. The project has moved to the contributed [Hypermedia Application Language (HAL)](https://www.drupal.org/project/hal) module. The contributed module works with Drupal 9.4+ and Drupal 10.  
The core JSON:API module offers a superset of the features of HAL, so consider whether JSON:API might be a suitable replacement for your site. Otherwise, if your site is using the HAL module in Drupal 9, you will need to add a dependency to the the contributed [Hypermedia Application Language (HAL)](https://www.drupal.org/project/hal) module for Drupal 10.
* **Quick Edit**  
The Quick Edit module has been deprecated in Drupal 9.5 and will be removed from Drupal 10.0\. The module can be uninstalled safely without any impact on site data, and uninstalling it will result in very limited changes to the user interface for content authors.  
Many Drupal site users do not use Quick Edit because it has a variety of user experience issues, so consider whether simply uninstalling Quick Edit might be the best choice for your site.  
If you wish to continue using Quick Edit, you can add a dependency on the [contributed Quick Edit module](https://www.drupal.org/project/quickedit) in order to continue using on Drupal 10.x. The contributed module works with Drupal 9.4+ and Drupal 10.
* **RDF**  
The RDF module has been deprecated in Drupal 9.5 and will be removed from Drupal 10.0.  
RDF was previously installed as part of the standard install profile, but many sites do not use the functionality it provides. If you are not sure what RDF is, it is likely that you can safely uninstall it.  
You can add a dependency on [the contributed RDF module](https://www.drupal.org/project/rdf) in order to continue using on Drupal 10.x. The contributed module works with Drupal 9.5+ and Drupal 10.