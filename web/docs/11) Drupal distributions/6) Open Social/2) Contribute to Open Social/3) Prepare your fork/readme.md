**Note**: You will need a GitHub account to contribute.

Visit the Open Social [repository on GitHub](https://github.com/goalgorilla/open%5Fsocial) and click the **fork** button. That will create a copy of the repository on your GitHub account.

Now navigate to the your open social folder and add your fork:

```php
# If you use our development workflow, this is where you will find the open_social folder
cd ~/Sites/drupal_social/html/profiles/contrib/social
git remote add fork git@github.com:YOUR_USER/open_social.git

```

Replace YOUR\_USER with your username (the full url is shown on your fork's GitHub page). You will now be able to push new branches to your fork and create [pull requests](https://help.github.com/articles/using-pull-requests) against the main repository.