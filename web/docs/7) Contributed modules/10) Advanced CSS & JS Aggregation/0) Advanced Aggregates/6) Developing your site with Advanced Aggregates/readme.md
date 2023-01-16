With the new architecture, Advanced Aggregates is much more intelligent when in development. It will detect changed files, however, depending on settings it may not be instant. Also, repeatedly optimizing a file for every minor change when doing stylesheets or JavaScript isn't the most efficient option. So, what can you do? If just one site instance (questionable but budgets etc), you may want to just adjust the configuration to refresh caches a bit faster or disable AdvAgg temporarily while doing heavy development.

That will work but, there are a few other methods that will work better for some work flows especially if doing config import and export.

### Temporarily Disabling AdvAgg

1. Via a settings.local.php. Often developers will disable core asset aggregation with config overrides or enable various core development features. You can do the same to disable AdvAgg. For example some users use the following lines:  
```php  
// Disable Core CSS and JS aggregation. $config['system.performance']['css']['preprocess'] = FALSE; $config['system.performance']['js']['preprocess'] = FALSE; // Disable AdvAgg. $config['advagg.settings']['enabled'] = FALSE;  
```
2. Via main config page, un-check `Enable Advanced Aggregates`. This will take effect right away for all users.
3. Via the AdvAgg url parameter. Not as reliable depending on various system caches. To use, just append `?advagg=0` to your url.
4. Using the browser cookie function from the Operations page. Similar to the url parameter this isn't as good as the first 2 options.