---
url: >-
  https://www.drupal.org/docs/converting-drupal-7-modules-to-drupal-8/wscci-conversion-guide
description: >-
  This guide is a basic tutorial for the process of converting legacy page
  callbacks to new-style controllers. It is not a guide for porting from Drupal
  7 to Drupal 8; it assumes that you're working with a fairly recent copy of
  Drupal 8 HEAD. (A contrib module guide for porting from Drupal 7 to Drupal 8
  can be based off of this document later.) We will demonstrate the process by
  looking at the Book module in core. These are real-live examples (based on a
  true story!) of a core callback getting converted. Some snippets have been
  reformatted or tweaked to help illustrate a point.
published_time: '2013-03-26T15:59:08+00:00'
modified_time: '2016-12-20T12:41:16+00:00'
---
This guide is a basic tutorial for the process of converting legacy page callbacks to new-style controllers. It is _not_ a guide for porting from Drupal 7 to Drupal 8; it assumes that you're working with a fairly recent copy of Drupal 8 HEAD. (A contrib module guide for porting from Drupal 7 to Drupal 8 can be based off of this document later.)

We will demonstrate the process by looking at the Book module in core. These are real-live examples (based on a true story!) of a core callback getting converted. Some snippets have been reformatted or tweaked to help illustrate a point. There are a lot of moving parts, so we'll take it in several passes and build up our understanding of what is going on. (This example is taken directly from [this issue](http://drupal.org/node/1938296).)

If you want to help with the conversion (please do!), see any issue with the [WSCCI-Conversion \[1 issue\]](http://drupal.org/project/issues/search/drupal?status[]=Open&issue%5Ftags=WSCCI-conversion) tag or stop by #Drupal-WSCCI in IRC.

First, let's look at an excerpt of book module pre-conversion:

book.module

```php
/**
 * Implements hook_menu().
 */
function book_menu() {
  $items['admin/content/book'] = array(
	'title' => 'Books',
	'description' => "Manage your site's book outlines.",
	'page callback' => 'book_admin_overview',
	'access arguments' => array('administer book outlines'),
	'type' => MENU_LOCAL_TASK,
	'file' => 'book.admin.inc',
  );
  $items['admin/content/book/settings'] = array(
	'title' => 'Settings',
	'route_name' => 'book_settings',
	'access arguments' => array('administer site configuration'),
	'type' => MENU_LOCAL_TASK,
	'weight' => 100,
  );
  $items['book'] = array(
	'title' => 'Books',
	'page callback' => 'book_render',
	'access arguments' => array('access content'),
	'type' => MENU_SUGGESTED_ITEM,
	'file' => 'book.pages.inc',
  );
  $items['book/export/%/WSCCI Conversion Guide'] = array(
	'page callback' => 'book_export',
	'page arguments' => array(2, 3),
	'access callback' => 'book_export_access',
	'access arguments' => array(3),
	'type' => MENU_CALLBACK,
	'file' => 'book.pages.inc',
  );
  $items['node/WSCCI Conversion Guide/outline'] = array(
	'title' => 'Outline',
	'page callback' => 'book_outline',
	'page arguments' => array(1),
	'access callback' => '_book_outline_access',
	'access arguments' => array(1),
	'type' => MENU_LOCAL_TASK,
	'weight' => 2,
	'file' => 'book.pages.inc',
  );
  $items['node/WSCCI Conversion Guide/outline/remove'] = array(
	'title' => 'Remove from outline',
	'page callback' => 'drupal_get_form',
	'page arguments' => array('book_remove_form', 1),
	'access callback' => '_book_outline_remove_access',
	'access arguments' => array(1),
	'file' => 'book.pages.inc',
  );
  // ... 
  return $items;
}

```

book\_menu defines a whole bunch of menu items, which in Drupal 7 are also router items. Routing is the process of mapping an incoming request to the code that will deal with it; in Drupal 7, that's a "page callback" function. In Drupal 8, it's a "controller" (usually a method of a class). We've left the page callbacks themselves out of this example for brevity.