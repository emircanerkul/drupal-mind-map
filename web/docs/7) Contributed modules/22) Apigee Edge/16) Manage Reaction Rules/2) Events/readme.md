The Apigee Edge Actions module provides support for a number of Apigee Edge-specific Events. The table below lists the Events and their machine names, organized by Entity category:

### App

`\Drupal\apigee_edge\Entity\DeveloperApp`

| **Event**                     | **Name**                                                      |
| ----------------------------- | ------------------------------------------------------------- |
| After saving a new App        | apigee\_edge\_actions\_entity\_insert:developer\_app          |
| After deleting an App         | apigee\_edge\_actions\_entity\_delete:developer\_app          |
| After updating an App         | apigee\_edge\_actions\_entity\_insert:developer\_app          |
| After adding an API Product   | apigee\_edge\_actions\_entity\_add\_product:developer\_app    |
| After removing an API Product | apigee\_edge\_actions\_entity\_remove\_product:developer\_app |

### Team App

`\Drupal\apigee_edge_teams\Entity\TeamApp`

| **Event**                     | **Name**                                                 |
| ----------------------------- | -------------------------------------------------------- |
| After saving a new Team App   | apigee\_edge\_actions\_entity\_insert:team\_app          |
| After deleting an Team App    | apigee\_edge\_actions\_entity\_delete:team\_app          |
| After updating an Team App    | apigee\_edge\_actions\_entity\_insert:team\_app          |
| After adding an API Product   | apigee\_edge\_actions\_entity\_add\_product:team\_app    |
| After removing an API Product | apigee\_edge\_actions\_entity\_remove\_product:team\_app |

### Team

`\Drupal\apigee_edge_teams\Entity\Team`

| **Event**                    | **Name**                                           |
| ---------------------------- | -------------------------------------------------- |
| After saving a new Team      | apigee\_edge\_actions\_entity\_insert:team         |
| After deleting an Team       | apigee\_edge\_actions\_entity\_delete:team         |
| After updating an Team       | apigee\_edge\_actions\_entity\_insert:team         |
| After adding a team member   | apigee\_edge\_actions\_entity\_add\_member:team    |
| After removing a team member | apigee\_edge\_actions\_entity\_remove\_member:team |