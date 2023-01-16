1. [Preamble ](#main%5Fstart)
2. [Download Zen](#dl%5Fzen)
3. [Un-compress/De-archive the Download](#un%5Fzip)
4. [Copy 'STARTERKIT' folder to outside of 'zen' folder](#copy%5Fstarterkit)
5. [Rename STARTERKIT folder to subtheme 'machine name'](#rename%5Fstarterkit)
6. [Rename 19 filenames containing 'STARTERKIT' using 'machine name'](#filename%5Fchng)
7. [Locate all files containing 'STARTERKIT' in their code](#locate)
8. [Drag located files into a programming text editor, and "Find/Replace" 'STARTERKIT' with 'machine name' in all open files](#replace%5Fcode)
9. [Give subtheme human-readable name](#sub%5Fhuman)
10. [Forget about 'description' ??](#forget%5Fdesc)
11. [Put 'zen' and subtheme folder into 'themes' folder.](#load%5Fzen)
12. [Login as administrator](#login%5Fsite)
13. [Install module 'Components Libraries'](#install%5Fcl)
14. [Enable module 'Components Libraries'](#enable%5Fcl)
15. [Go to your site's Appearance page](#app%5Fpg)
16. [Set subtheme as 'default' site theme](#default%5Ftheme)
17. [Future Changes to Your Subtheme](#future)
18. Compiling with Gulp

 | [Back to Contents' beginning ⤴](#contents%5F) |

 | [Back to Contents at this point ⤴](#contents%5Fdl%5Fzen) | 

 | [Back to Contents at this point ⤴](#contents%5Fun%5Fzip) | 

 | [Back to Contents at this point ⤴](#contents%5Fcopy%5Fstarterkit) | 

 | [Back to Contents at this point ⤴](#contents%5Frename%5Fstarterkit) | 

 | [Back to Contents at this point ⤴](#contents%5Ffilename%5Fchng) | 

 | [Back to Contents at this point ⤴](#contents%5Flocate) | 

 | [Back to Contents at this point ⤴](#contents%5Freplace%5Fcode) | 

 | [Back to Contents at this point ⤴](#contents%5Fsub%5Fhuman) | 

 | [Back to Contents at this point ⤴](#contents%5Fforget%5Fdesc) | 

 | [Back to Contents at this point ⤴](#contents%5Fload%5Fzen) | 

 | [Back to Contents at this point ⤴](#contents%5Flogin%5Fsite) | 

 | [Back to Contents at this point ⤴](#contents%5Finstall%5Fcl) | 

 | [Back to Contents at this point ⤴](#contents%5Fenable%5Fcl) | 

 | [Back to Contents at this point ⤴](#contents%5Fapp%5Fpg) | 

 | [Back to Contents at this point ⤴](#contents%5Fdefault%5Ftheme) | 

 | [Back to Contents at this point ⤴](#contents%5Ffuture) | 

1. ## Preamble  
   * Editing the files on your computer: This guide will be based on your copying and editing files on your computer, and Not doing that editing online, Nor using Drush, and Not using the command line in any fashion.  
   * The 'machine name' `my_zen_sub` will be used as the example in this Guide.  
   * `[D8-root]/themes/zen` and `[D8-root]/themes/my_zen_sub` will be the locations referred to in this guide for the Zen base-theme folder 'zen', and the sub-theme folder 'my\_zen\_sub'.  
   These are the locations where they will eventually reside in your Drupal 8 codebase, but it does not matter where you have them on your computer as you edit them.  
**Optional sub-folders within the 'themes' folder**  
Alternatively, some people like to create sub-folders in their `[d8-root]/themes` folder, to organize their Non-core themes. That will be discussed in more detail below in the help-box ["Optional sub-folders of the 'themes' folder" ⤵](#optional%5Ftheme%5Fsub-folders)
2. ## Download Zen  
**File download location on your computer**  
Before you download Zen, if you need help controlling where files are downloaded and saved onto your computer, see the detailed guide here: [Know your browser's file-download location; or change browser's download location. \~ drupal.org](https://www.drupal.org/node/1248034#dl%5Flocation "   This link opens in a new tab/window.  ~ [https://www.drupal.org/node/1248034#dl_location] ") (This link opens in a new tab/window.)  
Go to the drupal.org projects homepage for Zen,  
[Zen \~ \[drupal.org/project/zen\]](https://www.drupal.org/project/zen "   This link opens in a new tab/window.  ~ [domain/url] "). (This link opens in a new tab/window)  
Scroll to the bottom of the page. Look for the heading 'Downloads', under which are the sub-headings 'Recommended releases', 'Other releases', and 'Development releases'.  
Look for the upper-most 'Version' that you can find for '`8.x-X.0-...`'.  
If you see a 'Recommended releases' version, then that is what you will want to use for your live website. (Live websites are also known as 'production' sites-- as opposed to 'development' or 'test' sites.)  
**Currently...**  
   * Currently, the most stable version is under the heading 'Other releases', and is the 'Version' `8.x-7.0-alpha14`. This is a 'pre-release version', and is Not recommended for 'production' sites.  
   Just to inject a bit of confusion for you, I have found that the development version `8.x-7.x-dev` under the sub-heading 'Development releases' (currently listed with '2016-Jul-14' in the 'Date' column), performs similarly to the version '8.x-7.0-alpha14', per my very limited experience.  
   I consider both of those versions as being suited only for testing, and would recommend to you that you use the 'Other releases - alpha14' version, unless you, like me, would like to test the 'Dev' version with the intent of relaying all problems you find to the developers via the [Zen 'issues que' for Drupal 8 \~ drupal.org/project/issues/zen?version=8.x](https://www.drupal.org/project/issues/zen?version=8.x "   This link opens in a new tab/window. [~ drupal.org/project/issues/zen] ") (after first 'searching' to see if the problem has already been reported.)  
**\*.tar.gz versus \*.zip**  
Zen comes to you 'achived' (as a single file), and 'compressed' (small as possible) in two different formats: \*.tar.gz, and \*.zip.  
Either one of these archived/compressed files contains everything needed for the theme 'Zen'. Both contain the exact same set of folders and files. One type might work better on your system than the other, and the \*.tar.gz is smaller because of its better system of compression. And so, if one gives you a problem, use the other.  
   * **Windows:** If you are using a Windows computer, I recommend that you download the 'zip' file.  
   Windows does not by default include a program that can extract \*.tar.gz files. The extraction from a \*.tar.gz file requires you to install a third-party program, like the freeware program 7-Zip (Windows, Linux). And, even with 7-Zip, extracting a \*.tar.gz file on Windows is a two-step process that requires you to first de-compress it to a \*.tar file, which itself will then need to be de-archived to the final set of folders and files.  
('7-Zip' for Windows and Linux, and other de-archive programs, including for MAC, are discussed in more detail below.)  
**To start the Zen download...**  
After you decide upon either the 'alpha14' or the 'dev' version, (or the 'Recommended release' version if that has become available) click either the text-link "`tar.gz (xxx.xx KB)`", or the text-link "`zip (xxx.xx KB)`" for that version.  
That will start the download of the compressed/archived file.  
'Save' it wherever you like on your computer.
3. ## Un-compress/de-archive the Download  
I do not know about MAC or Linux, but Windows 7, 8, and 10 have a built in de-compression/de-archiving program that can extract the folders/files contained in a \*.zip file.  
   * **Windows**, by default, is Not able to create a single 'archived/compressed' file from a set of folders/files you have on your computer, and that is an ability that you may want to have for use later in this guide to make it easier and faster to upload your Zen subtheme to an online webhost or server.  
I use the free program '7-Zip' (Windows or Linux, only), which is about four-times faster at de-compression than the Windows built-it program, and which can create a archived/compressed file in a variety of different formats.  
**Free Compression/De-compression (Achive/De-archive) Software; and Other Freeware You May Need or Want \[Linux, MAC, Windows\]**  
If you need a program for **Windows or Linux** that can 'archive/compress' or 'de-compress/de-archive' every file of this type that you are likely to come across, including but not limited to \*.zip, \*.tar.gz, or \*.rar files, I recommend the freeware program [7-Zip Homepage/Downloads \~ 7-zip.org](http://www.7-zip.org "   This link opens in a new tab/window.  ~ [http://www.7-zip.org/] ") (This link opens in a new tab/window.)  
For more information on various other free de-archive/archiving programs, including for **MAC**, go to the page [Best Free File Archiver Or Zip Utility \[\~ Gizmo's freeware reviews at techsupportalert.com](http://www.techsupportalert.com/best-free-file-archiver-zip-utility.htm "   This link opens in a new tab/window.  ~ [techsupportalert.com/best-free-file-archiver-zip-utility.htm] ") (This link opens in a new tab/window.)  
**For all my freeware needs**, I start at that last site's homepage [Gizmo's freeware reviews \~ techsupportalert.com](http://www.techsupportalert.com/ "   This link opens in a new tab/window.  ~ [http://www.techsupportalert.com] ") (This link opens in a new tab/window.)  
Use that page's top-right corner 'search' feature, which is a text-field box you can type in if your window is wide enough, or, if your window is thin, as for example, on a mobile device, the website's 'search' is accessed by clicking the 'magnifying-glass' icon.  
That site is by far the best I have found for freeware research, and I have been using it for years.  
**Extract the 'zen' folder from the file you downloaded**  
**Windows \*.zip file de-archive process example**  
   * **7-Zip**: If you have 7-Zip installed, RIGHT-click on your downloaded \*.zip Zen file. In the drop-down 'context' menu, hover your mouse pointer on the menu item '7-Zip', and in the second menu, click "Extract Here".  
   That should create a single folder named 'zen' within the same folder that the \*.zip file resides.  
   * **Using the Windows built-in native extractor**: RIGHT-click on your downloaded \*.zip Zen file. In the drop-down 'context' menu, click "Extract All...".  
   That process will create a folder based on the name of the compressed file. For example, the file 'zen-8.x-7.0-alpha14.zip' will create a folder named 'zen-8.x-7.0-alpha14'. Within the folder 'zen-8.x-7.0-alpha14' you will find a single folder named 'zen'. Pull the folder 'zen' out, and delete the empty folder 'zen-8.x-7.0-alpha14'.  
Regardless of whatever computer system you are using, or whatever method you use, at this point you need to have the folder 'zen', complete with all of the folders and files it contains, extracted on your computer.  
If you have Drupal running on your computer, put the 'zen' folder at `[D8-root]/themes/zen`.
4. ## Copy 'STARTERKIT' folder to outside of 'zen' folder  
   * _"Why create a copy of 'STARTERKIT'?"_  
   Each theme, including subthemes, should reside in its own folder. That makes it easier to upgrade Zen in the future, because sub-themes are in folders of their own, separate from the Zen base-theme to be replaced.  
Navigate into the 'zen' folder.  
Copy the folder 'STARTERKIT', and paste that copy 'one folder level up', so that it is outside of, and next to, the 'zen' folder.  
**Windows 'Copy' and 'Paste' process example**  
   1. RIGHT-click the folder 'STARTERKIT'.  
   2. In the drop-down 'context menu', click "Copy".  
   3. Navigate one folder-level up into the folder containing your 'zen' folder.  
   4. Click once within the central-pane for this folder to make sure that it is the 'active' window, and point of focus.  
   5. RIGHT-Click somewhere within this folder where nothing is sitting.  
   6. In the drop-down 'context menu', click "Paste".  
Your copy of the folder 'STARTERKIT' should now be outside of, and next to, the 'zen' folder.  
This second 'STARTERKIT' folder is for your new Zen subtheme, and will be the only folder to which changes will be made.
5. ## Rename STARTERKIT folder to subtheme 'machine name'  
Decide upon a 'machine' name for your subtheme. This machine name will not be seen by your site visitors. It will only be used by the Drupal 8 system.  
The machine name for your subtheme must begin with a lower-case alphabetic character (a to z), and can only use lower-case alphabetic characters, numerals (0 to 9), and underscores (\_). \[Nothing else, including NO spaces\]  
Rename the STARTERKIT folder using your new 'machine' name, as, for example, to  
`my_zen_sub`
6. ## Rename 19 filenames containing 'STARTERKIT' using 'machine name'  
A total of 19-files have 'STARTERKIT' in their names, and need to be renamed, by replacing 'STARTERKIT' with your 'machine name'.
7. I do not have experience with any programs that would easily rename files by replacing a specified set of text characters with another set, and so I do it manually.
8. * 3-files are in the top of your subtheme folder  
   `[D8-root]/themes/my_zen_sub/*`  
   Rename:  
   `STARTERKIT.info.yml`  
    to  
   `my_zen_sub.info.yml`  
   `STARTERKIT.libraries.yml`  
    to  
   `my_zen_sub.libraries.yml`  
   `STARTERKIT.theme`  
    to  
   ```php  
   my_zen_sub.theme  
   ```  
   * 16-files are in the folder 'install' at:  
   `my_zen_sub/config/install/*`  
   Rename them all.  
   * Note: Failure to find all the theme names across all these file runs the possibility of leaving uninstalled theme names in your configuration. If you don't properly uninstall a theme with mistakes in it, it can be difficult to clean up the site config DB tables or config directory. Sometimes the only way to fix this is to edit the DB config table, config files, and/or re-install the sub-theme in order to get a clean uninstall.
9. ## Locate all files containing 'STARTERKIT' in their code  
With 'zen-8.x-7.0-alpha14' (and 'zen-8.x-7.x-dev (2016-Jul-14)'), there are 138-occurrences of the code 'STARTERKIT' within 48-files in your subtheme folder. (That does not include the 49th file 'README.txt' at `[d8-root]/my_zen_sub/README.txt`, which itself contains an additional 6-occurrences)  
Hey. I heard that. Not so loud. "This is a neighborhood. This ain't no residential district". \[quote by Richard Pryor\] (Assuming, as I am, that you reacted as can be expected, you do not want to scare the kids, or startle the neighbors with profanity at that volume.)  
No problems, no worries. All of those replacements can be made with one-click of the mouse.  
### To replace all occurrences of a text 'string' in multiple files:  
**Overview:**  
   * Use a 'locate' program that lets you select a single folder, including that folder's subfolders, and which searches that folder for all of the files that contain a specific 'string' of text, namely, the text "STARTERKIT".  
   Drag that list of located files into...  
   * A programming/text editor that has the ability to replace one specific piece of code with another, in all of its open files.  
**The process in detail:**  
Search your subtheme folder for all occurrences of 'STARTERKIT' using one of the [Best Free Desktop Search Utility \[\~ Gizmo's freeware reviews at techsupportalert.com\]](http://www.techsupportalert.com/best-free-desktop-search-utility.htm "   This link opens in a new tab/window.  ~ [domain/url] ") (This link opens in a new tab/window.).  
I use the desktop search utility 'Locate32' (Windows only).  
**\[(TODO) Insert Download, Installation, Setup, and Using details. (TODO)\]**  
After your search is complete, highlight all of the files in the search results, and then de-select 'README.txt'.
10. ## Drag located files into a programming text editor, and "Find/Replace" 'STARTERKIT' with 'machine name' in all open files  
**\[(TODO) Insert Download, Installation, Setup, and Using details. (TODO)\]**  
Drag the highlighted files into a programming/text editor that has the ability to make the replacement in all of its open files, like one of the Best Free Programming Editor \[\~ Gizmo's freeware reviews at techsupportalert.com\] (This link opens in a new tab/window.)  
I use the free programming/text editor 'NotePad++' (Windows only)  
**For editing programming code**, you do Not want to use a word-processing program like Office Word, because it adds hidden formatting code of its own that very often disrupts the proper functionality of your code files.  
Instead, you want to use an editor designed as a programming editor.  
For **Windows (only)**, I have been using NotePad++, happily. [Download NotePad++ for Windows (only) \~ notepad-plus-plus.org/download](http://notepad-plus-plus.org/download/ "   This link opens in a new tab/window.  ~ [http://notepad-plus-plus.org/download] ") (This link opens in a new tab/window.)  
**Reviews for Linux, MAC, and Windows programming editors**: [Best Free Programming Editor \[\~Gizmo's Freeware at techsupportalert.com\]](http://www.techsupportalert.com/best-free-programming-editor.htm "   This link opens in a new tab/window.  ~ [www.techsupportalert.com/best-free-programming-editor.htm] ") (This link opens in a new tab/window.)
11. ## Give subtheme human-readable name  
Edit the renamed file "my\_zen\_sub.info.yml" (originally "STARTERKIT.info.yml"). Change the line  
`name: Zen Sub-theme Starter Kit`  
 to whatever you like, as for example,  
`name: My Zen Sub`  
 so that your new subtheme will hava a name that is different from an additional subtheme named 'Zen Sub-theme Starter Kit' that will be automatically included with the Zen base theme installation.  
You will see the automatically generated subtheme named 'Zen Sub-theme Starter Kit' on the 'Appearance' page. It is, in essence, being generated by the existence of the original folder 'STARTERKIT' inside the 'zen' base-theme folder.  
The text you use following `name:`, as for example, `My Zen Subtheme`, will be the name of your subtheme that you will see displayed on the 'Appearance' page.  
"Keep in short."  
I recommend that you use a short 'name:' in that line of code, because that 'name:' is what will be displayed on the sub-tab for this theme at the top of the appearance 'Settings' page; and you do not necessarily want that tab running off the page to the right when your browser is very narrow, as when using a small mobile device.
12. ## Forget about 'description' ??  
The subtheme 'README.txt' file also speaks of changing an additional line of code in the file 'my\_zen\_sub.info.yml'. That line is:  
`description: Read the <a href="... `  
That 'description' is only displayed on your site's administrative 'Appearance' page, alongside the name and screen-shot for your subtheme.  
I do not bother with that line of code, because I am the only one who will ever see the 'Appearance' page, and so I leave the 'description' as it is.  
If you will have other administrators who will have access to the 'Appearance' page, and you want to change the description, then feel free. You can use some html in the 'description', like hyper-links (<a href=""...), but not all html tags are allowed.  
**Warning:** For both  
   * zen-8.x-7.0-alpha14  
   * zen-8.x-7.x-dev \[2016-Jul-14\]  
### Do Not set the Zen base-theme as your site's 'Administrative Theme'.  
If you set the Zen Base-theme as your 'Administrative Theme', it will break your site, and will render Zen permanently unusable on that site.  
See this issue, which includes instructions for recovering the site: [Setting Zen Base-theme as Administrative Theme breaks site, and renders Zen permanently unusable \~ drupal.org/node/2769557](https://www.drupal.org/node/2769557 "   This link opens in a new tab/window. [https://www.drupal.org/node/2769557]") (This link opens in a new tab/window.)  
### Prevention  
To prevent yourself from accidentally enabling the base-theme Zen as the 'Administration theme'  
 add the code...  
`hidden: true`  
 ...to file...  
`zen.info.yml`  
 ...at...  
`[d8-root]/zen/zen.info.yml`  
Note: That code is Not to be placed in the \*.info.yml file for your subtheme, but rather, in the zen.info.yml file for the Zen base-theme.  
By setting the Zen base-theme to 'hidden', it simply prevents it from appearing on the 'Appearance page', and so you will not have to worry about accidentally setting it as the 'Administration theme'.
13. ## Put 'zen' and subtheme folder into 'themes' folder  
Put the unaltered folder 'zen', and your subtheme folder, into the folder 'themes' at: `[Drupal 8 root]/themes/*`.  
### Optional sub-folders of the 'themes' folder  
Alternatively, some people like to create sub-folders in their `[d8-root]/themes` folder, to keep their 'contrib' themes (contributed by the Drupal community) separate from 'custom' themes, or subthemes, that they themselves have created, or have modified.  
You can create sub-folders within the 'themes' folder within `[d8-root]/themes`, and place the Zen base-theme and your Zen subtheme within those sub-folders. Your site will find them and use them without any problem.  
It does not matter what you name your sub-folders, but the 'characters' you use could be an issue. I do not know what the 'naming' requirements are for those sub-folders, and so, I recommend you be 'safe' rather than 'sorry'-- by starting each folder name with a lower-case alphabetic character, and only use lower-case alphabetic characters-- and No spaces. Numerals, underscores, and hyphens (dashes) might work just fine, but using lowercase alphabetic characters alone will be sure to cause you no-problems.  
Example  
   * Location for the Zen base-theme: `[d8-root]/themes/contrib/zen`  
   * Location for your Zen subtheme: `[d8-root]/themes/custom/my_zen_sub`  
The instructions below will assume that you have Not created, and are not using additional sub-folders in the 'themes' folder; but you can if you want.  
Note that installing the base-theme Zen using your site's 'User interface' (UI), as is described and suggested in this guide, will place the Zen base-theme folder 'zen' directly inside the `[d8-root]/themes` folder. You can then move it into your sub-folder 'contrib' (or whatever you might have named your sub-folder), and your site will use it just the same, without any problem.
14. ## Login as administrator
15. ## Install module 'Components Libraries'  
### Module installation overview  
The easiest way to install this module, or any module or theme (that does not need to be modified), is to go to either your site's 'Appearance' page, or to your site's 'Extend' (modules) page, and click the button "Install new theme/Install new module". Paste the URL you copied from any drupal.org 'project' page into your box 'Install from a URL', and click the button "Install".  
Otherwise, you can, of course, extract the module into your folder `[D8-root]/modules/*`. Check to see that, for example, the file 'components.info.yml' is at `[D8-root]/modules/components/components.info.yml`, and if so, you can be confident that the module is properly placed.  
**Get the URL for (or download) 'Component Libraries' from the page:**  
[Components Libraries \~ drupal.org/project/components](https://www.drupal.org/project/components "   This link opens in a new tab/window.  ~ [https://www.drupal.org/project/components] ") (This link opens in a new tab/window.).
16. ## Enable module 'Components Libraries'  
Go to your site's 'Extend' page, see near the page bottom under the heading 'Other', put a check mark in the box for 'Components Libraries', and click the page bottom button "Install".  
You should also check that the default Drupal module 'Help' is enabled as it is also a requirement.
17. ## Go to site's Appearance page  
Navigate to your site's 'Appearance' page, which causes your site to recognize that your Zen subtheme is ready to use.
18. ## Set subtheme as 'default' site theme  
Your Zen subtheme will be at the bottom of the 'Appearance' page under the heading 'Uninstalled themes', alongside the base-theme Zen.  
Click the text-link "Install and set as default" for your subtheme, which will set it as your site's theme. Your subtheme will now have moved to the very top of the 'Appearance' page under the heading 'Installed themes'. That will also automatically move the base theme 'Zen' out of the section 'Uninstalled themes', and into the section 'Installed themes'.
19. ## Future Changes to Your Subtheme  
In the future, depending upon which files you change in your subtheme, different methods are required to get the change to apply to your Drupal 8 site.  
**\*.info.yml**  
If you change your '\*.info.yml' file, you will have to go the the 'Performance' page , and click the button "Clear all caches".  
 \["Manage" > "Configuration" > "Development" > "Performance"\]  
`[d8-root]/admin/config/development/performance`  
With Drupal 7, it might have been sufficient to visit the 'Appearance' page after making changes to the '\*.info' file, but that is not the case for Drupal 8.  
**\*.css and \*.js**  
Note: The following is true of \*.css files, and I assume will be true for \*.js files also, but I can Not as yet confirm this for \*.js files because I have Not tried it.  
**Changes that you make to CSS and JavaScript files will Not immediately display**, because a Drupal 8 site, by default, has CSS and JS files aggregated (multiple files combined together), and cached.  
You have to temporarily turn off 'Aggregate CSS files' and 'Aggregate JavaScript files' after making CSS or JS changes to get those changes to display for you on your site.  
Those two settings are on page `[D8-root]/admin/config/development/performance`  
To adjust them,...  
   1. Click the administrative menu item "Configuration"  
   2. Under the heading 'Development', click "Performance".  
   3. Under the heading 'Bandwidth optimization', remove the check marks for both of:  
         * Aggregate CSS files  
         * Aggregate JavaScript files  
   4. Click the page bottom button "Save configuration".  
After I have turned off the aggregation of CSS and JS, the next thing I always do is delete all of the existing files in the two folders 'css' and 'js' at `[D8-root]/sites/default/files/css` and `[D8-root]/sites/default/files/js`.  
Those are the aggregated files that had been being used, but which will no longer be relevant after I again enable CSS and JS aggregation. And, unfortunately, clicking "Clear all caches" on the 'Configuration'>'Development':'Performance' page does not delete those files.  
I must admit that I do not know if de-selecting 'Aggregate JavaScript files' is necessary for 'CSS-only changes', or whether de-selecting 'Aggregate CSS files' is necessary for 'JavaScript-only changes', but until I confirm that to myself, one way or the other, I always temporarily de-select both of them just to be on the 'safe' side of doubt.  
After you de-select those two items, your site's pages will load more slowly, but that is just a temporary condition.  
**After you make changes to a CSS or JS file, you do Not have to visit your 'Appearance' page, and you do Not have to 'Clear all caches'. All you have to do is just refresh the page you are viewing in your browser, and your new changes will display for you.**  
When you are done testing your subtheme with any CSS or JS changes, return to the 'Performance' configuration page, check the boxes for CSS and JS aggregation, and click the button "Save configuration", to again enable them so that you site will perform more quickly.  
**Other subtheme file types**  
I do not have experience with any of the other subtheme file types, but I assume having CSS and JS aggregation disabled, and then clicking "Clear all caches", will be sufficient to get your site to recognize any changes you have made.  
If that does Not work, then the only other thing I know to suggest, is that you simply visit the 'Appearance' page, which, with Drupal 7, automatically rebuilt the theme 'registry'.
20. Compiling with Gulp requires updating drush, node & npm, a global version of gulp, and as of 8.x-7.0-alpha14 a patch to the STARTERKIT package.json file.

+++++++++++++++++++++++++++++++++++++++

**This page is a work in progress. You should feel free, however, to edit it in any way that you think might be helpful for others, or for yourself in the future. The primary reason I create it is for myself, as a lasting reference, that I know will still be here years in the future if and when I want to build another Drupal 8 site.**

**Warning: (Ditto from above)** For both

* zen-8.x-7.0-alpha14
* zen-8.x-7.x-dev \[2016-Jul-14\]

### Do Not set the Zen base-theme as your site's 'Administrative Theme'.

If you set the Zen Base-theme as your 'Administrative Theme', it will break your site, and will render Zen permanently unusable on that site. The site is recoverable, but nothing I tried allowed me to again use Zen on my site.

See this issue, which includes instructions for recovering the site: [Setting Zen Base-theme as Administrative Theme breaks site, and renders Zen permanently unusable \~ drupal.org/node/2769557](https://www.drupal.org/node/2769557 "   This link opens in a new tab/window. [https://www.drupal.org/node/2769557]") (This link opens in a new tab/window.)

### Prevention

To prevent yourself from accidentally enabling the base-theme Zen as the 'Administration theme' by preventing it from appearing on the 'Appearance' page, add the code...  
`hidden: true`  
...to file...  
`zen.info.yml`  
...at...  
`[d8-root]/zen/zen.info.yml`

 | [Back to Contents' beginning ⤴](#contents%5F) | [Back to Page Top ⤴](#top) |