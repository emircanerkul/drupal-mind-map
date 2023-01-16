---
url: >-
  https://www.drupal.org/docs/8/themes/bs-base/additional-features/favicons-and-better-mobile-ui-adjustments
description: >-
  bs_base does not offer support for multi favicons and UI tweaks for mobile
  devices. The recommended practice is to use metatag module for this. Download
  and install metatag, metatag_favicons and metatag_mobile modules. Visit
  admin/config/search/metatag and edit Global metatag section. There define
  "favicons & touch icons" and "mobile & ui adjustments" meta tags.
published_time: '2017-12-09T21:49:15+00:00'
modified_time: '2021-03-11T21:35:31+00:00'
---
bs\_base does not offer support for multi favicons and UI tweaks for mobile devices. The recommended practice is to use [metatag](https://www.drupal.org/project/metatag) module for this. Download and install metatag, metatag\_favicons and metatag\_mobile modules. Visit admin/config/search/metatag and edit Global metatag section. There define "favicons & touch icons" and "mobile & ui adjustments" meta tags. As a minimum in the global section you should have something like:

```php
icon_16x16:	/themes/custom/custom_theme/images/favicons/favicon-16x16.png
icon_32x32:	/themes/custom/custom_theme/images/favicons/favicon-32x32.png
mask-icon:	/themes/custom/custom_theme/images/favicons/safari-pinned-tab.svg
apple_touch_icon_180x180:	/themes/custom/custom_theme/images/favicons/apple-touch-icon.png
application_name:	Your Project Name
android_manifest:	/themes/custom/custom_theme/images/favicons/manifest.json
theme_color:	#000000 (your primary theme color)
msapplication_config:	/themes/custom/custom_theme/images/favicons/browserconfig.xml
apple_mobile_web_app_title:	Your Project Name
```

Create various favicon formats and needed manifest files manually or use some online service like <https://realfavicongenerator.net/> or any other tool you like.  
Copy generated files into your child theme folder, for example put all files into /web/themes/custom/custom\_theme/images/favicons/ folder.