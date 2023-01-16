---
url: >-
  https://www.drupal.org/docs/contributed-modules/apigee-edge/synchronize-developers-with-apigee
description: >-
  Any modifications made to developer portal users in Drupal will modify the
  developer in Apigee, whether you are connecting to Apigee Edge, hybrid or
  Apigee X. The developer's email address is used as the identifier between the
  two systems. For example, if you edit a user in Drupal, the developer account
  in Apigee is updated to reflect those changes. However, if you modify
  developers in Apigee Edge, hybrid, or Apigee X, those changes are not
  automatically reflected in the Drupal developer portal site.
published_time: '2018-05-12T12:32:05+00:00'
modified_time: '2022-07-22T16:05:54+00:00'
---
Any modifications made to developer portal users in Drupal will modify the developer in Apigee, whether you are connecting to Apigee Edge, hybrid or Apigee X. The developer's email address is used as the identifier between the two systems. For example, if you edit a user in Drupal, the developer account in Apigee is updated to reflect those changes. However, _if you modify developers in Apigee Edge_, _hybrid, or Apigee X_, those changes are not automatically reflected in the Drupal developer portal site. 

When first configuring a Drupal developer portal site, we recommend that you run the **synchronize** process to ensure that all developer accounts present in Apigee are reflected in the Drupal portal and vice versa. 

After the initial configuration, we recommend that you use the user administration features of the Drupal developer portal site to manage app developers instead of using the Apigee UI for the following reasons:

* Apigee does not initiate communication with the portal. If you, as an Apigee administrator, change the configuration for a developer using the Apigee UI or API (as described in [Managing app developers](https://docs.apigee.com/api-platform/publish/adding-developers-your-api-product) in the Apigee documentation), there is no guarantee that those changes will be propagated to the Drupal developer portal.
* Because Apigee does not let you set a password when you create a developer, any developer created on Apigee has their portal password set to a random value. Therefore, developers created from the Apigee UI must go through the password recovery process before they can log in to the Drupal developer portal.

If a developer that you are syncing already exists on both Apigee and the portal:

* The developer data with the most recent timestamp is used.
* If a developer on Apigee has the most recent timestamp, developers on the Drupal portal will only have the **first name**, **last name**, and **custom attributes** copied from Apigee. The developer's **username**, **email**, and **status** fields are not copied.
* If a developer on the portal has the most recent timestamp, developers on Apigee will only have the **first name**, **last name**, and **custom attributes** copied from the Drupal portal. The **email** and **status** fields are not copied.

If the synchronization fails, a message is logged with information describing the problem.

You can synchronize developers between the Drupal developer portal and Apigee using either of the following methods:

_To synchronize developers using the Drupal admin panel:_

1. Log in to your portal as a user with Apigee Edge administrator privileges.
2. Select **Configuration > Apigee Edge > Developers**.
3. Click the **Synchronization** tab.
4. Click one of the following:  
| **Button**                | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                |  
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Run developer sync        | Sync the developers in real-time, as a synchronous operation. The sync operation must complete before you can perform any other operations or close the browser.                                                                                                                                                                                                                                                                                               |  
| Background developer sync | Sync the developers as a background task. The developer sync operation will be queued for execution with the Drupal core cron.**Note**: Because the developer sync operation may not complete in a single cron job, depending on the number of developers and your scheduled cron configuration, you can run the entire queued cron job as a dedicated background process using the [Drush Queue Handling](https://www.drupal.org/project/mob%5Fqueue) module. |

_To synchronize developers using the CLI:_

1. If you are using Drush, run the following command:  
```php  
drush apigee-edge:sync  
```
2. If you are using Drupal, run the following command:  
```php  
drupal apigee_edge:sync  
```

**Note:** You can automate the synchronization process by configuring it to run in cron.