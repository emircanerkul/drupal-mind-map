Git submodules allow foreign repositories to be embedded within a dedicated subdirectory of the source tree, always pointed to a particular commit. See `git help submodule` for more information. Submodules are ideal to capture both contributed modules and custom modules in a git-managed Drupal installation.

### Moving a Custom Module or Theme into its own repository

Custom modules and themes can be tracked as a git submodule.

![](https://www.drupal.org/files/drupal_git_repositories_0.png)

#### Example

In order to install Display Suite as a submodule to the main Drupal 8 or higher repository.  
First find the [Repository of the Drupal module](https://www.drupal.org/node/607826/git-instructions/8.x-2.x/) at the "Version control" page of the module.

```php
cd <drupal_root>
git submodule add http://git.drupal.org/project/ds.git sites/all/modules/_contrib_repos/ds

```

After adding the submodule you should have a file next to your .git folder named **.gitmodules:**

```php
[submodule "sites/all/modules/_contrib_repos/ds"]
	path = sites/all/modules/_contrib_repos/ds
	url = http://git.drupal.org/project/ds.git

```

The submodule will not automatically upgrade with the main Drupal repository, but you can use the normal git commands in the submodule folder:

```php
cd  sites/all/modules/_contrib_repos/ds
git status

```

Once a developer has added, committed, and pushed the update for the Display Suite submodule to the central repository, everyone else can [update](https://git-scm.com/book/en/v2/Git-Tools-Submodules#Cloning-a-Project-with-Submodules) their local repositories easily:

```php
cd <drupal_root>
git submodule init # This is only necessary when your are grabbing the submodules for the first time.
git submodule update
git submodule foreach git checkout master # This fix the issue of detached heads for some submodule

```