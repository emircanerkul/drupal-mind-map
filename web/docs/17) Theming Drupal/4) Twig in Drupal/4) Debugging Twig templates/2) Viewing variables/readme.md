**Far and beyond the best way to deal with Viewing variables is to use Xdebug**.

If you use the other non-Xdebug methods noted below you will have many recursive things rendering which may result in pages and pages of information that are not useful to you.

The most often recommended approach is to use [PHPstorm and Xdebug](https://www.jetbrains.com/help/phpstorm/configuring-xdebug.html) as the configuration is the most simple to get setup, however, almost all IDEs have a plugin for Xdebug. If you want a free editor that is fairly lightweight, [Microsoft's VSCode editor](https://code.visualstudio.com/) is an open-source option that has plugins for PHP and Xdebug.

**Setting up Xdebug**

Setting up Xdebug can be complicated, so remember to read the instructions of your IDE's plugin, and review Xdebug's documentation for how to connect it. Simply reading howtos and bug reports online will be wasteful if you are targeting the wrong type of environment (ie, if your Xdebug is inside Vagrant, Virtualbox or Docker, you may need the "remote" connection instructions: <https://xdebug.org/docs/remote>).

Drupal.org provides Xdebug guides for various editors are available here: <https://www.drupal.org/docs/develop/development-tools/xdebug-debugger>

**When you get Xdebug working:**

There are three ways to set breakpoints in your Twig templates in order to have your IDE displaying the variables and other stateful information about the PHP environment:

* Use PHPStorm's new Twig debugging feature ([blog](https://blog.jetbrains.com/phpstorm/2019/01/phpstorm-2019-1-early-access-program-is-open/#twig%5Fdebug%5Fsupport), [docs](https://www.jetbrains.com/help/phpstorm/symfony-twig.html#debugging-twig-templates)). No Drupal modules are needed.
* with module [Devel](https://www.drupal.org/project/devel)  
```php  
{{ devel_breakpoint() }}  
```
* with module [Twig Xdebug](https://www.drupal.org/project/twig%5Fxdebug)  
```php  
{{ breakpoint() }}  
```

### If you cannot get Xdebug setup...

...read on and good luck to you my friend.

```php
{{ dump() }}

```

```php
{{ dump(variable_name) }}

```

List available variables (at top level):

```php
{{ dump(_context|keys) }}

```

If you have Devel module, you can get an accordion display of the variables available to twig with:

```php
{{ devel_dump() }}

```

Or you can use [Twig vardumper](https://www.drupal.org/project/twig%5Fvardumper) module that contains vardumper for twig. You can get an accordion display of the variables available to twig with:

```php
{{ dump() }}
{{ dump(variable_name) }}
```

```php
{{ vardumper() }}
{{ vardumper(variable_name) }}

```

* <https://www.drupal.org/project/twig%5Fvardumper>

... but also consider that spending an hour or two getting Xdebug working will make your life a lot easier as it takes all the guess work out of knowing which variables you can use.