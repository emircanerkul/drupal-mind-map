In Terminal, change directory into [the new custom theme you have created](https://www.drupal.org/docs/8/themes/zurb-foundation-user-guide/zurb-foundation-8x-6x/creating-a-custom-foundation-subtheme).

```php
cd themes/custom/mycustomtheme
```

Run the command:

```php
npm install
```

<!-- note-warning -->
> WARNING: Don't be alarmed if you see warnings like deprecated. If there are no errors, then you're on your way!

In a nutshell, the dependencies that are installed will compile your SASS to CSS and combine your custom javascript files into one javascript file.

This will also install a stack of features including:

* **autoprefixer** \- Automatically adds any prefixes for styles that might require browser flags (eg. _display: grid_ will be compiled with the IE fallback _display: -ms-grid_)
* **gulp-sass** \- Compiles SASS files into expanded or minified CSS
* **gulp-sass-lint** \- Will output corrections and improvements for your SASS
* **gulp-** **sourcemaps** \- Assist development by referencing the specific SASS file when inspecting CSS in, for example, the Chrome web inspector