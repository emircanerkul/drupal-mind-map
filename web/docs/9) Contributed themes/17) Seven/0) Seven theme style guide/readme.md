---
url: >-
  https://www.drupal.org/docs/contributed-themes/seven-theme-0/seven-theme-style-guide
description: >-
  The goals of this style guide are: Outline Drupal core values that guide the
  look & feel for the Seven theme. Describe the unifying the visual language in
  Seven that supports the core values. List the visual and UI patterns used by
  Drupal that form a shared language we can build on. Provide guidelines for
  others (e.g., contrib) to build on as new interactions emerge. As the
  principal Admin theme of Drupal, Seven theme must: Be completely accessible
  (WCAG compliant) Be responsive and mobile friendly Provide consistency across
  all Drupal 8 modules Stand the test of time.
published_time: '2016-11-04T15:13:26+00:00'
modified_time: '2022-09-14T06:56:57+00:00'
---
### The goals of this style guide are:

1. Outline Drupal core values that guide the look & feel for the Seven theme.
2. Describe the unifying the visual language in Seven that supports the core values.
3. List the visual and UI patterns used by Drupal that form a shared language we can build on.
4. Provide guidelines for others (e.g., contrib) to build on as new interactions emerge.

As the principal Admin theme of Drupal, Seven theme must:

* Be completely accessible (WCAG compliant)
* Be responsive and mobile friendly
* Provide consistency across all Drupal 8 modules
* Stand the test of time.

### Basic principles 

The development of the Drupal brand has come a long way in the past few years. With the introduction of an admin theme and toolbar, we now have important places where people interact with Drupal visually. For a lot of people who use Drupal but don’t visit Drupal.org, the administrative interface is their only interaction with our brand.

We looked into words that describe Drupal’s brand:

> powerful, adaptable, empathetic, direct, democratic, accessible, clear, concise, natural.

Part is this brand is also the community values we express:

> welcoming/respectful, open, informal, collaborative, transparent, responsive, credible.

Much of this is captured in Mark Boulton and Leisa Reichelt’s earlier work describing the brand at <https://www.drupal.org/drupalorg/style-guide/brand>.

### How should we express these principles? 

Having a set of adjectives to describe Drupal, we tried to give those terms visual expression using basic design elements and principles. First, we mapped each adjective to a set of possible visual characteristics:

* **powerful:** confident, precise shapes and strong contrast, especially for user-controllable elements.
* **empathetic, responsive:** choose to calm colors and rounded forms; give emphasis to what matters;
* **clear, direct, concise:** use crisp lines and simple, decisive shapes; avoid patterns, texture, and ornamentation; each element should serve a clear purpose; make measured use of whitespace: room to breathe, but avoid sterility and emptiness; use rules/boxes sparingly.
* **accessible, transparent:** appeal to the greatest possible number of people; choose a legible typeface; set text for optimal readability; emphasize what matters; use consistent visual cues for affordances.
* **natural:** desaturated tones: avoid neon/artificial colors; organic rather than geometric forms; choose a typeface that retains a trace of the human hand.
* **friendly, collaborative, democratic, respectful:** choose cheerful colours; avoid high contrast at large scales (too bold/aggressive); prefer well-known design patterns, iconography, and affordances; avoid visual indulgence, ensure visual style is extensible and flexible.

Some of these design elements would be in conflict with one another: powerful shapes and too much contrast might make the UI unfriendly or even disrespectful. In these cases, a careful balance is needed. In other cases, there is a clear common thread.

### Summary: the Seven Graphic Style 

* A primarily light tone that feels bright and open.
* A neutral desaturated color palette, both friendly and calming.
* Legible, readable typography.
* Crisp lines and sufficient, but not jarring, contrast.
* Bold shapes reserved for headings and action elements.
* Some rounded forms to humanize the interface.
* Little or no ornamentation: no patterns, textures, gradients or shadow/emboss effects – except to communicate affordances.
* Borders and background tone as grouping devices only: to clarify relationships and emphasize important elements.
* Generous and consistent use of whitespace.
* Aesthetically appealing, though minimal graphic style; should be simple but not sterile.

#### On Contrib 

In addition to articulating the foundation and expression of the Seven theme and core modules, this style guide can be used by developers of contributed modules and themes. For module developers, this guide provides design patterns and styles that can be extended as a module encounters UI challenges not covered by the components here. For themers the theme itself in both it's coding style and in it's componentized structure can provide good templates for theming form elements on the front end. 

### Color Palette 

![](https://www.drupal.org/files/palette.png)

The guide makes few changes to the Seven color palette in Drupal 7 while still supporting the principles and graphic elements we identified above.

Seven uses three primary colors: white, “burlap” and “Drupal blue”. White provides openness and serves as the ground for other elements. Burlap is a yellow-tinted gray, providing friendliness and energy while maintaining neutrality. Drupal blue associated the theme with the Drupal graphic identity as well as being a naturally calming color.

Drupal blue is used for links, primary buttons, and other interactive elements such as the labels on tabs. Interactive elements that use Drupal blue and have an active state use a darker shade of that colour (#004f80). Burlap is used for background tints and fills in several shades (always at 51° hue).

Red is used sparingly, and only to communicate an error state or danger action (e.g. delete). A strong yellow-orange is used for warning messages and a grass green for success messages.

We chose colour combinations that pass WCAG 2 AA contrast guidelines for accessibility so that text can be read and elements distinguished by everyone who uses Drupal. Some challenges in finding contrasting colors for different states remain, we still have to further tune a few of these.

### Iconography

In Drupal 8 Seven theme uses the [libricons](https://github.com/ry5n/libricons) icon library designed by Ryan Frederick (ry5n), which we continue to extend with additional SVG icons.

![libricons](https://www.drupal.org/files/libricons_0.png)