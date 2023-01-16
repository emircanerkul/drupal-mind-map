* In Drupal 7 libraries had to be defined using `hook_library_info()`. [That has been replaced with \*.libraries.yml file](/node/2201089).
* [In Drupal 8 drupal\_add\_css(), drupal\_add\_js() and drupal\_add\_library() were removed in favor of #attached](/node/2169605)
* Now settings are only added to the page if a required library depends on the `core/drupalSettings` library.
* Only the JavaScript required on a particular page will be added to that page. In particular, by default Drupal doesn't need JavaScript on most pages that anonymous users can see. This means that [jQuery is not automatically loaded on all pages anymore](/node/1541860).  
 So, if your theme requires jQuery or some other JavaScript to be present (which also is defined in an asset library), you need to tell Drupal that this is the case, by declaring a dependency on the needed asset library.
* The `Drupal.settings` javascript object is replaced by `drupalSettings`.