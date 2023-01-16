When using CKEditor to edit content, you can access the media library if the text format you're using has been configured as described above. Clicking the Media Library button will pop the media library up in a modal, and you can interact with it exactly as you would with a media reference field.

![Opening the media library from within CKEditor](https://www.drupal.org/files/3083975-04.png)

One major difference is that, when embedding media into an editor, **you can only select (or add) _one_ item at a time**.

When you have finished with the media library, the media item you've embedded will appear in the editor as a live preview:

![Preview of an embedded media item in a text editor](https://www.drupal.org/files/3083975-05.png)

It's important to note that this preview is an _approximation_ of what the embedded media will look like, **not** an exact representation. Exactly what the preview will look like depends on the media's type and the way your site is configured, but it may not have all the functionality you expect. For example, with the help of certain contributed modules, it may be possible to embed a tweet into the editor; yet, in the editor, you may just see a thumbnail or placeholder for the embedded item. That is because **the preview is a placeholder, not the real thing**. When the embedded media is displayed to your site's visitors on the front end, it _will_ look correct and complete, and work as you expect it to. But inside the editor, it may differ.

You may edit each media item using the edit link illustrated above, which allows you to override alt text, set alignment options, and optionally add a caption.

![Media item editor modal window with alt text, alignment, and caption settings.](https://www.drupal.org/files/media-library-item-editor.jpg)

If you choose to add a caption, you will see an available field after saving the above options.

![Media item caption field](https://www.drupal.org/files/media-library-edit-caption%20field.jpg)

Note that the contents of the "Edit media" dialog will vary depending on how the text format is configured and the type of media you're embedding. For example, you must have the "Align images" filter enabled to see the alignment options. Similarly, you must have the "Caption images" filter enabled in order to create a caption. The "Alternate text" field only appears if you're embedding media that supports alt text (usually an image). The overall rule of thumb is that the "Edit media" dialog will only show options you can actually use, given the type of media you're embedding and the way the text format is set up.