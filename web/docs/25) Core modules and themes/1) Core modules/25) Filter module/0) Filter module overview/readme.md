---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/filter-module/filter-module-overview
description: >-
  The Filter core module allows you to configure text formats for processing
  text input for your site. These settings are under Configuration > Content
  authoring > "Text formats and editors" (/admin/config/content/formats).
  Despite the name "filter," the module not only lets you prevent the use of
  formatting you don't want, but also lets you control and enhance the
  formatting that appears.
published_time: '2005-05-09T05:01:31+00:00'
modified_time: '2020-06-04T21:11:28+00:00'
---
The Filter core module allows you to configure text formats for processing text input for your site. These settings are under Configuration > Content authoring > "Text formats and editors" (`/admin/config/content/formats`).

Despite the name "filter," the module not only lets you prevent the use of formatting you don't want, but also lets you control and enhance the formatting that appears. For example, the Basic HTML text format has the caption filter enabled by default, which means any image, video, quote, code snippet and so on can be captioned, without needing to enter the exact HTML a specific site wants for it: `<img src="" data-caption="Hello world!">` is transformed into `<figure><img src=""><figcaption>Hello world!</figcaption></figure>` automatically (and that HTML is defined in a template that can be customized).

When users create or edit content, they can choose between the text formats administrators make available to their user role. By default, Drupal 8 ships with Basic HTML, Restricted HTML, and Full HTML.

Administrators can configure which formats are available to which user roles, choose a default text format, and create new text formats. This module also allows you to configure the associated [text editor](/documentation/modules/editor). You can configure each text format to use your choice of filters. When you specify more than one format for a filter, you can specify the order in which they are processed.

### Best Practices

Drupal has been powering sites with lots of user-generated content for years, securely and safely. See <http://drupal.org/node/213156> for more detailed information on filters, how they work, and how to configure them. Follow these and other best practices to keep your site safe.

1. The Full HTML text format is intended for trusted users only (administrators), because it does not restrict the allowed HTML tags at all. **This can represent a severe security risk.** (Hence the name: the _full power and potential of HTML_ is at the user's disposal.)
2. The Restricted HTML text format is intended for anonymous users, and doesn't have CKEditor enabled by default (it's a more restrictive variant of Drupal 6/7's Filtered HTML text format).
3. The Basic HTML text format is intended for authenticated users, and does have CKEditor enabled by default (it's a more permissive variant of Drupal 6/7's Filtered HTML text format).
4. When working with user-generated content, it's always best to keep input format settings as secure as possible. Select the least amount of functionality possible for each role; for example, don't allow guests to have access to Full HTML.
5. Explore contributed modules to install special filters that allow video embeds, references to other content, and so on. See <http://drupal.org/node/779080> for documentation on the many modules that extend and enhance input filters.

### Issue queue

<http://drupal.org/project/issues/drupal?component=filter.module>