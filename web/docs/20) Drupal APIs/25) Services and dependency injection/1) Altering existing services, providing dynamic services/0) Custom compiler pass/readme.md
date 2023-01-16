It's useful to add a custom compiler pass to extend Drupal services properly or propose an extension point.

A compiler pass is an extension point to the container. With it, you can alter service definition to override or add functionality to existing services. You can plug your module on existing tagged services and/or your module can offer an extension point (tagged service) to others community modules.

During the compilation, declaration files are parsed, parameters and configuration are resolved, an "alias" is created and tagged services are processed.

Most of the time, you won't need to create a compiler pass but it's important to understand how they work.