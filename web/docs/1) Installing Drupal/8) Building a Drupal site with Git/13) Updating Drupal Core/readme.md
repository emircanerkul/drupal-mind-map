In this workflow, managing updates to Drupal core is a fairly trivial process:

```php
$ git checkout fooproject # making sure we’re on our main fooproject branch
$ git fetch drupal # update our repository with changes from the main Drupal upstream repo
$ git merge 7.1 # merge in the updates to Drupal

```

Then, run update.php and your code and database should be properly updated. If you wish to test the upgrade first, you could always create a new topic branch for the update testing process and merge the Drupal release tag to that branch before bringing it into your mainline codebase. From there, simply create new stg\_ and prod\_ tags, push them to the repository and pull them into your other environments as above, making sure to run update.php after checking them out!

Notice that in this particular workflow, modules are kept as part of your own code-base and not pulled with Git from [drupal.org](https://www.drupal.org/). Update these modules as per the normal Drupal documentation or with the drush up command, run update.php, then add and commit the updated modules to your repository.

### Managing the Database (& your sites/default/files directory)

Data always needs to flow down-stream. That means your live database should be copied and imported to your test site, your dev site, and your local environment - **and never moved the opposite direction**. This is to prevent data loss. If you have users creating accounts, posting comments, or modifying content - that should all be happening on your live site. If you copy a development database into production any of those changes will be lost.

Because data should never be moved up-stream, it's a good idea to have at least three copies of your drupal site to work with. The **live site**, where your data grows, but you never do any development. The **development site,** that will use a recent copy of the database and files from the live site, but has no active changes so that it's a safe place to work on code, install new modules, and do other things that might be considered "too risky" to do on the live site. And the **test site**, where you can push up the code you've changed on the development site, and pull down the data that's been growing on the live site. This gives you a chance to see what will happen when your changes are pushed into production. A place to do test deployments, where the code and the data can be safely tested together.

For managing configuration in Drupal 8 or higher, please refer to the [Managing your site's configuration](https://www.drupal.org/documentation/administer/config) documentation. In Drupal 7 and earlier versions, the database contains a mix of both data and configuration. In order to safely deploy configuration changes you may have made to your development site, they will need to be stored in code. There are several ways to do this:

* Use the [Features module](http://drupal.org/project/features)
* Use the [Configuration Management module](http://drupal.org/project/configuration)
* Use [Ctools](http://drupal.org/project/ctools) exportables (views, panels, etc) in your own custom module
* Use update hooks in your own custom module

If you are unable to get your configuration changes into code, you can also keep _very good_ notes of _every single change_ that was made, and manually make them again both on the test site, and on production.