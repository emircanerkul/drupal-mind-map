### 1\. Release design to the community

* 3 week community comment period
* The design will be refined during and afterward.

### 2\. Get proof of concept working, and accessible (and get a pass from Drupal accessibility maintainers)

* Proof of concept is static HTML [hosted on GitHub](https://github.com/Lullabot/olivero-poc).
* We will be documenting issues (accessibility, and functionality) [on Drupal.org](https://www.drupal.org/project/issues/olivero?categories=All).  
   * If you intend to work on an issue, comment on it to prevent duplicate work.  
   * When the PR is ready and submitted, re-comment on Drupal.org with a link to the PR. Set the issue to “Needs Review”
* PRs can be submitted on GitHub  
   * The PR must not break existing functionality  
   * Not 100% concerned about coding standards… but we expect the best effort.  
   * Test the functionality in supported browsers (including IE11).  
   * Test the functionality at all appropriate screen sizes.
* Once we get the following completed, we will move to Drupal theming. 👈 _We are here!_  
   * Accessibility pass from Drupal accessibility maintainers.  
   * Working cross-browser under all of [Drupal’s supported browsers](https://www.drupal.org/node/3079238).  
   * Properly responsive at all screen sizes.

### 3\. Development of theme on Drupal.org

* The theme will be developed as a Drupal 8 contrib theme at <https://www.drupal.org/project/olivero>

### 4\. Make the theme available and set as the default front-end Drupal theme

* [#3111409: Add new Olivero frontend theme to Drupal 9.1 core as beta](https://www.drupal.org/project/drupal/issues/3111409 "Status: Closed (fixed)")
* [#3177296: \[META\] Make Olivero stable](https://www.drupal.org/project/drupal/issues/3177296 "Status: Closed (fixed)")