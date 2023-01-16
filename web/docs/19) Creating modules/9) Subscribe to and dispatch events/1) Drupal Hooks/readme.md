For most of its existence Drupal has had a rudimentary events system by the way of "_hooks_". Let's look at how the concept of "hooks" breaks down into these 4 elements of an event system.

* **Event Subscribers** \- Drupal hooks are registered in the system by defining a function with a specific name. For example, if you want to subscribe to the made up "_hook\_my\_event\_name_" event, you must define a new function named `myprefix_my_event_name()`, where "_myprefix_" is the name of your module or theme.
* **Event Registry** \- Drupal hooks are stored in the "_cache\_bootstrap_" bin under the id "_module\_implements_". This is simply an array of modules that implement a hook, keyed by the name of the hook itself.
* **Event Dispatcher** \- Hooks are dispatched differently in Drupal 7- vs Drupal8:  
   * Drupal 7-: hooks are dispatched through use of the `module_invoke_all() `function  
   * Drupal 8: hooks are dispatched through `\Drupal::moduleHandler()->invokeAll()` service method.
* **Event Context** \- Context is passed into hooks by way of parameters to the subscriber. For example this dispatch would execute all "_hook\_my\_event\_name_" implementations and pass in the parameter of `$some_arbitrary_parameter`:  
   * Drupal 7-: `module_invoke_all('my_event_name', $some_arbitrary_parameter);`  
   * Drupal 8: `\Drupal::moduleHandler()->invokeAll('my_event_name', [$some_arbitrary_parameter]);`

Some drawbacks to the "_hooks_" approach to events are:

* **Only registers events during cache rebuilds.**  
 Generally speaking, Drupal only looks for new hooks when certain caches are built. This means that if you want to implement a new hook on your site, you will have to rebuild various caches depending on the hook you're implementing.
* **Can only react to each event once per module.**  
 Since these events are implemented by defining very specific function names, there can only ever be one implementation of an event per module or theme. This is an arbitrary limitation when compared to other event systems.
* **Can not easily determine the order of events.**  
 Drupal determines the order of event subscribers by the order modules are weighted within the greater system. Drupal modules and themes all have a "weight" within the system. This "weight" determines the order modules are loaded, and therefore the order events are dispatched to their subscribers. A work around for this problem was added late into Drupal 7 by way of "_hook\_module\_implements\_alter_", a second event your module must subscribe to if you want to change the order of your hook execution without changing your module's weight.

With the foundation of Symfony in Drupal 8, there is now another events system in play. A better events system in most ways. While there are not a lot of events dispatched in Drupal 8 core, plenty of modules have started making use of this system.