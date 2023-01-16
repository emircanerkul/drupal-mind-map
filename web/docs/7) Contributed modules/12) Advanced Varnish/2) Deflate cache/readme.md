---
url: https://www.drupal.org/docs/8/modules/advanced-varnish/deflate-cache
description: >-
  If you site expirience issue during cache clear becasue of high load or any
  othe reason you can use this functionality to decrease load during cache clear
  procedures. This function is only available if you're using Built-in Varnish
  purger. Each request are tagged with a special "Etag" header which is used to
  slightly invalidate Varnish cache. Please visit the Deflate cache page
  (admin/config/development/adv_varnish/deflate) to iniciate deflation process.
  On this page you can choose which amount of cache will be invalidate by one
  Cron execution.
published_time: '2019-07-22T06:47:35+00:00'
modified_time: '2019-07-22T06:53:23+00:00'
---
If you site expirience issue during cache clear becasue of high load or any othe reason you can use this functionality to decrease load during cache clear procedures.

This function is only available if you're using Built-in Varnish purger.

Each request are tagged with a special "Etag" header which is used to slightly invalidate Varnish cache. Please visit the Deflate cache page (admin/config/development/adv\_varnish/deflate) to iniciate deflation process.

![](https://www.drupal.org/files/adv_10.png)

On this page you can choose which amount of cache will be invalidate by one Cron execution. After step size is choosed click on Start deflation and you'll see a progress bar which shows actuall cache clear progress.

![](https://www.drupal.org/files/adv_11.png)

When all the cache will be cleared progress will disappear and you'll see the status of last Deflation process

![](https://www.drupal.org/files/adv_12.png)