There are a few things that you probably do not want to have tracked in the repository, namely `sites/default/files` and `sites/default/settings.php`. You would exclude the files directory if you prefer only to track application files in Git and to omit site content from the repository. You probably want to exclude settings.php because it contains sensitive database access information and will be different on each environment.

One way to tell Git to exclude certain files and directories from the repository is to set up a `.gitignore` file. When you clone Drupal 7 from the Git repository, it comes with a `.gitignore` file. Drupal 6 does not come with a `.gitignore` file at the time of this writing.

Drupal 8 or higher comes without a .gitignore but has an example.gitignore from which you can create a .gitignore. If you wish to transfer configuration between sites using git, you probably need to change the location of the config directory (which is set in settings.php) to one which is tracked by git. By default, the config directory is in sites/default/files, and by default the .gitignore which you create from example.gitignore will exclude this directory path.

The settings in the Drupal 7 default `.gitignore` file are as follow:

```php
# Ignore configuration files that may contain sensitive information.
sites/*/settings*.php

# Ignore paths that contain user-generated content.
sites/*/files
sites/*/private

```

### Customizing .gitignore

You may want to keep the above settings for your own site. However, if you decide to use different version control policies for your site, for example by deliberately excluding certain modules, themes, or libraries from your repository, you need different `.gitignore` settings. Here are some options for getting around the default `.gitignore` settings:

1. If you don't want sites/all to be controlled at all (you want to ignore all modules and themes and libraries), add a file at `sites/all/.gitignore` with the contents a single line containing nothing but `*`.
2. Simply change the .gitignore and commit the change. You wouldn't be pushing it up to 7.x right?
3. If you track core code using downloads (and not git) you can simply change the .gitignore and check it into your own VCS.
4. Add extra things into `.git/info/exclude`. This basically works like .gitignore (it has good examples in it) and is not under source control at all.
5. Add an additional master gitignore capability with `git config core.excludesfile .gitignore.custom` and then put additional exclusions in the `.gitignore.custom` file.

Note that only 1 and 2 are completely source-controlled. In other words, #3, 4, and 5 would have a slight bit of configuration on a deployment site to work correctly, but they work perfectly for a random dev site.

For more information about the above options, see Randy Fay's blog post:  
<http://randyfay.com/node/102>

If you add a new ignore file or edit one that is not being tracked by Git, remember to add it to your Git repository using the `git add` command, and then commit those changes using `git commit`. For example:

```php
$ git add .gitignore.custom
$ git commit -m "Initial FooProject commit"

```

### Creating a global .gitignore file

You can also create global ignore settings across all of your Git projects. First, you create a global `.gitignore` file in your home directory (`~/.gitignore`). Then, you add it to your global configuration using the following command:

```php
git config --global core.excludesfile ~/.gitignore

```