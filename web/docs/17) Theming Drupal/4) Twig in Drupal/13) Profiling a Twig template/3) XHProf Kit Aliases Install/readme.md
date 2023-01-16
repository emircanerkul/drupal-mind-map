Save the [xhprof-kit.sh](https://gist.github.com/Cottser/5588734) to your home folder at `~/bin/xhprof-kit.sh`

Make sure it's executable:  
`chmod u+x ~/bin/xhprof-kit.sh`

_If you already have an API key:_  
Update the API Key for ubench (Optional if you want to upload the results)  
`` ./xhprof-kit/upload-bench.sh <strong>"APIKEY" API-IDENTIFIER</strong> $1 `git rev-parse --abbrev-ref HEAD` ``

Then finally source your script in your \~/.bash-profile by adding:

`source ~/bin/xhprof-kit.sh` to the bottom.

And open a new terminal window and test out `bbranch`.

### Running Notes

* Disable XDebug (don't load it at all), because it makes it slower and results are slightly less reliable ([source](http://www.frankmayer.me/blog/item/12-xdebug-disabling-vs-not-loading-it-at-all)).
* Turn off most programs that may fluctuate the CPU or RAM.
* One way to do this on a mac is to hold down the shift key while you login in order to disable login items.
* Try not to use Chrome while profiling.
* Drupal needs to be on the default site for cache clearing to work (so don't use multi-site for profiling).

### Tips and Tricks

* Check that your ct (function calls) between the 8.x core and twig branch are different.
* Enable Twig debug to make sure you are using Twig on the branch for your scenario. (Add the line `$settings['twig_debug'] = TRUE;` to settings.php and view source for debug output). But be sure to **disable twig\_debug again before gathering benchmarks**.
* Disable the render cache: add `$settings['cache']['bins']['render'] = 'cache.backend.null';` to settings.php.
* Currently, the previous two steps are in the file sites/example.settings.local.php .
* Run bbranch a few times to warm up the tests and the CPU seems to provide more accurate results on the baseline vs 8.x
* When switching between branches and when enabling/disabling Twig debugging, use `$ drush cr` to clear caches so that the changes will take effect.