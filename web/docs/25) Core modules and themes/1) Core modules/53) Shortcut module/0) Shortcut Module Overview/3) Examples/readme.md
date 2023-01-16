### shortcut\_set Tag:add/modify/delete

```php
info:
  title: add new shortcut set (create)
  description: add a new shortcut set 
  author: QScience
  category: Shortcut 
  version: 1.0 
  core: 7.x 
  author_email: xrfind@gmail.com

actions:

  - create:
      tag: shortcut_set
      shortcut_set_name: new_set_fortest

  - modify:
      tag: shortcut_set
      oldname: new_set_fortest
      newname: TestShortcutSet001

  - delete:
      tag: shortcut_set
      name: TestShortcutSet001

```

### 

### shortcut\_link Tag:add/modify/delete

```php
info:
  title: add a link to a shortcut set (create)
  description: add a link to a shortcut set 
  author: QScience 
  category: Shortcut 
  version: 1.0 
  core: 7.x 
  author_email: xrfind@gmail.com

actions:

  - create:
      tag: shortcut_link
      shortcut_set_name: new_set_fortest
      shortcut_link_title: link_admcont
      shortcut_link_path: admin/content

  - modify:
      tag: shortcut_link
      menu_link_id: 405 
      new_link_title: link_nodadd
      new_link_path: node/add

  - delete:
      tag: shortcut_link
      # the menu id is diffierent for everyone
      menu_link_id: 405
  

```

### 

### shortcut\_set\_user Tag

```php
info:
  title: switch shortcut set for users (modify)
  description: switch shortcut set for users 
  author: QScience 
  category: Shortcut
  version: 1.0 
  core: 7.x 
  author_email: xrfind@gmail.com

actions:

  - modify:
      tag: shortcut_set_user
      user: admin
      name: new_set_fortest
```