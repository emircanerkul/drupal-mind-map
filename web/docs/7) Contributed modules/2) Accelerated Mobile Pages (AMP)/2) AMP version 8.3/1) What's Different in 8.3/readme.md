---
url: >-
  https://www.drupal.org/docs/8/modules/accelerated-mobile-pages-amp/amp-version-83/whats-different-in-83
description: >-
  The 8.3 branch of AMP has some significant differences from earlier versions.
  You can see some of the plans in the Roadmap, but here is a list of some of
  the primary changes. Schema.org JSON-LD AMP requires valid Schema.org JSON-LD
  to be rendered in the head of AMP pages. That metadata is also used, and
  useful, in non-AMP pages. And Schema.org includes a huge volume of possible
  objects and parameters. The original AMP module provided only a couple simple
  Schema.org parameters, and couldn't possibly expand to include all of them.
published_time: '2018-10-15T11:49:37+00:00'
modified_time: '2018-10-27T14:44:14+00:00'
---
The 8.3 branch of AMP has some significant differences from earlier versions. You can see some of the plans in the [Roadmap](https://www.drupal.org/project/amp/issues/2956764), but here is a list of some of the primary changes.

### Schema.org JSON-LD

AMP requires valid Schema.org JSON-LD to be rendered in the head of AMP pages. That metadata is also used, and useful, in non-AMP pages. And Schema.org includes a huge volume of possible objects and parameters. The original AMP module provided only a couple simple Schema.org parameters, and couldn't possibly expand to include all of them. The [Schema.org Metatag module](https://www.drupal.org/project/schema%5Fmetatag) was designed to accommodate the exploding list of Schema.org metadata. We now assume you will use that module to configure the JSON-LD required by AMP.

### CSS Rendering and Tools

AMP requires all css to be rendered inline, in the head of the page. Drupal by default either links or imports css. The 8.3 branch has a service decorator that massages all Drupal's css to minimize it and render it inline as AMP requires. That means AMP themes handle css normally, in the same manner as any other theme would do.

AMP also requires that the inline css be no larger than 50KB. The 8.3 branch provides some help for the process. Add '&debug#development=1' to any AMP url, and you will see a summary of the size of the inline css created by the system, with a list of all the css files, and their sizes, that were aggregated into that. 

[Read more about the way CSS is managed in 8.3](https://www.drupal.org/docs/8/modules/accelerated-mobile-pages-amp/amp-version-83/amp-css).

### AMP Javascript

There have been many new AMP javascript libraries created since this module was first developed. Since AMP whitelists javascript, all of them must be included in the AMP libraries file or they won't be allowed. This file has been expanded to include all the new libraries and components.

The earlier versions of AMP removed all libraries wholescale in hooks, sometimes stripping out things that did not need to be removed. The new themes remove libraries individually, using libraries-override in the theme system.

[Read more about how to convert a regular theme to AMP.](https://www.drupal.org/docs/8/modules/accelerated-mobile-pages-amp/amp-version-83/converting-your-primary-theme-to-amphtml)

### AMP Components

The list of AMP components has expanded greatly. Most are provided either as blocks or field formatters. These blocks and formatters are entirely self-reliant, and actually can be used anywhere, even on non-AMP pages, for consistency between AMP and non-AMP page display. Each of them adds its own javascript as attachments, using Drupal's standard theme system. 

[Read more about AMP formatters and blocks.](https://www.drupal.org/docs/8/modules/accelerated-mobile-pages-amp/amp-version-83/amp-formatters-and-blocks)