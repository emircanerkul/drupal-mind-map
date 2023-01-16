The BigCommerce module provides it's own `/checkout` page. When a user clicks to checkout from their cart they are taken to BigCommerce's embedded checkout. Your BigCommerce store's checkout form will be embedded (via iframe) into your Drupal checkout page. This keeps customers on your Drupal site without the need for changing domains to check out. An SSL certificate is required for your Drupal site for this to work.

All payments are stored on your BigCommerce instance and not the Drupal site. Order management should be done on BigCommerce.

The BigCommerce module conflicts with the commerce\_checkout module and the two modules can not be installed at the same time.

Carts are synchronised between Drupal and BigCommerce.

Checkout is completed entirely on BigCommerce. When the checkout is finalised in BigCommerce the order is updated to placed in Drupal.