---
url: https://www.drupal.org/docs/8/modules/autofloat/troubleshooting
description: >-
  Images don't float in Edit mode. Text filters are applied in View mode only.
  This is normal behavior. Images don't float after installing the module or
  changing the configuration options. Re-save existing nodes you want to apply
  AutoFloat to. If you still can't see any changes, try clearing both your site
  and browser cache. They still don't float or other unexpected display problems
  occur. It should be noted that the cascading stylesheets defined by modules
  are by default loaded before theme CSS (see Drupal API). AutoFloat's style
  might be overwritten by the theme stylesheets.
published_time: '2019-10-09T19:37:09+00:00'
modified_time: '2019-10-09T19:37:09+00:00'
---
**_Images don't float in Edit mode. Text filters are applied in View mode only._**  
This is normal behavior.

**_Images don't float after installing the module or changing the configuration options._**  
Re-save existing nodes you want to apply AutoFloat to. If you still can't see any changes, **try clearing both your [site](https://drupal.org/node/42055 "Clearing Drupal's cache | Drupal.org") and [browser cache](http://www.wikihow.com/Clear-Your-Browser's-Cache "13 Ways to Clear Your Browser's Cache - wikiHow")**.

**_They still don't float or other unexpected display problems occur._**  
It should be noted that the cascading stylesheets defined by modules are by default loaded before theme CSS ([see Drupal API](http://api.drupal.org/api/drupal/includes%21common.inc/function/drupal%5Fadd%5Fcss/7 "drupal_add_css | common.inc | Drupal 7 | Drupal API")). AutoFloat's style might be overwritten by the theme stylesheets. In that case copy and paste the code from the _autofloat.css_ file to the bottom of your theme's _style.css_ file or use [this solution](http://k-it.ca/comment/14#comment-14 "K-IT.ca Inc. - Including Site-Specific Files and Code in a Drupal Site").  
**OR**  
Your theme might not use the HTML5 _article_ tag or _class/id_ _'content'_ to target the node body, if it does not follow [standard Drupal core classes](http://drupal.org/node/388372). Use your [browser inspector](https://developers.google.com/chrome-developer-tools/docs/overview) to find the ones used by your theme and adjust the class used in the module's CSS file accordingly.

Remember an element floats within the block-element containing it. If that doesn't cover the full width, the image might not float as expected. AutoFloat is intended for a relative 'flat' node body structure (not deeply nested).

**_The images in the blocks also Auto Float._**  
Use another text format that doesn't include AutoFloat for your blocks.  
**OR**  
change the class/id to target in the module's CSS files. Try to use 'content-content' instead of 'content' (depending on your theme). Leave the leading dots and hashes.

**_Override AutoFloat behaviour using [Flickr Filter](https://drupal.org/node/2171503 "Flickr Filter documentation") tags._**  
If you enable the [AutoFloat module](https://drupal.org/project/autofloat "Project page") using [Flickr Filter](https://drupal.org/node/2171503 "Flickr Filter documentation") tags, it precedes over the existing 'floatleft' and 'floatright' classes found, but not over the inline styles. Thus inline styling is a way to override AutoFloat behaviour, for example:  
`[flickr-photo:id=9247388074, size=m, style=float:right;]`  
The margins on the 'text side' of the image from autofloat.css get applied anyway, so the text doesn't lean against the image.