---
url: https://www.drupal.org/docs/8/core/modules/big-pipe/overview
description: >-
  The BigPipe module is included in Drupal 8 core since Drupal 8.1. It made a
  step towards becoming non-experimental in Drupal 8.2: instead of an alpha it
  became marked as a beta. And it became stable in Drupal 8.3! The BigPipe
  technique was invented at Facebook. It is strongly recommended to also enable
  the Dynamic Page Cache module that is included with Drupal 8 core. BigPipe
  demonstration How it works During rendering, the personalized parts are turned
  into placeholders. By default, Drupal 8 uses the Single Flush strategy (aka
  "traditional") for replacing the placeholders. i.e.
published_time: '2016-02-29T09:09:15+00:00'
modified_time: '2019-05-17T12:32:01+00:00'
---
The BigPipe module is included in [Drupal 8 core](/project/drupal) **since Drupal 8.1**. It made a step towards becoming non-experimental in **Drupal 8.2**: instead of an _alpha_ it became marked as a **_beta_**. And it became **stable in Drupal 8.3!**

The [BigPipe technique](https://www.facebook.com/notes/facebook-engineering/bigpipe-pipelining-web-pages-for-high-performance/389414033919) was invented at Facebook.

It is strongly recommended to also enable the [Dynamic Page Cache](/documentation/modules/dynamic%5Fpage%5Fcache) module that is included with Drupal 8 core.

BigPipe demonstration

### How it works

1. During rendering, the personalized parts are turned into placeholders.
2. By default, Drupal 8 uses the Single Flush strategy (aka "traditional") for replacing the placeholders. i.e. we don't send a response until we've replaced all placeholders.
3. The BigPipe module introduces a new strategy, that allows us to flush the initial page first, and then _stream_ the replacements for the placeholders.
4. This results in hugely improved front-end/perceived performance (watch the 40-second screencast above).

### Features

**Faster with zero configuration!** BigPipe is able to make things faster automatically thanks to Drupal 8's improved render pipeline & render API, and in particular thanks to the cacheability metadata and auto-placeholdering.

### Ensuring a smooth visual page load experience

Because BigPipe lazily loads certain parts of the page, it _could_ result in a jarring page load experience. Whether it _does_ depends on your theme and the location of the lazily loaded content: in the demonstration screencast above, there is no jarring experience at all because the streamed/lazily loaded blocks appear one after the other, appending to an otherwise empty space.

That's the simplest solution: have the lazily loaded content appear in a space that is reserved for them, that avoids [reflowing](https://developers.google.com/speed/docs/insights/browser-reflow) content.

But that's not always possible. In that case, you'll want to apply the patch for the currently proposed ["interface previews" feature](https://www.drupal.org/project/drupal/issues/2632750) to let your theme define a _preview of the interface that will be populated by BigPipe_, using a Twig template. 

Alternatively, you can apply a "loading" animation to _all_ BigPipe placeholders in your theme with some CSS — read ["Quick Tip: Add a Loading Animation for BigPipe Content"](https://www.lullabot.com/articles/quick-tip-add-a-loading-animation-for-bigpipe-content).

### Relation to Page Cache & Dynamic Page Cache modules in Drupal 8 core

* Page Cache (`page_cache`): no relation to BigPipe.
* Dynamic Page Cache (`dynamic_page_cache`): if a page is cached in the Dynamic Page Cache, BigPipe is able to send the main content much faster. It contains exactly the things that BigPipe still needs to do

### Issue queue

<http://drupal.org/project/issues/drupal?component=big%5Fpipe.module>

### Related contributed modules

* [Sessionless BigPipe](https://www.drupal.org/project/big%5Fpipe%5Fsessionless): Accelerates Page Cache misses using the BigPipe technique.
* [BigPipe demo](https://www.drupal.org/project/big%5Fpipe%5Fdemo): Demonstrates how BigPipe speeds up pages containing uncacheable/personalized parts.