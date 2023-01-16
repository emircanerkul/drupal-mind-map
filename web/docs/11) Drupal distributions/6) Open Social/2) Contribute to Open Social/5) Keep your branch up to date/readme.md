Your forked repository and the original one (called origin) will eventually get out of sync. Periodically update your fork by doing:

```php
# Update your local branch.
git checkout master
git pull origin/master
# Push the update to your GitHub fork.
git push fork master

```

Your pull request might also need rebasing, to re-apply your changes on top of the latest code. Once you've updated the master branch (8.x-2.x), rebase your branch:

```php
git checkout feature/2747585-group-comments
git rebase master
git push -f fork feature/2747585-group-comments

```