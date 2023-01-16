Once you have enabled a module that harnesses workflows, go to Configuration > Workflow > Workflows. This is an overview of all workflows By default there will be one workflow, "Editorial", but you can create more to specify different workflows for different content types.

![Content moderation workflows](https://www.drupal.org/files/workflows_0_0.png)

### Configuring a workflow

A workflow consists of "States" and "Transitions".

#### States

States are the different statuses your content can have (draft, published etc). Default moderation states for the "Editorial" workflow are "Draft" and "Archived" in addition to the basic "Published" option. You can set up new states custom to your workflow, such as "Review". 

![Content moderation states](https://www.drupal.org/files/states_1_0.png)

You can click the blue "Add a new state" link to create new states:

![Content moderation add state](https://www.drupal.org/files/add_state_0.png)

States can be "published" and/or a "default revision". A state marked "published" updates the core publishing status to published, otherwise it is updated to unpublished. A state marked "default revision" updates the entity revision to be the default loaded when loading the entity, this may be with the canonical route, via a View, etc.

#### Transitions

After you set up the states, you can create the actual workflow between them at the "Transitions" accordion. You decide the direction in which content moves from state to state. To decide which user roles are allowed to make what move, see the Permission section further below.

![Content moderation transitions](https://www.drupal.org/files/transitions_0.png)

To create a new transition, click the blue "Add a new transition" link. To make the new "Review" state useful, you can add a "Ready for review" transition. This transition should be available to content in "Draft" state and move the content into the new "Review" state.

![Content moderation add transition](https://www.drupal.org/files/add_transition_0.png)

This new transition will by default be at the bottom of the transition table. Use the crosshair beside the label to move it to its desired position between the "Draft" and the "Publish" states.

![Content moderation transitions with review](https://www.drupal.org/files/transitions_with_review_0_0.png)