Changes affecting module developers can also be detected using the [Upgrade status](https://www.drupal.org/project/upgrade%5Fstatus) module.

### Major changes include:

* As of Twig 1.x, the ability to remove an extension is deprecated and the `\Twig\Environment::removeExtension()` method will be removed in 2.0.
* As of Twig 1.x, use ` \Twig\TwigFunction` to add a function. The following classes and interfaces will be removed in 2.0:  
   * `Twig_FunctionInterface`  
   * `Twig_FunctionCallableInterface`  
   * `Twig_Function`  
   * `Twig_Function_Function`  
   * `Twig_Function_Method`  
   * `Twig_Function_Node`
* As of Twig 1.x, use `\Twig\TwigFilter` to add a filter. The following classes and interfaces will be removed in 2.0:  
   * `Twig_FilterInterface`  
   * `Twig_FilterCallableInterface`  
   * `Twig_Filter`  
   * `Twig_Filter_Function`  
   * `Twig_Filter_Method`  
   * `Twig_Filter_Node`