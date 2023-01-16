When configuring a text format that uses CKEditor, you should see this button for the media library, under "Available buttons" in the "Toolbar configuration" section of the page: ![The CKEditor toolbar icon for the media library](https://www.drupal.org/files/3083975-03.png)

You can drag and drop that button into the active toolbar to add it to CKEditor (into any group of buttons, not just "Media"):

![Dragging the Media Library CKEditor button into the toolbar](https://www.drupal.org/files/3083975-01.png)

Having done that, you will also need to enable the "Embed media" filter, which actually allows media to be embedded in the editor:

![The "Embed media" filter, and some of its configuration options.](https://www.drupal.org/files/3083975-02.png)

It's important to note that the "Embed media" filter must be placed _after_ the "Limit allowed HTML tags and correct faulty HTML" filter, and -- if you're using them -- it must also be placed after the "Align images" and "Caption images" filters. In most cases, placing "Embed media" at the end of the filter processing order will be sufficient.

Additionally, if you have the "Limit allowed HTML tags and correct faulty HTML" filter enabled, you must ensure that the `drupal-media` tag also allows the `alt`, `title`, `data-align`, `data-caption`, `data-view-mode`, `data-entity-uuid `and `data-entity-type `attributes in order for the "Alternate text", "Title text", "Align", "Caption", and "Display" options, respectively, to appear in the "Edit media" dialog. For example:

```php
<drupal-media data-entity-type data-entity-uuid data-view-mode data-align data-caption alt title>
```

So, to recap, all you need to do to enable embedding media in CKEditor is:

1. Drag the Media Library button into your CKEditor toolbar.
2. Enable the "Embed media" filter and place it after all the other filters.

Optionally, you can tweak a few additional settings for the "Embed media" filter:

1. **Default view mode:** This indicates the view mode configuration of the inserted media item, in other words, the way the media will be displayed on the front end.
2. **Media types selectable in the Media Library:** This allows you to only offer certain media types in the Media Library selection interface.
3. **View modes selectable in the 'Edit media' dialog:** These selections will create a drop-down field in the "Edit media" modal dialog (see second image below) and determine which view modes are available as select options.

![Embed media filter options](https://www.drupal.org/files/Basic_HTML___media_library.png)

![Display mode drop-down menu on edit media modal](https://www.drupal.org/files/media-library-view-mode-selection.jpg)