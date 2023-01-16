---
url: >-
  https://www.drupal.org/docs/8/modules/accelerated-mobile-pages-amp/amp-version-83/amp-formatters-and-blocks
description: >-
  It's important to use AMP formatters on fields that might contain content that
  is invalid in AMP, like images or iframes, or body text that might contain
  invalid markup. Earlier versions of AMP provided special AMP formatters, but
  they were unusable on normal pages. 8.3 has lots of new formatters and blocks,
  and they are totally self-sufficient. They work everywhere, not just on AMP
  pages. So you could use the AMP social post formatter as your primary method
  of displaying social posts, if you want to. Ditto for the new AMP social share
  block.
published_time: '2018-10-27T14:41:35+00:00'
modified_time: '2018-10-28T12:04:58+00:00'
---
It's important to use AMP formatters on fields that might contain content that is invalid in AMP, like images or iframes, or body text that might contain invalid markup. 

Earlier versions of AMP provided special AMP formatters, but they were unusable on normal pages. 8.3 has lots of new formatters and blocks, and they are totally self-sufficient. They work everywhere, not just on AMP pages. So you could use the AMP social post formatter as your primary method of displaying social posts, if you want to. Ditto for the new AMP social share block.

This should make it easier to reduce the differences between AMP and non-AMP pages, as well as make it possible to have an AMP-only site, where your primary theme creates AMP-valid markup.

Many of these formatters and blocks share similar settings. There is often a setting for 'layout' as well as settings for 'width' and 'height'. The forms where these options are set generally include a link to the AMP documentation about that component to make it easy to understand what the options are and which settings you should choose.

For instance, the layout setting has rules for what width and height options are valid for each selection. If you choose the 'responsive' layout, you must also provide a width and a height. You can't provide them as percentages, but you can provide an aspect ratio instead of pixels, like width=16 and height=9\. Other layout options have different rules for setting width and height, and the formatters try to provide some guidance as well as the link to documentation.

A partial list of formatters and blocks includes the following:

* **AMP Text formatter** \- use on body fields and other text field that might contain invalid markup.
* **AMP Image formatter** \- use on any image field.
* **AMP iFrame formatter** \- use on any text field that consists of iframe embed code.
* **AMP Video formatter** \- use on any file field that contains a video file.
* **AMP Carousel formatter** \- use on a multiple value image field to display images in a carousel.
* **AMP Social post formatter** \- works on any text or link field, assumes the text field contains embed code or the link contains a link to a social post.
* **AMP system branding block** \- a replacement for the core system branding block that displays your logo in a way that is AMP-valid.
* **AMP Social share block** \- provides a social share block you can place in any region.