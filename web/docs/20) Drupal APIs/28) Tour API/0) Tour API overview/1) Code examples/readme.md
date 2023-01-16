Probably the best tour example is the one provided by the [example](https://www.drupal.org/project/examples) module.

The following documentation uses the forum tour as an example. You can see the instructions for creating tours directly at the the forum tour contributors page and use it as a reference in an existing module at <https://www.drupal.org/contributor-tasks/create-tour>

Let's consider an example from the '[Write tour integration for Forum module](/node/1926296)' issue.

### YAML document name

The YAML for the add/edit forum page is named tour.tour.forum-container.yml, which follows the module.type.id.yml pattern.

If you wanted to provide a tip for the 'configure pants' form in your module, you would name your file tour.tour.configure-pants.yml. This file should be placed in the module's config/optional folder.

### Content Tour YAML document

The YAML document for adding or editing a forum page looks like this:

```php
id: forum-container
module: forum
label: Add or edit a forum container
langcode: en
routes:
  - route_name: forum.add_container
  - route_name: forum.add_forum
tips:
  introduction:
    id: introduction
    plugin: text
    label: Adding or editing a container
    body: This form can be used to edit an existing container or add a new container to your site.<br>Containers are used to group forums together. For example, if you ran a Drupal forum you might create a 'Support' container and include forums for 'Installing Drupal' and 'Getting started' inside the 'Support' Container
    weight: "1"
  container-name:
    id: container-name
    plugin: text
    label: Container name
    body: Enter a name to identify this container. Eg 'Support'
    weight: "2"
    selector: #edit-name
  container-description:
    id: container-description
    plugin: text
    label: Container description
    body: Give your container a description to help identify the purpose of the container and the types of forum it will contain. You can also use the container description to provide guidelines for other site administrators to help them decide which container a new forum might belong in.
    weight: "3"
    selector: #edit-description
  container-save:
    id: container-save
    plugin: text
    position: top
    label: Save
    body: When you have finished completing the form, click 'Save' to create the new container or save the changes to an existing container.
    weight: "6"
    selector: #edit-submit

```