1. Create your `authsources.php` file using the available file in the `config-templates `directory:  
`cp vendor/simplesamlphp/simplesamlphp/config-templates/authsources.php vendor/simplesamlphp/simplesamlphp/config/authsources.php`
2. Open the `authsources.php` you just created and add the following line at the very bottom of the file:  
`$config['default-sp']['entityID'] = '[UNIQUE-ID-OFTEN-A-DOMAIN-NAME]';`  
**Note**: If you are using a git repository for a Pantheon application, run the following command:  
```php  
git add . && git commit -am "adding simplesamlphp and dependencies" && git push  
```