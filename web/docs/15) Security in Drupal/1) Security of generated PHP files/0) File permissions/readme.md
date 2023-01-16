Here are some permissions someone might want to set from the docroot of Drupal. You would use the MYUSER account to deploy any version control changes. It's assumed www-data is the user/group your Apache or Nginx server is using. These permissions will prevent Drupal editing any of its own files so an attacker would not be able to change the source code via the website. The [Security Review](https://www.drupal.org/project/security%5Freview) module can check your file permissions (and much else besides). 

```php
sudo chown -R MYUSER:www-data *
sudo find . -type d -exec chmod 755 {} \;
sudo find . -type f -exec chmod 640 {} \;
sudo find sites/default/files/config* -type f -exec chmod 664 {} \;
```