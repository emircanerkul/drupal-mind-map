---
url: >-
  https://www.drupal.org/docs/contributed-modules/boost/boost-depends-on-file-system-performance-and-can-cause-problems-with-it
description: >-
  The file system and it's possibility to handle many files very quick is
  something which is very important for boost. But if yuu didn't know how your
  file system is working you can maybe cause problems e.g. on a network-attached
  file system. This is the reason why e.g. Acquia Cloud Support warns for using
  Boost on their systems and point on dedicated servers. There is also a
  possibility to create a RAM based file system for boost files but this is
  usually not available on shared hosts.
published_time: '2022-12-16T21:05:13+00:00'
modified_time: '2022-12-16T21:26:14+00:00'
---
The file system and it's possibility to handle many files very quick is something which is very important for boost. But if yuu didn't know how your file system is working you can maybe cause problems e.g. on a network-attached file system. This is the reason why e.g. [Acquia Cloud Support](https://support-acquia.force.com/s/article/360005312473-Boost-and-Acquia-Cloud) warns for using Boost on their systems and point on dedicated servers.  
There is also a possibility to **create a RAM based file system for boost** files but this is usually not available on shared hosts.