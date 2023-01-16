### First, just get it working

When upgrading a module to Drupal 8, your first goal should be to just **get it working**. Drupal 8 includes [many powerful improvements](https://drupal.org/drupal-8.0) from Drupal 7, and you might want to rework some of the module's code later to match Drupal 8 best practices. But for now, just concentrate on making the module's basic functionality work.

### Change records

Your most important resource for upgrading modules to Drupal 8 is the **[8.x change record list](https://drupal.org/list-changes/drupal?keywords%5Fdescription=&to%5Fbranch=8.x)**. This listing has documentation for **every backwards compatibility break** from Drupal 7, including **before-and-after code examples** for each change. Any time you encounter a problem while working on your module upgrade, your **first step** should be to search this listing for a relevant keyword.

#### Tip: How to find the change record

To find information on changes to `.info` files in Drupal 8:

1. Visit the [List of change records](https://drupal.org/list-changes).
2. Enter `.info` in the keyword field.
3. Enter `8.x` for the branch.
4. Submit the form and look for the most relevant change records.

### Help us make Drupal 8 better!

#### Need help?

If you can't find the answer to a question you encounter when working on your module upgrade, join [IRC](http://drupal.org/irc) and ask other Drupal contributors for help! Many Drupal developers and contributed module maintainers participate in the [#drupal-contribute](irc://irc.freenode.net/drupal-contribute), so if you're working on upgrading a contributed module upgrade, try asking there.

#### Found a bug?

If you run into something that seems like a bug while working on your module upgrade:

* [Search the Drupal 8.x issue queue](https://drupal.org/project/issues/drupal?version=8.x) for an existing bug report.
* If you find a related bug report, add your information to the issue. You can even test the patch for the issue if there is one!
* If you don't find an existing bug report, you can [file a new issue](https://drupal.org/node/add/project-issue/drupal).

#### Developer experience (DX) issue?

During Drupal 8's development cycle a lot of attention went into providing a great Drupal 8 developer experience (DX). Still, there are always things that can improve so if you run into something that makes _your_ developer experience not-so-great while working on your module upgrade, [help us fix it](https://drupal.org/community-initiatives/drupal-core/d8dx#help)! :)

#### Unclear documentation?

If something in a [Drupal 8 change record](http://drupal.org/list-changes) or Drupal.org handbook page is unclear, edit it to make it better! This will help other contributors going forward.