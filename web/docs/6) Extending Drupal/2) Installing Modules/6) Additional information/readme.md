### Keeping modules organized

Drupal will look for modules in a few different locations; The root _/modules_ directory (preferred), or any _/sites/\*/modules_ directory. Within these locations, Drupal will recurse through all subdirectories looking for modules.

A common practice is to add all modules downloaded from Drupal.org to _/modules/contrib_. And all modules containing custom project-specific code to _/modules/custom_.

### Multiple modules packaged in one project

It is not uncommon for a single project (e.g. <https://drupal.org/project/devel>) to contain multiple modules. Each module within the project will be represented and can be individually enabled, on the _Extend_ page.