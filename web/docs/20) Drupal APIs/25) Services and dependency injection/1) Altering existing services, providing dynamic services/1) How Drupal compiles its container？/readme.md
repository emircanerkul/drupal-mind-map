First, Drupal is instantiated inside a "front controller" (index.php most of the time). The DrupalKernel class is instantiated and the method handle() is called.

Here is the (simple) workflow made to bootstrap a Drupal 8 application with a focus on DIC (Dependency Injection Container):

1. Instantiation of DrupalKernel
2. Call **handle()** method to "handle" the current request
3. Drupal boots its environment with the call to **static::bootEnvironment()**
4. Settings are initialized with the call to **initializeSettings()**
5. The boot() method is called
6. The container is initialized with the call to **initializeContainer()**. Drupal launches the compilation of the container with the call to **compileContainer()**
7. Services definitions are declared and autodiscovered (**initializeServiceProviders()** \-> **discoverServiceProviders()**). Inside the **discoverServiceProviders()**, services are loaded from Yaml files and PHP files. If your module defines the "MyModuleServiceProvider.php" file, you can manipulate container definition and add your own compiler pass into the **register()** method
8. Container is compiled (call to **compile()**)
9. Synthetics services are attached (**attachSynthetic()**). More informations about [synthetic services](https://symfony.com/doc/current/service%5Fcontainer/synthetic%5Fservices.html) on Symfony doc.
10. The response is returned
11. \\o/

Some steps, like registering error handler, exception handler, and detect sites ... are voluntarily omitted.