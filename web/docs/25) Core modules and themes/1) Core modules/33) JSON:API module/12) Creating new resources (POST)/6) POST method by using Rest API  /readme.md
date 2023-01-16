First Create a custom module with the rest resource and enable it by navigating to **/admin/config/services/rest**

```php
<?php

namespace Drupal\rest_examples\Plugin\rest\resource;

use Drupal\node\Entity\Node;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Drupal\Core\Session\AccountProxyInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * Provides a resource to post nodes.
 *
 * @RestResource(
 *   id = "rest_resource_post_example",
 *   label = @Translation("Rest Resource Post Example"),
 *   uri_paths = {
 *     "create" = "/rest/api/post/node-create"
 *   }
 * )
 */
class RestResourcePostExample extends ResourceBase {

  use StringTranslationTrait;

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a Drupal\rest\Plugin\ResourceBase object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param array $serializer_formats
   *   The available serialization formats.
   * @param \Psr\Log\LoggerInterface $logger
   *   A logger instance.
   * @param \Drupal\Core\Session\AccountProxyInterface $current_user
   *   A current user instance.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, array $serializer_formats, LoggerInterface $logger, AccountProxyInterface $current_user) {

    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);

    $this->currentUser = $current_user;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->getParameter('serializer.formats'),
      $container->get('logger.factory')->get('rest_examples'),
      $container->get('current_user')
    );
  }

  /**
   * Responds to POST requests.
   *
   * Creates a new node.
   *
   * @param mixed $data
   *   Data to create the node.
   *
   * @throws \Symfony\Component\HttpKernel\Exception\HttpException
   *   Throws exception expected.
   */
  public function post($data) {

    // Use current user after pass authentication to validate access.
    if (!$this->currentUser->hasPermission('administer site content')) {

      // Display the default access denied page.
      throw new AccessDeniedHttpException('Access Denied.');
    }

    foreach ($data as $key => $value) {

      $node = Node::create(
        [
          'type' => $value['nodetype'],
          'title' => $value['title'],
          'body' => [
            'summary' => '',
            'value' => $value['body'],
            'format' => 'full_html',
          ],
        ]
      );

      $node->enforceIsNew();
      $node->save();

      $this->logger->notice($this->t("Node with nid @nid saved!\n", ['@nid' => $node->id()]));

      $nodes[] = $node->id();

    }

    $message = $this->t("New Nodes Created with nids : @message", ['@message' => implode(",", $nodes)]);

    return new ResourceResponse($message, 200);

  }

}

```

JSON Sample Data to Create Nodes :

```yaml
[
    {
        "nodetype": "article",
        "title": "Training",
        "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
    },
    {
        "nodetype": "page",
        "title": "Team Building",
        "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
    },
    {
        "nodetype": "article",
        "title": "Services",
        "body": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
    },
    {
        "nodetype": "page",
        "title": "Product Management",
        "body": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
    },
    {
        "nodetype": "article",
        "title": "Business Development",
        "body": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
    }
]
```

Curl Command to make a POST Request :

```yaml
curl \
    --user uname:password \
    --header 'Accept: application/json' \
    --header 'Content-type: application/json' \
    --request POST http://example.com/rest/api/post/node-create \
    --data-binary @post_data.json
```