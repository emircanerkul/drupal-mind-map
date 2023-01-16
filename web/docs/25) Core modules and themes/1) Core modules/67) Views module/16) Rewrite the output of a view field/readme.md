---
url: >-
  https://www.drupal.org/docs/8/core/modules/views/rewrite-the-output-of-a-view-field
description: >-
  You can configure a field in a view to display information that is different
  from the actual data in the field. By using tokens, you can enhance the field
  with dynamic content from the database. Navigate to the edit screen for a view
  (for example, admin/structure/views/view/MYVIEWNAME/edit). In the Fields
  section, click a field. The Configure Field dialog box displays. Click Rewrite
  Results. Enable any of the following options: Override the output of this
  field with custom text You can replace the field with custom text which may
  include a subset of HTML.
published_time: '2013-02-15T19:41:47+00:00'
modified_time: '2018-06-17T13:39:00+00:00'
---
You can configure a field in a view to display information that is different from the actual data in the field. By using tokens, you can enhance the field with dynamic content from the database.

1. Navigate to the edit screen for a view (for example, admin/structure/views/view/MYVIEWNAME/edit).
2. In the Fields section, click a field. The Configure Field dialog box displays.
3. Click **Rewrite Results**.
4. Enable any of the following options:  
   * **Override the output of this field with custom text** You can replace the field with custom text which may include a [subset of HTML](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Component%21Utility%21Xss.php/property/Xss%3A%3AadminTags/8.2.x). When this option is enabled, a list of tokens is displayed (expand the Replacement Patterns section) which you can use to dynamically add data to the custom text.  
   * **Output this field as a custom link** You must enter the link path. You can also configure various options for how the link will be displayed.  
   * **Trim this field to a maximum number of characters** Enter the maximum number of characters that will be displayed.  
   * **Strip HTML tags** When this option is enabled, all HTML tags will be stripped. You can also specify certain tags to keep.  
   * **Remove whitespace** If this option is enabled, all whitespace at the beginning and the end of the output will be removed.  
   * **Convert newlines to HTML <br> tags** If this option is enabled, all newline characters (e.g. \\n) are converted into break tags.
5. Click **Apply**.