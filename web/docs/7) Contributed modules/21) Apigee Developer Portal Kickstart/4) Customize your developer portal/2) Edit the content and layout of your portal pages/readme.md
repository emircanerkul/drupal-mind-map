The Kickstart comes with two pre-built page entities: the **Landing page** and the **Basic page**. In addition, the Kickstart provides two page nodes with pre-loaded content using the **Landing page** entity: the **Home** page and the **Get Started** page.

To customize your developer portal, you can modify the content of the pre-loaded page nodes, or create new instances of the **Landing page** and **Basic** **page** entities with new content and configurable layouts. This section describes how to edit existing page nodes or create new page nodes for your portal.

### Edit the installed Home or Get Started pages

You can edit the **Home** and **Get Started** page nodes installed by Kickstart and customize these pages with your own images, content and background styles. 

To edit the existing **Home** and **Get Started** pages installed in your portal:

1. Click **Content** in the Drupal Admin menu
2. Locate the node with the correct title and select **Edit** from the **Operations** menu.
3. Click **Edit** in the **Header** or **Content** sections to add, update or remove content.
4. Add sections by selecting **Add Blockquote**, **Add Callout group**, etc. from the **Content** section dropdown list.
5. The display order of each **Content** section can be changed by clicking on the **+** icon to the left of your content item and dragging to reorder.
6. Click **Preview** to preview your changes, or **Save** to save and publish your changes.

### Create a new page with the Landing page entity

You can create a new page for your portal with a customized layout using the Landing page entity.

To create a new Landing page entity:

1. Log in to your portal as a user with admin or content creation privileges.
2. Navigate to **Content > Add content > Landing page** in the Drupal admin menu.
3. Add a **Title** for your page.
4. Click **Add Hero** in the **Header** section.  
   1. Select a **Hero background style.**  
   _Tip: If you are not using a hero image, set the **hero background style** to **Dark.**_  
   2. Add a background image to your hero using the **Media** file widget to select or upload an image.  
   _Tip: To change the hero image, click **Remove** to delete the image and use the **Media** file widget to select or upload a new image. You may wish to adjust the **Hero background style**  to complement the new image._  
   3. Add a **Title** to your hero.  
   4. Add text to your hero.  
   5. If you would like a button or button group in your hero, click **Add Button group.** For each button you would like to add:  
         1. Select the **Button style**.  
         2. Add the **Button Link URL.**  
         3. Add the **Button Link text.**
5. Select **Add Card group** in the **Content** section to add a card group.  
   1. Select a **Card group background style**.  
   2. Enter a title for the card group.  
   3. For each card you wish to add:  
         1. Add an image using the **Media** file widget to select or upload an image.  
         2. Add a **Card title.**  
         3. Add a **Card summary**.  
         4. Add a **Card link URL**  and **Link text**.  
         5. To add additional cards, click **Add Card**.  
         6. If you would like a button or button group under your card group, click **Add Button group.** For each button you would like to add:  
                  1. Select the **Button style**.  
                  2. Add the **Button Link URL.**  
                  3. Add the **Button Link text.**
6. Select **Add a Callout group** in the **Content** section to add a callout group.  
   1. Select a **Callout group background style**.  
   2. Enter a title for the callout group.  
   3. For each callout you wish to add:  
         1. Add a **Callout icon** using the autocomplete list..  
         2. Add a **Callout title.**  
         3. Add a **Callout summary**.  
         4. Add a **Callout link URL**  and **Link text**.  
   4. To add an additional callout, click **Add Callout**.  
   5. If you would like a button or button group under your callout group, click **Add Button group.** For each button you would like to add:  
         1. Select the Button style.  
         2. Add the **Button Link URL.**  
         3. Add the **Button Link text.**
7. Select **Add Blockquote** in the **Content** section to add Blockquote.  
   1. Add **Text** to your blockquote.  
   2. Add a **Source** to your blockquote to attribute your quote to a source or author.  
   3. To add an additional Blockquote, click **Add Blockquote**.
8. Select **Add Text & Image** in the **Content** section to add a text section with an image.  
   1. Select a **Background style**.  
   2. Add a **Title** and **Body** content.  
   3. If you would like a button or button group to your text section, click **Add Button group.** For each button you would like to add:  
         1. Select the **Button style**.  
         2. Add the **Button Link URL.**  
         3. Add the **Button Link text.**  
   4. Add an image using the **Add** **Media** file widget to select or upload an image.  
   5. To add an additional text section with an image, click **Add Text & Image**.
9. Select **Add Call to Action** in the **Content** section to add a CTA to your page.  
   1. Select a **CTA** **Background style**.  
   2. Add a **CTA Title** and **CTA text** content.  
   3. If you would like a button or button group to your text section, click **Add Button group.** For each button you would like to add:  
         1. Select the **Button style**.  
         2. Add the **Button Link URL.**  
         3. Add the **Button Link text.**  
   4. To add an additional CTA, click **Add Call to Action**.
10. Click **Preview** to preview your changes, or **Save** to save and publish your changes.

### Update your portal’s front page

To set your new Landing page as the front page of your developer portal:

1. Log in to your portal as a user with admin or content creation privileges.
2. Click **Content** in the Drupal Admin menu
3. Locate the node of your new Landing page and select **Edit** from the **Operations** menu.
4. Note the node id in the URL of your new page; i.e. _/node/_.
5. Navigate to **Configuration > System> Basic site settings**.
6. Add the _/node/_ to the **Default front page** URL in the **Front Page** section.
7. Click **Save configuration**.

### Create a new portal page with the Basic page entity

You can create a new page for your portal with a simplified layout using the Basic page entity.

1. Log in to your portal as a user with admin or content creation privileges.
2. Navigate to **Content > Add content > Basic page** in the Drupal admin menu.
3. Add a **Title** for your page.
4. Click **Add Title bar** in the **Header** section.  
   1. Add a **Title** **bar title.**  
   2. Add text to your **Title bar**.  
   3. Add a **Title bar icon** using the autocomplete list.
5. Add the text of your page using the WYSIWG editor in the **Body** field. This field supports basic HTML formatting and the use of images.
6. Click **Preview** to preview your changes, or **Save** to save and publish your changes.