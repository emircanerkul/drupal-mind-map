There are many base themes for Drupal which you can use, so the logical question is why create another one?  
While evaluating current base themes we noticed a couple of problems:

* No good Bootstrap 4 base theme,
* Most of the base themes are concentrating on adding a lot of features that are hard to remove when you do not need them,
* No clear development workflow defined for child themes,
* Lack of re-usability,
* Lack of component-oriented approach,
* Difficult to update/refactor based themes without breaking compatibility of child theme implementations,
* Monolithic design, especially true for CSS,
* Difficult custom theme development when you want to step outside of boundaries of base theme.

Based on this list we decided to create a new base theme that will have light Bootstrap 4 implementation but should also address all the other problems we identified.

This is a big and complex problem to solve and the current version still didn't fully reached all the goals we set. However great progress is already made and we are already using this base theme in numerous production client projects.

Because of this base theme implementation is split into two base themes for now:

* bs\_base is the lowest level base theme which job is to introduce basic development workflow and offers various tools to improve the development of child themes.
* bs\_bootstrap is Bootstrap 4 bs\_base child theme which is a base theme for custom child theme implementation.