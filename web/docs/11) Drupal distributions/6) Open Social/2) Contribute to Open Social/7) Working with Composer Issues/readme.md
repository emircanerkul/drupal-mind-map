Cloning the fork you made locally won't work when adjusting composer dependencies. For those changes you will need to tell the main project (and thus the main composer.json file) to use your fork. Follow these steps:

1. Create a fork of the project into your Github account.
2. Make your change and commit it; you can use the GitHub editor for convenience.
3. Remove any existing open social profile from profiles/contrib/open\_social
4. Add the following to the project composer.json:  
```php  
{  
    "type": "package",  
    "package": {  
        "name": "<your_account_name>/open_social",  
        "version": "master",  
        "type": "drupal-profile",  
        "source": {  
            "url": "https://github.com/<your_account_name>/open_social.git",  
            "type": "git",  
            "reference": "master"  
        }  
    }  
}  
```
5. Also in the project composer.json file, replace "goalgorilla/open\_social" with a reference to your project. Change the revision accordingly.  
```php  
"<your_account_name>/open_social": "11.0.x-dev",  
```
6. Delete composer.lock.
7. Run \`composer update.\`

You can also register your fork at packagist.org but it's considered bad form to do that since this is just for testing and not for widespread use.

We would appreciate your help! Happy contributing :)