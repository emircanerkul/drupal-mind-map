As your project progresses, you may find yourself in a situation where you need to work on an issue or feature outside of the main code-base, where your code changes won’t impact your fellow developers or your client. Alternately, it’s not uncommon to engage in fixing an issue with your code, only to find that the solution is more involved than you have resources to commit to it at the moment. In these situations. it’s helpful to be comfortable with Git’s branching system in order to give you a clean sandbox to work on your changes without losing the ability to pull code from the central repository.

Assuming you're currently on the main fooproject branch before you begin working on an issue submitted by your client, the workflow is simple:

```php
$ git checkout -b issue_606_theme 

```

This command creates a new branch for the issue based on the branch you were on before issuing the checkout command. At this point, you can work on code and commit changes to this local branch without any worry of losing your work in progress or being able to switch back to the main code-base to work on other issues.

Let’s assume that this particular issue involved changing something in your theme’s page.tpl.php file. Once you've edited the file, you can follow the basic change/add/commit workflow of Git:

```php
$ git add sites/all/themes/footheme/page.tpl.php
$ git commit -m “Issue 606: Removed offending div from page.tpl.php”

```

You can make as many changes and commits to your branch as required to fix your issue or implement your feature. At this point, all of these commits are living in a branch that exists only on your local copy of the repository. If you have need to switch back to the main branch, you can add and commit your files in your topic branch and issue the following command to get back:

```php
$ git checkout fooproject

```

Once you've brought your topic branches back into your mainline fooproject branch, as detailed below, it’s a good idea to clean up after yourself. When you've decided you no longer need that topic branch, deleting it is a simple command:

```php
$ git branch -d issue_606_theme

```

If you’ve created a topic branch but never merged it back into it’s parent, Git will keep you from deleting it accidentally. If you’re sure that you no longer wish to have this unmerged branch, simply replace `-d` with `-D` to force deletion of the unmerged branch.