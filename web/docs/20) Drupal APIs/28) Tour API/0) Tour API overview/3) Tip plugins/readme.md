Tip types leverage the core plugin system and implement a TipPluginInterface. Core ships with a 'text' plugin and there is an 'image' plugin used in tests. Any module can create a new plugin that implements the API. For example, you might want YouTube videos or other rich interactions in your tip. This can easily be achieved via the API.

#### The plugin configuration

In the example of the forum YAML document, above each tip the configuration is presented as follows:

```php
container-delete:
    id: container-delete
    plugin: text
    label: Delete
    body: Use this button to delete your container. You will be required to confirm you wish to delete the container before it is actually deleted.
    weight: "7"
    selector: #edit-delete

```

This configuration defines a tip for the Delete button on the forum edit page. The keys are fairly self-explanatory -

* id: tip ID
* plugin: plugin type (only text is available in core)
* label: heading for the tip. This is themed as h3 in the tip
* body: body of the tip. Markup is allowed. Don't use `<p>` inside since the wrapper is already a `<p>` and nested `<p>` is not valid HTML markup
* position: 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'. The location of the tooltip in relation to parent, default: auto. Leave blank for a modal.
* weight: tips within a tour are ordered by weight
* selector: selectors are passed through to the render tip but there are a few of particular interest that control the placement of the tip:  
   * For example, in the case of the Delete button, it targets the element with the ID 'edit-delete'.  
   * If the element you are targeting does not have an ID, you can use data-class to target it. For example,  
     action-links a[href="/admin/structure/forum/add/forum"]  
   * If you omit both the .data-id and .data-class - the tip will be shown as modal instead of being targeted to an element. This is useful for a general introduction to the page/form etc.