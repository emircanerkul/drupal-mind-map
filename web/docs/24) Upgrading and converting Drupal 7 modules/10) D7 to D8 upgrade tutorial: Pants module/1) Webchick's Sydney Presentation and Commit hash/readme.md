This guide below was used during a session at [DrupalCon Sydney](http://sydney2013.drupal.org/).

For reference, the version of Drupal 8 this is against was commit c07014d65b2fcbac191aa0bd47e70ebadee9bef9\. (Thu Feb 7 14:16:20 2013 +0000)

Follow these steps if you'd like to walk through the process, or just `git checkout` tags below to check each step.

* [Session video](https://www.youtube.com/watch?v=mGqK205g7c0)
* Slides: <https://dl.dropbox.com/u/10160/Upgrading%20Modules%20to%20Drupal%208.key> (PDFs, PPTs, etc. coming soon)
* Nicely formatted version of this: [https://docs.google.com/a/acquia.com/document/d/1sXp74o3DXkEAvSMZdDF-FHX...](https://docs.google.com/a/acquia.com/document/d/1sXp74o3DXkEAvSMZdDF-FHXsHbYjVdscOlyNnm1dpps/edit#heading=h.6p7e6xmvd33v)

### 8.x-01-Basics

* Turn on pants module.
* Problem #0: Can’t enable the module.
* Change core: 7.x to core: 8.x in pants.info.yml
* NO errors! Wow. :)
* Problem #1: user/1/view only shows the word “Off”, not the field label. Look in code and see this comes from hook\_user\_view(). Search <http://drupal.org/list-changes> for hook\_user\_view, and find <http://drupal.org/node/1893032>
* Change ‘#type' => 'user\_profile\_item' to '#type' => 'item'
* Problem #2: Error on user/1/edit: Notice: Undefined index: #user\_category in pants\_form\_user\_profile\_form\_alter() (line 58 of modules/pants/pants.module).. Search for #user\_category, and find <http://drupal.org/node/1393236>
* Get rid of $form\['#user\_category'\] == 'account' && in hook\_user\_profile\_form\_alter().
* Problem #3: Pants fieldset on user/1/edit looks weird. Search for fieldset, find <http://drupal.org/node/1852020>.
* Change ‘#type' => 'fieldset' to '#type' => 'details'
* Problem #4: Error on saving: Warning: Parameter 1 to pants\_user\_presave() expected to be a reference, value given in module\_invoke\_all() (line 1004 ofcore/includes/module.inc). Search for hook\_user\_presave, find <http://drupal.org/node/1554986>.
* 1) Remove all params except $account.
* 2) instead of $edit\[‘foo’\], it’s now $account->foo.
* OMG IT WORKS!!! :D ...mostly. ;)

### 8.x-02-Tests

* Turn on Testing module, go to admin/config/development/testing.
* Problem #1: Can’t see Pants tests in the list. Search for test classes and find <http://drupal.org/node/1543796>.
* Create a src/Tests folder and move pants.test into it.
* Problem #2: Fatal error: undefined class DrupalWebTestCase. Same change notice.
* Add use Drupal\\simpletest\\WebTestBase; at the top of both test files, switch extends DrupalWebTestCase to extends WebTestBase.
* Problem #3: Getting a lot of strange errors that almost seem like the module’s not installed at all. Look in the code. Module enabling happens in the setUp() function. Search setUp and find <http://drupal.org/node/1710766>.
* In each test file, add public static $modules = array('node\_test'); to the top of the class body, change parent::setUp('pants'); to parent::setUp();
* Problem #4: Getting more strange errors about stuff like “administer blocks” not being a valid permission. Theme is showing as Stark. It’s almost as if standard profile is not enabled...
* Search “standard profile” and find <http://drupal.org/node/1911318>.
* At the top of the class file, place “protected $profile = 'standard'; “

### 8.x-03-Config

* Discuss pants\_type vs. api\_key; the former is a match for the configuration system, the latter for the states system.
* Create a config subdirectory, and add a simple YAML file to hold default settings:
* pants\_type: ‘’
* Now go to settings form. system\_settings\_form() is now deprecated; search and find <http://drupal.org/node/1910694>. Let’s take care of the pants\_type key first.
* Add $form and &$form\_state as arguments to the pants\_settings() function.
* Change return system\_settings\_form($form) to return system\_config\_form($form, $form\_state);
* Add a call to $config = config(‘pants.settings’) at the top, change variable\_get(‘pants\_type’) to $config->get('pants\_type')
* Add a form submit function more or less like [http://api.drupal.org/api/drupal/core!modules!system!system.admin.inc/fu...](http://api.drupal.org/api/drupal/core!modules!system!system.admin.inc/function/system%5Fsite%5Fmaintenance%5Fmode%5Fsubmit/8)
* Change to “bellbottoms,” verify that you can save pants type and it shows up on the subsequent page load.
* Cool trick: If you forgot to create your YAML file by hand, go to your sites/default/files/config\_ajksdhkjasd/active/ directory, and see it auto-generates a pants.settings.yml for you!
* Go to user/1\. Bellbottoms didn’t have effect; let’s fix that.
* 'type' => config('pants.settings')->get('pants\_type') in pants\_user\_view().
* Broken image! Go to theme\_pants\_status(). It’s calling theme(‘image’). Search for theme\_image(), find <http://drupal.org/node/1353146>.
* Change ‘path’ to ‘uri’ in all theme(‘image’) calls.
* Hooray! Now let’s take a look at that api\_key one.
* \- '#default\_value' => variable\_get('pants\_key', ''),
* \+ '#default\_value' => state()->get('pants.pants\_key'),
* Add + state()->set('pants.pants\_key', $form\_state\['values'\]\['pants\_key'\]); in the submit handler.

### 8.x-04-Blocks

* Try and add the block, notice you don’t see it.
* Add a directory for the block at src/Plugin/Block/
* Create a file in it called PantsChangeBlock.php
* Add scaffolding as in git commit a68c248
* Try and add the block to the page. You get error Fatal error: Class Drupal\\pants\\Plugin\\block\\block\\PantsChangeBlock contains 1 abstract method and must therefore be declared abstract or implement the remaining methods (Drupal\\block\\BlockInterface::build) in/Users/webchick/Sites/pants8/modules/pants/src/Plugin/Block/PantsChangeBlock.php on line 23
* Missing a build() method. add stuff from git commit 7dc685b
* Now to fix some tests. The UI has changed, so the $this->drupalPost('admin/structure/block/manage/pants/change\_pants/configure', array('regions\[bartik\]' => 'sidebar\_second'), t('Save block')); line will no longer work.
* New URL is admin/structure/block/add/pants\_change\_block/bartik
* Index is just called “region”
* Don’t forget to add machine name too!
* Now remove the chunks from hook\_block\_info() related to the block; they’re no longer needed.
* Extra bonus: Convert the recent pants block to a view! :)

### 8.x-05-Router

* Start with the YAML file.
* Now add a page controller class, with methods for each callback.
* Fix up hook\_menu().

### 8.x-06-Twig

* Add ‘template’ index to each hook\_theme() implementation.
* Create a “templates” directory for twig files.
* Create two files: pants-change-block.html.twig and pants-status.html.twig
* See [git commits](http://drupalcode.org/project/pants.git/tree/refs/heads/8.x-06-twig) for contents.