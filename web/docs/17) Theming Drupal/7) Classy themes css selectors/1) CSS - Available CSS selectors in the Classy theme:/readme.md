#### Menu

```php
ul.menu { }
[dir="rtl"] ul.menu { }
.menu-item--expanded { }
.menu-item--collapsed { }
[dir="rtl"] .menu-item--collapsed { }
.menu-item { }
ul.menu a.is-active { }

```

file: components/menu.css  

#### Item list

```php
.item-list .title { }
.item-list ul { }
.item-list li { }
[dir="rtl"] .item-list li { }
.item-list--comma-list { }
.item-list--comma-list .item-list__comma-list { }
.item-list__comma-list li { }
[dir="rtl"] .item-list--comma-list .item-list__comma-list { }
[dir="rtl"] .item-list__comma-list li { }

```

file: components/item-list.css  

#### Breadcrumbs

```php
.breadcrumb { }
.breadcrumb ol { }
[dir="rtl"] .breadcrumb ol { }
.breadcrumb li { }
.breadcrumb li:before { }
.breadcrumb li:first-child:before { }

```

file: components/breadcrumb.css  

#### Tabs

```php
div.tabs { }
ul.tabs { }
.tabs > li { }
[dir="rtl"] .tabs > li { }
.tabs a { }
.tabs a.is-active { }
.tabs a:focus { }
.tabs a:hover { }

```

file: components/tabs.css  

#### Link buttons and action links

```php
.action-links { }
[dir="rtl"] .action-links { }
.action-links li { }
.action-links li:first-child { }
[dir="rtl"] .action-links li:first-child { }
.button-action { }
.button-action:before { }
[dir="rtl"] .button-action:before { }

```

file: components/action-links.css  

#### Links

```php
ul.inline { }
ul.links.inline { }
[dir="rtl"] ul.inline { }
[dir="rtl"] ul.links.inline { }
ul.inline li { }
ul.links a.is-active { }

```

file: components/links.css  

#### Link

```php
button.link { }
label button.link { }

```

file: components/link.css  

#### Nodes

```php
.node--unpublished { }

```

file: components/node.css  

#### Collapsible fieldsets

```php
.collapse-processed > summary { }
.collapse-processed > summary:before { }
[dir="rtl"] .collapse-processed > summary:before { }
.collapse-processed:not([open]) > summary:before { }
[dir="rtl"] .collapse-processed:not([open]) > summary:before { }

```

file: components/collapse-processed.css  

#### Fields

```php
.field__label { }
.field--label-inline .field__label { }
.field--label-inline .field__items { }
.field--label-inline .field__label { }
.field--label-inline > .field__item { }
.field--label-inline .field__items { }
[dir="rtl"] .field--label-inline .field__label { }
[dir="rtl"] .field--label-inline .field__items { }
.field--label-inline .field__label::after { }

```

file: components/field.css  

#### Inline forms

```php
.form--inline .form-item { }
[dir="rtl"] .form--inline .form-item { }
.form--inline .form-item-separator { }
[dir="rtl"] .form--inline .form-item-separator { }
.form--inline .form-actions { }
[dir="rtl"] .form--inline .form-actions { }

```

file: components/inline-form.css  

#### Inline items

```php
.container-inline label:after { }
.container-inline .label:after { }
.form-type-radios .container-inline label:after { }
.form-type-radios .container-inline .form-type-radio { }
.container-inline .form-actions { }
.container-inline.form-actions { }

```

file: components/container-inline.css  

#### Form components

```php
form .field-multiple-table { }
form .field-multiple-table .field-multiple-drag { }
[dir="rtl"] form .field-multiple-table .field-multiple-drag { }
form .field-multiple-table .field-multiple-drag .tabledrag-handle { }
[dir="rtl"] form .field-multiple-table .field-multiple-drag .tabledrag-handle { }
form .field-add-more-submit { }
.form-item { }
.form-actions { }
tr.odd .form-item { }
tr.even .form-item { }
.form-composite > .fieldset-wrapper > .description { }
.form-item .description { }
label.option { }
.form-composite > legend { }
.label { }
.form-checkboxes .form-item { }
.form-radios .form-item { }
.form-type-radio .description { }
.form-type-checkbox .description { }
[dir="rtl"] .form-type-radio .description { }
[dir="rtl"] .form-type-checkbox .description { }
.marker { }
.form-required:after { }
abbr.tabledrag-changed { }
abbr.ajax-changed { }
.form-item input.error { }
.form-item textarea.error { }
.form-item select.error { }
.form-item--error-message:before { }

```

file: components/form.css  

#### Textarea

```php
.form-textarea-wrapper textarea { }

```

file: components/textarea.css  

#### File module

```php
.file { }
[dir="rtl"] .file { }
.file--general { }
.file--application-octet-stream { }
.file--package-x-generic { }
.file--x-office-spreadsheet { }
.file--x-office-document { }
.file--x-office-presentation { }
.file--text-x-script { }
.file--text-html { }
.file--text-plain { }
.file--application-pdf { }
.file--application-x-executable { }
.file--audio { }
.file--video { }
.file--text { }
.file--image { }

```

file: components/file.css  

#### Image upload widget

```php
.image-preview { }
[dir="rtl"] .image-preview { }
.image-widget-data { }
[dir="rtl"] .image-widget-data { }
.image-widget-data .text-field { }

```

file: components/image-widget.css  

#### Collapsible details

```php
details { }
details > .details-wrapper { }
summary { }

```

file: components/details.css  

#### Buttons

```php
.button { }
.image-button { }
.button:first-child { }
.image-button:first-child { }

```

file: components/button.css  

#### Progress bar

```php
.progress__track { }
.progress__bar { }
[dir="rtl"] .progress__bar { }

@-webkit-keyframes animate-stripes { }
@-ms-keyframes animate-stripes { }
@keyframes animate-stripes { }

```

file: components/progress.css  

#### System messages

```php
.messages { }
[dir="rtl"] .messages { }
.messages + .messages { }
.messages__list { }
.messages__item + .messages__item { }
.messages--status { }
[dir="rtl"] .messages--status { }
.messages--warning { }
[dir="rtl"] .messages--warning { }
.messages--error { }
[dir="rtl"] .messages--error { }
.messages--error p.error { }

```

file: components/messages.css  

#### Search results

```php
.search-results { }

```

file: components/search-results.css  

#### More link

```php
.more-link { }
[dir="rtl"] .more-link { }

```

file: components/more-link.css  

#### Pager

```php
.pager__items { }
.pager__item { }
.pager__item.is-active { }

```

file: components/pager.css  

#### Forum module

```php
.forum__description { }
.forum__icon { }
[dir="rtl"] .forum__icon { }
.forum__title { }
.forum .indented { }
[dir="rtl"] .forum .indented { }
.forum__topic-status--new { }
.forum__topic-status--hot { }
.forum__topic-status--hot-new { }
.forum__topic-status--sticky { }
.forum__topic-status--closed { }

```

file: components/forum.css  

#### Indent threaded comments

```php
.indented { }
[dir="rtl"] .indented { }

```

file: components/indented.css  

#### Exposed filters

```php
.exposed-filters .filters { }
[dir="rtl"] .exposed-filters .filters { }
.exposed-filters .form-item { }
.exposed-filters .form-item label { }
[dir="rtl"] .exposed-filters .form-item label { }
.exposed-filters .form-select { }
.exposed-filters .current-filters { }
.exposed-filters .current-filters .placeholder { }
.exposed-filters .additional-filters { }
[dir="rtl"] .exposed-filters .additional-filters { }

```

file: components/exposed-filters.css  

#### Table sort indicator

```php
th.is-active img { }
td.is-active { }

```

file: components/tablesort.css  

#### Table select

```php
tr.selected td { }
td.checkbox { }
th.checkbox { }
[dir="rtl"] td.checkbox { }
[dir="rtl"] th.checkbox { }

```

file: components/tableselect.css  

#### Table drag

```php
tr.drag { }
tr.drag-previous { }
body div.tabledrag-changed-warning { }

```

file: components/tabledrag.css  

#### Dropbuttons

```php
.js .dropbutton-widget { }
.js .dropbutton-widget:hover { }
.dropbutton .dropbutton-action > * { }
.dropbutton .secondary-action { }
.dropbutton-multiple .dropbutton { }
[dir="rtl"] .dropbutton-multiple .dropbutton { }
.dropbutton-multiple .dropbutton .dropbutton-action > * { }
[dir="rtl"] .dropbutton-multiple .dropbutton .dropbutton-action > * { }

```

file: components/dropbutton.css  

#### Modal windows

```php
.ui-dialog--narrow { }

```

file: components/ui-dialog.css  

#### Dialogs

```php
.ui-dialog { }
.ui-dialog .ui-dialog-titlebar { }
.ui-dialog .ui-dialog-titlebar-close { }
.ui-dialog .ui-dialog-buttonpane { }
.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset { }
.ui-dialog .ui-dialog-buttonpane .ui-button-text-only .ui-button-text { }
.ui-dialog .ui-dialog-content .form-actions { }
.ui-dialog .ajax-progress-throbber { }
.ui-dialog .ajax-progress-throbber .throbber { }
.ui-dialog .ajax-progress-throbber .message { }

```

file: components/dialog.css  

#### User module

```php
.password-strength__meter { }
.password-strength__indicator { }
.password-strength__indicator.is-weak { }
.password-strength__indicator.is-fair { }
.password-strength__indicator.is-good { }
.password-strength__indicator.is-strong { }
.password-confirm { }
.password-field { }
.password-strength { }
.password-confirm-match { }
.password-suggestions { }
.password-suggestions ul { }
.confirm-parent { }
.password-parent { }
[dir="rtl"] .confirm-parent { }
[dir="rtl"] .password-parent { }
.password-confirm .ok { }
.password-confirm .error { }

```

file: components/user.css  

#### Book module

```php
.book-navigation .menu { }
.book-navigation .book-pager { }
.book-pager__item { }
.book-pager__item--previous { }
[dir="rtl"] .book-pager__item--previous { }
.book-pager__item--center { }
.book-pager__item--next { }
[dir="rtl"] .book-pager__item--next { }

```

file: components/book-navigation.css  

#### Icons

```php
.icon-help { }
[dir="rtl"] .icon-help { }
.feed-icon { }

```

file: components/icons.css  