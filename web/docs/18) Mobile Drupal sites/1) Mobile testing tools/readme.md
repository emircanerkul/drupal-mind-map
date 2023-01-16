---
url: https://www.drupal.org/docs/mobile-guide/mobile-testing-tools
description: >-
  Proxy testing By placing a proxy server between the mobile device and the
  webserver, one can measure the performance of a mobile device. Blaze.io
  provides a free proxy-based measuring tool called Mobitest. Remote debugging
  The open-source Weinre project can be used to set up a server to proxy and
  debug your mobile device.
published_time: '2016-09-22T01:36:16+00:00'
modified_time: '2016-12-20T12:59:55+00:00'
---
### Proxy testing

By placing a proxy server between the mobile device and the webserver, one can measure the performance of a mobile device.

Blaze.io provides a free proxy-based measuring tool called [Mobitest](http://mobitest.akamai.com/m/index.cgi).

### Remote debugging

The open-source Weinre project can be used to set up a server to proxy and debug your mobile device. <http://people.apache.org/~pmuellr/weinre/>

PhoneGap has set up a free Weinre server at <http://debug.phonegap.com/>

### Mobile browser testing

#### Mobile Safari (iOS)

To test your mobile web site on an iPhone, iPad, or iPod Touch, you can download Apple's free XCode integrated development environment from the Mac App Store. XCode comes with the iOS Simulator, which is a simulated version of an iPhone or an iPad that you can use with varying versions of iOS and device resolutions (for instance, non-Retina iPhone 3GS running iOS 4.3, or Retina iPad running iOS 5.1\. There are two drawbacks - XCode is Mac only, and XCode is a very large (multi-gigabyte) download.

#### Android Web Browser

The easiest way to test the Android web browser is to download the [Android SDK](http://developer.android.com/sdk/index.html) \- the Android SDK is available for Windows, Mac, and Linux. You will need to configure each version of Android and the device screen resolution you intend to test through the Android SDK - see the [Installing the Android SDK](http://developer.android.com/sdk/installing.html) page for additional details.

#### Opera

Versions of Opera Mini are available for download on many smart phones at <http://www.opera.com/mobile/download/versions/. An> emulator of Opera Mobile is available to download for desktop computers at <http://www.opera.com/developer/tools/mobile/. A> simulator of Opera Mini is available for desktop computers at <http://www.opera.com/developer/tools/mini/>

#### Adobe Shadow

[Adobe Shadow](http://labs.adobe.com/technologies/shadow/) is a combination of a ChromeExtension an installed Application and a iOS or Android App. When everything is setup up (App connected to ChromeExtension). The Browser in the App will open directly the same site as you are visiting right now on your Computer in Chrome. And this with multiple Devices at the same time. It also uses Weinre for remote debugging. Its not super fast and still Beta, but it works quite nice.

#### iWebinspector

[iWebinspector](http://www.mobilexweb.com/blog/debugging-web-safari-phonegap-iphone-ipad) is based on some PrivateAPIs which were found in iOS. This allows to remote debug the MobileSafari from your Computer's Browser. Because it is an private API you can run it only in the iOS Simulator on your computer installed with XCode. But it is very fast and works better as Weinre.

#### BrowserStack

The [BrowserStack](http://www.browserstack.com/) service allows testing websites in a lot of different browsers and mobile devices. It starts a VM and opens the page in the different environments.

### Media query viewport testing

The easiest way to test multiple viewport sizes simultaneously is to setup a “simple page with a bunch of iframes”. [Lennart Schoors’ “Simple Responsive Design Test Page”](http://bricss.net/post/16538278376/simple-responsive-design-test-page) shows the HTML needed to accomplish this. However, Benjamin Keen provides an even easier way by allowing you to create a [custom bookmarklet to test responsive designs](http://www.benjaminkeen.com/misc/bricss/).

* Sample HTML tester: <http://bricss.net/post/16538278376/simple-responsive-design-test-page>
* Custom bookmarklet: <http://www.benjaminkeen.com/misc/bricss/>

### HTML5 Outline

You can test the validity of your HTML5 outline by using a Chrome extension or JavaScript bookmarklet available at <http://code.google.com/p/h5o/> An [extension for the Opera browser](https://addons.opera.com/en/addons/extensions/details/html5-outliner/1.0/) is also available.

### Google Page Speed for Mobile

The [Google Page Speed Online](https://developers.google.com/pagespeed/) web performance testing tool gives performance scores for both desktop and mobile performance. You also get suggestions for improving your Drupal site's front end performance for both desktop and mobile.