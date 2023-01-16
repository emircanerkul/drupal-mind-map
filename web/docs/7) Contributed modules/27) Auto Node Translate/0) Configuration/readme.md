---
url: >-
  https://www.drupal.org/docs/contributed-modules/auto-node-translate/configuration
description: >-
  CONFIGURATION MyMemory No configuration needed IBM Watson translator Create an
  account in https://cloud.ibm.com/registration. Login to your account in
  https://cloud.ibm.com/login. Open the "IBM Cloud" menu and select Watson In
  Watson menu select "Browse Services" and select "Language Translator" Create
  the service Choose the "Manage" option from the menu. Go to
  /admin/config/auto_node_translate/config and insert your apikey and url on the
  config form. the latest available version can be checked in
  https://cloud.ibm.com/apidocs/language-translator#versioning.
published_time: '2022-10-26T09:19:06+00:00'
modified_time: '2022-12-27T16:43:50+00:00'
---
**CONFIGURATION**

MyMemory

* No configuration needed
* IBM Watson translator  
   * Create an account in <https://cloud.ibm.com/registration>.  
   * Login to your account in <https://cloud.ibm.com/login>.  
   * Open the "IBM Cloud" menu and select Watson  
   * In Watson menu select "Browse Services" and select "Language Translator"  
   * Create the service  
   * Choose the "Manage" option from the menu.  
   * Go to /admin/config/auto\_node\_translate/config and insert your apikey and url on the config form. the latest available version can be checked in <https://cloud.ibm.com/apidocs/language-translator#versioning>.
* Google cloud translator v2 and v3  
   * Create an account on <https://cloud.google.com>  
   * Follow the first step on <https://cloud.google.com/translate/docs/quickstart> to create your project.  
   * On your project Dashboard click on "Explore and enable APIs" on the tab "Credentials" create an API KEY.  
   * Go to /admin/config/auto\_node\_translate/config and insert your apikey and project id on the config form.
* Amazon Translate  
   * Create an account on <https://aws.amazon.com>  
   * Create an IAM account for the translator, grant TranslateFullAccess permission  
   * Create an Access Key for the new IAM account  
   * Go to /admin/config/auto\_node\_translate/config and insert your apikey secret, and AWS region on the config form.