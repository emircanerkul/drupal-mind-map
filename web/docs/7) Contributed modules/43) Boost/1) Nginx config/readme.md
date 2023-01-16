---
url: https://www.drupal.org/docs/contributed-modules/boost/nginx-config
description: >-
  The following is a very basic example of an nginx configuration for use with
  Boost. server { server_name mydomain.com; access_log
  /srv/www/mydomain.com/logs/access.log; error_log
  /srv/www/mydomain.com/logs/error.log; root /srv/www/mydomain.com/public_html;
  fastcgi_param SCRIPT_NAME $fastcgi_script_name; location ~ (^|/)\.
published_time: '2022-06-27T15:02:55+00:00'
modified_time: '2022-06-27T15:02:55+00:00'
---
The following is a very basic example of an nginx configuration for use with Boost.

```php
server {
  server_name mydomain.com;
  access_log /srv/www/mydomain.com/logs/access.log;
  error_log /srv/www/mydomain.com/logs/error.log;
  root /srv/www/mydomain.com/public_html;

  fastcgi_param SCRIPT_NAME $fastcgi_script_name;

  location ~ (^|/)\. {
    return 403;
  }
    
  location / {
    index index.html index.php;
    expires max;

    set $request_url $request_uri;
    if ($request_uri ~ ^/admin/(.*)$) {
      rewrite ^ /index.php;
    }

    location ~* ^(?:.+\.(?:htaccess|make|txt|engine|inc|info|install|module|profile|po|pot|sh|.*sql|test|theme|tpl(?:\.php)?|xtmpl)|code-style\.pl|/Entries.*|/Repository|/Root|/Tag|/Template)$ {
      return 404;
    }

    add_header X-Boost-Cache "full";
    try_files $uri @rewrite;
  }

  location @rewrite {
    gzip_static on;

    if ($request_method = POST) {
      rewrite ^ /index.php;
    }

    set $boost_uri "${request_uri}.html";
    try_files ^ /sites/default/files/boost$boost_uri @drupal;
  }

  location @drupal {
    rewrite ^ /index.php;
  }

  location ~ \.php$ {
    include /etc/nginx/fastcgi_params;
    fastcgi_pass  127.0.0.1:9000;
    fastcgi_index index.php;
    fastcgi_pass_header Set-Cookie;
    fastcgi_pass_header Cookie;
    fastcgi_ignore_headers Cache-Control Expires Set-Cookie;
    fastcgi_param SCRIPT_FILENAME /srv/www/mydomain.com/public_html$fastcgi_script_name;
  }
}

```