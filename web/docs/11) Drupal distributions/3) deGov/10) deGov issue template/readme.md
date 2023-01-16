---
url: https://www.drupal.org/docs/distributions/degov/degov-issue-template
description: >-
  This issue queue is monitored by developers and other technical types. We like
  detail! So please use this form and tell us, concisely but precisely, what's
  up. Please fill out ALL THE REQUIRED FIELDS! Issues with missing or incomplete
  issue templates will be closed. Please mind the form fields above (like
  version number etc.). [Required] Which deGov version (use "composer show |
  grep degov") E.g. 8.x-5.27. Please notice: Specify this information via the
  select input of the Drupal.org issue form, above the textarea.
published_time: '2018-10-29T08:44:38+00:00'
modified_time: '2019-02-26T08:34:25+00:00'
---
This issue queue is monitored by developers and other technical types. We like detail! So please use this form and tell us, concisely but precisely, what's up. Please fill out ALL THE REQUIRED FIELDS! Issues with missing or incomplete issue templates will be closed. Please mind the form fields above (like version number etc.).

**\[Required\] Which deGov version (use "composer show | grep degov")**

E.g. 8.x-5.27\. Please notice: Specify this information via the select input of the Drupal.org issue form, above the textarea.

**\[Required\] Short description about the problem or motivation**

If I try to visit /admin/structure for adding the block "XYZ", I am getting an error, which is blocking me in block creation.

**\[Required\] Step-by-step description for reproduction**

An example:

1. Install D8 with deGov profile
2. drush dl search\_api search\_api\_page-8.x-1.x-dev permissions\_by\_term facets -y
3. drush en search\_api search\_api\_db search\_api\_page permissions\_by\_term facets -y
4. Set site UUID: drush config-set "system.site" uuid "ffa6bc02-1087-408f-91d8-ae78dec4d225" -y
5. Import configuration attached tar.gz (hit "Import all" twice")
6. Rebuild permissions
7. Clear Drupal caches
8. Navigate to /admin/structure/taxonomy/manage/visibility/overview
9. Create two terms called Private and Public
10. The private term should have authenticated and admin role enabled
11. The public term should have all roles enabled
12. Create two new Basic Pages (/node/add/page) Private and Public and set the Visibility respectively.
13. Check the /search-page with an authenticated user and as an anonymous user
14. On both cases the contents are visible, although clicking on the Private node's link with anonymous user results in an access denied page.
15. Now apply the attached patch, re-index the items (/admin/config/search/search-api/index/db\_index), rebuild permissions and clear the Drupal caches
16. The items should be correctly shown now for both authenticated and anonymous users

**\[Required\] Is this a multi-lingual website? How do I recognize, that this page is multi-lingual?**

**\[Required if errors\] Which error/warning/notice messages do you get?**

Please make sure, that you have checked your PHP logs.

**\[Optional\] Screenshots/Screencasts**

Please notice: We like them a lot. Free screencasts can be created by the Screencastify Google Chrome extension: <https://www.screencastify.com/>.

**\[Optional\] Proposal for resolving this issue**

**\[Optional\] Open tasks**

**\[Optional\] User interface changes**

**\[Optional\] API changes**

**\[Optional\] Changes in the data-model**