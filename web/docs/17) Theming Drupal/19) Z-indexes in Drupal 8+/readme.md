---
url: https://www.drupal.org/docs/theming-drupal/z-indexes-in-drupal-8
description: >-
  Working with z-indexes (layers) in Drupal, themers may need to do some hunting
  around to know if something they are moving up or down in the stack is going
  to cover, or be covered by an element that is themed by a core module or
  theme. To save themers the time of finding out what layer things are on, below
  is a table showing all of the instances of z-index in core. These z-indexes
  are present in every core theme unless specified otherwise or the value of the
  second column is a theme.
published_time: '2016-10-31T21:49:25+00:00'
modified_time: '2022-08-09T14:39:02+00:00'
---
Working with z-indexes (layers) in Drupal, themers may need to do some hunting around to know if something they are moving up or down in the stack is going to cover, or be covered by an element that is themed by a core module or theme. To save themers the time of finding out what layer things are on, below is a table showing all of the instances of z-index in core. These z-indexes are present in every core theme unless specified otherwise or the value of the second column is a theme. 

| z-index | Module/theme/library of origin | CSS selector(s)                                                                      |                                       |
| ------- | ------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------- |
| 10000   | tour                           | .joyride-expose-cover                                                                |                                       |
| 9999    | jquery-ui                      | .ui-tooltip                                                                          |                                       |
| 1260    | jquery-ui                      | .ui-dialog                                                                           |                                       |
| 1259    | jquery-ui                      | .ui-widget-overlay                                                                   |                                       |
| 1250    | toolbar                        | .toolbar .toolbar-bar \| .toolbar .toolbar-tray                                      |                                       |
| 1000    | system                         | .ajax-progress-fullscreen                                                            |                                       |
| 1000    | jquery-ui                      | .ui-dialog .ajax-progress-throbber                                                   |                                       |
| 1000    | bartik (theme)                 | body:not(:target) .region-primary-menu .menu-toggle                                  |                                       |
| 502     | toolbar                        | .toolbar-oriented .toolbar-bar                                                       |                                       |
| 502     | toolbar                        | .toolbar .toolbar-bar .toolbar-tab > .toolbar-icon                                   |                                       |
| 501     | toolbar                        | .toolbar .toolbar-tray                                                               |                                       |
| 501     | settings-tray                  | .settings-tray                                                                       |                                       |
| 500     | contextual                     | .contextual                                                                          |                                       |
| 500     | contextual                     | .contextual-links                                                                    |                                       |
| 500     | system                         | table.sticky-header                                                                  |                                       |
| 499     | block                          | .block-demo-backlink                                                                 |                                       |
| 499     | node                           | .node-preview-container                                                              |                                       |
| 110     | tour                           | .shepherd-element                                                                    |                                       |
| 105     | tour                           | .shepherd-modal-overlay-container                                                    |                                       |
| 102     | tour                           | .joyride-expose-wrapper                                                              |                                       |
| 101     | jquery-joyride                 | .joyride-tip-guide                                                                   |                                       |
| 300     | quickedit                      | .quickedit-validation-errors                                                         |                                       |
| 300     | quickedit                      | .quickedit-form                                                                      |                                       |
| 102     | tour                           | .joyride-expose-wrapper                                                              |                                       |
| 101     | tour                           | .joyride-tip-guide                                                                   |                                       |
| 100     | quickedit                      | .quickedit-toolbar-container                                                         |                                       |
| 100     | quickedit                      | .quickedit-form-container                                                            |                                       |
| 100     | dropbutton                     | .dropbutton-multiple.open                                                            |                                       |
| 100     | tour                           | .joyride-modal-bg                                                                    |                                       |
| 100     | jquery-ui                      | .ui-selectable-helper                                                                |                                       |
| 100     | jquery-ui                      | .ui-front                                                                            |                                       |
| 99      | quickedit                      | .quickedit-editable.quickedit-highlighted                                            |                                       |
| 98      | quickedit                      | .quickedit-editable                                                                  |                                       |
| 51      | views                          | .views-displays .tabs .open > a                                                      |                                       |
| 50      | views                          | .views-displays .tabs .action-list                                                   |                                       |
| 50      | seven (theme)                  | .skip-link                                                                           |                                       |
| 50      | bartik (theme)                 | .skip-link                                                                           |                                       |
| 15      | seven (theme)                  | .tabs.primary .tabs\_\_tab.is-active \| .is-horizontal .tabs.secondary .tabs\_\_tab  |                                       |
| 11      | ckeditor                       | ckeditor-buttons:hover + focus                                                       |                                       |
| 10      | ckeditor                       | ckeditor-buttons                                                                     |                                       |
| 10      | seven (theme)                  | .button:focus                                                                        |                                       |
| 10      | ckeditor                       | .cke\_reset\_all .cke\_dialog\_footer\_buttons a.cke\_dialog\_ui\_button:focus       |                                       |
| 10      | seven (theme)                  | .is-collapse-enabled .tabs:before \| .is-horizontal .tabs:before                     | .is-collapse-enabled .tabs\_\_trigger |
| 5       | ckeditor                       | .cke\_dialog\_close                                                                  |                                       |
| 3       | seven (theme)                  | .js .dropbutton-wrapper .dropbutton-widget .dropbutton-action a:hover, active, focus |                                       |
| 2       | views/stable                   | dropbutton                                                                           |                                       |
| 2       | views/stable                   | .js .dropbutton-wrapper .dropbutton .dropbutton-action > .ajax-progress-throbber     |                                       |
| 2       | seven (theme)                  | .vertical-tabs\_\_menu-item focus active                                             |                                       |
| 2       | contextual                     | .contextual.open .trigger                                                            |                                       |
| 2       | jquery-ui                      | .ui-slider .ui-slider-handle                                                         |                                       |
| 2       | ckeditor                       | .cke\_dialog\_resizer                                                                |                                       |
| 2       | ckeditor                       | .cke\_dialog\_tabs                                                                   |                                       |
| 1       | ckeditor                       | .cke\_dialog\_body                                                                   |                                       |
| 1       | seven                          | .vertical-tabs\_\_menu-item.is-selected                                              |                                       |
| 1       | jquery-ui                      | .ui-slider .ui-slider-range                                                          |                                       |
| \-1     | ckeditor                       | .cke\_dialog\_ui\_radio\_input                                                       |                                       |
| \-1     | ckeditor                       | .cke\_iframe\_shim                                                                   |                                       |
| \-1     | toolbar                        | .toolbar-oriented .toolbar-tray-vertical > .toolbar-lining:before                    |                                       |
| \-1     | quickedit                      | #quickedit-toolbar-fence                                                             |                                       |