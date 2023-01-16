Located at `admin/config/development/performance/advagg/mod`.

### JS

* **Enable preprocess on all JS:** Enables optimization for all JavaScript files. _Warning:_ this may not be compatible with all mod added files. In fact, it is incompatible with CKEditor JavaScript and specifically excludes it to prevent problems. \[Default: Disabled\]
* **Remove console logging from JS Files:** Removes any calls to console.log() _Warning:_ this is experimental. Will decrease file size and may improve performance. \[Default: Disabled\]
* **Optimize JavaScript Ordering:** Re-order the JavaScript to improve aggregation. If you're not using aggregation, will have minimal effect.  
   * **Move all external scripts to the top of the execution order:** Move external scripts to the be loaded first. \[Default: Disabled\]  
   * **Move all browser conditional JavaScript to the bottom of the group:** As browser conditional scripts are usually the last needed, this often provides better front-end performance. \[Default: Disabled\]
* **Adjust JavaScript Location and Execution:** Mostly safe but may cause serious issues depending on your specific site configuration. Due to changes in Drupal 8 these options are mostly irrelevant but may still have some small effect.  
   * **Deferred JavaScript Execution:** Add the defer tag to all or only local scripts. \[Default: Disabled\]  
   * **Experimental settings:**  
         * **Asynchronous JavaScript Execution:** Add the async tag to all JavaScript. _Warning:_ this may cause issues! \[Default: Disabled\]  
         * **Group Async JavaScript:** Group any Async Javascript together. May lead to better aggregates if only some of your scripts are being loaded asynchronously otherwise irrelevant. \[Default: Disabled\]

### CSS

* **Enable preprocess on all CSS:** Enables optimization for all CSS files. _Warning:_ this may not be compatible with all mod added files, although there are no known cases of it causing problems at this time. \[Default: Disabled\]
* **Optimize CSS Ordering:** Re-order the CSS to improve aggregation. If you're not using aggregation, will have minimal effect.  
   * **Move all external CSS to the top of the execution order:** Move external CSS to the be loaded first. \[Default: Disabled\]  
   * **Move all browser conditional CSS to the bottom of the group:** As browser conditional CSS are usually applied last so this often provides better front-end performance. \[Default: Disabled\]
* **Adjust CSS Location and Execution:** _Warning:_ may cause serious issues depending on your specific site configuration. Unlikely to see any improvement if using HTTP 2 but may find some if using HTTP 1.x.  
   * **Deferred CSS Execution: Use JS to Load CSS:** Attempt optimized CSS delivery using JavaScript. \[Default: Disabled\]  
   * **Use JS to load CSS in admin theme:** Apply JS based CSS loading to the admin theme as well. \[Default: Disabled\]  
   * **How to include the JS loading code:** Method of including the JS to load the CSS. \[Default: Inline\]