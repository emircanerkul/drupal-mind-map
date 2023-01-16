---
url: >-
  https://www.drupal.org/docs/contributed-modules/block-style-plugins/include-exclude-styles
description: >-
  The annotations "include" and "exclude" are available to restrict your styles
  from appearing on specific blocks. This is done by passing in a list block's
  plugin IDs. Include: Only show style options on the defined blocks. This is
  like a Whitelist of blocks. Exclude: Do not display style options for any of
  the defined blocks. This is like a Blacklist of blocks. Choose one or the
  other. Don't use both "include" and "exclude" at the same time.
published_time: '2018-12-06T00:07:01+00:00'
modified_time: '2021-03-24T21:40:29+00:00'
---
The annotations "include" and "exclude" are available to restrict your styles from appearing on specific blocks. This is done by passing in a list block's plugin IDs.

**Include:** Only show style options on the defined blocks. This is like a Whitelist of blocks.

**Exclude:** Do not display style options for any of the defined blocks. This is like a Blacklist of blocks.

Choose one or the other. Don't use both "include" and "exclude" at the same time.

### How to use

Pass in a "block plugin id" for a normal block or a "block content type" bundle name for a custom block type into the "include" or "exclude" attributes.

All derivatives of a normal block may be used by adding `:*` such as `system_menu_block:*`