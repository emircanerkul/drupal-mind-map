---
url: >-
  https://www.drupal.org/docs/managing-site-performance-and-scalability/content-delivery-network-cdn
description: >-
  In many cases, it's very advantageous to integrate your Drupal site with a
  CDN. CDNs are globally distributed networks of proxy servers. A basic CDN
  integration will offload static assets (like images, videos, and sometimes CSS
  and JS) to the CDN. More advanced CDNs can deliver entire pages.
published_time: '2016-09-20T15:51:43+00:00'
modified_time: '2019-03-29T08:56:59+00:00'
---
In many cases, it's very advantageous to integrate your Drupal site with a [CDN](http://en.wikipedia.org/wiki/Content%5Fdelivery%5Fnetwork). 

CDNs are globally distributed networks of proxy servers. A basic CDN integration will offload static assets (like images, videos, and sometimes CSS and JS) to the CDN. More advanced CDNs can deliver entire pages.

CDNs offer several advantages over serving all traffic directly:

* Assets can be cached in a proxy which is geographically closer to the end user, which usually leads to lower latency and increased download speed;
* Each page response is shared between your origin server and the CDN, meaning that your origin server can serve more concurrent requests;
* By splitting a response across multiple servers, enhanced HTTP performance can be achieved via [domain sharding](http://www.stevesouders.com/blog/2009/05/12/sharding-dominant-domains/), although this is becoming less advantageous with the increasing adoption of [HTTP/2 and SPDY](https://www.stevesouders.com/blog/2013/09/05/domain-sharding-revisited/);
* Some CDNs offer page optimisation services which can further enhance performance for end users.