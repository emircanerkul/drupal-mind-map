### JavaScript Bookmarklet

You can use this JS code as a bookmarklet for toggling the AdvAgg URL parameter. See <http://en.wikipedia.org/wiki/Bookmarklet> for more details.


```php
javascript:(function(){ var loc = document.location.href, qs = document.location.search, regex_off = /\&?advagg=-1/, goto = loc; if(qs.match(regex_off)) { goto = loc.replace(regex_off, ''); } else { qs = qs ? qs + '&advagg=-1' : '?advagg=-1'; goto = document.location.pathname + qs; } window.location = goto; })();
```

### Configuration for a high Google [PageSpeed](https://developers.google.com/speed/pagespeed/insights/) score

Go to `admin/config/development/performance/advagg` \- check "Combine CSS files by using media queries"

Ensure AdvAgg Modifier is enabled and go to `admin/config/development/performance/advagg/mod` \- Under "Move JS to the footer" Select "All" - set "Enable preprocess on all JS/CSS" - set "Move JavaScript added by drupal\_add\_html\_head() into drupal\_add\_js()" - Enable every checkbox under "Optimize JavaScript/CSS Ordering"

Ensure AdvAgg Minify JS is enabled and go to `admin/config/development/performance/advagg/js-minify` \- Select JSMin if available; otherwise select JSMin+.