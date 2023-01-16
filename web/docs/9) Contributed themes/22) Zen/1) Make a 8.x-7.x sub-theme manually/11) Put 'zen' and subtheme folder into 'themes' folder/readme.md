Put the unaltered folder 'zen', and your subtheme folder, into the folder 'themes' at: `[Drupal 8 root]/themes/*`.

### Optional sub-folders of the 'themes' folder

Alternatively, some people like to create sub-folders in their `[d8-root]/themes` folder, to keep their 'contrib' themes (contributed by the Drupal community) separate from 'custom' themes, or subthemes, that they themselves have created, or have modified.

You can create sub-folders within the 'themes' folder within `[d8-root]/themes`, and place the Zen base-theme and your Zen subtheme within those sub-folders. Your site will find them and use them without any problem.

It does not matter what you name your sub-folders, but the 'characters' you use could be an issue. I do not know what the 'naming' requirements are for those sub-folders, and so, I recommend you be 'safe' rather than 'sorry'-- by starting each folder name with a lower-case alphabetic character, and only use lower-case alphabetic characters-- and No spaces. Numerals, underscores, and hyphens (dashes) might work just fine, but using lowercase alphabetic characters alone will be sure to cause you no-problems.

Example

* Location for the Zen base-theme: `[d8-root]/themes/contrib/zen`
* Location for your Zen subtheme: `[d8-root]/themes/custom/my_zen_sub`

The instructions below will assume that you have Not created, and are not using additional sub-folders in the 'themes' folder; but you can if you want.

Note that installing the base-theme Zen using your site's 'User interface' (UI), as is described and suggested in this guide, will place the Zen base-theme folder 'zen' directly inside the `[d8-root]/themes` folder. You can then move it into your sub-folder 'contrib' (or whatever you might have named your sub-folder), and your site will use it just the same, without any problem.