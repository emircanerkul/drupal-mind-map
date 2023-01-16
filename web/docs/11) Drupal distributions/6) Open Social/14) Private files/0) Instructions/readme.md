How to setup to use the private file system for Open Social

To ensure that attachments and images on nodes, comments, posts, profiles and groups in file fields and WYSIWYG are not accessible to unauthorised users you need to enable the module 'social\_file\_private' and make sure you've set up the [Private File System](https://www.drupal.org/docs/8/core/modules/file/overview#content-accessing-private-files) on your server.

_For Open Social sites installed before rc6:_

1. Check if you've set-up the [Private File System](https://www.drupal.org/docs/8/core/modules/file/overview#content-accessing-private-files) on your server.
2. If you've set-up the private file system path the module should have been enabled automatically. All your files will be protected from now on. But since it is important to do this right make sure to follow the rest of the steps. If you did not: make sure to enable social\_file\_private manually after you've set-up the private file system and cleared your cache.
3. Go to admin > reports > status and make sure you don't see any errors or warnings. In addition you should see "Private file system path is set" for requirement "Social Private Files".
4. Check all your files/images uploaded before rc6\. If there is any sensitive content still in the public files directory make sure to move this to the private file directory and change the path in the file\_managed table accordingly.
5. You can verify your uploaded files. These should contain the path `/system/files`

_For Open Social sites installed on rc6 or higher:_

1. Check if you've set-up the [Private File System](https://www.drupal.org/docs/8/core/modules/file/overview#content-accessing-private-files) on your server.
2. Verify you have decided to enable the private file system module during installation.
3. Go to admin > reports > status and make sure you don't see any errors or warnings. In addition you should see "Private file system path is set" for requirement "Social Private Files".
4. You can verify your uploaded files. These should contain the path `/system/files`