---
url: >-
  https://www.drupal.org/docs/8/modules/accelerated-mobile-pages-amp/amp-version-83/amp-css
description: >-
  AMP requires all css to be rendered inline, in the head of the page. Drupal by
  default either links or imports css. That required AMP themes to provide css
  in a non-standard way, ignoring all the css provided by core and by
  contributed modules and requiring themers to duplicate in their theme any css
  they required. The 8.3 branch has a service decorator that massages all
  Drupal's css. That means AMP themes now handle css normally, in the same
  manner as any other theme would do. Any css added using Drupal's libraries
  system will automatically be minimized and rendered inline, as AMP requires.
published_time: '2018-10-27T13:17:09+00:00'
modified_time: '2019-03-27T10:03:14+00:00'
---
AMP requires all css to be rendered inline, in the head of the page. Drupal by default either links or imports css. That required AMP themes to provide css in a non-standard way, ignoring all the css provided by core and by contributed modules and requiring themers to duplicate in their theme any css they required.

The 8.3 branch has a service decorator that massages all Drupal's css. That means AMP themes now handle css normally, in the same manner as any other theme would do. Any css added using Drupal's libraries system will automatically be minimized and rendered inline, as AMP requires.

AMP also requires that the inline css be no larger than 50KB. That means some core and contributed css must be excluded.

Drupal's theme system has a way to remove css, with libraries-exclude. The 8.3 branch provides some help for the process. Add '&debug#development=1' to any AMP url, and you will see a summary of the size of the inline css created by the system, with a list of all the css files, and their sizes, that were aggregated into that. This should make it easier to find large css files that might be reduced or removed to stay within the required css size limit. The goal is to remove any css you won't need on AMP pages to get the total size down to 50,000 bytes or less. Good candidates are css files related to removed javascript, and css that isn't needed on every page and which won't be used on your AMP pages.

You can also enable the [AMP CSS Tree Shaking](https://www.drupal.org/project/amp%5Fcts) module. This module requires no configuration, just enable it. It will automatically "shake" the css on each AMP page and remove any css that is not in use on the page. It also minifies all the markup on the page. With this module in place you won't have to rigidly reduce your included css to 50KB, you could rely on the module to do it. If you have a lot of css you might have more than 50KB even after shaking, so you'll have to keep an eye on that, since you might still have to manually exclude some styles or libraries.

### More information

* [Read more about how to convert your regular theme to AMP](https://www.drupal.org/node/2968063)
* [Read AMP rules for stylesheets](https://www.ampproject.org/docs/fundamentals/spec#stylesheets)