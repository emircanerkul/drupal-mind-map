---
url: >-
  https://www.drupal.org/docs/contributed-modules/accessibility-scanner/historical-reporting
description: >-
  Once you've captured multiple runs for the same job, you can start doing
  historical trending of your accessibility results. Click the "View Historical
  Report" button at the top of the Job overview page. The first time you do
  this, you will need to process the results. Date range - The dates of the runs
  you want to process. Since results take a while to process, you may want to
  focus on a more narrow time window. Skip Interval - If you perform frequent
  scans (e.g. daily), you may find it useful to skip some of the results when
  processing historical reports.
published_time: '2021-09-23T17:24:32+00:00'
modified_time: '2021-09-23T18:51:48+00:00'
---
Once you've captured multiple runs for the same job, you can start doing historical trending of your accessibility results. 

1. Click the "View Historical Report" button at the top of the Job overview page.  
![Screenshot showing job overview page](https://www.drupal.org/files/Job%20Overview.png)
2. The first time you do this, you will need to process the results.  
![Screenshot of the process data form](https://www.drupal.org/files/Process%20results.png)  
   * **Date range** \- The dates of the runs you want to process. Since results take a while to process, you may want to focus on a more narrow time window.  
   * **Skip Interval** \- If you perform frequent scans (e.g. daily), you may find it useful to skip some of the results when processing historical reports.  
         * This will allow you specify longer time windows in the date range above but not have to process every single data point, if your goal is to see general trending over long periods of time.  
         * This value allows you to specify how many runs you wish to skip in between each data point.  
         * Regardless of skip intervals, the first and last run will always be included in the report.  
         * For example, if you have 10 runs in total for a particular job, and you set your skip interval to 3, the historical report will include runs 1, 5, 9 and 10.
3. The historical report is broken into sections:  
   * **Reprocess Data button**  
    This can be used anytime you want to reprocess the results as it won't happen automatically after new scans occur.  
   ![Image of the reprocess button](https://www.drupal.org/files/Reprocess%20Data.png)  
   * **Result filtering**  
         * **Filter by URL**  
         **![Screenshot showing filtering by URL box](https://www.drupal.org/files/Filter%20By%20URL%201.png)![Screenshot showing filtering by URL with autocomplete results](https://www.drupal.org/files/Filter%20by%20URL%202.png)**  
          By default the report shows an aggregation of all scanned URLs overtime. However you can filter by URL if you want to investigate a specific URL. This uses an autocomplete box, so just start typing until you can drill down the URL you're looking for.  
         * **Filter by Accessibility Standard**  
         **![Screenshot showing filtering by standard](https://www.drupal.org/files/Filter%20by%20Standard.png)**  
          By default the report shows all accessibility standards that apply to a particular job. However you can filter down by specific standards, if you wish for more granular results.  
         * **Filter by Pass/Fail Status**  
         **![Screenshot showing filtering by status](https://www.drupal.org/files/Filter%20by%20Status.png)**  
          By default the report shows passing and failing URLs in the Passing/Failing URLs chart. However, if you are only interested passing URLs or failing URLs overtime, you can toggle the respective checkbox to turn it off in the chart.  
         Note that due to the nature of what this filter does, it only shows up when investigating all scanned URLs, not specific URLs.  
   * **Report Overview**  
   **![Screenshot showing report overview](https://www.drupal.org/files/Report%20Overview.png)**  
         * **Date Range**  
          Shows the date range for the report results  
         * **Standards**  
          Shows a list of the standards used in the report  
         * **URLs included in the report**  
          When not filtering by URL, this will show a list of all of the URLs in the respective scan.  
         Note that if more than 50 URLs are present in a job, it will be collapsed and you must click a button to expand the list.  
   * **Pass/Failing URL Chart**  
   **![Screenshot showing passing/failing URL chart](https://www.drupal.org/files/Passing%3AFailing%20URLs.png)**  
    This shows a total number of URLs that are passing/failing specific rules in the respective standards over time.  
         * It is specifically important to realize that stricter rulesets don't inherit their less-strict counterparts.  
         * For example, if you want WCAG 2.1 AA full compliance, if you only look at the the _WCAG 2.1 Level AA_ guideline,it will not include for any violations against WCAG 2.1A, WCAG 2A or WCAG 2AA guidelines. It only will check for violations of rules that are tagged with _wcag21aa_. Instead you should include investigate results across all four guidelines.  
   * **Distinct Rule Violation Chart**  
   **![Screenshot showing distinct rule violations chart](https://www.drupal.org/files/Distinct%20Rule%20Violations.png)**  
    This shows a total number of distinct rule violations over time.  
         * As it's focused only on distinct rules, this means if the same rule is violated multiple times (e.g., multiple images are missing alt tags), it will only count once.  
   * **Total Violations Chart**  
   ![Screenshot showing total violations chart](https://www.drupal.org/files/Total%20Violations.png)  
    This shows a total number of cumulative rule violations over time.  
         * As it's the cumulative, this means if the same rule is violated multiple times (e.g., multiple images are missing alt tags), it will count for every single instance that is missing the alt tag.  
   * **Distinct Rules Needing Review**  
   **![Screenshot showing distinct needs review chart](https://www.drupal.org/files/Distinct%20Needs%20Review.png)**  
    This shows a total number of distinct rules needing review over time.  
         * As it's focused only on distinct rules, this means if the same rule is in question multiple times (e.g., multiple videos not containing captions), it will only count once.  
   * **Total Elements Needing Review**  
   **![Screenshot showing total needs review chart](https://www.drupal.org/files/Total%20Needs%20Review.png)**  
    This shows a total number of cumulative elements needing review over time.  
         * As it's the cumulative, this means if the same rule is in question multiple times (e.g., multiple videos not containing captions), it will count for every single instance that is missing the caption.