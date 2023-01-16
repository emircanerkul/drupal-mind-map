---
url: >-
  https://www.drupal.org/docs/distributions/open-social/how-to-upgrade-to-the-latest-docker-version
description: >-
  Usage with Docker If you want to see which containers are running: docker ps
  SSH into the container: docker exec -it social_web bash Here you can use drush
  and drupal list. If you want to re-install, execute these commands in the
  social_web container: drush sql-drop -y; rm -f sites/default/settings.php rm
  -f sites/default/settings.local.php rm -rf sites/default/files Now run the
  install script on your host machine again.
published_time: '2017-06-22T09:33:32+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
Usage with Docker

**If you want to see which containers are running:**

```php
docker ps

```

**SSH into the container:**

```php
docker exec -it social_web bash

```

Here you can use _drush_ and _drupal list_.

**If you want to re-install, execute these commands in the social\_web container:**

```php
drush sql-drop -y;
rm -f sites/default/settings.php
rm -f sites/default/settings.local.php
rm -rf sites/default/files

```

**Now run the install script on your host machine again.**

```php
docker exec -it social_web bash /root/dev-scripts/install/install_script.sh

```

**To view emails go to:**

```php
mailcatcher.social.dev

```

**If you want to start the proxy:**

```php
docker start proxy

```

How to upgrade to the latest Docker version

1. Stop your docker machine: `docker-machine stop`
2. Download and reinstall the docker toolbox. If needed it will ask to update Virtualbox, do this as well. <https://www.docker.com/products/docker-toolbox>
3. Start your docker machine: `docker-machine start` or using the quickstart terminal.
4. Start your containers and check if everything still works.
5. If there are problems upgrade the docker machine: `docker-machine upgrade`