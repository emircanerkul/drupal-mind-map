---
url: >-
  https://www.drupal.org/docs/contributed-modules/advanced-varnish/fastly-support
description: The module can work with 3rd party Varnish cache services like Fastly.
published_time: '2020-07-03T05:45:04+00:00'
modified_time: '2020-07-03T05:45:57+00:00'
---
The module can work with 3rd party Varnish cache services like Fastly. Here you can find an example of VCL file (thank to [Andreas Hansson](https://www.drupal.org/u/andreas-hansson "View user profile.") for that) that you can use for your site:

`sub vcl_recv {
#FASTLY recv


  if (req.restarts == 0) {
    if (!req.http.X-Forwarded-For) {
      set req.http.X-Forwarded-For = client.ip;
    }
  }

  unset req.http.X-Real-Forwarded-For;
  set   req.http.X-Real-Forwarded-For = client.ip;
  unset req.http.X-Varnish-Client-IP;
  set   req.http.X-Varnish-Client-IP = client.ip;

  set req.url = boltsort.sort(req.url);


  if (req.method != "GET" && req.method != "HEAD") {
    return (pass);
  }

  if (req.http.Upgrade ~ "(?i)websocket") {
    return (pass);
  }

  if (req.url ~ "^/(cron|install|update)\.php") {
    return(pass);
  }

  if (req.url ~ "(?i)\.(twig|yml|module|info|inc|profile|engine|test|po|txt|theme|svn|git|tpl(\.php)?)(\?.*|)$"
  && !req.url ~ "(?i)robots\.txt"
  ) {
  }

  # Pass Caching if it was requested from backend.
  if (req.http.X-Pass-Varnish) {
    set req.http.X-Pass-Varnish = "YES";
    return(pass);
  }

  if (req.url ~ "\.(jpeg|jpg|png|gif|ico|swf|js|css|txt|eot|woff|ttf|htc)(\?.*|)$") {
    unset req.http.Cookie;
    return(lookup);
  }

  if (req.url ~ "\.(webm|mp3|m4a|mp4|m4v|mov|mpeg|mpg|avi|divx|ogg|ogv|wma|pdf|tar|gz|gzip|bz2)(\?.*|)$") {
    unset req.http.Cookie;
    return(pass);
  }

  if ((req.url ~ "/system/ajax/") && (! req.url ~ "/cached")) {
    return(pass);
  }

  if (req.url ~ "/user"
   || req.url ~ "/admin"
   || req.url ~ "/u/"
   || req.url ~ "/p/"
   || req.url ~ "/no_cache/"
  ) {
    return(pass);
  }

  if (
     req.url ~ "^/sites/.*/files/"
  || req.url ~ "^/sites/all/themes/"
  || req.url ~ "^/modules/.*\.(js|css)\?"
  ) {
    unset req.http.Cookie;
  }

  return(lookup);
}

sub vcl_fetch {
#FASTLY fetch

  if ((beresp.status == 500 || beresp.status == 503) && req.restarts < 1 && (req.method == "GET" || req.method == "HEAD")) {
    restart;
  }

  if (req.restarts > 0) {
    set beresp.http.Fastly-Restarts = req.restarts;
  }


  if (beresp.http.Expires || beresp.http.Surrogate-Control ~ "max-age" || beresp.http.Cache-Control ~ "(s-maxage|max-age)") {
    # keep the ttl here
  } else {
    # apply the default ttl
    set beresp.ttl = 3600s;
  }

  /** Enable ESI if requested on this page */
  if (beresp.http.X-DOESI) {
    set beresp.do_esi = true;
  }

   # Set ban-lurker friendly custom headers.
  set beresp.http.X-Url = bereq.url;
  set beresp.http.X-Host = bereq.http.host;

  # Cache 404s, 301s, at 500s with a short lifetime to protect the backend.
  if (beresp.status == 404 || beresp.status == 301 || beresp.status == 500 || beresp.status == 503) {
    set req.http.Fastly-Cachetype = "ERROR";
    set beresp.ttl = 10m;
    return(deliver);
  }

  # Don't allow static files to set cookies.
  # (?i) denotes case insensitive in PCRE (perl compatible regular expressions).
  # This list of extensions appears twice, once here and again in vcl_recv so
  # make sure you edit both and keep them equal.
  if (bereq.url ~ "(?i)\.(jpeg|jpg|png|gif|ico|swf|js|css|txt|eot|woff|ttf|htc|mp3|m4a|mp4|m4v|mov|mpeg|mpg|avi|divx|ogg|ogv|wma|pdf|tar|gz|gzip|bz2|asc|dat|doc|xls|ppt|tgz|csv)(\?.*|)$") {
    unset beresp.http.set-cookie;
    return(deliver);
  }

  # Allow items to remain in cache up to X hours past their cache expiration.
  if (beresp.http.X-Grace) {
    set beresp.grace = std.strtol(beresp.http.X-Grace, 10);
  } else {
    set beresp.grace = 0s;
  }
  # Use ttl from X-TTL header. If X-Adv-Varnish header exists (page created by Drupal) and
  # missing X-Drupal-[Dynamic-]Cache headers, then the page should not be cached for some
  # reason (Page-Cache-Kill-Switch, Vary per User or Session etc)
  if (beresp.http.X-TTL) {
    set beresp.ttl = std.strtol(beresp.http.X-TTL, 10);
  } else {
    set beresp.ttl = 0s;
  }

  if (bereq.url !~ "/adv_varnish/esi/"  &&
      beresp.http.X-Adv-Varnish == "Cache-Enabled" &&
      beresp.http.X-Drupal-Dynamic-Cache != "MISS" &&
      beresp.http.X-Drupal-Dynamic-Cache != "HIT" &&
      beresp.http.X-Drupal-Cache != "HIT" &&
      beresp.http.X-Drupal-Cache != "MISS") {
      set beresp.ttl = 0s;
  }
  if (beresp.http.Set-Cookie) {
    set req.http.Fastly-Cachetype = "SETCOOKIE";
    set beresp.http.X-Cacheable = "NO:Cookie in the response";
    return(pass);
  }
  elsif (beresp.ttl <= 0s) {
    set beresp.http.X-Cacheable = "NO:Not Cacheable";
  }
  elsif (beresp.http.Cache-Control ~ "private" && !beresp.http.X-DOESI) {
    set req.http.Fastly-Cachetype = "PRIVATE";
    set beresp.http.X-Cacheable = "NO:Cache-Control=private";
    return(pass);
  }
  else {
    set beresp.http.X-Cacheable = "YES";
  }

  if (beresp.ttl > 0s) {
    unset beresp.http.Set-Cookie;
  }
  set beresp.http.X-Varnish-Secret = std.tolower(beresp.http.X-Varnish-Secret);

  set beresp.http.X-TTL2 = beresp.ttl;

  return(deliver);
}

sub vcl_hit {
#FASTLY hit

  if (!obj.cacheable) {
    return(pass);
  }
  return(deliver);
}

sub vcl_miss {
#FASTLY miss
  return(fetch);
}

sub vcl_deliver {
#FASTLY deliver
  # If it's a Drupal-Page with X-Bin vary, tell browsers to vary by Cookie.
  if (resp.http.Vary ~ "X-Bin") {
    set resp.http.Vary = resp.http.Vary ", Cookie";
  }
  return(deliver);
}

sub vcl_error {
#FASTLY error
}

sub vcl_pass {
#FASTLY pass
}

sub vcl_log {
#FASTLY log
}

sub vcl_hash {
#FASTLY hash
    /** Default hash */

    set req.hash += req.http.host;
    set req.hash += req.url;
    set req.hash += req.http.Accept-Encoding;

    /** Place ajax into separate bin. */
    if (req.http.X-Requested-With) {
        set req.hash += req.http.X-Requested-With;
    }

    /** Process authenticated users */
    if (req.http.Cookie ~ "^(|.*; ?)S?SESS([a-z0-9]{32}=[^;]+)(;.*|)$") {

        /** Extraxt full session value */
        set req.http.X-SESS = regsub(req.http.Cookie, "^(|.*; ?)S?SESS([a-z0-9]{32}=[^;]+)(;.*|)$", "\2");

        # Get Cookie Bin. And Set new header for Vary caching.
        if (req.http.Cookie ~ "^(|.*; ?)ADVBIN=([^;]+)(;.*|)$") {
          set req.http.X-Bin  = "role:" + regsub(req.http.Cookie, "^(|.*; ?)ADVBIN=([^;]+)(;.*|)$", "\2");
        }

        /** ESI_CACHEMODE_1 - SHARED */
        if (req.url ~ "/adv_varnish/esi/" && req.url ~ "[\?&]cachemode=1(&|$)") {
            set req.http.X-Bin = "role:anonymous";
        }

        /** ESI_CACHEMODE_2 - ROLE */
        /** X-Bin role:...         */

        /** ESI_CACHEMODE_3 - USER */
        if (req.url ~ "/adv_varnish/esi/" && req.url ~ "[\?&]cachemode=3(&|$)") {
            /** Set user session as bin */
            set req.http.X-Bin  = "user:" + req.http.X-SESS;
        }
        set req.http.X-URL = req.url;
    }
    else {
      set req.http.X-Bin = "role:anonymous";
    }

    /** If Bin is set - add it to hash data for this page */
    if (req.http.X-Bin) {
        set req.hash += req.http.X-Bin;

    }

    return (hash);
}`