Below is an example `EventSubscriber` that shows all the possible actions you can take. 

```php
<?php

namespace Drupal\modules\custom\resource_types\EventSubscriber;

use Drupal\jsonapi\ResourceType\ResourceTypeBuildEvents;
use Drupal\jsonapi\ResourceType\ResourceTypeBuildEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Event subscriber to change some resource types.
 */
class ResourceTypeBuildEventSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    return [
      ResourceTypeBuildEvents::BUILD => [
        ['disableResourceType'],
        ['aliasResourceTypeFields'],
        ['disableResourceTypeFields'],
        ['renameResourceType'],
      ],
    ];
  }

  /**
   * Disables node/page resource type.
   *
   * @param \Drupal\jsonapi\ResourceType\ResourceTypeBuildEvent $event
   *   The build event.
   */
  public function disableResourceType(ResourceTypeBuildEvent $event) {
    if ($event->getResourceTypeName() === 'node--page') {
      $event->disableResourceType();
    }
  }

  /**
   * Aliases the body field to content.
   *
   * @param \Drupal\jsonapi\ResourceType\ResourceTypeBuildEvent $event
   *   The build event.
   */
  public function aliasResourceTypeFields(ResourceTypeBuildEvent $event) {
    if ($event->getResourceTypeName() === 'node--article') {
      foreach ($event->getFields() as $field) {
        if ($field->getInternalName() === 'body') {
          $event->setPublicFieldName($field, 'content');
        }
      }
    }
  }

  /**
   * Disables the sticky field on node--article.
   *
   * @param \Drupal\jsonapi\ResourceType\ResourceTypeBuildEvent $event
   *   The build event.
   */
  public function disableResourceTypeFields(ResourceTypeBuildEvent $event) {
    if ($event->getResourceTypeName() === 'node--article') {
      foreach ($event->getFields() as $field) {
        if ($field->getInternalName() === 'sticky') {
          $event->disableField($field);
        }
      }
    }
  }

  /**
   * Renames node--article to article, exposing the resource as /jsonapi/article
   *
   * @param \Drupal\jsonapi\ResourceType\ResourceTypeBuildEvent $event
   *   The build event.
   */
  public function renameResourceType(ResourceTypeBuildEvent $event) {
    if ($event->getResourceTypeName() === 'node--article') {
      $event->setResourceTypeName('article');
    }
  }

}

```