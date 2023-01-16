Apple's devices run the iOS operating system, and native apps running on iOS are generally written in Objective-C or Swift. You will need a Mac for iOS development that is capable of running Apple's XCode IDE. Connecting to a Drupal site running the Services module is very straightforward, especially with one of two HTTP libraries:

* [**AFNetworking**](https://github.com/AFNetworking/AFNetworking)
* [**ASIHTTPRequest**](https://github.com/pokeb/asi-http-request)
* [**Alamofire(Swift)**](https://github.com/Alamofire/Alamofire)

[Waterwheel Swift](https://github.com/kylebrowning/drupal-ios-sdk) provides a layer of abstraction on top of AlamoFire for working with Drupal nodes, files, users, and views. It works with iOS, macOS, tvOS and watchOS. Also, provides default view implementations to get you started quickly.

Things to consider when developing a native RESTful iOS app are caching strategies, using asynchronous methods to download data and then refreshing data as downloads complete, pre-fetching data on application load, and managing network timeout issues.

For more information about developing native mobile apps for the iPhone or iPad:

Links for these projects:

* [Waterwheel Swift](https://github.com/kylebrowning/drupal-ios-sdk) \- provides classes to natively connect iOS, macOS, tvOS, and watchOS applications to Drupal 7 and 8.
* [Drupal 8 iOS SDK](https://github.com/lemberg/d8iossdk) \- SDK and sample app to connect native iOS app with D8
* [Example iOS app for Drupal 8 ](https://github.com/vivekvpandya/TipsAndTricksAFNetworkingDrupal)\- Very simple iOS example app that uses AFNetworking 2.x and works on generic Drupal 8 iOS SDK based on this app is going on. To join this development please contact [Vivek Pandya](mailto:vivekvpandya@gmail.com) or [Jeff Linwood](https://www.drupal.org/user/793944/contact).

Other Examples/Projects:

* DrupalRESTKit: <https://github.com/vivekvpandya/DrupalRESTKit>
* Tips&Tricks AFNetworking: <https://github.com/vivekvpandya/TipsAndTricksAFNetworkingDrupal>
* Tips&Tricks NSURLSessionAPI: <https://github.com/vivekvpandya/TipsAndTricksCFNetworkingDrupal>
* Demo: <https://www.youtube.com/watch?v=iny71Kwgn%5FI>