1. Setup Akamai (See Getting Started)
2. Install [Purge](http://drupal.org/project/purge) module
3. Visit _Configuration > Akamai > Akamai Settings_
4. Enable _Edge-Cache-Tag_ Header and _Akamai Logging_, and add cache tag blacklist for filtering tags output in the HTTP page response header  
![](https://www.drupal.org/files/Akamai%20Configuration%20%7C%20Drush%20Site-Install%202021-10-19%2014-22-05.png)  
**Note:** This list will limit the cache tags output in the HTTP response header. This is helpful to limit tags that could lead to unexpected invalidations or result in Akamai API failures due to header response size ([limit is 8192 bytes](https://www.drupal.org/project/akamai/issues/2968511)).
5. Install [Purge](http://drupal.org/project/purge) module
6. Enable _Purge_, _Purge UI_, _Late runtime processor_, and _Core tags queuer_ modules  
![](https://www.drupal.org/files/Extend%20%7C%20Drush%20Site-Install%202021-10-19%2014-55-03.png)
7. Visit _Configuration > Development > Performance > Purge_
8. Click _Add purger_
9. Select _Akamai Tag Purger_ and click _Add_
10. Under _Queue_ click _Core tags queuer > Configure_  
_![](https://www.drupal.org/files/Purge%20%7C%20Drush%20Site-Install%202021-10-19%2014-41-47.png)_
11. Add the cache tag blacklist from above to limit the cache tags that will be queued to purge automatically and send CCU API requests to Akamai