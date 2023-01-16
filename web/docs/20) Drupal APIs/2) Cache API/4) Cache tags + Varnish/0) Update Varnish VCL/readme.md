The Symfony `FOSHttpCache` bundle includes some [excellent documentation on VCL changes required for cache tag support](http://foshttpcache.readthedocs.io/en/stable/varnish-configuration.html#tagging), but here are the minimum required VCL changes to get started (for Varnish 4.x):

Inside `vcl_recv`:

```php
sub vcl_recv {
    ...
    # Only allow BAN requests from IP addresses in the 'purge' ACL.
    if (req.method == "BAN") {
        # Same ACL check as above:
        if (!client.ip ~ purge) {
            return (synth(403, "Not allowed."));
        }

        # Logic for the ban, using the X-Cache-Tags header.
        if (req.http.X-Cache-Tags) {
            ban("obj.http.X-Cache-Tags ~ " + req.http.X-Cache-Tags);
        }
        else {
            return (synth(403, "X-Cache-Tags header missing."));
        }

        # Throw a synthetic page so the request won't go to the backend.
        return (synth(200, "Ban added."));
    }
}

```

Inside `vcl_backend_response`:

```php
sub vcl_backend_response {
    # Set ban-lurker friendly custom headers.
    set beresp.http.X-Url = bereq.url;
    set beresp.http.X-Host = bereq.http.host;
    ...
}

```

Inside `vcl_deliver`:

```php
sub vcl_deliver {
    # Remove ban-lurker friendly custom headers when delivering to client.
    unset resp.http.X-Url;
    unset resp.http.X-Host;
    # Comment these for easier Drupal cache tag debugging in development.
    unset resp.http.X-Cache-Tags;
    unset resp.http.X-Cache-Contexts;
    ...
}

```

Make sure you restart Varnish after making the appropriate VCL changes!