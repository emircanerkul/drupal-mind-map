---
url: >-
  https://www.drupal.org/docs/contributed-modules/bee-hotel/bee-hotel-commerce-module-configuration-enviroment
description: >-
  from 2.4.x-dev, most of this installation process is automated by Drupal
  Configuration API Find here how to configure the Commerce module for the BEE
  Hotel Module. Several step across more pages. Get your tea mug and give
  yourself time.
published_time: '2020-04-12T13:30:40+00:00'
modified_time: '2021-06-18T12:00:08+00:00'
---
> from [2.4.x-dev](https://www.drupal.org/project/bee%5Fhotel/releases/2.4.x-dev), most of this installation process is automated by Drupal Configuration API 

Find here how to configure the Commerce module for the BEE Hotel Module.

Several step across more pages. Get your tea mug and give yourself time.

#### 

#### 

#### Set up your Hotel (as Store)

> /store/add/onlines

#### Add order item type

> /admin/commerce/config/order-item-types
> 
> ![](https://www.drupal.org/files/BEE_order_Types.jpg)

#### Add Check-in / Check-out dates to the order item

> /admin/commerce/config/order-item-types/bee/edit/fields/add-field

![](https://www.drupal.org/files/check_in_date_for__order_item.jpg)

#### Check Order Item BEE Type Form display

Be sure "Created", "Booking" and "Node" fields at /admin/commerce/config/order-item-types/bee/edit/form-display are disabled. (<https://www.drupal.org/project/bee/issues/3191011>)

![](https://www.drupal.org/files/disabled_fields_bee_OI.png)

#### Create attribute "Guests"

In the BEE Hotel environment, we handle Guests number as Product Attribute

> /admin/commerce/product-attributes/add
> 
> ![Commerce product attributes](https://www.drupal.org/files/guest_product_attribute.jpg)

#### Create a "Room" product type

> /admin/commerce/config/product-types

Depending the setup flow, you may already have the "Product variation type" options. Select "BEE"

![Add "Room" product type](https://www.drupal.org/files/add_room.png)  
add Room product type  

#### Create a Guest Product Type variation

> /admin/commerce/config/product-variation-types/room/edit

![](https://www.drupal.org/files/Product%20variation%20types.jpg)

#### Create a product

> /product/PID/variations
> 
> Note: bee\_hotel requires number of Guest as third position in SKU. UG2 means: 2 guests for the room "UNO"

![](https://www.drupal.org/files/bee_commerce_product_variations.jpg)

#### Create the "Rooms Booking" Flow

> /admin/commerce/config/checkout-flows/add

![](https://www.drupal.org/files/create_room_booking_flow.jpg)

#### Create the "Rooms Booking" Order type 

with checkout flow: rooms booking

![](https://www.drupal.org/files/order%20type%20rooms%20booking.png)

#### Create a Room item for type of order

> /admin/commerce/config/order-item-types/add

![](https://www.drupal.org/files/order_item_type.jpg)

#### Add a payment gateway

> /admin/commerce/config/payment-gateways/add

![](https://www.drupal.org/files/EditTestPayment.jpg)