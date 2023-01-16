1. Drupal core cron - easiest
2. Drupal contributed cron modules
3. Operating system programs like [crontab](/node/23714), [cPanel](/docs/7/setting-up-cron-for-drupal/configuring-cron-jobs-with-cpanel) \- most reliable
4. External programs EasyCron, Cronless

### Easiest - Enable Drupal cron 

The easiest way is to let Drupal do it for you (which it does by default) using its built-in core "automated cron" system. You can manage "automated cron" via Manage > Configuration > System > Cron (admin/config/system/cron). On a new Drupal installation, this should be on by default which you can check at example.com/admin/modules. The default frequency is every three hours. Cron then triggers by end-users visiting your site, no more frequently than every three hours. Note that for low-traffic sites it can also be desirable to [create a cron job](/node/23714 "Configuring cron jobs using the cron command | Drupal 7 guide on Drupal.org"). If you want to disable the automated cron, change the 'Run cron every' drop down to 'never' (see Disable section on this page).

The automated Drupal cron system works with all operating systems because it doesn't actually involve the operating system's cron daemon. It works by checking at the end of each Drupal request to see when cron last ran, then if it has been too long, processing the cron tasks as part of that request.

#### Downsides of Drupal Cron

The two down-sides are (1) cron tasks only runs when Drupal processes requests; and (2) the 'weight' (processing and memory) of running the cron tasks will be added to some arbitrary unknown page request, which may slow down those requests, and has the potential to exceed memory limits on a complex page or site.

### Disable Drupal cron

For performance reasons, or if you want to ensure that cron can only ever run from an external trigger (not from Drupal), it may be desirable to disable Drupal's automated cron system, in one of three way:

1. Preferred way to disable Drupal's core "automated cron" module by unchecking it at example.com/admin/modules.
2. To temporarily disable cron, set the "Run cron every" value to "Never" (e.g., at Administration > Configuration > System > Cron (example.com/admin/config/system/cron).
3. For advanced reasons, another way to disable cron in Drupal add the following line to your settings.php. Note that this fixes the setting at admin/config/system/cron to "Never", and administrative users cannot override it.

```php
$config['automated_cron.settings']['interval'] = 0;
```

### More reliable - Enable cron using external trigger

The second way (which applies to any version of Drupal) is to [create a cron job](/node/23714 "Configuring cron jobs using the cron command | Drupal 7 guide on Drupal.org") or use some other external (non-Drupal) method of triggering cron tasks, such as an external cron job service like [EasyCron](https://www.easycron.com "Online Cron Service | Webcron - EasyCron.com") or [Cronless](https://cronless.com "Free Cron Job and Monitoring Tools - Cronless") or [cPanel](/docs/7/setting-up-cron-for-drupal/configuring-cron-jobs-with-cpanel). This is the more reliable of the two methods (because it will always run on schedule), and it uses fewer resources (because the cron processing is not added to a page request). Therefore this is generally the **preferred way to run cron** when you have the choice. Note that if you create a cron job, you may want to disable Drupal's automated cron system entirely (see Disable section on this page).

For the beginner it might seem daunting to [configure cron jobs using the cron command](/node/23714), but here's an example for you to follow. For example, you can immediately execute cron from the Linux command prompt with two commands. Use wget or lynx to access cron, depending on which command your operating system makes available, usually _**wget**_ already exists.

* **wget -O - -q -t 1** <https://yourdrupalsite.tld/cron/Fe0lip-huaTyeUBYlCXbsc-QI-dw> **\> /dev/null**
* **lynx** <https://yourdrupalsite.tld/cron/Fe0lip-huaTyeUBYlCXbsc-QI-dw>

Then, to make sure this is working, check your Drupal status report which shows cron run time. If this works for you and you want to try editing your Linux crontab file, here's a quick example of hourly cron.

1. At Linux command prompt, type crontab –e
2. Go to end then press Insert key. Then type or paste below
3. 1 \* \* \* \* **wget -O - -q -t 1** <https://yourdrupalsite.tld/cron/Fe0lip-huaTyeUBYlCXbsc-QI-dw> **\> /dev/null**
4. ESC to exit inserting. Shift-z shift-z (twice) to save and exit or Ctrl-z to exit without saving.
5. Then, to make sure this is working, check your Drupal status report which shows cron run time.

### Enable cron using Drupal contributed modules

If this example and that page daunted you, test Drupal's contributed modules (like [Ultimate Cron](/docs/7/modules/ultimate-cron).)