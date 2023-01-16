---
url: >-
  https://www.drupal.org/docs/contributed-modules/accelerated-mobile-pages-amp/amp-version-83/converting-your-primary-theme
description: >-
  If you want AMP pages to look like your regular pages, you need to convert a
  “normal” theme to an AMP theme. A new feature in the 8.3 branch is that your
  AMP theme does not have to be a sub theme of AMPTheme, it can be a sub theme
  of your primary theme instead. Valid AMP requires removing all non-AMP
  javascript, which means you can’t do this with a javascript-based theme like
  Bootstrap. This only works if you have a theme that relies on CSS rather than
  javascript for page enhancements. Flex box and CSS grid are great foundations
  for an AMP theme.
published_time: '2018-04-30T12:02:35+00:00'
modified_time: '2021-03-03T16:25:49+00:00'
---
If you want AMP pages to look like your regular pages, you need to convert a “normal” theme to an AMP theme. A new feature in the 8.3 branch is that your AMP theme does not have to be a sub theme of AMPTheme, it can be a sub theme of your primary theme instead.

Valid AMP requires removing all non-AMP javascript, which means you can’t do this with a javascript-based theme like Bootstrap. This only works if you have a theme that relies on CSS rather than javascript for page enhancements. Flex box and CSS grid are great foundations for an AMP theme.

By subclassing your regular theme and only making changes in the AMP subtheme, you can minimize the differences between a page using your normal theme and the AMP page. The AMPTheme module includes an example of this, Bartik AMP, which is a sub theme of the core Bartik theme.

Refer to the Bartik AMP theme as you read through this guide, which describes the steps involved in creating it. You can then replicate the steps to create a custom sub theme of your own theme.