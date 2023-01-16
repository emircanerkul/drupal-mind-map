---
url: >-
  https://www.drupal.org/docs/drupal-apis/configuration-api/overview-of-configuration-vs-other-types-of-information
description: >-
  In Drupal 8, there are several types of information: Content Information meant
  to be displayed on your site, and edited by users: article, basic page,
  images, files, etc. Session Information about individual users' interactions
  with the site, such as their current selection for a Views exposed filter.
  This is ephemeral and personalized to a single user. State Information that
  can change frequently and/or without user intervention. Examples: the time
  when Cron was last run, whether node access permissions need rebuilding, etc.
published_time: '2013-10-25T16:23:10+00:00'
modified_time: '2019-07-22T21:11:31+00:00'
---
In Drupal 8, there are several types of information:

Content

Information meant to be displayed on your site, and edited by users: article, basic page, images, files, etc.

Session

Information about individual users' interactions with the site, such as their current selection for a Views exposed filter. This is ephemeral and personalized to a single user.

[State](https://www.drupal.org/docs/8/api/state-api)

Information that can change frequently and/or without user intervention. Examples: the time when Cron was last run, whether node access permissions need rebuilding, etc.

[Configuration](https://www.drupal.org/docs/8/api/configuration-api)

Information about your site that is not content and changes infrequently, such as the name of your site, the content types and views you have defined, etc.

[Cache](/developing/api/8/cache)

Information about your site that is also stored elsewhere. Caches exist only to speed up data retrieval. They never store canonical data.

[Settings](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Site%21Settings.php/function/Settings%3A%3Aget/)

Read-only information for your site hardcoded within settings.php.

### Deciding how to classify your information

It is not always clear how to decide whether a piece of information that your module will store should be classified as content, state, or configuration. Here are some guidelines:

* Configuration vs. State: If your information would need to be deployed from your development server to your live server, it is probably configuration and not state information.
* Configuration vs. Content: Think site builder vs. site editor. If a "site editor" role on the site would want to edit the information, it is probably content. If only a "site builder" role would want to have the power to edit the information, then it is probably configuration. But this is not an absolute rule.
* Configuration vs. Content: Think about numbers. If you have a huge number of items, probably it is content. If you will only ever have a few, probably it is configuration.
* Configuration vs. Content: Configuration tends to define "types of things", such as content types, taxonomy vocabularies, etc. Then each "thing" within the type is a piece of content: a content node, a taxonomy term, etc.

### Simple Configuration vs. Configuration Entities

One of the first decisions you'll need to make when using the configuration management system is what type of configuration you are going to store.

**Simple configuration** is a little easier to implement and is thus ideal for basic configuration settings that result in boolean values, integers or simple strings of text being stored. A good example would be the value of an on/off toggle for a specific feature in your module, or the site name configured by the system module. Simple configuration also encompasses any settings that your module requires in order to operate correctly. For example, JavaScript aggregation has to be either on or off. If it just doesn't exist, the system module won't be able to determine the appropriate course of action. Simple configuration can only depend on the module that provides it. For example, `system.site` depends on the System module and nothing else.

**Configuration entities** store information lists of things that users can create and delete; your code will continue to work fine whether there are 0 or 100+. Example: image styles, views, etc. Configuration entities also come with a complete set of CRUD hooks that are fired just like any other entity in Drupal making them an ideal candidate for configuration that may need to be manipulated or responded to by other modules. As an example, Views uses configuration entities allowing for a scenario where at runtime hooks are fired which allow any other module to provide configuration (views) to the Views module. Configuration entities can have dynamic dependencies. Like simple configuration, they depend on the module that provides them. For example, `views.view.frontpage` depends on the Views module but because it lists nodes it also depends on the Node module. If it's later updated to only show Article nodes, it will also gain a dependency on the Article configuration entity (`node.type.article`). And so on.