Let say that bs\_base theme got updated and two changes happened:

* A new component SASS file is added in bs\_bootstrap \`bs\_bootstrap/sass/components/search-form.scss\`. Respective partials file with SASS code is added in \`bs\_bootstrap/sass/components/partials/\_search-form.scss\`
* bs\_bootstrap block.scss file is updated with one additional partial \`partials/block-search\`.

So we have a new search-form.scss file with content:

```php
# /bs_base/themes/bs_bootstrap/sass/components/search-form.scss
@import "init";
@import "partials/search-form";
```

With \`\_search-form.scss\` partial in \`web/themes/contrib/bs\_base/themes/bs\_bootstrap/sass/components/partials/\_search-form.scss\` path.

And we have changes in bs\_bootstrap block.scss:

```php
# /bs_base/themes/bs_bootstrap/sass/components/block.scss
@import "init";
@import "partials/block";
@import "partials/block-search";
@import "partials/contextual";

```

With a new \`/bs\_base/themes/bs\_bootstrap/sass/components/partials/\_block-search.scss\` partial file.

At the same time, your custom demo\_theme is not updated, you are missing new search-form.scss file and your block.scss file has old content and missing new block-search import:

```php
@import "init";
@import "bs_bootstrap/sass/components/partials/block";
@import "bs_bootstrap/sass/components/partials/contextual";
```

You could check bs\_base changelog and manually update demo\_theme with these changes, but that would be waste of time and you could also miss some steps. Instead of this, we will use drush bs-theme-update command instead:

```php
drush bs-theme-update demo_theme
```

After executing this command you will see some changes in your demo\_theme files. First thing there will be a new \`demo\_theme/sass/components/search-form.scss\` file with the next content:

```php
# /demo_theme/sass/components/search-form.scss
@import "init";
@import "bs_bootstrap/sass/components/partials/search-form";

```

So drush update command detected a new SASS file in bs\_bootstrap parent theme and then added it to demo\_theme and automatically flattened SASS imports.

Second, you will see a change in your demo\_theme block\_scss file:

```php
# /demo_theme/sass/components/block.scss
@import "init";
@import "bs_bootstrap/sass/components/partials/block";
@import "bs_bootstrap/sass/components/partials/block-search";
@import "bs_bootstrap/sass/components/partials/contextual";

```

You will notice a new line \`@import "bs\_bootstrap/sass/components/partials/block-search";\` which means that drush update command detected new bs\_bootstrap partial and then added flattened import directive to demo\_theme block.scss file.

With this example, you can see how built-in \`drush bs-theme-update\` command can greatly automate updating of bs\_base child themes so you can concentrate on maintaining your custom SASS code and automatically get any SASS code updates that are coming from parent themes.

<!-- note-tip -->
> TIP: Update command will respect any SASS opt-out import files directives in your child theme. So any commented parent partial @import line will be detected and left in place.

<!-- note-tip -->
> TIP: If you are carefully checking flattened @import code lines you could wonder how drush update command knows about exact parent hierarchy when we are actually losing&nbsp;SASS imports hierarchy information when flattening our SASS import directives, meaning next line of code&nbsp;
@import "bs_bootstrap/sass/components/block";will be converted into
@import "bs_bootstrap/sass/components/partials/block";
@import "bs_bootstrap/sass/components/partials/contextual";&nbsp;And actual&nbsp;information that this two partials import came from `bs_bootstrap/sass/components/block` is lost. However, we do know parent theme hierarchy from theme info files, our main SASS files in a child theme and parent themes have the same naming and our convention says that all custom SASS code needs to be in SASS partials. Based on all this information drush update (and also create command) are able to reconstruct all needed information, detect SASS changes in all parent files and finally correctly update your child theme SASS files.

<!-- note-tip -->
> TIP: All the information presented here you can also use in your custom base theme. So you can maintain one custom base theme and have many different customer child themes and use the same commands to update your custom base theme and child themes when needed.