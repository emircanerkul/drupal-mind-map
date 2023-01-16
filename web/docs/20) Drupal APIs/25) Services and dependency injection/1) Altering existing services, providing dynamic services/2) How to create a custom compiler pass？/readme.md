1. Create a file with "ServiceProvider" suffix into the name, for example, MyModuleServiceProvider.php
2. You must implement the register() method which is provided by ServiceProviderInterface or extend the ServiceProviderBase class.
3. Add your own compiler pass!

`namespace Drupal\my_module;

use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\Core\DependencyInjection\ServiceProviderBase;
use Drupal\my_module\Compiler\MyCustomExtensionPass;

class MyModuleServiceProvider extends ServiceProviderBase {

  /**
   * {@inheritdoc}
   */
  public function register(ContainerBuilder $container) {
    $container->addCompilerPass(new MyCustomExtensionPass());
  }

}`

`namespace Drupal\my_module\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class MyCustomExtensionPass implements CompilerPassInterface {

  /**
   * {@inheritdoc}
   */
  public function process(ContainerBuilder $container) {
    ... your work
  }

}`

You can learn more about creating your own compiler passes from the Symfony doc.  
[Creating Separate Compiler Passes](https://symfony.com/doc/3.4/components/dependency%5Finjection/compilation.html#components-di-separate-compiler-passes "Creating Separate Compiler Passes")

3rd party resources:  
[Using Symfony Service Decorators in Drupal 8 by Mike Potter @ Phase2](https://www.phase2technology.com/blog/using-symfony-service)