An inverse procedure can be used to handle changes that need to be made to code in the production environment. Because your production and staging environments are running from tags, they are considered to have a ‘detached HEAD’ - with no commit history, and no branch to commit into. You probably saw Git warning you of this situation when you checked the tag out. Still, git makes it easy to manage hotfixes in this way. For example, you’ve been told about a bug that was just found in production, and it needs to be cleaned up right away. Open your local development copy and perform the following:

```php
$ git checkout prod_20110419 # switching to the offending production branch
$ git checkout -b prod_hotfix_issue_707 # you’re now starting a new branch that begins at your current prod tag
# Code to fix the problem
$ git add <changed files to be committed>
$ git commit -m “Production hotfix for issue 707: Fixing production bug”

```

Now, you can create a new tag from this commit to run on

```php
$ git tag prod_20110515_hotfix_707 # create the new tag
$ git push origin prod_20110515_hotfix_707 # and push it to the repository

```

Now, logging in to the production repository:

```php
$ git fetch --tags #update the dev repo with your pushed changes from production
$ git checkout prod_20110515_hotfix_707 # puts you back into a detached HEAD state against your new tag

```

Now, you’ll can merge that code back into your local fooproject branch

```php
$ git checkout fooproject
$ git merge prod_20110515_hotfix_707 # brings the hotfix code back into the mainline code-base

```