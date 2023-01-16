Most of Drupal is web-oriented functionality, so it's important to have a way to exercise these functions. Browser tests create a complete Drupal installation and a virtual web browser and then use the virtual web browser to walk the Drupal install through a series of tests, just like you would do if you were doing it by hand.

It's terribly important to realize that each test runs in a completely new Drupal instance, which is created from scratch for the test. In other words, none of your configuration and none of your users exists! None of your modules are enabled beyond the default Drupal core modules. If your test sequence requires a privileged user, you'll have to create one (just as you would if you were setting up a manual testing environment from scratch). If modules have to be enabled, you will need to specify them. If something has to be configured, you'll have to write code in the test to do it, because _none of the configurations on your current site_ are in the magically-created Drupal instance that we're testing. None of the files in your files directory are there, none of the optional modules are installed, and none of the users are created.

We have magic commands to do all this within the PHPUnit browser test world, and we'll get to that in a little bit.

### Component Diagram

[![](/files/PHPUnit-Functional-Testing-Component-Diagram.png)](https://www.drupal.org/files/PHPUnit-Functional-Testing-Component-Diagram.png)

**Image source:** [Drupadocs](https://github.com/drupadocs/drupal-core/tree/master/testing)