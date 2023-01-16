As said before bs\_base is the lowest base theme in this project. It is doing the next things:

* Setting up basic general SASS workflow and components support. All variables are defined in \`variables/\_bs\_base.scss\` partial.
* Provides various template definitions with \`{% block %}\` implementations for an easier override of template parts.
* Define 3 drush commands for child theme creating, update and CSS build.
* Defines gulp development workflow for CSS development.

We will explain in more details custom gulp workflow, SASS workflow and drush generator command a bit later.