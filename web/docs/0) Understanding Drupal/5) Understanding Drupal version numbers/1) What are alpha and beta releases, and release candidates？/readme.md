---
url: >-
  https://www.drupal.org/docs/8/understanding-drupal-version-numbers/what-are-alpha-and-beta-releases-and-release-candidates
description: >-
  Before every official "x.0" stable release of a new major version of Drupal
  core, there are usually a handful of alpha releases, beta releases and release
  candidates that are made available. These releases are not yet stable enough
  for production use but are essential milestones on the way towards the
  official release. They allow a much wider pool of users to test the latest
  code and provide feedback before the official stable release. These releases
  should only be downloaded and used by developers very familiar with Drupal or
  those wishing to help find bugs in the software.
published_time: '2016-10-09T20:52:56+00:00'
modified_time: '2020-04-16T15:15:16+00:00'
---
Before every official "x.0" stable release of a new major version of Drupal core, there are usually a handful of _alpha releases_, _beta releases_ and _release candidates_ that are made available. These releases are **not yet stable enough for production use** but are essential milestones on the way towards the official release. They allow a much wider pool of users to test the latest code and provide feedback before the official stable release. **These releases should only be downloaded and used by developers** very familiar with Drupal **or those wishing to help find bugs** in the software.

The guidelines below are for Drupal core. Some maintainers of contributed modules and themes might choose to provide alpha or beta releases or release candidates of their projects (though this is not required). You should read the release notes carefully in these cases, since the details might vary across projects, though the basics explained here should hold (an "alpha" is less stable than a "beta", which is less stable than an "RC", etc).

### Alpha releases

These are the first to come out and are therefore the least stable. Most reported errors are resolved but there are most likely still outstanding known issues, which might include security issues.

### Beta releases

Beta releases are usually only created once:

* All critical data loss and security bugs are resolved
* The APIs are frozen enough so that contributed module and theme authors can start upgrading their projects.
* Most of the problems with the upgrade path are fixed and it's possible to successfully upgrade a copy of the Drupal.org database to the new Drupal version.

During the period of beta releases, usability features are still considered, the translatable strings (help texts, words in the interface, etc.) might be altered, and if absolutely necessary, the API or database schema could change (to fix a critical bug). Of course, other kinds of bug fixes are always applied.

### Release candidates

Release candidates are usually only created once no more critical bugs have been reported in a given beta release. These are considered nearly stable code, something the Drupal development community is considering as a _candidate_ to be released as the official .0 version. No more usability changes are made, and the translatable strings are usually unchanged at this point.

Once a _feature freeze_ is announced, no new features will be added to that version of Drupal. That version of Drupal's feature set is locked and any new features or change of behavior will need to go into the next release version.

This doc is cross-referenced with [Release naming conventions](https://drupal.org/node/1015226 "Release naming conventions").