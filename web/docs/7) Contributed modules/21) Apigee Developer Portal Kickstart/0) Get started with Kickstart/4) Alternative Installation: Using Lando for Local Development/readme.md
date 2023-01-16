You can get a local development running quickly using Lando instead of setting up a database, PHP, and a web server on your local machine.

### Prerequisites

To install and run the Apigee Developer Portal Kickstart distribution in your local development environment, make sure you have the following tools installed:

| PHP                                    | Needed to run Composer.                                                                                                                                                                                                                           |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Composer](https://getcomposer.org/)   | Composer enables you to install Drupal modules with all of the required dependencies.                                                                                                                                                             |
| [Lando](https://docs.devwithlando.io/) | Lando enables you to set up the infrastructure needed to run a Drupal CMS in your local environment using [Docker](https://www.docker.com/) containers.**Note**: If you do not already have a Docker account, you will need to set up an account. |

### Install Drupal

There are several options available for setting up Drupal using Composer, as described in [Using Composer to manage Drupal site dependencies](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies). The following procedure uses the [Composer template for Drupal projects](https://github.com/drupal-composer/drupal-project).

1. From your project directory, execute the following command, replacing **apigee-kickstart** with your preferred project name.  
**Note**: You may need to replace `composer` with `php composer.phar` in the following command example if Composer is not in your PATH. See [Installing composer globally](https://getcomposer.org/doc/00-intro.md#globally) to move Composer in your PATH.  
`// For Drupal 9:  
composer create-project apigee/devportal-kickstart-project:9.x-dev apigee-kickstart --stability dev --no-interaction`  
This command creates a new directory named **apigee-kickstart** in your project directory and installs the Apigee Developer Portal Kickstart and all dependencies in the **web** directory. Review the README file in the apigee-kickstart directory for more details about the installation.

### Run Drupal

To run Drupal, you need to install a web server configured with PHP so that server requests are passed to Drupal's PHP code for processing and generating a response. [Lando](https://docs.devwithlando.io/) enables you to quickly set up a Nginx web server already configured with PHP to host Drupal in your local environment using [Docker](https://www.docker.com/) containers.

1. Run the `lando init` command and respond to the prompts, as shown in bold. The `lando init` command creates a `.lando.yml` file in the root directory.  
**Note:** If installing Drupal 9, replace the recipe `drupal8` with `drupal9` in the command below.  
```php  
$ cd apigee-kickstart  
$ lando init --recipe=drupal8  
? Where is your webroot relative to the init destination? web  
? What do you want to call this app? apigee-kickstart  
NOW WE'RE COOKING WITH FIRE!!!  
Your app has been initialized!  
Go to the directory where your app was initialized and run  
`lando start` to get rolling.  
Check the LOCATION printed below if you are unsure where to go.  
Here are some vitals:  
 NAME      apigee-kickstart  
 LOCATION  /Users/chet/projects/apigee-kickstart  
 RECIPE    drupal8  
 DOCS      https://docs.devwithlando.io/tutorials/drupal8.html  
```
2. Run the following command to start the server:  
`$ lando start`  
**Note**: Before starting the server, you may want to disable metrics tracking in the `~/.lando/config.yml` file.
3. The `lando start` command prints the URLs for the application. Copy the non-HTTPS hostname URL and open it in your browser to run the installer. For example:  
**<http://apigeekickstart.lndo.site>**
4. Respond to the prompts to configure and install the server.  
**Note**: Run `lando info` to view the database host name, username, password, and connection URLs.  
| **Configuration** | **Description**                                                                                                                                                                                                                                                            |  
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Choose language   | Choose your preferred language from the drop-down. Click **Save and continue**.                                                                                                                                                                                            |  
| Set up database   | Enter the following values to set up the database: Database type: **MySQL, MariaDB, Percona Server, or equivalent** Database name: **drupal** Database username: **drupal** Database password: **drupal** Advanced Options-Host: **database** Click **Save and continue**. |  
| Install site      | A progress bar displays while the site is installed.                                                                                                                                                                                                                       |  
| Configure site    | Configure your site with the administrator login and password information, as required. Click **Save and continue**.                                                                                                                                                       |
5. The default home page is displayed.
6. Configure the connection to Apigee Edge, as described in the [Apigee Edge module documentation](https://www.drupal.org/docs/8/modules/apigee-edge/configure-the-connection-to-apigee-edge).