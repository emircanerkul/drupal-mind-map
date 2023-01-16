1. Familiarize yourself with [creating capture jobs in web page archive](https://www.drupal.org/docs/8/modules/web-page-archive/getting-started-with-the-web-page-archive-module/setting-up-capture). When you get to the _Configuring Capture Utilities_ section, specify _@axe-core/cli - Accessibility Scanner_ and then click the _Add_ button.  
![Screenshot showing how to add capture utility to job](https://www.drupal.org/files/Add%20Capture%20Utility.png)
2. Configure the job according to your accessibility requirements.![Screenshot illustrating sample capture utility configuration](https://www.drupal.org/files/Edit%20Capture%20Utility.png)  
   * For reference, please review the [axe tool's rule descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md) to know which rules are included in each guideline.  
   * It is specifically important to realize that stricter rulesets don't inherit their less-strict counterparts.  
   * For example, if you want WCAG 2.1 AA full compliance, if you only select the _WCAG 2.1 Level AA_ guideline,it will not check for any violations against WCAG 2.1A, WCAG 2A or WCAG 2AA. It only will check for violations of rules that are tagged with _wcag21aa_. Instead you should include all four guidelines.
3. Next learn about [running capture jobs on web page archive](https://www.drupal.org/docs/8/modules/web-page-archive/getting-started-with-the-web-page-archive-module/running-capture).
4. For information how to analyze reports:  
   * [Analyzing one time reports](https://www.drupal.org/docs/contributed-modules/accessibility-scanner/one-time-reports)  
   * [Generating and analyzing historical reports](https://www.drupal.org/docs/contributed-modules/accessibility-scanner/historical-reporting)