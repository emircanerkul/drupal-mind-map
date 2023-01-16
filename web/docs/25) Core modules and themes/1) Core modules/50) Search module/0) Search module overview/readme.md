---
url: https://www.drupal.org/docs/8/core/modules/search/overview
description: >-
  The search module lets users search for specific content on your site. You can
  search both for users and for particular words. When you are on the "Content"
  tab of Search, you will be able to search for words appearing in the default
  rendering of node content on your site, which would include the default
  rendering of any CCK fields, Location fields, Taxonomy, etc., as well as
  comments. When you are on the "Users" tab of Search, you will be able to
  search the user names of registered users on your site, and if you have
  sufficient permissions, also their email addresses.
published_time: '2003-12-18T23:49:38+00:00'
modified_time: '2022-07-29T15:44:20+00:00'
---
The search module lets users search for specific content on your site. You can search both for users and for particular words. When you are on the "Content" tab of Search, you will be able to search for words appearing in the default rendering of node content on your site, which would include the default rendering of any CCK fields, Location fields, Taxonomy, etc., as well as comments. When you are on the "Users" tab of Search, you will be able to search the user names of registered users on your site, and if you have sufficient permissions, also their email addresses.

### Search Query Types

Search queries can be done in a variety of ways. Drupal's search allows the user create a very powerful search by adding a few key words or symbols.

**AND Searches**  
To get results that match multiple words, simply type the words that you want to find. This is the default behavior of Drupal's search.

**OR Searches**  
To search for data that may contain one of a few terms, but not necessarily all of the terms, enter the keyword OR between each search term: _"dogs OR cats_" or _"dogs OR cats OR birds"_.

**Note:** The keyword "OR" must be capitalized. The search module will treat the lowercase "or" as another word to find. Because "or" is smaller than the default search word length (3 characters), the search module will ignore "or" to create an "AND" search instead.

**Exclusionary Searches**  
You can even filter for things that don't exist. For example, if you want to find pet stores that do not have chickens, you need an exclusionary search. Drupal allows you to do this using the minus "-" sign. For example "pet stores -chickens" finds all nodes with "pet" and "stores" that do not also contain the words "chickens".

**Advanced Search**  
With Advanced Search you can also look for "any of these words" or "this phrase," or both. You can rule out words you don't want, and you can choose _content types_ within which to confine your search.

You can enable the search module on the _modules_ page (_**administer >> modules**_ in Drupal 7 or _**administer >> extend** in Drupal 8and later_ ).

Note that by default, content search only finds exact matches for the keywords in your content. You can install a contributed stemming or n-gram module to modify this behavior.

### Indexing

Drupal's search engine indexes the text content of the nodes on your site. You can modify the way this is done.

The search engine indexes at intervals you choose by setting "cron runs." Cron (which stands for chronograph) is not a part of Drupal. It's a scheduler that resides on your server and runs tasks (called "cron jobs") at intervals, which you specify. The jobs can run weekly, daily, hourly, or whatever you like.

What you want to do is schedule a "cron job" that has a browser on your server regularly visit your "cron page." If you _visit the Status Report page you will find the exact URL to use on your site for external runs of cron by hovering over the Run Cron button._

Whenever a visit to the cron URL occurs, the search engine will take the work of indexing. You need to set up those cron runs before your search engine will work.

For a modest personal site to which you post now and then, you might set up such a cron job to run once a day. For a more active site you'd likely want to run that job more often--perhaps every few hours or every hour.

With Linux or Unix you can schedule your cron jobs by setting up what's called a "crontab." (You might rely on helper programs like cPanel to make setting up your cron jobs easier.)

For further guidance on cron you can see Drupal's handbook page [configuring cron jobs](/node/23714) (or, if your server is running Windows, [configuring Windows cron jobs](/node/31506)). Your hosting company may also help guide you.

On your settings page for Search (_**administer >> configuration >> search and metadata >> search settings**_ in Drupal 7 or _**administer >> configuration >> search and metadata >> search pages**_ in Drupal 8 and later) you can limit how many items should be indexed in a single cron run. This can help keep your system from getting overloaded with work. (If you get a message that cron is timing out or PHP is running out of memory, lower the number of items to index per run.) You also have a few more search settings you can choose.

### Reindexing content

Content-related actions on your site (creating, editing, or deleting content and comments) automatically cause affected content items to be marked for indexing or reindexing at the next cron run. When content is marked for reindexing, the previous content remains in the index until cron runs, at which time it is replaced by the new content.

Unlike content-related actions, actions related to the structure of your site do not cause affected content to be marked for reindexing. Examples of structure-related actions that affect content include deleting or editing taxonomy terms, enabling or disabling modules that add text to content (such as Taxonomy, Comment, and field-providing modules), and modifying the fields or display parameters of your content types. If you take one of these actions and you want to ensure that the search index is updated to reflect your changed site structure, you can mark all content for reindexing by clicking the "Re-index site" button on the Search settings page (_**administer >> configuration >> search and metadata >> search pages**_).

### Accessing Search

You can place a link to _Search_ among your site's primary and secondary links, or on any other menu as well. (Click "add menu item," and when you fill in the "path" field on the dialogue page just enter "search.")

On your _blocks_ page (_**administer >> structure >> blocks**_ in Drupal 7 and _**administer >> structure >> block layout** in Drupal 8 and later_) there's also a _Search form_ you can enable, and you can choose where you want it to place it.

On your _permissions_ page (_**People >> Permissions**_) you can decide who can do searches and who can administer the search settings. By default, only users with the Administrator role can perform searches.

A technical note: To use the search module the database user needs the _create temporary table_ permission. If you do not have it, ask your systems administrator to make sure it's granted to you.