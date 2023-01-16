### Content Header 

![](https://www.drupal.org/files/1.content-header.png)

#### 

In Drupal 7 “add to shortcuts” icon was a plus symbol. In Drupal 8 this is now a star icon to avoid confusion with 'add' actions that use the plus. The various states for the shortcut add/remove component are shown inset, from left to right: inactive, inactive:hover, activated, activated:hover and finally inactive again.

The header background is 'burlap' form the color palette.

### Typography

![](https://www.drupal.org/files/2.typography.png)

**Note**: Typography differs from the original guide in that Source Sans has not been added. There is an open issue with the licensing working group to add Source Sans. See the original [draft guide](https://groups.drupal.org/node/283223) for more information.

### Text fields 

![fields](https://www.drupal.org/files/fields_7.png)

_“Title” field, top to bottom: 1) normal text input; 2) hover state; 3) invalid state with the inline error message; 4) disabled._

“Tags” field, top to bottom: 1) autocomplete input with help text; 2) autocomplete in use, showing “tokenized” input, active spinner and dropdown menu.

Text inputs are styled to be recognizable but not garish, with a subtle background tint (#fcfcfa). A slight softening of text inputs is achieved with a 2px border-radius; this is a subtle refinement that we use throughout form elements to subtly soften otherwise harsh corners. For consistency, we propose changing the D7 “throbber” to a “spinner” styled similarly to the progress bar component (see below) for consistency. To reduce UI clutter, the spinner would appear only while awaiting a response from the server.

**Note**: The required field marker is no longer red, both to reduce UI clutter (without removing information) and to allow red to be reserved exclusively for error states and danger actions.

### Basic Form Controls

![](https://www.drupal.org/files/5.basic-form-controls.png)

_Customized controls for `<select>, <input type="checkbox"> and <input type="radio">`(disabled state on the right)_

There are challenges associated with customizing these particular form controls, especially around accessibility. However, we feel there are a number of ascetic gains that can be made if we choose to implement this.

Similar to the text fields we use slightly rounded corners on these form elements to capture the softness we wish to express. We additionally styled the checkbox/radio’s somewhat special to accommodate the idea of brand consistency across platforms.

### Buttons

![buttons](https://www.drupal.org/files/buttons_5.png)

_Row 1: standard button;_ 
_Row 2: primary button;_ 
_Row 3: danger button_

Buttons should be clearly identifiable as such, with normal and primary actions inviting interaction. At the same time – for visual conciseness – graphic effects are limited to a subtle gradient (and border, where necessary for contrast with a background). For an informal, friendly appearance, identifiability among other UI controls, and for continuity with Drupal 7, discrete buttons have a fully rounded “pill” shape.

As with input fields, focus is communicated with a blue halo. The hover state brightens the button (optically, light colours ‘advance’) and adds a small shadow beneath, causing it to ‘stand up’ and invite a click. Primary buttons – the save button on a node form, for example – are emphasized using Drupal blue. This carries through the main brand colour, and, since blue is a calming colour, the added emphasis remains respectful, not yelling or rushing the action.

Delete buttons – those that perform a destructive action such as deleting a node – are colored red, since they must call attention and signal caution. However, they should not draw the eye away from more common actions, so their border and background is removed, appearing instead as a plain link. An underline provides an affordance since danger buttons have neither the standard link colour nor the standard button style.

**Note**: All button colours pass WCAG 2.0, except for the primary button’s hover state, which warrants some consideration.

### Dropbuttons 

![dropbuttons](https://www.drupal.org/files/dropbuttons.png)

Dropbutton, a single button that discloses a dropdown menu. Note: The image above is not consistent with the current implementation of dropbuttons.

### Small Controls [#](https://groups.drupal.org/node/283223#Small%5FControls)

![](https://www.drupal.org/files/9.small-controls.png)

_Left to right: small button (with icon); small dropbutton button; small select element (with the left-aligned label)._

Sometimes tight spaces recommend the use of smaller controls. Such situations include WYSIWYG toolbars, filter forms and table rows.  
When touch support is detected, this guide proposes small controls revert to their full-size counterparts to improve touch-target sizes.

### Progress

![](https://www.drupal.org/files/10.progress_0.png)

**Note**: The compact version of the progress bar has not yet been implemented.

To appear more cheerful – for the same reason a lobby or waiting room should make an extra effort to be pleasant – progress bars are fully rounded. The progress bar retains much of its current values, e.g. always animated to be scrolling and clearly outlined activity and percentage on each side of the horizontal axis.

### File Field 

![](https://www.drupal.org/files/11.file-field_1.png)

**Note**: The above design of the upload widget is not yet implemented. Progress is on [this issue.](https://www.drupal.org/node/2113931)

Fields in Drupal 8 new appearance and a new interaction design:

1. Files can be added from the local filesystem using drag-and-drop or using the traditional click-browse-attach workflow (which hands the action off to the OS and back)
2. Files upload automatically once added by dropping or browsing.
3. Uploaded files provide a preview where possible (images) or a file-type-specific icon where not.
4. File fields with multiple attachments use progressive disclosure to reveal each additional slot in turn. They should support dropping multiple files onto a single dropzone to upload multiple files at once.
5. The “Browse Library” functionality is speculative at this time but designed to accommodate contrib.

An important reason to encapsulate much of this functionality is that it tends to scale much better amongst many items and especially if placed between forms it can serve as a clear visual landmark.

### Fieldset 

![fieldset](https://www.drupal.org/files/fieldset_3.png)

### Summary and Details 

The file and image fields, fieldset, details, and accordion are all container elements to some degree, having a number of sub-elements in relation to one another. They all use a background tone and slightly darker border to contain these sub-elements and visually signal their grouping. They do this with as light a touch as possible while remaining distinguishable. To soften them slightly, a 2px border-radius is applied to the outer corners.

### Navigation Tabs 

![horizontal tabs](https://www.drupal.org/files/tabs_11.png)

Horizontal tabs in Drupal 8

1. Primary and secondary tabs are left aligned
2. The negative space created where two rounded tabs have been removed by “extending” the tabs underneath one another.
3. Secondary tabs well differentiated from primary tabs and separated from the following content with a horizontal rule.

### Mobile nav tabs

Below 600px the primary and secondary tabs convert to vertical navigation tabs with a trigger to expand and collapse the primary tabs.

![nav tabs](https://www.drupal.org/files/Screen%20Shot%202016-11-08%20at%2011.06.48%20AM.png)

### Vertical Tabs 

Vertical have not changed from D7, apart from inheriting Drupal 8 color and type changes.

![vertical tabs](https://www.drupal.org/files/Bitmap.png)

### Table 

![](https://www.drupal.org/files/16.table_.png)

To reduce visual noise we have removed zebra striping, using thin rules to separate table rows. There is now a subtle highlight on the hovered table row, allowing the eye to more easily move horizontally along the row, even with large stretches of whitespace between cells. (Note: does not need to pass WCAG contrast standards, since it's an added affordance.) 

The sort-active table header cell style is carried through to other elements, such as secondary tabs and pagination to enforce consistency.

### Pagination 

![](https://www.drupal.org/files/17.pagination_0.png)

To simplify the UI, we have removed the “first” and “last” links from pagination, as well as the text labels for “previous” and “next” links. 

**Note**: This style is not yet implemented as designed.

### Nav List 

![](https://www.drupal.org/files/18.nav-list_0.png)  
The Nav List is used on “hub” pages to provide an on-page navigation menu with help text. 

### Messages

![](https://www.drupal.org/files/19.messages.png)  
Messages follow closely from a [style proposed for D7](http://drupal.org/node/639368#comment-3247466) to make messages very noticeable (with a bright colour bar and icon(s) at the left margin). In Drupal 8 message colors have been optimized for contrast and to distinguish one from another.

In Drupal 8 messages now have flat, single-color SVG icons.

### Modal Dialog [#](https://groups.drupal.org/node/283223#Modal%5FDialog)

![](https://www.drupal.org/files/20.modal-dialog_1.png)