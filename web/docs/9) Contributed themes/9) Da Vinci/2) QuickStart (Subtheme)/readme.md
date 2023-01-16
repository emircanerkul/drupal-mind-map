---
url: https://www.drupal.org/docs/contributed-themes/da-vinci/quickstart-subtheme
description: >-
  To create a subtheme: You can create a subtheme through a shell script.
  Navigate to the "themes/contrib/da_vinci" folder. Run:
  ./subtheme/create_subtheme.sh or bash subtheme/create_subtheme.sh In case you
  have problems change permissions to shell script chmod +x
  subtheme/create_subtheme.sh and run again. The script will ask a series of
  configuration questions and then create your subtheme. If you don't already
  have a "themes/custom" folder, it will create one, then place your subtheme
  there.
published_time: '2022-06-29T19:35:02+00:00'
modified_time: '2022-07-03T17:33:38+00:00'
---
**To create a subtheme:**

* You can create a subtheme through a shell script.
* Navigate to the "themes/contrib/da\_vinci" folder.
* Run: `./subtheme/create_subtheme.sh` or `bash subtheme/create_subtheme.sh`
* In case you have problems change permissions to shell script `chmod +x subtheme/create_subtheme.sh` and run again.
* The script will ask a series of configuration questions and then create your subtheme.
* If you don't already have a "themes/custom" folder, it will create one, then place your subtheme there.

**From the subtheme folder:**

* Install dependencies: `npm install`

Update line#23 of the gulpfile.js file with your own domain.

```php
var path = 'localhost'
```