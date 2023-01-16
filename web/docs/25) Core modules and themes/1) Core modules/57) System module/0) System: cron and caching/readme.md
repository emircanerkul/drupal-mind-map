---
url: https://www.drupal.org/docs/8/core/modules/system/overview
description: >-
  The system module provides system-wide defaults for running jobs at particular
  times, storing (caching) web pages to improve efficiency, and performing other
  essential tasks. The module also keeps track of various preferences you give
  for how you want your system to behave. Some of Drupal's modules require
  regularly scheduled actions. The statistics module periodically cleans up
  logfiles. The aggregator module periodically updates feeds. In Drupal 6.x and
  earlier Ping periodically notifies services of new content on your site.
published_time: '2001-07-11T08:19:41+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
The system module provides system-wide defaults for running jobs at particular times, storing (caching) web pages to improve efficiency, and performing other essential tasks. The module also keeps track of various preferences you give for how you want your system to behave.

Some of Drupal's modules require regularly scheduled actions. The statistics module periodically cleans up logfiles. The aggregator module periodically updates feeds. In Drupal 6.x and earlier Ping periodically notifies services of new content on your site. In Drupal 6.x and later Update module checks for updates on the modules and themes used in your site. Search periodically indexes your site's content. All of these services rely on cron.

Cron is not a part of Drupal 6.x and earlier. It's a scheduler that resides on your server and performs tasks (called "cron jobs") at intervals, which you specify. The jobs can run weekly, daily, hourly, or whatever you like. Drupal 7.x includes functionality to run cron from within Drupal itself but for performance reasons it's recommended to use the server's cron when possible

What you want to do is schedule a "cron job" that has a browser on your server regularly visit your "cron page." For instance, if your site were _[www.example.com](http://www.example.com)_ your cron page would be _<http://www.example.com/cron.php>._ (This page is automatically set up for you when you install Drupal.) This regular visit to your cron page will help keep your system running smoothly.

For a modest personal site to which you post now and then, you might set up such a cron job to run once a day. For a more active site you'd likely want to run that job more often--perhaps every few hours or every hour.

With Linux or Unix you can schedule your cron jobs by setting up what's called a "crontab." (You might rely on helper programs like C-Panel to make setting up your cron jobs easier.)

For further guidance you can see Drupal's handbook page [configuring cron jobs](/node/23714) (or, if your server is running Windows, [configuring Windows cron jobs](/node/31506)). Your hosting company may also help guide you.

The system module's caching mechanism stores dynamically generated web pages in a cache--a stockpile--and reuses them. The pages on your site, rather than being never-changing sets of text and images, are all (or nearly all) likely to use elements pulled together "on the fly" from various parts of your database. Such pages are said to be "dynamically generated."

By caching such pages, the system module keeps them ready to use again, instead of having to create them again each time someone wants to view them. This way, displaying a page takes only one database query instead of several. Queries take time and system power, so caching lightens the load on your system and lets it respond more quickly.

Only pages requested by anonymous users are cached. To reduce server load and save bandwidth, the system module stores and sends cached pages compressed.

**You can:**

1. run your cron job manually at your site's cron page. You can find links to both your cron.php and a cron inside Drupal in your Status report under Administer > Reports > Status Report
2. read about [configuring cron jobs](http://drupal.org/node/23714).
3. administer cache settings in Administer > Site configuration > Performance