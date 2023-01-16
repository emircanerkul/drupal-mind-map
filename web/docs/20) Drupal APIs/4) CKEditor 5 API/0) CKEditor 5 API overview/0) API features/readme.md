Ordered by most to least frequently used APIs:

CKEditor 5 CSS

CKEditor 5 does not run in an iframe, unlike CKEditor 4\. This means that any CSS file loaded on a page can in theory affect a CKEditor 5 instance. No worries though: CKEditor 5 itself has plenty of CSS resets to prevent unintentional overrides.

For intentional overrides, for example to make the content edited with CKEditor 5 match the styling of your front-end theme, the `ckeditor5-stylesheets` property can be specified in `THEMENAME.info.yml`. See the [change record](https://www.drupal.org/node/3259165) for details.

CKEditor 5 Plugin plugins

Add more functionality to CKEditor!

`\Drupal\ckeditor5\Plugin\CKEditor5PluginInterface`: _Drupal plugins_ that correspond 1:1 to _CKEditor 5 plugins_, to make Drupal _aware_ of the available CKEditor plugins. Hence the — at first sight — confusing name: CKEditor 5 Plugin plugins, but it actually makes sense!

For CKEditor 4, it was required to create a CKEditor 4 plugin definition: a PHP file. No longer with CKEditor 5\. With CKEditor 5, all you need is a `MODULENAME.ckeditor5.yml` file, which contains CKEditor 5 plugin definitions. It can be as simple as:  

```yaml
ckeditor5_code:
  ckeditor5:
    plugins: [basicStyles.Code]
  drupal:
    label: Code
    library: core/ckeditor5.basic
    admin_library: ckeditor5/admin.basic
    toolbar_items:
      code:
        label: Code
    elements:
      - <code>

```

You can distinguish two clear sections: `ckeditor5` (which contains the CKEditor 5 JS plugin-specific aspects) and `drupal` (which contains the CKEditor 5 Drupal plugin-specific aspects).

**See ["CKEditor 5 architecture"](https://api.drupal.org/api/drupal/core%21modules%21ckeditor5%21ckeditor5.api.php/group/ckeditor5%5Farchitecture/9.4.x) for more details.**

A more complex example would be:

```yaml
ckeditor5_imageCaption:
  ckeditor5:
    plugins:
      - image.ImageCaption
    config:
      image:
        toolbar: [toggleImageCaption]
  drupal:
    label: Image caption
    elements:
      - <img data-caption>
    conditions:
      toolbarItem: uploadImage
      filter: filter_caption
```

Here, we can see more nuance for both aspects:

1. a `config` key-value pair in the `ckeditor5` key, to pass on configuration to the CKEditor 5 JS plugin
2. a `conditions` key-value pair in the `drupal` key, to indicate to Drupal which conditions have to be met for this CKEditor 5 plugin to be loaded. Also note the absence of a toolbar item! That's because this CKEditor 5 plugin provides a UX that _enhances_ the image functionality in CKEditor 5 whenever the `filter_caption` filter is enabled (and the `uploadImage` toolbar item is enabled). This removes the need for complex configuration forms, and allows the CKEditor 5 plugins to detail when exactly they should be enabled.  
_If the [currently supported conditions](https://api.drupal.org/api/drupal/core%21modules%21ckeditor5%21ckeditor5.api.php/group/ckeditor5%5Farchitecture/9.4.x#plugins) are inadequate, please create a [new Drupal core issue](https://www.drupal.org/node/add/project-issue/drupal) against the `ckeditor5.module` component and tag it `Contributed project blocker`._

### Debugging

Drupal 9 includes a customized, optimized build of CKEditor. See ["CKEditor 5 development"](https://www.drupal.org/docs/core-modules-and-themes/core-modules/ckeditor-5-module/ckeditor-5-development) for how to swap this for a build that is optimized for development and debugging.