The architecture for the activity stream is built to be pluggable in many ways. First it is good to understand the main concepts of a Message and Activity Entity and how they are connected to each other.

The Message entity is built from a Message Type that contains tokenized text and is created when an event is triggered (e.g. a content entity that is created). The message does not contain the recipients or list of users that need to receive this notification and the final output that is displayed from the tokenized output. To store this information we use the Activity entity.

A plugin system is based on three types:

1. Activity actions: Plugin that handles the creation of a Message.
2. Activity context: Responsible for determining which entities are eligible to be used and to which recipients an Activity should be created.
3. Activity destinations: The output systems that have to be used to display the Activity (currently we have 4 activity stream outputs and one for the on-screen notifications.) and the plugin to be used when we extend the outputs for other channels such as e-mail or slack.
4. Activity entity condition: These type of plugins add the ability to give more flexibility for activities of one entity type or bundle. For example we have a special condition for comments and check whether a comment is of the kind 'reply to other comment' or not.