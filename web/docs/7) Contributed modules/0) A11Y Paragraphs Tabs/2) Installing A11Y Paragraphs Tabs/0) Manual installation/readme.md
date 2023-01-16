* Download the module and place it into your modules folder in your Drupal installation.
* In your Drupal installation, go to "Extend" on the top admin menu. Search for the module "A11Y Paragraphs Tabs" and enable the module.
* When you click on "Reports" in the top admin menu and then click on "Status Report". You will probably see an error message saying that the A11Y Accordion Library hasn't been installed/added yet.

![A11Y Accordion Tabs Library Not Installed Error Message](https://www.drupal.org/files/a11y-accordion-tabs-library-error.png)

* Browse to <https://github.com/matthiasott/a11y-accordion-tabs> and download the library.
* Unzip the folder and rename it from "a11y-accordion-tabs-master" to "a11y-accordion-tabs".
* Move this folder to your Drupal installation's "/libraries" folder. It's normally on the same folder level as "modules" and "themes". If there is no libraries folder, you can create one. Make sure you have the correct path to the js file: /libraries/a11y-accordion-tabs/a11y-accordion-tabs.js
* Now when you go back to your Drupal installation and click on "Reports" and then on "Status Report". The error message should be gone. if it is still there, clear the cache.
* Verify installation by visiting /admin/structure/paragraphs\_type and seeing your new Paragraphs: A11Y Paragraphs Tabs Wrapper, A11Y Paragraphs Tabs Panel, A11Y Paragraphs Tab Content.