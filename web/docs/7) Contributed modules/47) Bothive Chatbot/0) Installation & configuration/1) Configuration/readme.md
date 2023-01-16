First of all you'll need to have an API key from Bothive. If you're responsible for managing and creating those kind of things go ahead and create an account and a team (or be granted access to a team) on <https://bothive.be>. After you completed the registration procedure head over to the settings form ( Settings » General ) and grab the API key. While you are at this form also make sure that your website is whitelisted under the "trusted domain" section.

![Screenshot of the Bothive dashboard.](https://www.drupal.org/files/Screenshot%202021-02-06%20at%2022.08.53.png)

Next up go to your Drupal site and head over to the configuration form (Administration » Configuration » System » Bothive).

![Screenshot of the module configuration.](https://www.drupal.org/files/Screenshot%202021-02-06%20at%2022.14.57.png)

Here you have a few additional configuration options:

* The logging option will output some additional logging information in the browser console.
* The hidden option will still initialise the widget, but will not show it. This would enable you to write custom JavaScript code to open the widget with custom defined logic. More information about this can be found under the section [Custom JavaScript triggers](/docs/contributed-modules/bothive-chatbot/custom-javascript-triggers).
* The pages (request path) option allows you to show the chatbot only on specific pages. The negate option allows you to reverse the logic. This logic is inherited from the Drupal core request path condition. This same condition is used for displaying blocks on certain pages. If you leave this field empty the bot will be loaded on **all pages,** including administration pages which might be unwanted.