---
url: >-
  https://www.drupal.org/docs/contributed-modules/advanced-varnish/how-to-include-dynamic-data-on-the-page-esi-blocks
description: >-
  In case of authenticated users we often have some content which is
  personalized for current user, for example banners with promo info, or special
  discounts etc... To include this info on the page you shouldn't modify your
  code at all, we have the power of ESI requests implemented in the module, so
  any block which is placed on the block layout page can be marked as ESI block.
  This means that this particular block weill be replaced by placeholder (while
  page will be cached with placeholder by Varnish block will be delivered
  seprately).
published_time: '2019-07-23T13:16:18+00:00'
modified_time: '2022-01-26T14:16:16+00:00'
---
In case of authenticated users we often have some content which is personalized for current user, for example banners with promo info, or special discounts etc... To include this info on the page you shouldn't modify your code at all, we have the power of ESI requests implemented in the module, so any block which is placed on the block layout page can be marked as ESI block. This means that this particular block weill be replaced by placeholder (while page will be cached with placeholder by Varnish block will be delivered seprately). When varnish will serve the page with such placeholder it will automatically make a request to Drupal to get content for this placeholder, when the response will be retrieved placeholder will be replaced with actual block content and page will be sent to the user. The advantage of this method is that you don't need to modify your code at all, and there won't be any Ajax request to Drupal after page is loaded.

Let's see how to do this. First ope the page with the blocks (admin/structure/block)

![](https://www.drupal.org/files/adv_0_0.png)

Then click on configuration link and check the block settings page:

![](https://www.drupal.org/files/adv_1_0.png)

You will find "Advanced Varnish cache" section there.

* **ESI** \- The first checkbox will mark this block as ESI one, so it will be replaced by placeholder during render process.
* **TTL** \- you can set caching time individually for such blocks, so one of the blocks can be store like an hour in Varnish, while other one are always rendered by Drupal.
* **Cache granularity (Cache bin)** \- like all other things, these blocks can be cached per role per user or can be shared for all users (in case you need this block for anonymous users)

Useful links:

* [Edge Side Includes](https://varnish-cache.org/docs/3.0/tutorial/esi.html)