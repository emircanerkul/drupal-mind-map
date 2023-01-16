[Detection tutorial](http://www.html5rocks.com/en/tutorials/detection)

### Terms

* Browser detection: determining the identity of the user agent (web browser) being used to visit that page.
* Device detection: determining the hardware that user agent is running on.
* Feature detection: determining the capabilities of the user agent in question
* Capability detection: combining aspects of feature, device and bandwidth detection, to test the overall capabilities of the viewport in question.

### Current Preferred Approach

Feature detection is currently considered best practice and most [Future Friendly](http://futurefriend.ly/)

Browser detection is less used due to browsers being able to “pretend” to be another browser by editing their User Agent string.

Device detection becomes unmanageable as the number of devices grows.

The features of the viewports (what it can actually do) are more important for adjusting the display of information than the name of the viewport of the platform it runs on.

### Solutions

* [Modernizr](http://www.modernizr.com/) combines feature detection with conditional resource loading.
* [Categorizr](http://www.brettjankord.com/2012/01/16/categorizr-a-modern-device-detection-script/) – A server-side device detection script
* [Agent IQ](http://www.agent-iq.com/) \- A server-side device detection script
* [Detector](http://detector.dmolsen.com/) \- A server-side device detection script
* [Mobile Tools](https://www.drupal.org/project/mobile%5Ftools), to assist in making adjustments to your site based on the visitor's device
* [Mobile Switch](https://www.drupal.org/project/mobile%5Fswitch)
* [Mobile Theme](https://www.drupal.org/project/mobile%5Ftheme)