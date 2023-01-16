You could simply allow your Staging and Production environments run from the code you’ve been adding and merging into your main fooproject branch - but it’s worth considering the fact that the fooproject branch is going to be moving forward as development progresses even after your site’s launch, and production sites should really be running a single, well-tested snapshot of the code-base during ongoing development. For this reason, it’s a good idea to use tags instead of branches for managing your non-development code. Tags are simply references to the state of the code-base at a specific commit - a snapshot of the project at one specific moment in time.

When your code has been tested and is ready to be deployed into the production environment, you could follow this process locally:

```php
$ git tag prod_20110419  ## Creating a tag from the current commit.  You can specify a commit here if you wish.

```

Now, you can push this tag up to your repository:

```php
$ git push origin prod_20110419 

```

Now, in your server’s fooproject\_prod directory:

```php
$ git pull 
$ git checkout prod_20110419

```