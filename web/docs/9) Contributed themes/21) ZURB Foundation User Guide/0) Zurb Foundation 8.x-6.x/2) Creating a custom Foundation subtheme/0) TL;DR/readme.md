### Create a subtheme using drush

<!-- note-warning -->
> WARNING: Warning: it only works with Drush &lt;= 8 at this time. Drush 9+ does not work

1. cd into the same level as the theme folder (usually web/ if you're [using Composer](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies))
2. Ensure zurb\_foundation contrib theme is enabled: **drush en zurb\_foundation** (drush 8 command)
3. Create the subtheme: **drush** **fst** **mycustomtheme**
4. Type **y** to enable the subtheme
5. Move _themes/_ _contrib_ _/_ _mycustomtheme_ into _themes/custom_ (create the _custom/_ folder if required)
6. Set subtheme to default - _Appearance_

### Create subtheme manually

1. Copy the folder _themes/_ _contrib_ _/zurb\_foundation/STARTER_ to _themes/custom_ (create the _custom/_ folder if required)
2. Find and replace STARTER (capitals only) in all files to be the machine name of your subtheme (eg. mycustomtheme). (for macOS/BSD this might work \`find . \\! \\( -type d -or -name \\\*.png -or -name \\\*.svg -or -name \\\*.ico -or -name \\\*.gif -or -name \\\*.jpg \\) -type f -print0 | xargs -0 sed -i '' 's/STARTER/mycustomtheme/g'\`)
3. Remove the **.txt** extension from STARTER.info.yml.txt
4. Rename all files beginning with STARTER to your subtheme machine name (for macOS/BSD this might work: \`find . -type f -exec rename 's/STARTER/mycustomtheme/' '{}' \\;\`
5. In your Drupal admin, go to _Appearance_. Enable your new subtheme and set it to default

### Update your theme's details and thumbnail image

1. Edit the .info.yml with your theme details
2. Create a screenshot.jpg file (368px × 321px) and save it in the subtheme images/ folder.
3. Uncomment the screenshot line (around line 8)