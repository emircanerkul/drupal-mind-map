We supply docker-compose files and Docker containers to quickly get you started on your local environment.

### 1.2.1 Install Docker Toolbox

Download and install the [toolbox](https://www.docker.com/docker-toolbox).

Note that the docker projects have to be somewhere in your /Users/ directory in order to work (limitation for Mac and Windows). Note that /Users/< name >/Sites/Docker is fine.

### 1.2.2 Install Open Social Containers and site

1. Start a docker machine (docker quickstart icon).
2. Clone [this](https://github.com/goalgorilla/drupal%5Fsocial) repository to the directory of your choice (e.g. \~/Sites/social).
3. Go inside the folder in which you cloned this repository (where the composer.json and docker-compose.yml file is).
4. Run composer installation which will create a html directory with the distribution and drupal core in it.  
```php  
composer install  
```
5. Add the proxy container (make sure that you start nginx-proxy first, then your docker container).  
```php  
docker run -d -p 80:80 --name=proxy -v /var/run/docker.sock:/tmp/docker.sock:ro nginxproxy/nginx-proxy  
```
6. Build and start the docker containers.  
```php  
docker-compose up -d  
```  
This will build multiple containers (see the Dockerfile in docker\_build/drupal8) and all the dependencies.
7. Add social.local, mailcatcher.social.local and solr.social.local to your /etc/hosts file based on the ip of the docker machine.  
If necessary you can find the IP with this command on your host machine:  
```php  
docker-machine ls  
```
8. Stop the cron container during installing  
```php  
docker stop social_cron  
```
9. Run the install script on your host machine. (The image name should be social\_web, but if it's not working check it out with docker ps and change social\_web in the line below accordingly)  
```php  
docker exec social_web bash /var/www/scripts/social/install/install_script.sh  
```
10. Start the cron container again  
```php  
docker-compose up -d  
```