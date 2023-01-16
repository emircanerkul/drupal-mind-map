---
url: >-
  https://www.drupal.org/docs/8/distributions/guardr/preparing-a-new-guardr-7x-release
description: >-
  1. Update version numbers in the following files: guardr.info README.md
  VERSION.txt 2. Remove CHANGELOG.txt from Drupal core $ git clone
  git://git.drupal.org/project/drupal.git $ cd $ git checkout 7.x $ git fetch
  --all $ git rebase origin/7.x $ git checkout -b tag/ $ git checkout -b
  guardr-remove-changelog-txt-1878172- $ rm CHANGELOG.txt $ git add . $ git
  commit -m “Issue# 1878172: Removed CHANGELOG.txt from 7.xx” $ git diff tag/ >
  guardr-remove-changelog-txt-1878172-.patch 3. Upload the new patch file to
  Security recommendation for production usage: Remove CHANGELOG.TXT from core
  #1878172 4.
published_time: '2016-11-17T22:18:37+00:00'
modified_time: '2019-10-22T16:32:55+00:00'
---
1\. Update version numbers in the following files:

```php
guardr.info
README.md
VERSION.txt
```

2\. Remove CHANGELOG.txt from Drupal core

```php
$ git clone git://git.drupal.org/project/drupal.git
$ cd <drupal-root>
$ git checkout 7.x
$ git fetch --all
$ git rebase origin/7.x
$ git checkout -b tag/<core-tag> <core-tag>
$ git checkout -b guardr-remove-changelog-txt-1878172-<next-comment-id>
$ rm CHANGELOG.txt
$ git add .
$ git commit -m “Issue# 1878172: Removed CHANGELOG.txt from 7.xx”
$ git diff tag/<core-tag> > guardr-remove-changelog-txt-1878172-<next-comment-id>.patch
```

3\. Upload the new patch file to [Security recommendation for production usage: Remove CHANGELOG.TXT from core #1878172](https://www.drupal.org/node/1878172)  
4\. Update the patch line in `drupal-org-core.make`