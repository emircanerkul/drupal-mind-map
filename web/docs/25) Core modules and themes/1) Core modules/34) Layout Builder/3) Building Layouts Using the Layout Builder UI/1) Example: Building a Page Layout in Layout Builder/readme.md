In this example, we will first remove these defaults so building can begin with an empty layout.  
This is accomplished by pressing the “Remove” icon for the Section, confirming and then saving.

![Remove default section](https://www.drupal.org/files/resetlb123.gif)

### Adding Sections

When working with an empty layout, the first step is to add a Section.   **Sections** are the top-level building blocks of Page Layouts. They’re added by clicking “Add Section”

After clicking “Add Section”, you select a layout for the section. Layout Builder comes with four Section Layouts: One Column, Two Column, Three Column, and Four Column. Additional layouts can be added as needed.

Some Section Layouts have additional configuration options that must be selected before they are added to a Section. For example, for the Two Column, you must choose the column widths before it is added to the Section. (these widths can be changed later as needed)

![Add section steps](https://www.drupal.org/files/add-section-steps.gif)

### Add Content (Blocks)

Once a section is added, it’s time to add content to your layout. Each column (or region) has an “Add Block” link. Clicking “Add Block” opens a dialog where you can choose the content to add.

Note that while these links are labeled "Add Block", and the dialog is titled "Choose a block" the items that can be added extend well beyond what is available in Drupal's Block UI. In addition to all blocks available in Block UI, you can create custom blocks that are only used within the Layout and add fields belonging to the current entity or user.

1. Clicking "Create Custom Block" allows you to create a custom block that is only available to the Layout - not visible in Block UI. Clicking this will take you to a second form: "Add new inline block". You can choose any of your sites' custom Block types.  
Previously you might have used Paragraphs to insert images, videos, etc. into _**inline**_ text passages but now you can completely rely on using the Layout Builder custom inline blocks for those requirements, while retaining your semantic markup.
2. Clicking the Block type will take you to the custom Block creation form. Each Block type will have a "Title" field, "Display Title" checkbox, and then the custom Block type fields.
3. Once complete, click the "Add Block" to add the new block to your layout.

### Modifying field settings

If you've enabled layout builder on an existing content type with fields, those field display settings are now managed via Layout Builder. To modify a field's settings:

1. Hover over the field you would like to edit
2. Click the pencil icon, then click "Configure" and the field settings will appear in the sidebar
3. Make changes and click "Update"
4. Click "Save layout" or continue with other changes

![](https://www.drupal.org/files/field_edit.png)

### ![](https://www.drupal.org/files/field_settings_4.png)

### Moving Content (Blocks)

There are two methods for moving blocks.

Drag and drop:

1. Hover over the block you want to move until you see the four-way arrow icon
2. Click and drag the block into the desired position

Move:

1. Hover over the block you want to move and click the pencil icon as shown above
2. Click "Move"
3. Select a new section for the block, or drag and drop the blocks to reorder:

![](https://www.drupal.org/files/move-blocks.png)