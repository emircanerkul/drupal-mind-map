When you first install the module, you will need to configure your system:

1. Go to _Configuration_ \-> _System_ \-> _Web Page Archive_.  
![Screenshot showing how to navigate to Configuration -> System -> Web Page Archive](https://www.drupal.org/files/WPA%20Overview.png)
2. Click on the _Settings_ tab.  
![Screenshot illustrating where the Settings tab is located](https://www.drupal.org/files/WPA%20Settings.png)
3. Under _System Settings_ specify the full path to the NodeJS and NPM.  
![Screenshot showing example node configuration](https://www.drupal.org/files/Node%20Configuration.png)
4. Under _@axe-core/cli - Accessibility Scanner Settings_ \-> _System Settings_:  
![Screenshot showing example Axe System settings](https://www.drupal.org/files/Axe%20System%20Settings.png)  
   * Set Path to _@axe-core/cli_ to the axe binary on your system  
   * It is _highly recommended_ that you keep the "Verify binary checksum before executing?" checked. This means if that binary every got compromised, Drupal will not attempt to execute it. However, if you do this, you must manually set your expected checksum here. To get the current checksum you can run the following command on your system:  
    md5 /path/to/axe  
   Alternatively, you can save the settings and come back to this screen and Drupal will tell you what the current checksum is the next time the page loads.  
   * If you did not install axe globally, you will need to set the node\_modules path to the parent directory of the _node\_modules_ directory. So for example, if your _node\_modules_ directory is located at _/path/to/node\_modules_, set this value to _/path/to_.
5. Under @axe-core/cli - Accessibility Scanner Settings _\-> Default Values_ you can set your default preferences, including which accessibility guidelines you want to adhere to and which CSS selectors either what to include/exclude by default. These can get overridden on a per-job basis, but this will help setup new jobs more quickly.  
![Screenshot showing some example default rules](https://www.drupal.org/files/Axe%20Default%20Rules.png)