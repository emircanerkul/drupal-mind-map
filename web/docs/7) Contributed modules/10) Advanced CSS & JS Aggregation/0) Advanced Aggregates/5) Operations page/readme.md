Located at `admin/config/development/performance/advagg/operations`. This is a collection of commands to control the cache and manage testing of this module. In general this page is useful when troubleshooting some aggregation issues.

* **Aggregation Bypass Cookie:** Toggle The "aggregation bypass cookie" for the current browser. If enabled will disable AdvAgg for the user for the period of time specified. It acts almost the same as adding ?advagg=0 to every URL.
* **Cron Maintenance Tasks:** Remove All Stale Files: Scan all files in the css/js optimized directories and remove old files. See also `Cron Options` on the Configuration Page.

### Drastic Measures

* **Clear All Caches:** Remove all data stored in the advagg cache, and delete all optimized files.
* **Increment Global Counter**: Force the creation of all new files with new names by incrementing a global counter.