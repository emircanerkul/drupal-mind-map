Yes! [Drupal 8 was released in November 2015](https://www.drupal.org/8).

Helpful information:

* [D8 module and site development resources and videos at drupalize.me](https://drupalize.me/drupal-8)
* [PSR-4 autoloader patterns are used in D8](https://www.drupal.org/node/2156625)
* All [change records](https://www.drupal.org/list-changes).

**See also converting themes to Drupal 8:** (as it's likely you will need theme features as well as module API changes)

* [Upgrading 7.x themes to 8.x](https://www.drupal.org/node/2023177)
* More info about 8.x theming at: [Theming Drupal 8](https://www.drupal.org/theme-guide/8).
* Theme system changes list here: [ Theming differences between Drupal 6, 7 & 8](https://www.drupal.org/node/2356951)
* [Twig conversion instructions](https://www.drupal.org/node/2025313)
* [Tracing templates for debugging twig in Drupal 8](https://www.drupal.org/node/2358785)
* [Twig best practices for preprocessing and removing Drupal 7 theme functions](https://www.drupal.org/docs/8/theming/twig/twig-best-practices-preprocess-functions-and-templates)

---

Also see the full Drupal documentation for [creating a custom Drupal 8 module](https://www.drupal.org/docs/8/creating-custom-modules).

1. ## Get a copy of Drupal 8  
### Development environment  
In order to start your Drupal 8 module upgrade, first **set up your development environment**. You will need a local web stack (MAMP, LAMP, etc.), git, and a code editor or IDE. See [Setting up a test environment](https://drupal.org/dev-env) for more information.  
### Install a Drupal 8 stable release  
Next, install a copy of Drupal 8 to use for testing. We recommend using the **most recent stable release** of Drupal 8 to work on contributed modules (rather than the nightly development build or git repository.) You can find the latest Drupal 8 stable release on the listing of [releases for Drupal 8 core](https://drupal.org/node/3060/release?api%5Fversion[]=7234).
2. ## Create your 8.x codebase  
### Place your module in the `/modules` folder  
As of Drupal 8.0, most core files are now contained in a `core/` subdirectory, so that site builders can now use the top-level `modules/` and `themes/` folders for contributed and custom extensions. (See the **[change record on the new core subdirectory](https://drupal.org/node/1327978)**.) So, you can **place your module's git repository directly inside the `modules/` folder**.  
### Contributed module maintainers: Create an 8.x branch  
   * Navigate into your Drupal 8 installation's modules directory.  
   * Go to the version control tab on your project page on Drupal.org, and follow the instructions to clone the latest 7.x branch.  
   * Create a new 8.x branch from the 7.x branch.  
   * Push the new 8.x branch back to Drupal.org.  
#### Example commands  
```php  
cd ~/Sites/8.x/modules  
git clone --branch 7.x-prague xjm@git.drupal.org:project/pants.git  
cd pants  
git checkout -b 8.x-1.x  
git push -u origin 8.x-1.x  
```  
### Non-maintainers: Create an 8.x sandbox  
   * Navigate into your Drupal 8 installation's modules directory.  
   * Follow the **[instructions for creating a contributed module development sandbox](https://drupal.org/contrib-8x-sandbox)**.  
#### Example commands  
```php  
mkdir xjm_pants  
cd xjm_pants  
git init  
git remote add origin xjm@git.drupal.org:sandbox/xjm/2097535.git  
git remote add pants http://git.drupal.org/project/pants.git  
git fetch --all  
git checkout -b xjm-8.x-1.x remotes/pants/8.x-1.x  
git push origin xjm-8.x-1.x  
```
3. ## Things to keep in mind  
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