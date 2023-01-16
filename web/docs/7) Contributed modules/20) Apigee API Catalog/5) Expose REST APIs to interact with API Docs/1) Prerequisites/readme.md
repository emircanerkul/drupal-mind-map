Before you begin, make sure to:

* Install Composer in your local environment to download Drupal modules, dependencies, and patches. See [Download Composer](https://getcomposer.org/download/) for instructions.
* Install the [Apigee Developer Portal Kickstart](https://www.drupal.org/project/apigee%5Fdevportal%5Fkickstart) distribution. See the [Apigee Developer Portal Kickstart project page](https://www.drupal.org/project/apigee%5Fdevportal%5Fkickstart) for installation details.
* Set the **max\_allowed\_packet** variable in your mysql config file is set to **64M**.

**NOTE**: If using MariaDB, you must add the **max\_allowed\_packet** **\=64M** parameter to the `[server]` section of the `/etc/my/cnf.d/server.cnf` file prior to enabling the **JSON:API** module. If you do not set **max\_allowed\_packet** in your MYSQL config file or add it to your MariaDB server config, your installation will fail with a `Warning: Error while sending QUERY packet.`