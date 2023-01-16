AdvAgg can adjust configuration to improve performance for Apache servers. It does that through .htaccess files. There are reasons not to use .htaccess, however for most sites those aren't an important issue as it is a performance fine tuning issue. However for non-apache servers, .htaccess files don't work and in the case of Nginx, there is no equivalent. Instead Nginx has all such configuration within the server/vhost definition.

So if you're using Nginx read on for instructions on adding those to your vhost or server settings. All of the below snippets go within the `server { }` block in your config files.

### Cache Control Immutable

The [immutable cache control](http://bitsup.blogspot.de/2016/05/cache-control-immutable.html) header is a fairly new header. Only Firefox & Edge [currently support](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#Browser%5Fcompatibility) it as of September 2017\. Browsers that don't support it will ignore so it is safe to enable.

To enable in nginx add the following to your server configuration:


```php
location ~ ^/sites/.*/files/(css|js)/optimized { add_header Cache-Control 'public, max-age=31536000, immutable'; }
```

If you wanted this to also apply to agreggates as well as the individual AdvAgg optimized files, just removed the `optimized` from the location line.

### Serving Compressed Assets.

On Apache, AdvaAgg handles this pretty well. On other servers, it doesn't however, if you've already configured your server to serve compressed assets from Drupal core, likely it'll just work. On the other hand, many Nginx default configurations may not be setup to serve static compressed assets.

### Brotli

At this point in time, serving Brotli assets will still require you to build your Nginx server from source, with the [Nginx Brotli module](https://github.com/google/ngx%5Fbrotli) \- doable but beyond the scope of this manual. Once you have that installed, configuring your vhost/server settings is very easy, just add the following:


```php
location ~ ^/sites/.*/files/(css|js) { brotli_static on; }
```

### Gzip

Serving Gzip assets also requires a seperate module to be enabled it is part of the main nginx code and there are distributions with it - for example on Ubuntu use `apt-get install nginx-extras` to install a prebuilt version, otherwise you can build your own custom version. See more details about the [Nginx GZip Module](http://nginx.org/en/docs/http/ngx%5Fhttp%5Fgzip%5Fstatic%5Fmodule.html) Configuring your server setting is equally easy and almost identical to the [Brotli](#brotli) configuration:


```php
location ~ ^/sites/.*/files/(css|js) { gzip_static on; }
```

If you want to serve either Gzip or Brotli depending on the user's browser just use both declarations: vhost/server settings is very easy, just add the following:


```php
location ~ ^/sites/.*/files/(css|js) { brotli_static on; gzip_static on; }
```