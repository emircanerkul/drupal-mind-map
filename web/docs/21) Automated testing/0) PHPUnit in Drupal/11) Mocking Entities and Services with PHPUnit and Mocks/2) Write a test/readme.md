1\. Create the class of service:

```php
$myServiceGitCommands = new MyServiceGitCommands();
```

2\. Create a new container to associate the class with the service name:

```php
$container = new ContainerBuilder();
```

3\. Define the container created for later use of the tests related to the service:

```php
\Drupal::setContainer($container);
$container->set('myservice.gitcommands', $serviceGitCommands);
```

4\. Create random numbering for the id of the class to be mock:

```php
$this->entityTypeId = $this
      ->randomMachineName();
```

5\. Create mock class related a first class using service:

```php
$entityServerSitesMock = $this->getMockBuilder(ServidorSitesEntityInterface::class)
      ->disableOriginalConstructor()
      ->getMock();
$entityServerSitesMock->expects($this->any())
      ->method('id')
      ->will($this->returnValue($this->entityTypeId));
$entityServerSitesMock->expects($this->any())
      /*This method exist in original class for your call use only lowercase letters*/  
      ->method('getpathbasedirsites')
      ->will($this->returnValue($arraySettings['pathBaseDirSites']));

```

By default, all methods of the given class are replaced with a test double that just returns `NULL` unless a return value is configured using `will($this->returnValue())`, for instance.

6\. Create the mock that makes it possible to implement the load of getStorage from EntityTypeManagerInterface:

```php
$entityStorage = $this->getMockBuilder(EntityStorageInterface::class)
      ->disableOriginalConstructor()
      ->getMock();
    $entityStorage->expects($this->any())
      ->method('load')
      ->willReturn($entityServerSitesMock);
```

7\. Create the mock of EntityTypeManagerInterface that lets you implement getStorage:

```php
$entityTypeManager = $this->getMockBuilder(EntityTypeManagerInterface::class)
      ->disableOriginalConstructor()
      ->getMock();
$entityTypeManager->expects($this->any())
      ->method('getstorage')
      ->willReturn($entityStorage);
  
```

8\. Set the mock of EntityTypeManagerInterface into the Drupal container:

```php
$container->set('entity_type.manager', $entityTypeManager);
```