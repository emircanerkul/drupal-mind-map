---
url: >-
  https://www.drupal.org/docs/8/core/modules/media/faq-transition-from-media-entity-to-media-in-core
description: >-
  When will Drupal core have a full-featured media handling solution set? I'm
  starting a new site now. Should I use Media in core in 8.5.x? I have an
  existing site that was based on Media Entity contrib. What should I do?
  Upgrade instruction from Media Entity in contrib to Media in Core I have an
  existing site that used the development branch of the Media module with Drupal
  core < 8.4.x. What should I do after Drupal 8.4.x is out? When will Drupal
  core have a full-featured media handling solution set?
published_time: '2017-08-18T09:44:10+00:00'
modified_time: '2022-01-20T08:37:11+00:00'
---
* [When will Drupal core have a full-featured media handling solution set? ](#when-will-drupal-have-a-full-featured-media-handling-solution-set)
* [I'm starting a new site now. Should I use Media in core in 8.5.x?](#im-starting-a-new-site-now-should-i-use-media-in-core-in-85x)
* [I have an existing site that was based on Media Entity contrib. What should I do?](#i-have-an-existing-site-that-was-based-on-media-entity-contrib-what-should-i-do)  
   * [Upgrade instruction from Media Entity in contrib to Media in Core](#upgrade-instructions-from-media-entity-contrib-to-media-in-core)
* [I have an existing site that used the development branch of the Media module with Drupal core < 8.4.x. What should I do after Drupal 8.4.x is out?](#i-have-an-existing-site-that-used-the-development-branch-of-the-media-module-with-drupal-core-84x)

### When will Drupal core have a full-featured media handling solution set?

There is an ambitious plan to make Drupal a first-class media handling CMS, outlined in [#2786785: Media in Drupal 8 Initiative](https://www.drupal.org/project/ideas/issues/2786785 "Status: Closed (fixed)").

The following features are available in Drupal 8.5:

* Reusable media entities in core
* Local files handling
* Uploading and playing content audio and video files
* Simple media listing to locate existing media.

The following features are targeted for a future release (hopefully Drupal 8.6):

* Basic WYSIWYG embedding support
* Fully-featured media library for assets reuse
* Remote content (e.g. video) handling.

See the [detailed media roadmap](http://www.drupal.org/node/2825215#followup-roadmap) for more information.

### I'm starting a new site now. Should I use Media in core in 8.5.x?

Media in Drupal 8.5 is now available to site builders as an optional core module and should be used for most sites. It is supplemented by a rich suite of contributed modules that extend core media.

Check the [plan for contributed media-related modules](https://www.drupal.org/node/2860796) to confirm whether a compatible version is available for any modules you need for your site (either as a stable release, or as a patch you can help test). If a module you need is not yet available with the new API, you might want to use the contributed [Media Entity module](https://www.drupal.org/project/media%5Fentity) instead, and upgrade to core media later using the provided upgrade path.

### I have an existing site that was based on Media Entity contrib. What should I do?

At some point, you will eventually want to upgrade and stop using **Media Entity** in favor of **Media in** **core**. When to perform this upgrade is something that will depend on your site and which provider plugins (Media Types/Sources) you use. There is a chance that not all plugins you are using in your site have branches compatible with the new Media in core API, so in this case, you may need to wait until all of them have upgrade paths available.

#### UPGRADE INSTRUCTIONS FROM MEDIA ENTITY CONTRIB TO MEDIA IN CORE

1. **Backup your code and your database**. If something goes wrong while running the updates, you might need to restore your database backup to get your site working again.
2. **Test** that you can successfully **roll-back** from the backup!
3. Update your **custom modules** to work with the new core Media API. Follow the steps in the [change record](https://www.drupal.org/node/2863992) for all your custom modules.  
   1. This issue [#3259517: Media Entity Upgrade 8201 fails when blazy+crop+slick(+slick\_media+slick\_views) are upgraded at the same time](https://www.drupal.org/project/blazy/issues/3259517 "Status: Closed (fixed)") suggests NOT to update (if used) the following modules in the first run and keep them at the 1.x version until media updates were finished successfully. Afterwards update them to ^2 and run their database updates.  
   _This is only relevant for you, if you're using any of these modules!_  
         * blazy: ^1.0  
         * crop: ^1.5  
         * slick: ^1.2  
         * slick\_media: ^1.1  
         * slick\_views: ^1.0
4. **Upgrade the codebase** **with**:  
   * Core: >= **8.5.x**  
   * NOTE: **DO NOT** enable the Media module in core at this time! The Media Entity 2.x update hooks will take care of this for you.
5. **Run database updates for core first!**
6. **Upgrade the codebase** **with**:  
   * Media Entity: **8.x-2.x**  
   * All media entity providers: **8.x-2.x** (or use patches from [#2860796: Plan for contributed modules with Media Entity API in core](https://www.drupal.org/project/drupal/issues/2860796 "Status: Closed (outdated)")). Note that the modules **Media Entity Image** and **Media Entity Document**, if present, don't need to be updated (they were folded into the core Media module). Their configuration will be updated by the main **Media Entity** updates. However, you MUST update these modules to their latest version if using composer.  
         * "drupal/media\_entity\_document":"1.x-dev"  
         * "drupal/media\_entity\_image":"1.3"  
   * All modules that depend on or interact with Media Entity: **8.x-2.x**  
   * If you are using Drupal Core < 8.6, the new contrib module [Media Entity Actions](https://www.drupal.org/project/media%5Fentity%5Factions): **8.x-1.x.** If you're using Drupal core 8.6 or later, [you do not need ](https://www.drupal.org/project/media%5Fentity%5Factions/issues/2998468)Media Entity Actions  
   * If your site uses media entities with the "**Generic**" provider, make sure you get the [Media Entity Generic](https://www.drupal.org/project/media%5Fentity%5Fgeneric) module as well.
7. (Optional) Check that all requirements for the upgrade are met with `drush mecu`.  
**IMPORTANT:** Please note that if you are running DB updates with **Drush 9 (between 9.0.0-alpha1 and 9.0.0-beta7)**, you are **strongly** encouraged to use this command prior to running the updates. Drush 9 will not run the requirements validation and will try to run the updates even if your site has some of the requisites misconfigured. Executing the updates in that scenario will likely break your site. This was fixed in Drush 9.0.0-beta8\. Drush 8 users don't need to worry about this.
8. Run the DB Updates, either by visiting `/update.php`, or using `drush updb`
9. Double-check that the **Media Entity** module is uninstalled, and remove it from the codebase. Remove also **Media Entity Image / Document**, if present (the Media Entity DB updates should have uninstalled them for you but make sure to remove them from your codebase as well).
10. Now update other contrib modules like blazy, crop, slick, slick\_media, slick\_views, ... and if not done yet, upgrade to Drupal 9

Known issues concerning the upgrade path:  
\- If your existing site used tokens provided by Media Entity (`[media:*]`), you are recommended to install the [Token](https://drupal.org/project/token) module, which will provide token replacements for almost all of them. Some differences may still exist, and those are being treated specifically in [#2877378: Add token replacements for Media](https://www.drupal.org/project/token/issues/2877378 "Status: Postponed (maintainer needs more info)").  
\- Entity Browser has a 2.x branch that has new features for media in core, for example the widget that was formerly present in the "Media Entity Image" module. However, if you intend to upgrade Entity Browser to the 2.x branch, you should do that only **after** performing the main Media Entity upgrades. There is currently a bug preventing the Media Entity upgrade if the Entity Browser **2.x** is present in the codebase.  
\- [#2918172: Media Entity upgrade -> core fails on absent column revision\_uid](https://www.drupal.org/project/media%5Fentity/issues/2918172 "Status: Needs review"): Patch #47 might be required if you run into an update error: "General error: 1 no such column: revision\_uid"

**More details of this process can be followed in:**

[#2880334: Add update path of media\_entity config changes from 1.x to core media module](https://www.drupal.org/project/media%5Fentity/issues/2880334 "Status: Closed (fixed)")  
[#2860796: Plan for contributed modules with Media Entity API in core](https://www.drupal.org/project/drupal/issues/2860796 "Status: Closed (outdated)")  
[#2915738: Increase reliability of upgrade path to Media in core](https://www.drupal.org/project/media%5Fentity/issues/2915738 "Status: Closed (fixed)")

### I have an existing site that used the development branch of the [Media](http://dgo.to/media) module with Drupal core < 8.4.x. What should I do after Drupal 8.4.x is out?

You should follow the project page, which instructs users to completely uninstall the module and remove it from the codebase before installing Drupal core Media.