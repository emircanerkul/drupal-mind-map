**Note:** If you are using Pantheon to host your Developer Portal, skip this step.

### Apache

To configure the web server using Apache, you can edit the `.htaccess` file found in the Drupal root directory. Right after the line:

`RewriteCond %{REQUEST_URI} !/core/modules/statistics/statistics.php$`

Add the following lines:

`# Allow access to simplesaml paths
RewriteCond %{REQUEST_URI} !^/simplesaml`

### Nginx

To configure the web server using Nginx, you can edit the `nginx.conf` 

`location ^~ /simplesaml {
  index index.php index.html index.htm;
  alias /opt/apigee/apigee-drupal/wwwroot/private/simplesamlphp/www;
    location ~ ^(?<prefix>/simplesaml)(?<phpfile>.+?\.php)(?<pathinfo>/.*)?$ {
    include /opt/nginx/conf/fastcgi_params;
    fastcgi_pass 127.0.0.1:8888;
    fastcgi_param SCRIPT_FILENAME $document_root$phpfile;
    fastcgi_param PATH_INFO $pathinfo if_not_empty;
  }
}`

The alias path `/opt/apigee/apigee-drupal/wwwroot/private/simplesamlphp/www` can be different based on your installation, above is assuming paths used by Apigee OPDK.