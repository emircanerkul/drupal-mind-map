---
url: >-
  https://www.drupal.org/docs/theming-drupal/sub-theming-using-stablestable-9-as-a-base-theme
description: >-
  Stable/Stable 9 are Drupal core themes that exist to be used as base themes.
  They provide a "snapshot" of Drupal's default themes/CSS at the time of an
  initial major release (i.e. Stable uses the CSS/templates that were default
  when Drupal 8.0 was released, and Stable 9 uses the CSS/templates that were
  default when Drupal 9.0 was released). A theme will use the Stable themes as a
  base theme to ensure markup and styling are not changed by Drupal updates.
  This ensures that themes will not have unpredictable changes resulting from a
  Drupal update.
published_time: '2014-10-08T19:36:56+00:00'
modified_time: '2022-08-09T13:03:48+00:00'
---
**Stable/Stable 9** are Drupal core themes that exist to be used as base themes. They provide a "snapshot" of Drupal's default themes/CSS at the time of an initial major release (i.e. **Stable** uses the CSS/templates that were default when Drupal 8.0 was released, and **Stable 9** uses the CSS/templates that were default when Drupal 9.0 was released).

A theme will use the Stable themes as a base theme to ensure markup and styling are not changed by Drupal updates. This ensures that themes will not have unpredictable changes resulting from a Drupal update. Note that the "fence" provided by Stable as a base theme also means core template/CSS _improvements_ do not make it through either. Stable themes will not change unless it's an objective bug fix.

| **Choose _Stable / Stable 9 as a base theme_ when**       | You want the theme to begin with minimal markup and styling **and** you need assurance that your theme is not changed in any way by a Drupal update.                                                                                                                                                                                                       |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Choose no base theme when**                             | You want the theme to begin with minimal markup and styling **and** you'd like core updates to templates and styling to be present in the theme. (note that the changes in core updates are rarely dramatic, but can lead to unexpected changes. It's recommended to check the release notes before any update to see what changes may impact your theme ) |
| **Consider Starterkit or another base theme option when** | You want your theme to begin with more substantial markup and styling                                                                                                                                                                                                                                                                                      |

Once you've decided on a base theme, you can read more on implementing it here: [Creating a Drupal 8 sub-theme](/node/2165673).