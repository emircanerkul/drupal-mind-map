---
url: https://www.drupal.org/docs/mobile-drupal-sites/front-end-performance
description: >-
  Front-end performance is a challenge shared by all mobile solutions. This
  section lists strategies and tools for improving and testing mobile site
  performance. Strategies Below are some strategies that may improve site
  performance: Minify JavaScript, CSS and HTML. Aggregate JavaScript and CSS.
  Parallelize assets downloads across hostnames. Leverage browser caching.
  Enable gzip compression. Specify image dimensions. Optimize images. Use lazy
  loading for site assets. Leverage breakpoints to download appropriate image
  sizes. Keep Inline background images under ~4KB in size. Remove unused CSS.
published_time: '2016-09-22T01:42:19+00:00'
modified_time: '2021-12-21T20:06:30+00:00'
---
Front-end performance is a challenge shared by all mobile solutions. This section lists strategies and tools for improving and testing mobile site performance.

### Strategies

Below are some strategies that may improve site performance:

* Minify JavaScript, CSS and HTML.
* Aggregate JavaScript and CSS.
* Parallelize assets downloads across hostnames.
* Leverage browser caching.
* Enable gzip compression.
* Specify image dimensions.
* Optimize images.
* Use lazy loading for site assets.
* Leverage breakpoints to download appropriate image sizes.
* Keep Inline background images under \~4KB in size.
* Remove unused CSS.
* Use efficient CSS selectors.
* Download 3rd party scripts asynchronously.

### Testing

Here are some tools that can be used to test front-end performance:

* [YSlow](http://yslow.org/) profiles pages and offers recommendations for speeding them up.
* Network tab of [Firebug](http://getfirebug.com/)/[Chrome](https://developers.google.com/chrome-developer-tools/docs/network)/Safari/Opera devtools.
* [Learn to read waterfall charts](http://www.strangeloopnetworks.com/blog/how-to-use-a-waterfall-chart-to-interpret-web-performance-data/) from Strangeloop Networks.
* [WebPageTest.org](http://www.webpagetest.org/) offers front-end performance testing from various locations worldwide in the browser of your choice.
* [gtmetrix.com](http://gtmetrix.com/) & [loads.in](http://loads.in/) also offer front-end performance testing.
* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/ "PageSpeed Insights") offers website performance insights and provides recommendations to improve page speed on all devices.

### Tools

Here is a list of tools that can help you achieve the strategies above:

* Use [PageSpeed Insights](https://pagespeed.web.dev "PageSpeed Insights") to get the list of recommendations for your website.
* Compress theme assets with image compressor software like [tinypng](https://tinypng.com/), [tinyjpg](https://tinyjpg.com/) or [compressjpeg](http://compressjpeg.com/).
* Distribute your assets with CDN networks like [Cloudflare](https://cloudflare.com/cdn/) or [Akamai](https://www.akamai.com/).
* Use Chrome devtools Audits tab to check what CSS is not being used on the current page.