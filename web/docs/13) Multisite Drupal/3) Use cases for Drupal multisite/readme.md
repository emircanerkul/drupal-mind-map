---
url: https://www.drupal.org/docs/multisite-drupal/use-cases-for-drupal-multisite
description: >-
  See the original discussion at [#3004496]. While there are various
  considerations that should be taken into account when deciding whether to
  utilize Drupal's multisite feature, here are some common reasons why site
  builders choose it: Users use multisite to create 'replica' sites for others.
published_time: '2019-01-15T19:45:15+00:00'
modified_time: '2021-04-22T06:11:58+00:00'
---
See the original discussion at [#3004496: Improve multisite compatibility with composer](https://www.drupal.org/project/drupal/issues/3004496 "Status: Active").

While there are various [considerations](/docs/8/multisite/multisite-drupal-8-considerations) that should be taken into account when deciding whether to utilize Drupal's multisite feature, here are some common reasons why site builders choose it:

* Users use multisite to create 'replica' sites for others. (All one codebase, same features and functionality, only the theme is different from site to site.)
* They use multisite to host several related sites, like a university with dozens of departments that all \*mostly\* need the same features, but some departments have special things (shared core, shared module 'profile', with different sites having different custom modules)
* Sometimes they upgrade a module on just one of their sites to 'test out the upgrade' so that one site has a newer version of the module than the other sites.
* Sometimes they share database tables. \[historically for shared hosting where only 1 database is given\]
* Updating one Drupal module for a security issue that doesn't update the DB is simpler for a multisite than it'd be for multiple independent sites \[works for modules only, not core\]
* Both Simpletest and functional PHPUnit-based tests make use of multisite features in order to run tests.
* Sometimes they use multisite to save on per-codebase hosting expenses either via upfront provider costs or because of difficulties provisioning and managing hosting in-house.
* Users use multisite to reduce resource usage: Running multiple sites that all share a single opcode cache is memory efficient
* Use a multisite for development. It's really quick to spin up a new subsite to work on a specific issue.
* For the hostname configuration files support.

If you need to implement custom behavior, (look at the following example) then you can just do multisite with code like that:

> /*
> Some solution to make this drupal multisiting be clever.
> I want to open each my subsite as subdomain following prefix to main domain
>  - subsite1.sitemane.com
> and also following subfolder
>  - sitename.com/subsite1
> Below is solution howto make it to be resolved at the same time vice versa
> @see <https://drupal.slack.com/archives/C1BB308HH/p1605616665086200>
> */
> foreach (new DirectoryIterator('./sites') as $fileInfo) {
>  if (!$fileInfo->isDir()) continue;
>  if ($fileInfo->isDot()) continue;
>  if ($fileInfo->getBasename() === 'all') continue;
>  $sites[$fileInfo->getBasename() . '.example.com'] = $fileInfo->getBasename();
>  $sites[$fileInfo->getBasename() . '.hasselt-2019.docksal'] = $fileInfo->getBasename();
>  $sites['example.com/' . $fileInfo->getBasename()] = $fileInfo->getBasename();
>  $sites['hasselt-2019.docksal.' . $fileInfo->getBasename()] = $fileInfo->getBasename();
> }