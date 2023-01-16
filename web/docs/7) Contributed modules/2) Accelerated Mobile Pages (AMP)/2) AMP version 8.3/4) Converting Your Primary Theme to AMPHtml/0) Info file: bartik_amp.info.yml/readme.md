Create a new empty theme, call it bartik\_amp, and make it a subtheme of your primary theme.

Make the following addition to bartik\_amp.info.yml to ensure the theme loads the AMP runtime javascript on every page. This step is required for any AMP theme that doesn't extend another theme that does this.

```yaml
libraries:
  - amp/runtime
```

Use libraries-override to remove things we don't want in an AMP theme, all javascript libraries, and as many css files as possible to reduce the overall size of the css. In the Bartik AMP theme you'll see a very very long list of removed libraries and css.

Some of the javascript libraries include both javascript and css. Since the css is related to the javascript that won't be there, it should be safe to remove the whole library.

Removing css is harder when you don't want to remove a whole library. In that case you can identify the individual css files you want to remove by listing them under the name of the library they were added in, and following the file name with `: false`. 

A handy way to identify the css files to remove is to use the debug functionality of an AMP page. Go to any AMP page and append `&debug#development=1` to the url. That will display a list of the css that has been aggregated into the page, with the size of each file, as well as the total css file size. The goal is to remove any css you won't need on AMP pages to get the total size down to 50,000 bytes or less. Good candidates are css files related to removed javascript, and css that isn't needed on every page and which won't be used on your AMP pages.

Check the bartik\_amp.info file in the Bartik AMP theme for the latest code, but will look something like this:

```php
# Remove unnecessary css files to reduce css size. Css must be <= 50kb.
# Also remove css and js libraries added by contrib modules.
libraries-override:
  # Remove some Bartik css.
  bartik/global-styling:
    css:
      component:
        css/components/form.css: false
        css/components/ui.widget.css: false
        css/components/ui.dialog.css: false
        css/components/ui-dialog.css: false
        css/components/forum.css: false
  # Remove some Classy css.
  classy/base:
    css:
      component:
        css/components/form.css: false
        css/components/tabledrag.css: false
        css/components/tablesort.css: false
        css/components/tableselect.css: false
        css/components/ui-dialog.css: false
  # Remove some system css.
  system/base:
    css:
      component:
        /core/themes/stable/css/system/components/autocomplete-loading.module.css: false
        /core/themes/stable/css/system/components/tabledrag.module.css: false
        /core/themes/stable/css/system/components/tablesort.module.css: false
        /core/themes/stable/css/toolbar/toolbar.module.css: false;
  # Remove all the core libraries that add javascript.
  core/backbone: false
  core/classList: false
  core/ckeditor: false
  core/domready: false
  core/drupal: false
  tracker/history: false
  user/drupal.user: false
  user/drupal.user.permissions: false
  views/views.ajax: false
  views_ui/views_ui.admin: false
  views_ui/views_ui.listing: false
  ...
```