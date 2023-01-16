---
url: >-
  https://www.drupal.org/docs/8/core/modules/big-pipe/bigpipe-environment-requirements
description: >-
  BigPipe uses streaming, this means any proxy in between should not buffer the
  response: the origin needs to stream directly to the end-user. Hence the web
  server and any proxies should not buffer the response, or otherwise, the end
  result is still a single flush, which means worse performance again. BigPipe
  responses contain the header Surrogate-Control: no-store,
  content="BigPipe/1.0". For more information about this header, see
  https://www.w3.org/TR/edge-arch/.
published_time: '2016-02-29T09:15:18+00:00'
modified_time: '2019-12-20T09:10:01+00:00'
---
* BigPipe uses streaming, this means any proxy in between should not buffer the response: the origin needs to stream directly to the end-user.
* Hence the web server and any proxies should not buffer the response, or otherwise, the end result is still a single flush, which means worse performance again.
* BigPipe responses contain the header `Surrogate-Control: no-store, content="BigPipe/1.0"`. For more information about this header, see <https://www.w3.org/TR/edge-arch/>.

Note that this version number (`BigPipe/1.0`) is not expected to increase, since all that is necessary for a proxy to support BigPipe is the absence of buffering. No proxy requirements are expected to be added in the future.

### Apache

#### Apache with mod\_php

When using Apache with mod\_php, there is nothing to do: no buffering by default.

#### Apache with PHP-FPM (FastCGI)

When using Apache with PHP-FPM (via FastCGI), you must disable FastCGI buffering.

There are several FastCGI modules for Apache:

* [mod\_fcgid](https://httpd.apache.org/mod%5Ffcgid)
* [mod\_fastcgi](http://www.fastcgi.com/mod%5Ffastcgi/docs/mod%5Ffastcgi.html)
* [mod\_proxy\_fcgi](https://httpd.apache.org/docs/2.4/mod/mod%5Fproxy%5Ffcgi.html)

##### mod\_fcgid (Apache 2.2)

Set [ FcgidOutputBufferSize](https://httpd.apache.org/mod%5Ffcgid/mod/mod%5Ffcgid.html#fcgidoutputbuffersize) to `0`:

```php
<IfModule mod_fcgid.c>
  FcgidOutputBufferSize 0
</IfModule>

```

##### mod\_fastcgi (Apache 2.2)

Add the `-flush` option to the [FastCGIExternalServer](http://www.fastcgi.com/mod%5Ffastcgi/docs/mod%5Ffastcgi.html#FastCgiServer) directive:

```php
<IfModule mod_fastcgi.c>
  FastCGIExternalServer /usr/sbin/php5-fpm -flush -socket /var/run/php5-fpm.sock
</IfModule>

```

##### mod\_proxy\_fcgi (Apache < 2.4.31)

This module doesn't support disabling output buffering entirely but will pass through a response according to PHP's `output_buffering` setting, so BigPipe works fine with this module out of the box, as long as gzip is disabled (e.g. `SetEnv no-gzip 1`).

##### mod\_proxy\_fcgi (Apache >= 2.4.31)

When using Apache with PHP-FPM (via mod\_proxy\_fcgi), you must disable buffering by setting `flushpackets=on`. Depending on your configuration this option has to be set on `ProxyPassMatch` or `Proxy`. When that parameter is set to "on" then the proxy module will flush after each chunk of data.

###### Version 1:

```php
ProxyPassMatch "^/myapp/.*\.php(/.*)?$" "fcgi://localhost:9000/var/www/" enablereuse=on flushpackets=on

```

###### Version 2:

```php
<FilesMatch "\.php$">
    # Note: The only part that varies is /path/to/app.sock
    SetHandler  "proxy:unix:/path/to/app.sock|fcgi://localhost/"
</FilesMatch>

# Define a matching worker.
# The part that is matched to the SetHandler is the part that
# follows the pipe. If you need to distinguish, "localhost; can
# be anything unique.
<Proxy "fcgi://localhost/" enablereuse=on flushpackets=on max=10>
</Proxy>
```

### Nginx with PHP-FPM (FastCGI)

BigPipe sets a `X-Accel-Buffering: no` header, which automatically disables `fastcgi_buffering` and `gzip` in Nginx >= 1.5.6.

### IIS

When using IIS, you must [disable its buffering](https://support.microsoft.com/en-us/kb/2321250).

### Varnish

When using Varnish, the following VCL disables buffering only for BigPipe responses:

#### Varnish 4

```php
sub vcl_backend_response {
  # Disable buffering only for BigPipe responses
  if (beresp.http.Surrogate-Control ~ "BigPipe/1.0") {
    set beresp.do_stream = true;
    set beresp.ttl = 0s;
  }
}

```

#### Varnish <4

```php
sub vcl_fetch {
  # Disable buffering only for BigPipe responses
  if (beresp.http.Surrogate-Control ~ "BigPipe/1.0") {
    set beresp.do_stream = true;
    set beresp.ttl = 0s;
  }
}

```

Note that the `big_pipe_nojs` cookie does _not_ break caching. Varnish should let that cookie pass through.

### Nginx (as a reverse proxy)

BigPipe sets a `X-Accel-Buffering: no` header, which automatically disables `fastcgi_buffering` and `gzip` in Nginx >= 1.5.6.

Alternatively, it is possible to [disable proxy buffering explicitly](http://nginx.org/en/docs/http/ngx%5Fhttp%5Fproxy%5Fmodule.html#proxy%5Fbuffering).

### Other web servers and (reverse) proxies

Other web servers and (reverse) proxies, including CDNs, need to be configured in a similar way.

Buffering will nullify the improved front-end performance. This means that users accessing the site via an ISP-installed proxy will not benefit. But the site won't break either.