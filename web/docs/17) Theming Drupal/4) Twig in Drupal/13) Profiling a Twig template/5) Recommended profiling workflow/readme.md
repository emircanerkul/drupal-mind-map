* **Enable the APC class loader** in settings.php.
* **Create Issue Branch** \- Create a new branch from 8.x to test the patch in question, e.g. `user-1898468-91` and commit the Twig conversion patch in that branch (e.g. `git apply --index user-1898468-91.patch; git commit -m "apply patch"`).
* **Set Drupal Homepage** \- Since the profiling only looks at the homepage of your site, you need to setup your local drupal site to display the appropriate page on the homepage and ensure it is visible to anonymous users. If that's not possible or if you prefer you can edit the URL directly in find-min-web.sh within xhprof-kit.  
   * Set Anonymous role to have all permissions.  
   * Review the Issue in question to determine how you can reproduce the issue on a page on your site.  
   * Set the homepage to the correct url on Site Information (/admin/config/system/site-information) -- or use: `drush cset system.site page.front "path/goes/here"`)  
   * Example: if you’re testing the [user.tpl.php conversion to Twig](https://drupal.org/node/1898468#comment-7426322), allow anonymous users to view user profiles and set the homepage to user/1.

### Run profiling

To continue with the example of [user.tpl.php profiling](https://drupal.org/node/1898468#comment-7426322), we have a `user-1898468-91` branch with the Twig conversion committed to it and the scenario is set up so that anonymous users can view it on the homepage (with Stark theme enabled and a Twig template being rendered somewhere on the page such as a node or a user profile). Once all that is in place:

* Switch to 8.x: `git checkout 8.0.x`
* Run `bbranch`

You should get output like this:

```php
loop time: |0.345511s|51978cc86c728|drupal-perf|8.x|<a href="http://d8prof.dev/xhprof-kit/xhprof/xhprof_html/index.php?source=drupal-perf&url=%2F&run=51978cc86c728&extra=8.x" target="_blank">Profiler output</a>
```

Copy the XHProf run ID from bbranch, e.g. `51978cc86c728`

Run `bbranches 51978cc86c728 user-1898468-91` to compare your current branch (8.x) against the Twig conversion branch. Note that the command is now `bbranches`, not `bbranch`.

Once that finishes running you should have something like this:


```php
=== 8.x..8.x compared (51978cc86c728..51978d2b1f3d1): ct : 33,570|33,570|0|0.0% wt : 345,567|345,166|-401|-0.1% cpu : 315,116|314,178|-938|-0.3% mu : 30,324,000|30,324,000|0|0.0% pmu : 30,433,448|30,433,448|0|0.0% <a href="http://d8prof.dev/xhprof-kit/xhprof/xhprof_html/index.php?source=drupal-perf&url=%2F&run1=51978cc86c728&run2=51978d2b1f3d1&extra=8.x..8.x">Profiler output</a> === 8.x..user-1898468-91 compared (51978cc86c728..51978d4d92dd9): ct : 33,570|33,703|133|0.4% wt : 345,567|345,816|249|0.1% cpu : 315,116|314,995|-121|-0.0% mu : 30,324,000|30,345,720|21,720|0.1% pmu : 30,433,448|30,456,824|23,376|0.1% <a href="http://d8prof.dev/xhprof-kit/xhprof/xhprof_html/index.php?source=drupal-perf&url=%2F&run1=51978cc86c728&run2=51978d4d92dd9&extra=8.x..user-1898468-91">Profiler output</a> 
```

For the first 8.x..8.x comparison we don’t want the wt to fluctuate much at all - that is our baseline comparison to show that the first run (from `bbranch`) is still accurate, because that is what is being used to compare against these two new runs. You may have to go through this process (run bbranch, get run ID, run bbranches with new run ID) a few times to get a low wt fluctuation, we generally want something under +–0.5% but less is better. Don’t waste all day trying to get a 0% fluctuation though :)

### Post results

Once you have a comparison you’re happy with, (and you have an API key from @Fabianx) you can run:

`ubench 51978cc86c728`

Where `51978cc86c728` is the baseline run used for comparing, originally from `bbranch`.

Then you’ll get something like this:


```php
Run 51978cc86c728 uploaded successfully for drupal-perf-cottser. Run 51978d2b1f3d1 uploaded successfully for drupal-perf-cottser. === 8.x..8.x compared (51978cc86c728..51978d2b1f3d1): ct : 33,570|33,570|0|0.0% wt : 345,567|345,166|-401|-0.1% cpu : 315,116|314,178|-938|-0.3% mu : 30,324,000|30,324,000|0|0.0% pmu : 30,433,448|30,433,448|0|0.0% http://www.lionsad.de/xhprof-kit/xhprof/xhprof_html/?run1=51978cc86c728&run2=51978d2b1f3d1&source=drupal-perf-cottser&extra=8.x..8.x Run 51978cc86c728 uploaded successfully for drupal-perf-cottser. Run 51978d4d92dd9 uploaded successfully for drupal-perf-cottser. === 8.x..user-1898468-91 compared (51978cc86c728..51978d4d92dd9): ct : 33,570|33,703|133|0.4% wt : 345,567|345,816|249|0.1% cpu : 315,116|314,995|-121|-0.0% mu : 30,324,000|30,345,720|21,720|0.1% pmu : 30,433,448|30,456,824|23,376|0.1% http://www.lionsad.de/xhprof-kit/xhprof/xhprof_html/?run1=51978cc86c728&run2=51978d4d92dd9&source=drupal-perf-cottser&extra=8.x..user-1898468-91 
```

### What to look for

[![toolbar.module_-_Convert_theme__functions_to_Twig___1898464____Drupal-13.png](/files/toolbar.module_-_Convert_theme__functions_to_Twig___1898464____Drupal-13_0.png)](https://drupal.org/files/toolbar.module%5F-%5FConvert%5Ftheme%5F%5Ffunctions%5Fto%5FTwig%5F%5F%5F1898464%5F%5F%5F%5FDrupal-13%5F0.png)

### Where to go from here

[#1757550: \[Meta\] Convert core theme functions to Twig templates](https://www.drupal.org/project/drupal/issues/1757550 "Status: Closed (fixed)")