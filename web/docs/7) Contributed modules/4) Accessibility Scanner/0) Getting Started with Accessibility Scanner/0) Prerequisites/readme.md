### System Dependencies

To use the accessibility scanner module, you must install the following dependencies:

* **[Web Page Archive](https://www.drupal.org/project/web%5Fpage%5Farchive) Drupal module**  
 While the archiving and visual regression features of this module aren't needed for accessibility scanning, it does provide some basic _capture and compare_ functionality that made for a good framework to build upon.
* [**npm/node 14+**](https://nodejs.org/en/)  
 Since the accessibility scanner module relies on a node-based third-party tool set, you must have node.js/npm installed somewhere on the server, and it must be accessible via the same user your web server runs as. Please note, there are security risks with allowing the web server access node/npm, which is why it is _highly recommended_ that you don't install this module on the same system you run your other Drupal sites on.
* **[@axe-core/cli](https://github.com/dequelabs/axe-core-npm) node module**  
 The @axe-core/cli node module should be installed somewhere on your system.

### Permissions

To follow along with this guide, you will need the following permissions:

* _administer web page archive_
* _view web page archive results_
* _process axe cli historical results_
* _view axe cli historical results_