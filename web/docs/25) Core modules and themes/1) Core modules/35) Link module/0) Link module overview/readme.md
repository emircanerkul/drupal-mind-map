---
url: https://www.drupal.org/docs/8/core/modules/link/overview
description: >-
  The Link module is a core module that allows internal and external links
  (internal links were formerly only allowed via the Entity Reference module
  (since moved into core and deprecated)). Installation: The Link module is part
  of Drupal core and can be enabled from the Extend page (admin/modules). Input
  format: Links URLs can include anchors or query strings. Field settings: Link
  fields can be configured to allow internal links only, external links only, or
  both. Link fields can also be configured to require link text, disable link
  text, or leave it optional.
published_time: '2013-06-14T21:51:33+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
The Link module is a core module that allows internal and external links (internal links were formerly only allowed via the Entity Reference module (since moved into core and deprecated)).

**Installation:** The Link module is part of Drupal core and can be enabled from the Extend page (admin/modules).  
**Input format:** Links URLs can include anchors or query strings.  
**Field settings:** Link fields can be configured to allow internal links only, external links only, or both. Link fields can also be configured to require link text, disable link text, or leave it optional.  
**URL Validation:** Internal links must begin with /, ?, #, or special values such as `<front>` for the front page. External links must being with the web protocol (http:// or https://) in order to validate. Validation takes place after filling in the field. Other scheme names (e.g. ftp, git, etc.) should be in services.yml file inside filter\_protocols like this:

`parameters: # Allowed protocols for URL generation.filter_protocols: - http- https- ftp- news- nntp- tel- telnet- mailto- irc- ssh- sftp- webcal- rtsp- skype`  
**Link texts:** Link texts (called "Link titles" in D7) can be added to each URL. Whether this is allowed or required can be set in the field management. Placeholder text can be added to appear in the fields before the user adds their own content.  
**Display settings:** allow displaying either the link text or the URL, and specifying the number of characters at which the link text should be trimmed.  
**No follow:** The `rel="nofollow"` option notifies search engines that the link should not be followed. (See [Wikipedia](https://en.wikipedia.org/wiki/Nofollow) for details.)