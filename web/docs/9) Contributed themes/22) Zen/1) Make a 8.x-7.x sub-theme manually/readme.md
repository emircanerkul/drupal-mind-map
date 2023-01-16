---
url: https://www.drupal.org/docs/8/themes/zen/make-a-8x-7x-sub-theme-manually
description: >-
  The Zen base-theme is designed to be easily extended by its sub-themes. You
  should Not modify any of the files in the Zen base-theme folder 'zen' at
  [D8-root]/themes/zen. Instead, create a sub-theme located outside of the 'zen'
  base-theme folder, placing you subtheme at
  [D8-root]/themes/my_zen_subtheme_folder_location. | Jump down to Contents ⤵ |
  "Why subthemes should always be outside of the base-theme." Each subtheme
  should reside in its own folder outside of the base-theme, because that makes
  it easier to update or upgrade the base-theme in the future.
published_time: '2016-07-18T03:46:32+00:00'
modified_time: '2018-04-02T16:52:53+00:00'
---
**The Zen base-theme is designed to be easily extended by its sub-themes.**

You should Not modify any of the files in the Zen base-theme folder 'zen' at `[D8-root]/themes/zen`. Instead, create a sub-theme located outside of the 'zen' base-theme folder, placing you subtheme at `[D8-root]/themes/my_zen_subtheme_folder_location`.

 | [Jump down to Contents ⤵](#contents%5F) |

* _"Why subthemes should always be outside of the base-theme."_  
Each subtheme should reside in its own folder outside of the base-theme, because that makes it easier to update or upgrade the base-theme in the future.  
If, for example, you were to update the base theme, and if that process deletes the current base theme folder, and if that base-theme folder contained your sub-theme, your subtheme would be lost.

Work in progress \[2016.08.14\]

**The following has been tested with** drupal-8.18, drupal-8.2.0-beta1, and drupal-8.3.x-dev(2016-08-09); and with Zen:

* zen-8.x-7.0-alpha14
* zen-8.x-7.x-dev \[2016-Jul-14\]

**Warning:** For both

* zen-8.x-7.0-alpha14
* zen-8.x-7.x-dev \[2016-Jul-14\]

### Do Not set the Zen base-theme as your site's 'Administrative Theme'.

If you set the Zen Base-theme as your 'Administrative Theme', it will break your site, and will render Zen permanently unusable on that site. The site is recoverable, but nothing I tried allowed me to again use Zen on my site.

See this issue, which includes instructions for recovering the site: [Setting Zen Base-theme as Administrative Theme breaks site, and renders Zen permanently unusable \~ drupal.org/node/2769557](https://www.drupal.org/node/2769557 "   This link opens in a new tab/window. [https://www.drupal.org/node/2769557]") (This link opens in a new tab/window.)

### Prevention

Note: This warning will be repeated below at a point at which it will be most convenient for you to add `hidden: true` to your Zen base-theme.

To prevent yourself from accidentally enabling the base-theme Zen as the 'Administration theme'  
you will be advised to add the code...  
`hidden: true`  
...to file...  
`zen.info.yml`  
...at...  
`[d8-root]/zen/zen.info.yml`

By setting the Zen base-theme to 'hidden', it simply prevents it from appearing on the 'Appearance page', and so you will not have to worry about accidentally setting it as the 'Administration theme'.

**Drush:** If you use [Drush \[\~ drupal.org/project/drush\]](http://drupal.org/project/drush "    Drupal.org project Drush homepage. (This link opens in a new tab/window. "), you can take advantage of the `drush zen` command to automatically generate a sub-theme. For information, type `drush help zen`.

See the details for using Drush with Zen in the file `.../zen/STARTERKIT/README.txt` under the heading 'CREATING A SUB-THEME WITH DRUSH'.

At this time (April 2018), Drush 8 does not work for creating Sub Themes.