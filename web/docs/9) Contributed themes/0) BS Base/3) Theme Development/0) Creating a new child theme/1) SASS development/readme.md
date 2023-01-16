This is our recommended way to develop your custom SASS code.

### Code organization and inheritance

All the SASS code is located in demo\_theme/sass folder.

Main SASS file is sass/\_init.scss file which is responsible for loading all SASS variables and variable overrides from your custom theme and all parent themes. This will also load all mixins defined in all parent themes which you can then use in your custom SASS code.

By default, SASS variables are defined in two places. The first file is \`theme-options.yml\` where you can define additional SASS variables or override SASS variables from parent themes. The second file is sass/variables/\_demo\_theme.scss file.

The first file that will be loaded is \`theme-options.yml\`. Then Gulp will load \`sass/\_init.scss\` file which will load any additional custom variable if it is defined and then load SASS variables from parent themes. This organization allows you to easily override any SASS variable from any parent theme including Bootstrap default SASS variables.

Your custom SASS code is organized in 5 folders:

```php
demo_theme/sass/
  base/          # general CSS rules related to HTML elements and utility rules.
  components/    # components CSS rules.
  layout/        # page layout general rules and any custom layout rules.
  theme/         # typography and print rules.
  variables/     # SASS variables and variables overrides.
```

Besides this, if you have any custom mixins usually you will create additional sass/mixin folder and put your mixin definitions there.

<!-- note-tip -->
> TIP: If you are adding mixin definitions in one or multiple SASS files in mixin folder do not forget to include this files in the main _init.scss file.

<!-- note-tip -->
> TIP: You do not need to use this kind of folder structure in your child theme. However, its probably easier to do it because it will eliminate import confusion with parent themes and also this folder organization is similar with Drupal recommended folder structure. You are free to have additional subfolders in these folders for better code organization in the larger projects.

Now let say that you need to add a custom CSS code for a custom block that you have on your site. Block CSS code is defined in sass/components/block.scss file. This file has the next code:

```php
@import "init";
@import "bs_bootstrap/sass/components/partials/block";
@import "bs_bootstrap/sass/components/partials/contextual";
```

You should not add custom SASS code directly to SASS files but always to SASS partials. The reason for doing this is that your code is easier to be overridden and also drush create and update generator commands are designed to work with this code organization.

So the first thing you need to do is create a partial folder inside components folder and there create a \`\_block.scss\` file, so the file path should be \`sass/components/partials/\_block.scss\`. Feel free to add your custom code to this file. Then add the import directive into the main block.scss file, this should look like this:

```php
@import "init";
@import "bs_bootstrap/sass/components/partials/block";
@import "bs_bootstrap/sass/components/partials/contextual";
@import "partials/block";
```

<!-- note-tip -->
> TIP: Notice that when we are importing SASS partials from parent themes we do not need to write an absolute or relative path to these files but we can just use theme name on the start of the import path. The built-in Gulp workflow and relative parent paths definitions in `gulp-options.yml` file are allowing us to do this.

You **must** use partials folder for additional SASS code which you are adding if you want to use drush update generator later to update your child themes. 

<!-- note-tip -->
> TIP: We call this import organization in bs_base child themes code inheritance. This will allow easier code reuse from parent themes, smaller generated CSS code and easier CSS code override.

### SASS flat import structure and SASS/CSS opt-out feature

Drush generators for creating and updating child themes have a built-in 'SASS flat import' support. We can explain this easily with an example. Let us check our \`block.scss\` example:

```php
# demo_theme/sass/components/block.scss
@import "init";
@import "bs_bootstrap/sass/components/partials/block";
@import "bs_bootstrap/sass/components/partials/contextual";
```

If we take a look at a bs\_bootstrap \`block.scss\` the content we have next code:

```php
# bs_bootstrap/sass/components/block.scss
@import "init";
@import "partials/block";
@import "partials/contextual";
```

So the actual compiled content of these two files is the same, only import paths are different because of a different block.scss positions. We could also write demo\_theme \`block.scss\` file as this:

```php
# demo_theme/sass/components/block.scss
@import "init";
@import "bs_bootstrap/sass/components/block";
```

And resulting CSS would be the same. You may point out that the second code is better because it is smaller and ask why we do not use the second approach. There is one important limitation of the second approach, it is impossible to remove individual partials coming from parent themes. So you would not be able to remove bs\_bootstrap \`block.scss\` code without removing also \`contextual.scss\` code. In this example, this does not look at a big deal but imagine imports with a dozen or more sub imports - you will either need to take all the code coming from parent themes and then write additional CSS override code or maintain your own import structure manually which requires additional development time.

Because of this our create and update drush generators will always _flatten_ your SASS import structure. By this, we mean automatically converting import directive like

```php
@import "bs_bootstrap/sass/components/block";
```

to

```php
@import "bs_bootstrap/sass/components/partials/block";
@import "bs_bootstrap/sass/components/partials/contextual";
```

Now if you want to completely remove block code coming bs\_bootstrap block.scss file all you need to do in your own block.scss file is to comment block import.

```php
# demo_theme/sass/components/block.scss
@import "init";
//@import "bs_bootstrap/sass/components/partials/block";
@import "bs_bootstrap/sass/components/partials/contextual";
```

And now your generated SASS code will not have block CSS code from parent themes. If you run drush update generator on this later it will detect commented parent themes partials and it will not re-insert them. This we call **SASS/CSS opt-out** feature - ability to easily remove parts of the parent SASS/CSS code which is also supported with our drush update generator.

This SASS flattening import feature allows us one additional important advantage, easy maintenance and update of child themes when SASS code in parent themes is changed. We will discuss this topic in the next chapter.