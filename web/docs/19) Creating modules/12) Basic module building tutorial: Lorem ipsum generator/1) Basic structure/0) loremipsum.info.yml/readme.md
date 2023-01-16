```php
name: Lorem ipsum
type: module
description: 'Lorem ipsum generator for Drupal'
package: Development
core_version_requirement: ^8 || ^9
configure: loremipsum.form

```

Info files are now formatted as _YML_, and there's a difference between modules and themes that must be made clear via the _type_ declaration. The config declaration points to a _route_ (more on that later) but other than that, there's not much else. In fact, this is the only file you'll ever need for your module. After saving this (in the root _/modules_ folder) you can enable your module in _/admin/modules_ without breaking your website. But, as you'll see further ahead, that's not nearly enough.

Note: If Drupal Core versions earlier than 8.7.7 you'll need to use `core` instead of `core_version_requirement` .