---
url: >-
  https://www.drupal.org/docs/8/modules/addtoany-share-buttons/configuring-addtoany
description: >-
  The AddToAny module provides share buttons for Drupal, including the AddToAny
  universal share button, Facebook, Twitter, Pinterest, WhatsApp, Reddit,
  LinkedIn, and many more. Configure placement By default, share buttons are
  placed in an adjustable field on articles and pages. To configure placement,
  use the "Manage Display" form for each content type, e.g. Structure > Content
  types > Article > Manage display. You can toggle the content entities that
  AddToAny is available for in the "Entities" section of AddToAny's
  configuration page.
published_time: '2018-03-20T06:10:17+00:00'
modified_time: '2019-09-18T23:15:53+00:00'
---
The [AddToAny module](https://www.drupal.org/project/addtoany) provides share buttons for Drupal, including the AddToAny universal share button, Facebook, Twitter, Pinterest, WhatsApp, Reddit, LinkedIn, and many more.

### Configure placement

By default, share buttons are placed in an adjustable field on _articles_ and _pages_.

To configure placement, use the "Manage Display" form for each content type, e.g. **Structure** \> **Content types** \> **Article** \> **Manage display**.

You can toggle the content entities that AddToAny is available for in the "Entities" section of AddToAny's configuration page.

### Configure AddToAny

To configure AddToAny options, go to **Administration** \> **Configuration** \> **Web services** \> **AddToAny**.

### Configure share buttons

You can customize the enabled share buttons by editing the "Service Buttons HTML Code" box. See the [AddToAny service buttons doc](https://www.addtoany.com/buttons/customize/drupal/standalone%5Fservices) for details.

### Configure additional options

#### AddToAny's Drupal module documentation

See AddToAny's [documentation for Drupal](https://www.addtoany.com/buttons/customize/drupal) for additional AddToAny feature examples, such as:

* [Share event handling & modifying](https://www.addtoany.com/buttons/customize/drupal/events)
* [Templates & endpoint parameters](https://www.addtoany.com/buttons/customize/drupal/templates)
* [Link tracking & URL shorteners](https://www.addtoany.com/buttons/customize/drupal/link%5Ftracking)
* [Custom color buttons](https://www.addtoany.com/buttons/customize/drupal/icon%5Fcolor)
* [Image share buttons](https://www.addtoany.com/buttons/customize/drupal/image%5Fsharing)
* [Share counters](https://www.addtoany.com/buttons/customize/drupal/share%5Fcounters)
* [Share count recovery](https://www.addtoany.com/buttons/customize/drupal/share%5Fcount%5Frecovery)

#### AddToAny's general website documentation

You can also explore AddToAny's [general documentation](https://www.addtoany.com/buttons/customize/) for features that may not have Drupal-specific documentation yet, such as:

* [Follow buttons](https://www.addtoany.com/buttons/customize/follow%5Fbuttons)
* [Floating share buttons](https://www.addtoany.com/buttons/customize/floating%5Fshare%5Fbuttons)

For these AddToAny features, you can insert the example HTML into a custom Block. Note when using the general website examples:

<!-- note-warning -->
> WARNING: No need to load page.js again
The AddToAny module already efficiently&nbsp;loads page.js, so you do not&nbsp;need the following line from the general examples:
&lt;script async src="https://static.addtoany.com/menu/page.js"&gt;&lt;/script&gt;Avoid HTML tags in your Additional JavaScript box
Be sure to only place JavaScript code (not HTML code) in your&nbsp;"Additional JavaScript" box in Configuration &gt; Web services &gt; AddToAny &gt; Additional Options.&nbsp;Do not insert the&nbsp;&lt;script&gt; or &lt;/script&gt; tags when using the general website examples.
Avoid HTML tags in your Additional CSS box
The same applies for CSS code examples and your "Additional CSS" box. Do not insert the &lt;style&gt; or &lt;/style&gt; tags when using the general website examples.