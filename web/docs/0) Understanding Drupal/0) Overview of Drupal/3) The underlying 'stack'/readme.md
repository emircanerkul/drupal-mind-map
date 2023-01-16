A Drupal site needs a small 'stack' of software that works in the background to serve your site and store your content:

* Server software
* Database software
* PHP interpreting software (Drupal is written in the PHP programming language.)

This stack is already installed on most, if not all commercial web hosts. For local development, this stack is available in many forms.

Here are some of the many options available to run the stack on a local computer.

| MAMP (OSX, easy)                          | [Create a local environment using MAMP](https://www.drupal.org/docs/develop/local-server-setup/mac-os-development-environment/howto-create-a-local-environment)                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| XAMPP (Windows, easy)                     | [Quick Install Drupal with XAMPP on Windows](https://www.drupal.org/docs/develop/local-server-setup/windows/quick-install-drupal-with-xampp-on-windows)                                                                  |
| Docker (any platform, advanced)           | [Drupal Development with Docker](https://drupalize.me/series/drupal-development-docker)                                                                                                                                  |
| Lando (any platform, advanced)            | [Introduction to Lando](https://docs.lando.dev/basics/)                                                                                                                                                                  |
| Installing directly on your OS (advanced) | Caution to Windows users installing with this approach: Most remote hosts use Linux databases and Windows databases do not migrate easily to Linux. This is a non-issue if you use any of the previously listed options. |