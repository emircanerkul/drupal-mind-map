Sometimes, after successfully installing and running the quick-start demo, you may encounter a frozen page.

The solution is to kill the PHP server and use the `.ht.router.php` instead:

```php
php -S localhost:8888 .ht.router.php
```