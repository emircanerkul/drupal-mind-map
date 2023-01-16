---
url: https://www.drupal.org/docs/8/themes/uswds-base/megamenu-header-and-big-footer
description: >-
  **ATTENTION** I'll say it again, for dropdown menus to work properly, you'll
  need to enable "Show as expanded" for each specific menu item with additional
  levels. You may also have to modify the menu block itself in order to allow
  for displaying multiple menu levels. For example, megamenu needs 3 levels for
  full display while big footer requires 2 levels. Megamenu Header If you're
  already using the default setup with the theme, you're pretty much already
  most of the way there. For the Megamenu to completely work, it requires three
  menu levels. The first level is your top bar.
published_time: '2019-04-14T05:43:51+00:00'
modified_time: '2019-04-14T05:51:06+00:00'
---
**\*\*ATTENTION\*\* I'll say it again, for dropdown menus to work properly, you'll need to enable "Show as expanded" for each specific menu item with additional levels. You may also have to modify the menu block itself in order to allow for displaying multiple menu levels. For example, megamenu needs 3 levels for full display while big footer requires 2 levels.**

### Megamenu Header

If you're already using the default setup with the theme, you're pretty much already most of the way there. For the Megamenu to completely work, it requires three menu levels. The first level is your top bar. The second is basically your separated column placeholder and the third will be the list of links for that column.

Please see the following example on the USWDS v2 page. [Example MegaMenu USWDS implementation](https://federalist-proxy.app.cloud.gov/preview/uswds/uswds/release-2.0/components/preview/header--basic-mega.html)

_"The second level is just a placeholder? But what if I want users to have clickable links?"_

Good news, I added a setting for that. In the theme setting with megamenu, you'll see a checkbox below it for having the second tier as column headers. You won't see this on the above megamenu example with USWDS, but I added some twig to make it happen optionally. 

You're welcome.

### Big Footer

The Big Footer is a little easier than the megamenu. Basically it's the same concept, just one less level. For the menu, level one items are the headers and level 2 are the links below it. I think you'll figure it out.

**\*\*Hey... for Megamenu and Big Footer... don't get crazy with the amount of columns. Keep it to a minimum... you figure it out. Less than 5 or 6?** 