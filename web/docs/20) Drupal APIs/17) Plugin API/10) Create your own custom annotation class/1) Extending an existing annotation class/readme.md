When extending an existing plugin's annotation class, it's important to inject the new class into the plugin's plugin manager.

As an example of overriding the graphql module's DataProducer annotation, in my\_module.services.yml supply the new annotation class:

`  plugin.manager.graphql.data_producer:
    class: Drupal\graphql\Plugin\DataProducerPluginManager #Use the same class as the base module.
    arguments:
      - 'Plugin/GraphQL/DataProducer'
      - '@container.namespaces'
      - '@module_handler'
      - '@cache.graphql.definitions'
      - '@request_stack'
      - '@cache_contexts_manager'
      - '@cache.graphql.results'
      - '\Drupal\graphql\Plugin\DataProducerPluginInterface'
      - '\Drupal\my_module\Annotation\DataProducer' # Our custom DataProducer annotation class.
      - '%graphql.config%'
`

Here we are simply passing our own annotation class into the plugin manager for graphql DataProducer plugins.