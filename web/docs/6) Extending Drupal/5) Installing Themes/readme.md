---
url: https://www.drupal.org/docs/extending-drupal/installing-themes
description: >-
  The recommended way to install themes is with Composer. For Drupal 8 or higher
  core themes are in a directory named /core/themes and all contrib or custom
  themes under a directory named /themes (in the webroot). Check the detail
  content of README.txt in the /themes directory for more info. Download the
  theme. You can find themes on Download, as well as some external sites. Make
  sure the version of the theme matches your version of Drupal. When you first
  download the theme, it will appear in a compressed file format such as
  'tar.gz' or 'zip'.
published_time: '2016-09-22T22:05:12+00:00'
modified_time: '2021-12-05T06:59:05+00:00'
---
The recommended way to [install themes is with _Composer_](/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies#adding-modules "Using Composer to Install Drupal and Manage Dependencies | Develop guide on Drupal.org").

For Drupal 8 or higher core themes are in a directory named `/core/themes` and all contrib or custom themes under a directory named `/themes` (in the webroot). Check the detail content of README.txt in the `/themes` directory for more info.

1. **Download the theme.**  
 You can find themes on [Download](https://www.drupal.org/project/project%5Ftheme?f%5B0%5D=&f%5B1%5D=&f%5B2%5D=drupal%5Fcore%3A7234&f%5B3%5D=sm%5Ffield%5Fproject%5Ftype%3Afull&f%5B4%5D=&f%5B5%5D=&text=&solrsort=iss%5Fproject%5Frelease%5Fusage+desc&op=Search "Theme project | Drupal.org"), as well as some external sites. Make sure the version of the theme matches your version of Drupal.  
 When you first download the theme, it will appear in a compressed file format such as 'tar.gz' or 'zip'. You need to extract the compressed file then you will get a list of files extracted into a folder.
2. **Upload the folder.**  
 FTP/Copy/SCP your files to the desired themes folder in your Drupal installation. For Drupal 8 or higher core themes are in a directory named `/core/themes` and all contrib or custom themes under a directory named `/themes` (in the webroot). If you are running a [m](/node/346385)ulti-site installation multisite installation, you may also put themes in the sites/all/themes directory, and the versions in sites/all/themes will take precedence over versions of the same themes that are here. Alternatively, the sites/your\_site\_name/themes directory pattern may be used to restrict themes to a specific site instance.
3. **Read the directions.**  
 If the theme has an installation file (usually INSTALL.txt and/or README.txt), read it for specific instructions. There are themes that require special treatment to function properly.
4. **Enable and make it the active, default theme.**  
 Go to "Appearance" `(/admin/appearance)` on the main Administration menu of your site. Check the 'Install' to install the theme and use "set as default' to enable the theme for your website. Alternatively, you can use 'Install and set as default' to enable the theme for your website along with theme installation.
5. **Click the 'Save Configuration' button at the bottom.**

If you run into problems, check the themes issue queue and search the forums. If your problem hasn't already been addressed, post a question and someone will try to help you out.