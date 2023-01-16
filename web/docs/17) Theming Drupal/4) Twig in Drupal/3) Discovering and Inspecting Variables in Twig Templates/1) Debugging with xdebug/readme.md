The most often recommended way to debug is to use an IDE with an xdebug plugin.

The simplest configuration to setup is to use PHPstorm (commercial) and xdebug. Microsoft's VSCode is a free open-source IDE with plugins that will do the same but do not require you to buy commercial software.

Using xdebug will allow you to step through the process, view the variable contents, and do so in a way that eliminates the mysteries under the covers, as well as preventing the infinite loops that may arise when using dump or kint.

A helpful little module called [twig\_xdebug](https://www.drupal.org/project/twig%5Fxdebug) may help in showing available variables in with xdebug.