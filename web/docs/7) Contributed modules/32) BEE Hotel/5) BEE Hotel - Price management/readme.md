---
url: >-
  https://www.drupal.org/docs/contributed-modules/bee-hotel/bee-hotel-price-management
description: >-
  Real world use cases tell us there is no fixed sale price for hotel Room. A
  price changes on daily base, or more often sometimes. An effective tool to
  manage Hotel Rooms must have an easy, flexible price management. On BEE Hotel
  you can control prices from: Fixed price field (BEE) Price List import (Drupal
  contributed module) Dynamic prices (BEE Hotel hook) Dynamic prices is really
  the most flexible and save solution to implement your own logic to the room
  price.
published_time: '2020-04-12T10:50:18+00:00'
modified_time: '2022-03-23T19:48:45+00:00'
---
Real world use cases tell us there is no fixed sale price for hotel Room. A price changes on daily base, or more often sometimes. An effective tool to manage Hotel Rooms must have an easy, flexible price management.

On BEE Hotel you can control prices from:

* Fixed price field (BEE)
* Price List import (Drupal contributed module)
* Dynamic prices (BEE Hotel hook)

Dynamic prices is really the most flexible and save solution to implement your own logic to the room price. Set up BEE Hotel, past this code inside YOUR\_MODULE and you are ready to go: 

```php
function YOUR_MODULE_bee_hotel_dynamic_price(&$data) {
  $data['amount'] = 1234567;
} 
```