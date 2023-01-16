### Module is not listed on `admin/modules` page

* Ensure the info file is named `{machine_name}.info.yml` and is located in the root of the module's directory.
* Ensure the file is formatted correctly. For example, there **cannot** be spaces _before_ but **must** be a space _after_ the colon (`:`) sign. Formatting should look like as seen in the next example.
* Ensure that the file has this line:  
```yaml  
type: module  
```
* Ensure the module name starts either with a letter or an underscore. The following is an excerpt from the [PHP documentation](http://www.php.net/manual/en/functions.user-defined.php) about valid function names.  
> Function names follow the same rules as other labels in PHP. **A valid function name starts with a letter or underscore, followed by any number of letters, numbers, or underscores**. As a regular expression, it would be expressed thus: `[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*`.

### Module is listed on `admin/modules` but its checkbox is disabled.

* Make sure that the core compatibility is set to be compatible with your version of Drupal.  
```yaml  
core_version_requirement: ^9.4 || ^10  
```
* Ensure that all the module dependencies are available. You can expand the module information to see which requirements are missing.  
![expand_requirements.png](https://www.drupal.org/files/expand_requirements.png)  
 Note that [some modules have been moved out of Drupal 8 core](https://drupal.org/node/2116417), whereas other contributed modules have been moved into core or replaced by new core modules.

### Module description is empty

* Remember that the value of `description` is used for the description.  
```yaml  
description: Example Module description.  
```