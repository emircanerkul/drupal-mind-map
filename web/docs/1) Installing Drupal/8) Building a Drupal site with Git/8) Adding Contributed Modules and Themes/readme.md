The site development process rarely ends with core Drupal - you'll likely be adding contributed modules and themes throughout the development process. There are a number of possible approaches to this process that additional documentation on [Git Submodules](#submodules), Drush and Dog will describe. For the purposes of this documentation, we are not concerned with keeping Git history for contributed modules. Simply download and install these modules and themes to your site and add them to your main development branch. Let’s use Views as an example:

```php
$ cd sites/all/modules
$ wget http://ftp.drupal.org/files/projects/views-7.x-3.0-beta3.tar.gz
$ tar -xzf views-7.x-3.0-beta.tar.gz
$ rm views-7.x-3.0-beta.tar.gz

```

If you check the status of your repository at this point, Git will point out to you that you have some new untracked files living in your working tree:

```php
$ git status

# On branch fooproject
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#	views/
nothing added to commit but untracked files present (use "git add" to track)

```

So, we’ll now add them to the Git index:

```php
$ git add views
$ git commit -m “Added Views 3.0-beta”

```

You can now push this code back up to your central repository and pull it down to your Dev server:

(On your local development environment)

```php
$ git push origin fooproject

```

(On your remote server while inside the fooproject\_dev directory)

```php
$ git pull origin fooproject

```

At this point, you should see the Views code in both your local environment as well as on the Development server’s codebase, and you should be able to enable this module in both environments. You can follow this basic procedure for adding any contributed module, contributed theme, or custom code to your site.

### Dealing with versions and dependencies

When a module requires a specific version of another module, it's called a **version dependency**. For example, the Media 7.x module specifically requires the 7.x-2.x branch of the File entity module. If you don't have the right version of the File entity module, you can't enable Media.

If you've downloaded a tar.gz or zip file from Drupal.org, the version information is in the files you downloaded. But when you check out a module from Git, you've bypassed the Drupal.org packaging script and the information is missing.

To solve this, Drupal must get the version information directly from Git. To do so, download and enable:

* [Git deploy](https://www.drupal.org/project/git%5Fdeploy)