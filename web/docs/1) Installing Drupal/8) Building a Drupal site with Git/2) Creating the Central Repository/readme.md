When working on a project with multiple environments, a good first step after server provisioning is to create a central repository from which all other environments will pull. This could live on one of the servers provisioned for the project, a [Gitosis server](http://scie.nti.st/2007/11/14/hosting-git-repositories-the-easy-and-secure-way), a [Gitolite](https://github.com/sitaramc/gitolite) server, a [GitLab](https://about.gitlab.com/) server, [Github](http://github.com/) or any other repository hosting solution. For purposes of illustration, assume that your FooProject is running on a server configured with a user named ‘fooproject’ and all three environments will be running from separate directories under that user’s public\_html directory. For convenience, create the central repository inside fooproject’s home directory.

(On your remote server)

```php
$ cd ~
$ git init --bare fooproject.git

```

This command creates a new directory called fooproject.git that contains all of the git objects. This directory is not the working tree, where you edit and commit code. Rather, it is simply the central location for the git objects and history, and is essentially empty at this point.