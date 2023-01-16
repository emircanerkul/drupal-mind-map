Some developer portals might want to restrict the apps displayed on the site based on a custom app attribute. For example, an organization with two developer portals (A and B) may want to show apps with the custom attribute _portal = portal\_a_ on one portal, and those with _portal = portal\_b_ on the other.

The Apigee Edge API [does not provide an endpoint to filter out apps based on attributes](https://apidocs.apigee.com/management/apis/get/organizations/%7Borg%5Fname%7D/developers/%7Bdeveloper%5Femail%5For%5Fid%7D/apps). Filtering must be done _after_ the apps listing has been retrieved from the API. The steps below outline one example of how this can be done:

1. Create a custom module (_mymodule_), with the following structure:  
```php  
mymodule  
 ⊢ mymodule.info (contains the usual module declarations)  
 ⊢ mymodule.module  
 ⊢ src  
     ⊢ Entity  
         ⊢ Storage  
             ⊢ DeveloperAppStorage.php  
```
2. In _mymodule.module_, override the storage handler for the _developer\_app_ entity type:  
```php  
<?php  
use Drupal\mymodule\Entity\Storage\DeveloperAppStorage;  
/**  
 * Implements hook_entity_type_alter().  
 */  
function mymodule_entity_type_alter(array &$entity_types) {  
  /** @var \Drupal\Core\Entity\EntityTypeInterface[] $entity_types */  
  if (isset($entity_types['developer_app'])) {  
    // Override the storage class.  
          $entity_types['developer_app']->setStorageClass(DeveloperAppStorage::class);  
  }  
}  
```
3. In _DeveloperAppStorage.php_, override the _loadMultiple()_ method (used internally to load single or multiple apps) to apply the attribute filtering. In this example, apps belonging to Portal A have an attribute _portal == portal\_a_. Make sure to modify the sample code to match your custom attribute naming:  
```php  
<?php  
namespace Drupal\mymodule\Entity\Storage;  
use Drupal\apigee_edge\Entity\DeveloperAppInterface;  
use Drupal\apigee_edge\Entity\Storage\DeveloperAppStorage as EdgeDeveloperAppStorage;  
/**  
 * Overriden entity storage class for Developer app entities.  
 */  
class DeveloperAppStorage extends EdgeDeveloperAppStorage {  
  /**  
   * {@inheritdoc}  
   */  
  public function loadMultiple(array $ids = NULL) {  
    $entities = parent::loadMultiple($ids);  
    return array_filter($entities, function (DeveloperAppInterface $app) {  
      return ($app->hasAttribute('portal') && ($app->getAttributeValue('portal') == 'portal_a'));  
    });  
  }  
}  
```
4. Optionally, extend the _save()_ method to ensure apps created in each portal have the custom attribute set to the appropriate value required for filtering. For example, apps created in Portal A would be given the custom attribute _"portal == portal\_a"_.