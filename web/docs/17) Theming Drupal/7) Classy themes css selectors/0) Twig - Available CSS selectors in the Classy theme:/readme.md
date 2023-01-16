### LAYOUT

#### Body

```php
.user-logged-in { }
.path-frontpage { }
.path-[root_path] { }
.node--type-[node_type] { }
.db-offline { }
.visually-hidden { }
.focusable { }
.skip-link { }

```

file: html.html.twig  

#### Page

```php
.layout-container { }
.layout-content { }
.layout-sidebar-first { }
.layout-sidebar-second { }

```

file: page.html.twig  

#### Region

```php
.region { }
.region-[region] { }

```

file: region.html.twig  

#### Book export

```php
.section-[i] { }

```

file: layout/book-export-html.html.twig  

#### Maintenance page

```php
.layout-container { }
.name-and-slogan { }
.site-name { }
.site-slogan { }
.layout-sidebar-first { }
.layout-sidebar-second { }

```

file: layout/maintenance-page.html.twig

### BLOCK

#### Basic

```php
.block { }
.block-[configuration.provider] { }
.block-[plugin_id] { }

```

file: block/block.html.twig  

#### Search form

```php
.block { }
.block-search { }
.container-inline{ }

```

file: block/block--search-form-block.html.twig  

#### Menu

```php
.block { }
.block-menu { }
.navigation { }
.menu--[derivative_plugin_id] { }
.visually-hidden { }

```

file: block/block--system-menu-block.html.twig  

#### Tabs

```php
.tabs { }

```

file: block/block--local-tasks-block.html.twig  

#### Local actions

```php
.action-links { }

```

file: block/block--local-actions-block.html.twig  

#### Branding

```php
.site-logo { }
.site-name { }
.site-slogan { }

```

file: block/block--system-branding-block.html.twig

### CONTENT

#### Page title

```php
.page-title { }

```

file: content/page-title.html.twig  

#### Node

```php
.node { }
.node--type-[node.bundle] { }
.node--promoted { }
.node--sticky { }
.node--unpublished { }
.node--view-mode-[view_mode] { }
.node__meta { }
.node__submitted { }
.node__content { }

```

file: content/node.html.twig  

#### Node links

```php
.node__links { }

```

file: content/links--node.html.twig  

#### Taxonomy term

```php
.taxonomy-term { }
.vocabulary-[term.bundle] { }
.content { }

```

file: content/taxonomy-term.html.twig  

#### Search result

```php
.search-result__title { }
.search-result__snippet-info { }
.search-result__snippet { }
.search-result__info { }

```

file: content/search-result.html.twig  

#### Comment

```php
.comment { }
.js-comment { }
.[status] { }
.by-anonymous { }
.by-[commented_entity.EntityTypeId]-author { }
.hidden { }
.comment__meta { }
.comment__submitted { }
.parent { }
.visually-hidden { }
.content { }

```

file: content/comment.html.twig  

#### Aggregator item

```php
.aggregator-item { }
.feed-item-title { }

```

file: content/aggregator-item.html.twig  

#### Mark

```php
.marker { }

```

file: content/mark.html.twig  

#### Book node export

```php
.section-[depth] { }
.book-heading { }

```

file: content/book-node-export-html.html.twig

### EDIT CONTENT

#### Node edit form

```php
.layout-node-form { }
.clearfix { }
.layout-region { }
.layout-region-node-main { }
.layout-region-node-secondary { }
.layout-region-node-footer { }

```

file: content-edit/node-edit-form.html.twig  

#### Node add list

```php
.node-type-list { }

```

file: content-edit/node-add-list.html.twig  

#### Text format wrapper

```php
.js-text-format-wrapper { }
.text-format-wrapper { }
.js-form-item { }
.form-item { }
.description { }

```

file: content-edit/text-format-wrapper.html.twig  

#### File form widget

```php
.js-form-managed-file { }
.form-managed-file { }

```

file: content-edit/file-managed-file.html.twig  

#### Image field widget

```php
.image-preview { }
.image-widget-data { }

```

file: content-edit/image-widget.html.twig  

#### Filter caption

```php
.caption { }
.caption-[tag] { }

```

file: content-edit/filter-caption.html.twig  

#### Filter guidelines

```php
.filter-guidelines-item { }
.filter-guidelines-[format.id] { }
.label { }

```

file: content-edit/filter-guidelines.html.twig  

#### Filter tips

```php
.compose-tips { }
.filter-type { }
.filter-[name] { }
.tips { }
.filter-[item.id] { }

```

file: content-edit/filter-tips.html.twig

### DATASET

#### Item list

```php
.item-list--[context.list_style] { }
.item-list__[context.list_style] { }
.item-list { }

```

file: dataset/item-list.html.twig  

#### Search results item list

```php
.search-results { }
.[context.plugin]-results { }

```

file: dataset/item-list--search-results.html.twig  

#### Table

```php
.is-active { }
.odd { }
.even { }
.empty { }
.message { }

```

file: dataset/table.html.twig  

#### List of forums and containers

```php
.[forum.zebra] { }
.container { }
.forum-list__forum { }
.indented { }
.forum__icon { }
.forum-status-[forum.icon_class] { }
.visually-hidden { }
.forum__name { }
.forum__description { }
.forum__topics { }
.forum__posts { }
.forum__last-reply { }

```

file: dataset/forum-list.html.twig  

#### Forum

```php
.forum { }

```

file: dataset/forums.html.twig  

#### Status icon for the forum post

```php
.forum__icon { }
.forum__topic-status--[icon_status] { }
.visually-hidden { }

```

file: dataset/forum-icon.html.twig  

#### Aggregator feed

```php
.aggregator-feed { }

```

file: dataset/aggregator-feed.html.twig

### FIELD

#### Basic

```php
.field { }
.field--name-[field_name] { }
.field--type-[field_type] { }
.field--label-[label_display] { }
.field__label { }
.visually-hidden { }
.field__items { }
.field__item { }

```

file: field/field.html.twig  

#### Node title field

```php
.field { }
.field--name-[field_name] { }
.field--type-[field_type] { }
.field--label-[label_display] { }

```

file: field/field--node--title.html.twig  

#### Node created field

```php
.field { }
.field--name-[field_name] { }
.field--type-[field_type] { }
.field--label-[label_display] { }

```

file: field/field--node--created.html.twig  

#### Node user field

```php
.field { }
.field--name-[field_name] { }
.field--type-[field_type] { }
.field--label-[label_display] { }

```

file: field/field--node--uid.html.twig  

#### Text field

```php
.clearfix { }
.text-formatted { }

```

file: field/field--text.html.twig  

#### Image field

```php
.image-style-[style_name] { }

```

file: field/image.html.twig  

#### Date/time element

```php
.datetime { }

```

file: field/time.html.twig  

#### Link with separate title and URL elements

```php
.link-item { }
.link-title { }
.link-url { }

```

file: field/link-formatter-link-separate.html.twig  

#### Comment field

```php
.field { }
.field--name-[field_name] { }
.field--type-[field_type] { }
.field--label-[label_display] { }
.comment-wrapper { }
.title { }
.visually-hidden { }
.comment-form__title { }

```

file: field/field--comment.html.twig

### FORM

#### Container to wrap child elements

```php
.js-form-wrapper { }
.form-wrapper { }

```

file: form/container.html.twig  

#### Fieldset element and its children

```php
.js-form-item { }
.form-item { }
.js-form-wrapper { }
.form-wrapper { }
.fieldset-legend { }
.js-form-required { }
.form-required { }
.fieldset-wrapper { }
.form-item--error-message { }
.field-prefix { }
.field-suffix { }
.description { }

```

file: form/fieldset.html.twig  

#### Form element

```php
.js-form-item { }
.form-item { }
.js-form-type-[type] { }
.form-type-[type] { }
.js-form-item-[name] { }
.form-item-[name] { }
.form-no-label { }
.form-disabled { }
.form-item--error { }
.description { }
.visually-hidden { }
.field-prefix { }
.field-suffix { }
.form-item--error-message { }

```

file: form/form-element.html.twig  

#### Form element label

```php
.option { }
.visually-hidden { }
.js-form-required { }
.form-required { }

```

file: form/form-element-label.html.twig  

#### Individual form element

```php
.js-form-item { }
.form-item { }
.description { }
.clearfix { }

```

file: form/field-multiple-value-form.html.twig  

#### Textarea

```php
.form-textarea { }
.resize-[resizable] { }
.required { }
.form-textarea-wrapper { }

```

file: form/textarea.html.twig  

#### Datetime form wrapper

```php
.label { }
.js-form-required { }
.form-required { }
.form-item--error-message { }
.description { }

```

file: form/datetime-wrapper.html.twig  

#### Datetime

```php
.container-inline { }

```

file: form/datetime-form.html.twig  

#### Checkboxes

```php
.form-checkboxes { }

```

file: form/checkboxes.html.twig  

#### Radios

```php
.form-radios { }

```

file: form/radios.html.twig  

#### Details

```php
.details-wrapper { }
.form-item--error-message { }
.details-description { }

```

file: form/details.html.twig  

#### Dropbutton wrapper

```php
.dropbutton-wrapper { }
.dropbutton-widget { }

```

file: form/dropbutton-wrapper.html.twig

### NAVIGATION

#### Administrative toolbar

```php
.toolbar { }
.toolbar-bar { }
.visually-hidden { }
.toolbar-tab { }
.toolbar-lining { }
.clearfix { }
.toolbar-tray-name { }

```

file: navigation/toolbar.html.twig  

#### Menu

```php
.menu { }
.menu-item { }
.menu-item--expanded { }
.menu-item--collapsed { }
.menu-item--active-trail { }

```

file: navigation/menu.html.twig  

#### Breadcrumb trail

```php
.breadcrumb { }
.visually-hidden { }

```

file: navigation/breadcrumb.html.twig  

#### A set of links

```php
.[key] { }

```

file: navigation/links.html.twig  

#### Primary and secondary local tasks

```php
.visually-hidden { }
.tabs { }
.primary { }
.secondary { }

```

file: navigation/menu-local-tasks.html.twig  

#### Local task link

```php
.is-active { }

```

file: navigation/menu-local-task.html.twig  

#### Book outlines within a block

```php
.book-block-menu { }

```

file: navigation/book-all-books-block.html.twig  

#### Book tree

```php
.menu { }
.menu-item { }
.menu-item--expanded { }
.menu-item--collapsed { }
.menu-item--active-trail { }

```

file: navigation/book-tree.html.twig  

#### Navigate books

```php
.book-navigation { }
.visually-hidden { }
.book-pager { }
.book-pager__item { }
.book-pager__item--previous { }
.book-pager__item--center { }
.book-pager__item--next { }

```

file: navigation/book-navigation.html.twig  

#### Pager

```php
.pager { }
.visually-hidden { }
.pager__items { }
.js-pager__items { }
.pager__item { }
.pager__item--first { }
.pager__item--previous { }
.pager__item--ellipsis { }
.is-active { }
.pager__item--next { }
.pager__item--last { }

```

file: navigation/pager.html.twig

### VIEWS

#### Main view template

```php
.view { }
.view-[id] { }
.view-display-id-[display_id] { }
.js-view-dom-id-[dom_id] { }
.view-header { }
.view-filters { }
.attachment { }
.attachment-before { }
.view-content { }
.view-empty { }
.attachment-after { }
.view-footer { }
.feed-icons { }

```

file: views/views-view.html.twig  

#### Views exposed form

```php
.form--inline { }
.clearfix { }

```

file: views/views-exposed-form.html.twig  

#### Views - View of unformatted rows

```php
.views-row { }

```

file: views/views-view-unformatted.html.twig  

#### Display rows in a grid

```php
.views-view-grid { }
.[options.alignment] { }
.cols-[options.columns] { }
.clearfix { }
.views-row { }
.views-col { }
.row-[loop.index] { }
.col-[loop.index] { }

```

file: views/views-view-grid.html.twig  

#### Views - View as a table

```php
.views-table { }
.views-view-table { }
.cols-[header] { }
.responsive-enabled { }
.sticky-enabled { }
.views-field { }
.views-field-[fields[key]] { }
.views-field-[field] { }

```

file: views/views-view-table.html.twig  

#### Single views grouping

```php
.view-grouping { }
.view-grouping-header { }
.view-grouping-content { }

```

file: views/views-view-grouping.html.twig  

#### List of summary lines

```php
.item-list { }
.views-summary { }
.is-active { }

```

file: views/views-view-summary.html.twig  

#### Unformatted summary links

```php
.views-summary { }
.views-summary-unformatted { }
.is-active { }

```

file: views/views-view-summary-unformatted.html.twig  

#### Views mini pager

```php
.pager { }
.pager__heading { }
.visually-hidden { }
.pager__items { }
.js-pager__items { }
.pager__item { }
.pager__item--previous { }
.is-active { }
.pager__item--next { }

```

file: views/views-mini-pager.html.twig

### USER

#### Forum post submission string

```php
.submitted { }

```

file: user/forum-submitted.html.twig  

#### User data

```php
.profile { }

```

file: user/user.html.twig  

#### Username

```php
.username { }

```

file: user/username.html.twig

### MISCELLANEOUS

#### Status messages

```php
.message { }
.messages--[type] { }
.visually-hidden { }
.messages__list { }
.messages__item { }

```

file: misc/status-messages.html.twig  

#### Progress bar

```php
.progress { }
.progress__label { }
.progress__track { }
.progress__bar { }
.progress__percentage { }
.progress__description { }

```

file: misc/progress-bar.html.twig  

#### Empty spans with RDF attributes

```php
.rdf-meta { }
.hidden { }

```

file: misc/rdf-metadata.html.twig