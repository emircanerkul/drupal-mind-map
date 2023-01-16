---
url: >-
  https://www.drupal.org/docs/drupal-distributions/open-social/how-to-run-the-behat-tests-locally
description: >-
  We supply a headless chrome container which can be used to run the behat
  tests. Please find it on the following repository:
  https://github.com/goalgorilla/drupal_social Check that ${PROJECT_NAME}_chrome
  and ${PROJECT_NAME}_web containers are running by performing the following
  command: docker ps If the containers are not running execute the following
  command in the root of your projects: docker-compose up --force-recreate -d
  --remove-orphans If the containers are still not available, review the
  docker-composer.yml file in the project root.
published_time: '2017-06-22T09:27:56+00:00'
modified_time: '2022-08-15T13:16:43+00:00'
---
We supply a headless chrome container which can be used to run the behat tests.

_Please find it on the following repository: <https://github.com/goalgorilla/drupal%5Fsocial>_

1. Check that `${PROJECT_NAME}_chrome` and `${PROJECT_NAME}_web` containers are running by performing the following command:  
`docker ps`
2. If the containers are not running execute the following command in the root of your projects:  
`docker-compose up --force-recreate -d --remove-orphans`
3. If the containers are still not available, review the `docker-composer.yml` file in the project root.
4. Run a Behat tests by executing the below command, the last argument is an optional Behat tag; if left empty all tests will be executed.  
`docker exec -it ${PROJECT_NAME}_web sh /var/www/scripts/social/behatstability.sh DS-233`
5. Failed Behat tests will generate a screenshot and html in the following directory:  
`/var/www/html/profiles/contrib/social/tests/behat/logs`

_Replace `${PROJECTNAME}` with the environment variable value set in the `.env` file in the project root._