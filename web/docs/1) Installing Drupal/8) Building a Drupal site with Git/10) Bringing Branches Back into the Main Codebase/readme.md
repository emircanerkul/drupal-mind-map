Once you have finished working on your fix or feature, you’ll need to bring those changes from your topic branch back into the main fooproject branch. There are a number of different strategies and opinions on managing the merging of code using either Git’s rebase or merge commands. Here are some basic considerations:

1. If your branch’s commit history is considered public (i.e. multiple developers working on the same topic branch in their own repositories) - ALWAYS choose Merge.
2. If you’re concerned with keeping a clean, linear history - Rebase.

Please note that these ground rules are nearly mutually exclusive.

For the purposes of this documentation, let's assume that you are going to use the basic merge-based strategy. For suggestions about using Git's **rebase** command, read Randy Fay's post at <http://randyfay.com/node/91>.

### Merging

If you are the primary developer on a project, and you are not concerned with maintaining a completely linear history from your topic branches, using Git’s merge command provides a straightforward way for you to bring your topic branches back into your mainline codebase.

```php
$ git checkout fooproject # Puts you back into your main branch
$ git pull # Fetch and merge changes from your main repo back into your local fooproject, if any exist
$ git merge issue_606_theme  ## Merges your topic branch back into fooproject
$ git push ## Sends your newly updated fooproject code back to the origin repository

```