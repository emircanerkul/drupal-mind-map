---
url: >-
  https://www.drupal.org/docs/managing-site-performance-and-scalability/server-scaling
description: >-
  If your server hardware is starting to reach its limits and you have optimized
  the site as much as you reasonably can, or you need to scale sooner than you
  can optimize, then you can upgrade the server hardware in one of two ways.
  Vertically To scale vertically means to throw more resources at the same
  server. In a cloud data center, this might be as easy as upgrading the server
  size for more CPU cores, memory, etc. This is the simplest method of scaling
  the hardware. Think of this scenario: You have a traditional D8 install with
  everything on the same server - the database, drupal site, etc.
published_time: '2017-07-11T20:53:35+00:00'
modified_time: '2019-04-26T14:45:53+00:00'
---
If your server hardware is starting to reach its limits and you have optimized the site as much as you reasonably can, or you need to scale sooner than you can optimize, then you can upgrade the server hardware in one of two ways.

### Vertically

To scale vertically means to throw more resources at the same server. In a cloud data center, this might be as easy as upgrading the server size for more CPU cores, memory, etc. This is the simplest method of scaling the hardware.

Think of this scenario: You have a traditional D8 install with everything on the same server - the database, drupal site, etc. You were never expecting much traffic, so you chose a small server size to save money. However, you just made a hilarious blog post about cats, and it hit the front page of Reddit. Now your CPU load goes from 1% to 100% continually - the server can’t keep up with this pseudo DDOS attack on the site. You don’t have time to implement that crazy caching module you were thinking of for the last three months, and you don’t have the expertise to add more servers. Your only real option is to scale vertically. By increasing the resources your server has, it can cope with the increase in demand.

The downside is that it can get cost prohibitive, and there is a ceiling at which you can scale to. There will be a point at which you literally can’t scale vertically anymore - you would be at the limit of hardware for a single server. This is where scaling horizontally comes in.

### Horizontally

Scaling horizontally means to add more servers to separate the load. If done properly, this can drastically reduce the load any single server receives. However, this comes at the cost of added complexity.

One of the simplest and most common ways to scale horizontally is to separate the database into its own server. Drupal would live on server A, and the database would live on server B. This means the database load is completely separated from the app, and each can still be scaled vertically when needed. You just point the database URL in the Drupal config to the domain of the database server, and assuming the network configuration/firewall is setup properly, it will just work.

Now, even with the database on its own server, you may still find your Drupal app server is getting hit too hard. This is where it may make sense to scale your app server horizontally - basically, making copies of itself to split the load up between them. You also need to figure out a way to actually split the load up - what’s going to tell some users to go to one server, and other users to a different one? Most likely, a load balancer. Now you have a load balancer, two or more app servers, and a database server. This is why scaling horizontally is a lot more complex than scaling vertically.

One thing to note about horizontal scaling that may not be obvious is that you should always try to have your servers on the same local network - ie the same data center. The speed at which data can travel will be much faster through a local network than through the internet.

Think of this scenario: a user loads your site which connects to an app server in California. The app server sends a query to its database in New York. The speed of light takes roughly 0.016 seconds to get to new york one way - that’s 0.032 for a round trip. That may not seem like much, but with the added latency of network connections, routers, etc. and the high probability that it’s just one of many queries it has to make, and you’ve now added a lot of extra time to your page load.

### Multiple Server Considerations for Drupal

When you have multiple app servers for Drupal, you will also need to come up with a way to deploy code to each server at the same time. There are SaaS platforms like acquia, platform.sh, pantheon.io, amazee.io etc. that can manage the entire hosting setup for you, but if you're doing it yourself, you will need to do something like an rsync setup, or git push to each of your servers, etc.

You may also want to think about how cron is setup - whether to dedicate a single server to run cron, or split it up over all of your servers. An easy way to do it is to dedicate a single server to run cron through the system's crontab.