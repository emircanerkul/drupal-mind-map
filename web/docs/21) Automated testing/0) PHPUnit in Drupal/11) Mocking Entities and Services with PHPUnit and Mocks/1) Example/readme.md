In this case we have a service that access information from an entity that in turn relates to another entity.

A class MyServiceGitCommands refers to the service.

```php
<?php

namespace Drupal\mymodule\MyServicesServices;

use Drupal\Core\Site\Settings;
use Drupal\ent_servidor_sites\Entity\ServidorSitesEntity;

/**
 * Serviço para utilização de comandos Git.
 */
class MyServiceGitCommands {

  /**
   * Git clone.
   *
   * @param array $data
   * @return bool|string
   */
  public function gitClone(array $data) {
    $remoteRepository = $data['repo_gitlab'];
    $branch = $data['branch'];
    $siteName = $data['site_name'];
    $idServerSite = $data['server'];
    /* @var ServidorSitesEntity $serverSite */
    $serverSite = \Drupal::entityTypeManager()->getStorage('servidor_sites')->load($idServerSite);
    $pathBaseDirSites = $serverSite->getPathBaseDirSites();
    $command = "git -C $pathBaseDirSites clone -b $branch --config core.filemode=false $remoteRepository $siteName";
    system($command, $returnInt);
    if ($returnInt !== 0) {
      return FALSE;
    }
    else {
      return TRUE;
    }
  }

```

This class has its route recorded in the file mymodule.services.yml.

fragmento de código widget


To carry out the tests the following steps were necessary:

1. Create the class of service;
2. Create a new container to associate the class with the service name;
3. Define the container created for later use of the tests related to the service;
4. Create random numbering for the id of the class to be mock;
5. Create mock class related a first class using service;
6. Create the mock that makes it possible to implement the load of getStorage from EntityTypeManagerInterface;
7. Create the mock of EntityTypeManagerInterface that lets you implement getStorage;
8. Set the mock of EntityTypeManager into drupal container.