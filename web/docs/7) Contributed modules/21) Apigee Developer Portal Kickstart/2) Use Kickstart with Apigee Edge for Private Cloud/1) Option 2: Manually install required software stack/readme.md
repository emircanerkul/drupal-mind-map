The following steps describe how to manually install the Apigee Developer Portal Kickstart on a CentOS 7/RHEL 7 server.

### Install required utilities

1. Install Git by running `yum install git`.
2. Install zip by running `yum install zip`.
3. Install unzip by running `yum install unzip`.
4. Install Composer by following [Composer's install instructions](https://getcomposer.org/download/), but install Composer in the /usr/local/bin directory and name the executable `composer` by passing the `--install-dir` and `--filename=composer parameter`:  
```php  
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"  
php composer-setup.php --install-dir=/usr/local/bin --filename=composer  
php -r "unlink('composer-setup.php');"  
```

### Install PHP 8.1

If you have a RedHat subscription, you can use the official PHP Red Hat Package Managers (RPMs) from [Red Hat Software Collections (RHSCL)](https://access.redhat.com/solutions/472793).

Otherwise, install PHP using [open source Remi repositories](https://rpms.remirepo.net) by following the steps below:

1. Use the [Remi configuration wizard ](https://rpms.remirepo.net/wizard/)to select the PHP installation method for your OS, as shown in the image below:  
![Remi configuration wizard panel](https://www.drupal.org/files/remi-wizard_0.png)  
   * For the “Wanted PHP version,” select a 8.1 version or above.  
   **Note**: By default, CentOS 7/RHEL 7 comes with PHP version 5.4\. However, [Drupal system requirements](https://www.drupal.org/docs/8/system-requirements/php-requirements) recommend using versions 8.1 or higher.  
   * For “Type of installation,” select “Default/ Single version (simplest way).”
2. Follow each instruction in the wizard, running all commands as `root` or with `sudo`.
3. At the wizard prompt to provide a “Command to install additional packages,” run the following command:  
```php  
yum install php php-bcmath php-common php-cli php-fpm php-gd php-json php-mbstring php-mysql php-mysqlnd php-opcache php-pdo php-process php-xml php-xmlrpc  
```
4. Validate your PHP installation by running this command :  
`php --version`
5. Upon successful installation, you should see a response containing the installed PHP version, as shown below:  
```php  
sh-4.2# php --version  
PHP 8.1 (cli) (built: Jul 30 2022 09:26:16) ( NTS )  
```

### Install a database

Next, install a database to use with your Apigee developer portal. You can use [MariaDB](https://mariadb.org) or [MySQL](https://www.mysql.com/). This example uses MariaDB.

**Note**:

* If you are using RedHat, choose a database type that is available from official [Red Hat Software Collections (RHSCL)](https://access.redhat.com/solutions/472793).
* If you are hosting Apigee Developer portal on GCP, use [Cloud SQL for MySQL](https://cloud.google.com/sql/docs/features#mysql) instead of standing up your DB Server.
* If you are hosting Apigee Developer portal on AWS, use [Amazon RDS for MySQL](https://aws.amazon.com/rds/mysql/) instead of standing up your own DB Server.

To install MariaDB, execute the following commands as `root` or `sudo`:

```php
yum install mariadb-server
systemctl start mariadb.service
systemctl enable mariadb.service

```

Once MariaDB is installed, follow these steps to secure and create a database:

1. Run the following command to secure your database:  
`mysql_secure_installation`
2. Create a database and a user for your portal by logging into the database with the following command:  
`mysql -u root -p`
3. Run the following commands to create the database “devportal,” and the user “devportal” with the password “password”:  
**Note:** You should use a more secure password than ‘password’ in the commands below.  
```php  
create database devportal;  
create user 'devportal'@'localhost' identified by 'password';  
grant all on devportal.* to 'devportal' identified by 'password';  
```
4. You must add the **max\_allowed\_packet** **\=64M** parameter to the `[server]` section of the `/etc/my/cnf.d/server.cnf` file.

### Install an Nginx web server

Follow these steps to install an Nginx web server for your developer portal:

1. Execute the following commands as `root` or `sudo`:  
```php  
yum install nginx  
systemctl start nginx.service  
systemctl enable nginx.service  
```
2. Configure your PHP FastCGI Process Manager (PHP-FPM) to run as user “nginx” instead of “apache.”  
   * Open` /etc/php-fpm.d/www.conf` and change the **user** and **group** to “nginx” as shown below:  
   ```php  
   ; Start a new pool named 'www'.  
   [www]  
   ; Unix user/group of processes  
   ; Note: The user is mandatory. If the group is not set, the default user$  
   ;       will be used.  
   ; RPM: apache Choose to be able to access some dir as httpd  
   user = nginx  
   ; RPM: Keep a group allowed to write in log dir.  
   group = nginx  
   ```  
   * Run the following commands to start the PHP-FPM service:  
   ```php  
   systemctl start php-fpm.service  
   systemctl enable php-fpm.service  
   ```  
   * If successful, you should see the nginx test page upon navigating to the server’s hostname or IP in a browser.  
   * If you do not see the nginx test page, try running the following commands to open ports for HTTP and HTTPS traffic:  
   ```php  
   firewall-cmd --permanent --zone=public --add-service=http  
   firewall-cmd --permanent --zone=public --add-service=https  
   firewall-cmd --reload  
   ```
3. As `root` or `sudo`, create an nginx virtual host configuration file at `/etc/nginx/conf.d/drupal`.`conf` and paste the[ recipe from nginx.com for Drupal ](https://www.nginx.com/resources/wiki/start/topics/recipes/drupal/)into the file.  
   * In the file you just created, change the `root` directive from `/var/www/drupal `to `/var/www/devportal/web`. The Apigee Kickstart distribution will be installed in and served from this directory.  
   * Set the `server_name` directive to the hostname or IP address. See [Nginx.com’s server name directive documentation](http://nginx.org/en/docs/http/server%5Fnames.html) for more details.  
   * Under the `location ~ '\.php$|^/update.php `section, you will see an Nginx directive named `fastcgi_pass`. This directive is used to define what server should handle PHP requests. We installed PHP-FPM on this same server which is configured in the file `/etc/php-fpm.d/www.conf`. Open the file `/etc/php-fpm.d/www.conf` and look at what the `listen` directive is set to. It should either be set to either a port or a unix socket. Modify the Nginx configuration file `/etc/nginx/conf.d/drupal` so that the `fastcgi_pass` directive matches PHP-FPM's listen setting. For example, if the `/etc/php-fpm.d/www.conf` file has `listen = 127.0.0.1:9000` , then the file `/etc/nginx/conf.d/drupal` should have `fastcgi_pass 127.0.0.1:9000`.  
   * Add the [listen directive](http://nginx.org/en/docs/http/ngx%5Fhttp%5Fcore%5Fmodule.html#listen) to use a port other than port 80, if preferred.
4. Restart nginx using the following command:  
`systemctl restart nginx.service`
5. Upon restart, you should see a “file not found message” when navigating to the server in a web browser, as there are no files in the webroot at this point. You may also see the following error in the nginx logs:  
```php  
FastCGI sent in stderr: "Primary script unknown while reading response header from upstream"  
```
6. Log files can be found at `/var/log/nginx` or by running the following command:  
`tail /var/log/nginx/*`

### Download the Apigee Developer Portal Kickstart distribution

Follow the steps below to use [Composer](https://getcomposer.org/) to download the Apigee Developer Portal Kickstart distribution. The project will be located at `/var/www/devportal`.

**Note:** The web root will be `/var/www/devportal/web`, which is the same root used earlier to configure the web server.

1. Create the directory:  
`mkdir -p /var/www`
2. Create devportal user:  
`adduser devportal`
3. Instead of `root` owning the application, set the `devportal` user as the application owner. This will enable the `devportal` user to update files.  
`chown -R devportal:devportal /var/www`
4. Switch to the `devportal` user and `cd `to the project directory:  
```php  
su - devportal  
cd /var/www  
```
5. Composer sets the PHP memory limit to 1.5G when it runs, but this may not be enough for our project. We can set the COMPOSER\_MEMORY\_LIMIT to 2G so that we do not run into memory issues by editing the `devportal` user's Bash script to have the environment variable `devportal` that Composer will use. Run the following command:  
```php  
echo "export COMPOSER_MEMORY_LIMIT=2G" >> ~devportal/.bash_profile  
source ~/.bash_profile  
```
6. As the `devportal` user, [follow instructions on what Composer commands to install Apigee Kickstart](https://www.drupal.org/node/3058326#s-installation-instructions).
7. As the `devportal` user, copy the contents of `default.settings.php` to `settings.php:`  
```php  
cd /var/www/devportal/web/sites/default  
cp default.settings.php settings.php  
chown -R devportal:nginx settings.php  
chmod 660 settings.php  
```
8. Run the following commands as `sudo` or `root` to set file permissions as **writable** by the `devportal` user and **only readable** by the webserver:  
```php  
cd /var/www/devportal/web  
chown -R devportal:nginx .  
find . -type d -exec chmod u=rwx,g=rx,o= '{}' \;  
find . -type f -exec chmod u=rw,g=r,o= '{}' \;  
```
9. Create a directory to use as Drupal’s filesystem for storing uploaded images:  
```php  
cd /var/www/devportal/web/sites/default  
mkdir files  
```
10. Make the `sites/default` directory **writable** by the web server:  
```php  
chown -R devportal:nginx .  
find . -type d -exec chmod ug=rwx,o= '{}' \;  
find . -type f -exec chmod ug=rw,o= '{}' \;  
```
11. Set permissions to ensure SELinux allows changes to the `sites/default` directory:  
`chcon -R -t httpd_sys_content_rw_t /var/www/devportal/web/sites/default`  
**Note**: If the command above does not work you may not have SELinux enabled. If Drupal still cannot write to this file location after these instructions, you may need to configure SELinux properly to allow the nginx server to write to your filesystem. See your operating system instructions on how to configure SELinux.

See [Drupal.org’s Securing files and permissions document](https://www.drupal.org/node/244924) for more information and example configurations.

### Run the Drupal site installer

To install the Drupal site:

1. Navigate to [http://{hostname\_or\_ip}](http://{d8p}/core/install.php), where `{hostname_or_ip}` is the hostname or ip that you configured as the `server` directive in `/etc/nginx/conf.d/drupal`.`conf.`
2. Follow the instructions on the Drupal installer screen to complete the site installation.

### Next Steps

#### Run Drush

[Drush](https://www.drush.org/) is the Drupal command line interface. You can use it to perform many tasks as a Drupal administrator. Drush is installed by default via Composer and located at `PROJECT_DIR/vendor/bin`. You can call Drush with the following command:

`/var/www/devportal/web../vendor/bin/drush cr`

To call Drush from anywhere, you can add Drush to your PATH or install the [Drush Launcher](https://github.com/drush-ops/drush-launcher).

#### Secure Edge Connection Settings

Apigee Developer Portal Kickstart stores Apigee Edge connection settings in [Drupal configuration](https://www.drupal.org/docs/configuration-management) for ease of setup. The connection settings are in your database and can be found in the Drupal config files if you export them. To make the system more secure you can move the connection setting files into the Drupal private filesystem by following the steps below:

1. Create a private file directory outside of the webroot:  
```php  
cd /var/www/devportal  
mkdir private  
cd private  
```
2. Set the permissions and security context of the private file directory:  
```php  
chown -R devportal:nginx .  
find . -type d -exec chmod ug=rwx,o= '{}' \;  
find . -type f -exec chmod ug=rw,o= '{}' \;  
chcon -R -t httpd_sys_content_rw_t /var/www/devportal/private  
```
3. Open `/var/www/devportal/web/sites/default/settings.php` and search for `$settings['file_private_path']`. In that section, uncomment the `$settings['file_private_path']` and set its value to the private file directory, as shown:  
`$settings['file_private_path'] = '/var/www/devportal/private';`
4. Login to your Drupal as an admin and go to **Configuration > System > Keys**.
5. In the “Apigee Edge connection” key, change “Key provider” to “Apigee Edge: Private File.”

Once these steps are completed, your Edge connection settings and configuration will be stored in `/var/www/html/devportal/private/.apigee_edge`.

For more information on other secure setting options, see the [Drupal Key module documentation](https://www.drupal.org/docs/contributed-modules/key) and the [Apigee Edge documentation on key settings](https://www.drupal.org/docs/contributed-modules/apigee-edge/configure-the-connection-to-apigee#user-defined-credential-storage).

### Troubleshooting

#### Use with SELinux

Most RedHat/CentOS systems run SELinux by default. SELinux adds a strong security layer to a server but can make installation of software difficult. For example, if SELinux is running and is not configured properly, you may have issues getting Drupal to write temporary or user-uploaded files to disk. If you are having issues during installation, you may want to disable SELinux and re-enable it after installation is complete. See the [RedHat](https://access.redhat.com/documentation/en-us/red%5Fhat%5Fenterprise%5Flinux/7/) or [CentOS](https://www.centos.org) documentation for more information on configuring and disabling SELinux.

#### Modify a firewall

CentOS comes with default firewall, firewalld, that may need to be modified to allow traffic to reach the web server. To open up a new port (e.g., TCP/80) permanently, use these commands:

`$ sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
$ sudo firewall-cmd --reload`

The "--permanent" flag persists the new firewall rule across reboots.

You can check the updated rules with the following command:

`$ firewall-cmd --list-all`

#### “Unexpected error. Please try again later.” displayed in browser

This message will be displayed when there is a PHP error. To see more details and diagnose the issue, you can edit `/var/www/html/devportal/web/sites/default/settings.php`. Add the following line to the file to see more details:

`$config['system.logging']['error_level'] = 'verbose';`

#### “File not found” displayed in browser

This message indicates an issue with the nginx or PHP-FPM configuration. The nginx logs can be found at `/var/log/nginx`. You can check the `error.log` file in that directory for errors.

If you find "Primary script unknown" in the `error.log` file, you can try the following steps to resolve the error:

* Confirm that the PHP-FPM service is running by using this command:  
`systemctl status php-fpm.service`
* Check the permissions of `docroot: MY_PROJECT/web` and follow [these steps](https://serverfault.com/questions/517190/nginx-1-fastcgi-sent-in-stderr-primary-script-unknown/754378) to correct permissions in the nginx PHP-FPM.