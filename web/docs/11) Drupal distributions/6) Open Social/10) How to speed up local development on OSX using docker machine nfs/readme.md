---
url: >-
  https://www.drupal.org/docs/distributions/open-social/how-to-speed-up-local-development-on-osx-using-docker-machine-nfs
description: >-
  The following guide is for docker-machine (installed via docker-toolbox)
  instead of the newer version aka docker for mac. Having said that, in my
  opinion (as of 27th Jan 2019) docker toolbox & docker-machine-nfs is still the
  fastest way of working with docker. However newer docker for mac brings many
  other important improvements so it is worth trying docker for mac with
  docker-sync. Warning This can break up your docker-machine make backups of
  everything you want to keep before trying this, at your own risk. Using NFS
  will speed up local development for OSX significantly, see issue 117.
published_time: '2017-06-22T09:29:27+00:00'
modified_time: '2019-09-11T18:06:09+00:00'
---
The following guide is for docker-machine (installed via docker-toolbox) instead of the newer version aka docker for mac.

Having said that, in my opinion (as of 27th Jan 2019) docker toolbox & docker-machine-nfs is still the fastest way of working with docker. However newer docker for mac brings many other important improvements so it is worth trying docker for mac with docker-sync.

**Warning** This can break up your docker-machine make backups of everything you want to keep before trying this, at your own risk.

Using NFS will speed up local development for OSX significantly, see [issue 117](https://github.com/goalgorilla/drupal%5Fsocial/issues/117). The easiest method for now is to utilize the [docker-machine-nfs tool](https://github.com/adlogix/docker-machine-nfs).

1. Download and install the tool.  
`curl -s https://raw.githubusercontent.com/adlogix/docker-machine-nfs/master/docker-machine-nfs.sh | sudo tee /usr/local/bin/docker-machine-nfs > /dev/null && sudo chmod +x /usr/local/bin/docker-machine-nfs`
2. Setup an existing docker machine to use NFS. Use the name of your docker machine `docker-machine ls`.  
`docker-machine-nfs default`
3. In case of errors check the exports file /etc/exports, for example if you have used vagrant in the past. A way to switch from vagrant projects to docker would be to run the command again to fix it `docker-machine-nfs default`