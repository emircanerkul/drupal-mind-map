After you have ensured that Composer and the Apigee Developer Portal Kickstart distribution are installed, follow the steps described below to set up the REST API:

* [Install Drupal patch and additional module](https://www.drupal.org/docs/8/modules/apigee-api-catalog/expose-rest-apis-to-interact-with-api-docs#install-patch-and-module)
* [Create a new role and service account](https://www.drupal.org/docs/8/modules/apigee-api-catalog/expose-rest-apis-to-interact-with-api-docs#create-new-role-and account)
* [Set authorization headers](https://www.drupal.org/docs/8/modules/apigee-api-catalog/expose-rest-apis-to-interact-with-api-docs#set-authorization-headers)

### Install Drupal patch and additional module

In order to expose the REST API, we will download a Drupal patch and an additional module that is not included in the Apigee Developer Kickstart distribution. To download these resources using Composer:

1. Declare the patch and patchLevel in the project’s root Composer file under the `extra`key. For more information and examples, see this [Github repo](https://github.com/cweagans/composer-patches#usage). The patchLevel is required for the core patch to apply correctly.  
```php  
"patches": {  
  "drupal/core": {  
      "Support entities that are neither content nor config entities":"https://www.drupal.org/files/issues/2020-12-02/3042467-50.patch"  
  },  
  "drupal/jsonapi_extras":{  
      "JSON APIS EXTRAS BULK PATCH": "https://www.drupal.org/files/issues/2020-02-20/add-enable-disable-all-buttons--2896799--10.patch"  
  }  
},  
"patchLevel": {  
  "drupal/core": "-p2"  
},  
```
2. Download the module using Composer:  
```php  
composer require drupal/jsonapi_extras  
```
3. Enable the JSON API Modules  
**Option A:** Enable the following modules and any dependencies using [Drush](https://www.drush.org/) by running the following command from the Drupal web root:  
```php  
drush en jsonapi_extras basic_auth  
```  
**NOTE:** If you are using kickstart, you may call Drush via `vendor/bin/drush`. To be able to call drush from anywhere, install the Drush Launcher. For more info, see <http://docs.drush.org/en/master/install>.  
**Option B:** Enable modules through the admin user interface:  
The purpose of each module:  
   * As an admin, go to **Extend** on the admin toolbar.  
   * Under Web Services group, select **JSON:API Extras** and **HTTP Basic Authentication**.  
   * Scroll down and click **Install**.  
   * _[JSON:API](https://www.drupal.org/project/jsonapi)_, _[JSON:API Extras](https://www.drupal.org/project/jsonapi%5Fextras)_ _:_ Enables an API server that implements the JSON:API specification and expose configuration options.  
   * _Basic Auth (core module):_ Provides the HTTP Basic authentication provider.
4. Log in to your Drupal instance as an admin and navigate to **Configuration > Web services > JSON:API**. Enable **Accept all JSON:API create, read, update, and delete operations**, as shown below.  
![Accept all JSON API configuration](https://www.drupal.org/files/JSON-API-config.png)  
**NOTE**: If you are running on a production system, you will want to disable any REST endpoints that you are not going to use:  
   1. As an admin, go to **Configuration > Web services > JSON:API**.  
   2. Select the **JSON:API Extras** tab.  
   3. Select the **Bulk operations** tab and click **Disable all resources_._**  
   4. Go to **Configuration > Web Services > JSON:API > JSON:API Extras** and select the **Resource overrides**tab.  
   5. Revert the following resources to enable them:  
         * If using apigee\_api\_catalog 8.x-2.x:  
                  * **node--apidoc**  
                  * **file--file**  
                  * **media--image**  
         * If using apigee\_api\_catalog 8.x-1.x:  
                  * **apidoc--apidoc**  
                  * **file--file**

### Create a new role and a service account

Because the REST API respects entity access permissions, it is recommended that you create a new **API Docs Service**role that can only access CRUD operations on API Docs entities.To create a new user with **API Docs Service** role for access only to the API Docs REST API:

1. Navigate to **People > Roles > Add role** and add the **API Docs Service** role.
2. Navigate to **People > Permissions**.  
   * If using apigee\_api\_catalog 8.x-2.x:  
         * Enable the following permissions:  
                  * Administer content  
                  * View published content  
                  * View own unpublished content  
                  * API Doc: Create new content  
                  * API Doc: Edit any content  
                  * API Doc: Delete any content  
   * If using apigee\_api\_catalog 8.x-1.x:  
         * Scroll to the **Apigee API Catalog** section of the page  
         * Enable the following permissions for the **API Docs Service**:  
                  * Create new API docs  
                  * Delete API docs  
                  * Edit API docs  
                  * View published API docs  
                  * View unpublished API docs
3. Navigate to **People > Add user** and create a new user with only the **API Docs Service** role assigned.

### Set authorization headers

The core JSON:API module respects the API Doc entity’s access handlers. To make read/update/delete API calls, you must authenticate with a user possessing the required permissions, as discussed in [Create a new role and a service account](https://www.drupal.org/docs/8/modules/apigee-api-catalog/expose-rest-apis-to-interact-with-api-docs#create-new-role-and account).

When sending a request for a resource that requires authentication, the service account username and password must be encoded into the `Authorization `header of the request. For example, in PHP the header would be:

`$auth_header = 'Authorization: Basic ' . base64_encode($username . ':' . $password);`

**Note**: The `Authorization` header can only be generated using the service account _username_. An email address will not work.

For more information on this topic refer to [HTTP Basic Authentication overview](https://www.drupal.org/docs/8/core/modules/basic%5Fauth/overview).