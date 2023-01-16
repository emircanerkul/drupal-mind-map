**Users can:**

1. View the latest feed content chronologically in the **main news aggregator display**
2. View the latest feed content by **source**

The default permissions for the Aggregator module must be changed to allow users to view the subscribed content.

**Site administrators can:**

1. Add, edit, and delete feeds
2. Choose how often Aggregator checks each individual feed for new content
3. Tag individual feeds with categories, offering selective grouping of feeds in separate displays
4. Enable or disable blocks for every feed and feed category in the **block administration page**
5. List the latest news for individual or categorized sources to display as blocks in the **block administration page**

The news aggregator requires cron to check for the latest news from the sites being aggregated. Drupal also provides a **machine-readable OPML file** of all of your subscribed feeds.

In addition to providing subscribed content through the news aggregator, the Aggregator module automatically creates a module block for every feed you have subscribed to, as well as every feed category. By default, these new blocks are disabled, though an administrator can choose to enable a particular feed or category feed block by moving them to an enabled region.

**To syndicate content from another website**, obtain the fully-qualified URL of the remote site's syndication page. Common filename extensions for syndication pages are `.rss`, `.xml` and `.rdf`. Most sites that offer syndication will have an obvious link to their syndication page. Often you need only look for a red XML button, such as the one Drupal uses for site syndication, though some sites do not make their RSS feeds easy to find and not all sites offer syndication.