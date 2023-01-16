One choice to be able to configure Bulma is to use the  
[Libraries provider](https://www.drupal.org/project/libraries%5Fprovider) module.  
After installing the module and configuring  
[asset packagist](https://asset-packagist.orocrm.com) (so the  
Bulma libraries gets installed at `/web/libraries/bulma` from the root of the project)  
The actual library can be required with the following command.

```php
composer require npm-asset/bulma
```

After that the libraries provider UI will have the option of using the local version.

When managing a Drupal theme that uses a SASS library and provides [the list of available variables to modify](https://git.drupalcode.org/project/drulma/tree/8.x-1.x/libraries%5Fprovider), Libraries Provider can compile the SASS files using the [sassphp](https://github.com/absalomedia/sassphp) extension.

Once the requirements are fulfilled the UI of Libraries Provider will give the option to set new values for the SASS variables defined in Bulma overriding the defaults.