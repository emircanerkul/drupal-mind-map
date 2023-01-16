<!-- note-tip -->
> TIP: There are hundreds of variables you can customize, which are trackable via the inspector in the browser of choice, when compiling your theme with the :dev option.

### theme-options.yml

Here you can override variables from parent themes and bootstrap. These variables won't be inherited.  
**It's not possible to use variable names as values if not defined above in the .yml file!**

Will be left as is for the moment: [#3071854](https://www.drupal.org/project/bs%5Fbase/issues/3071854#comment-13208345)

### sass/variables/\_theme\_name.scss

Here you can put your custom variables and overwrite everything. These variables will be inherited by a custom child theme.

<!-- note-warning -->
> WARNING: With the current setup it's not possible to use variables from parent theme(s). This will result in "Undefined variable" error.
If you want to use a variable from a parent theme in this file, you need to redefine it.

In all other SASS files (base/\*, components/\*, layout/\*, theme/\*) the (overwritten) variables are present.