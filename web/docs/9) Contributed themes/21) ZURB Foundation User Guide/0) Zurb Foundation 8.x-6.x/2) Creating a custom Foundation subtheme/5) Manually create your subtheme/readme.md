Don't want to use drush? [Or do you have Drush 9 installed?](https://www.drupal.org/project/zurb%5Ffoundation/issues/2920472) We have a STARTER folder that you can create your subtheme with.

For the sake of this example, let's call your subtheme "My Custom Theme" (of course, replace "My Custom Theme" with whatever you like).

1. Expand the _themes/contrib/zurb\_foundation_ folder.
2. Copy the STARTER folder into _themes/custom_ (create the custom folder if it doesn't exist yet) and rename it, using only letters and number. No spaces. This is the machine name. eg. mycustomtheme
3. Expand your new subtheme folder.
4. Update the **STARTER.info.yml.txt**  
   1. Open the STARTER.info.yml.txt and use a find-and-replace to replace STARTER with your subtheme machine name eg. mycustomtheme  
   2. Rename the STARTER.info.yml.txt with your subtheme's machine name **AND remove the .txt extension**. eg. mycustomtheme.info.yml
5. Update **STARTER.libraries.yml**  
   1. Open the STARTER.libraries.yml and use a find-and-replace to replace STARTER with your subtheme machine name eg. mycustomtheme  
   2. Rename STARTER.libraries.yml eg. mycustomtheme.libraries.yml
6. Update the **STARTER.theme**  
   1. Open the STARTER.theme and use a find-and-replace to replace STARTER with your subtheme machine name eg. mycustomtheme  
   2. Rename STARTER.theme eg. mycustomtheme.theme
7. Open the **package.** **json** and update line 2; replace STARTER with your subtheme machine name eg. mycustomtheme
8. Open the **theme-settings.php** and use a find-and-replace to replace STARTER with your subtheme machine name eg. mycustomtheme
9. Expand the _css_ _/_ folder and rename **STARTER.css** eg. mycustomtheme.css
10. Expand the _js/_ folder and rename **STARTER.js** eg. mycustomtheme.js
11. Expand the _scss/_ folder and rename **STARTER.scss** eg. mycustomtheme.scss

As a final check, if you can search your subtheme folder for any instances of STARTER (search uppercase only), and if you've missed any, update them to your subtheme's machine name.

<!-- note-warning -->
> WARNING: Have you removed the .txt extension from the&nbsp;.info.yml.txt file? This is an important step. If you don't do this, then your subtheme will NOT appear in the /Appearances tab in your Drupal admin and you won't be able to enable your custom subtheme.