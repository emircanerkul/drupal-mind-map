---
url: >-
  https://www.drupal.org/docs/understanding-drupal/understanding-drupal-version-numbers/what-do-version-numbers-mean-on-contributed-modules-and-themes
description: >-
  The version number indicates the version of Drupal core the contribution is
  compatible with, whether it is a stable or development release, and what
  specific "patch level" of the code it represents. These numbers have the form:
  Core Compatibility is required, and will be something like "8.x", "7.x", or
  "6.x", to indicate what version of Drupal core this contribution is compatible
  with. For Drupal 8 Core, semantic versioning is used. Thus core version
  ("8.8.1") may not be fully compatible with all previous versions of Drupal 8
  (eg "8.2.5").
published_time: '2016-10-09T20:50:26+00:00'
modified_time: '2022-09-30T07:40:04+00:00'
---
The version number indicates the version of Drupal core the contribution is compatible with, whether it is a stable or development release, and what specific "patch level" of the code it represents. These numbers have the form:

`![](https://www.drupal.org/files/degov-version-model.jpeg)`

* **_Core Compatibility_** is required, and will be something like "8.x", "7.x", or "6.x", to indicate what version of Drupal core this contribution is compatible with.  
 For Drupal 8 Core, [semantic versioning is used](/node/3000159). Thus _core_ version ("8.8.1") may not be fully compatible with all previous versions of Drupal 8 (eg "8.2.5"). However, the minor version is still not part of the _module_'s Core Compatibility string, so "8.7.x" would not be valid. For Drupal 8, module maintainers are expected to track Core @deprecated features and enhancements and update modules accordingly.  
 Conversely, the API for Drupal core 7 does not change, so a module that is compatible with Drupal core 7.24 would also (generally) work with 7.48\. Thus version strings contain the character 'x' to show that they are compatible with any core release ("7.x") not just a specific version of core ("7.64").
* **_Major_** is the module major revision number, which usually indicates major changes in functionality or incompatible changes to internal code or data structures. The first _Major_ of a project for a given release of core is"1". Maintainers may create additional branches, which would have higher major versions ("2", "3", etc.).  
 There is an expectation that higher branch versions support the functionality of lower versions, although not necessarily in the same way. However, it is up to the project maintainer to document on their project node and in their releases how they're using their own release numbers and what users of their modules should expect from any available major revision numbers, including upgrade options.
* **_PatchLevel_** is for a specific release of a given _Major_ version. The first release would be patch level 0\. As bugs are fixed or backward-compatible features added, new releases would increment this. If the patch level is the letter "x", it indicates an unstable development release (see _\-Extra_ immediately below for more information).
* **_\[-Extra\]_** is optional (hence "\[\]"), and is for specifying things like "-dev", to indicate a development snapshot from the end of a branch (as opposed to an official release from a tag). These snapshots, by their nature, include changing code. It is therefore hard to know exactly what revisions of each file they contain, and this makes them more difficult to debug. Development snapshots also use "x" for the _PatchLevel_ to further indicate the variable nature of the code they contain. Projects may also wish to make release candidate "rc" or, "beta" releases to users willing to try out new features. Indicate this with Extra set to "-betaN" but the _PatchLevel_ set to the version which it could become. Thus a beta release for version "8.x-2.0" could be "8.x-2.0-beta1". Beta releases are not expected to be long-lived!

Some example version strings and what they mean should help clarify:

* **`8.x-1.0`** The first stable (patch-level is not "x") release compatible with currently-supported versions of Drupal core 8.\*.
* **`8.x-2.0-rc2`** Release candidate 1 of the first release (patch-level 0) of a new (2) major version of a module that is compatible with currently-supported versions of Drupal core 8.\*.
* **`8.x-2.1`** An updated (patch-level 1) new-feature release (major revision 2) of a module compatible with any version of Drupal core 8.\*.
* **`7.x-1.0-alpha3`** The third alpha (for testing) release of a still unstable release (major revision 1) of a module compatible with any version of Drupal core 7.\*.
* **`7.x-1.x-dev`** An unstable development version ("1.x") of a stable release (major revision 1) of a module compatible with any version of Drupal core 7.\*.

**Git Branches**

Projects should use git Branch names of the form "**`8.x-2.x`**" -- that is, following the Development version pattern but without "\[-Extra\]". Do not use the branch name "master" (the default for git).

**Git Releases**

Projects should create a git Tag named the same as the version string (eg "**`8.x-2.0-rc2`**"), ensuring the tags are pushed to Drupal's Git, before using the tools to create that release. Do not create a tag for unstable development releases.

**Security Coverage**

The Drupal Security team only check Stable releases of projects, thus "**`8.x-2.0`**" would be covered but not "**`8.x-2.x`**" or "**`8.x-2.0-beta2`**". Projects must opt-in to receive coverage, as well as have a stable release.