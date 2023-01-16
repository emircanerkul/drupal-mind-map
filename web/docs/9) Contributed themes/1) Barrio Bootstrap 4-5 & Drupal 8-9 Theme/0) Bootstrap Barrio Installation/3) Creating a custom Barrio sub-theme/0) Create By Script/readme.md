If you are comfortable using command-line in either Unix shell or Windows ([git-bash](https://git-scm.com/download/ "Git - Downloads")), the following commands will create a custom theme:

```php
cd themes/custom
export CUSTOM_BARRIO=custom_barrio # change this to your custom theme_name
cp -r ../contrib/bootstrap_barrio/subtheme $CUSTOM_BARRIO
cd $CUSTOM_BARRIO
for file in *bootstrap_barrio_subtheme.*; do mv $file ${file//bootstrap_barrio_subtheme/$CUSTOM_BARRIO}; done
for file in config/*/*bootstrap_barrio_subtheme.*; do mv $file ${file//bootstrap_barrio_subtheme/$CUSTOM_BARRIO}; done
mv {_,}$CUSTOM_BARRIO.theme
mv {_,}$CUSTOM_BARRIO.layouts.yml
grep -Rl bootstrap_barrio_subtheme .|xargs sed -i '' -e "s/bootstrap_barrio_subtheme/$CUSTOM_BARRIO/"

```

Make the necessary changes in `$CUSTOM_BARRIO.info.yml` and enable the theme.

Note: If you use Linux you might get the error `sed: can't read : No such file or directory`, even though all is well. For more see [Sed gives: sed: can't read : No such file or directory](https://stackoverflow.com/questions/43171648/sed-gives-sed-cant-read-no-such-file-or-directory/57766728#57766728).

This script has been added to the 8.x-4.x branch in the scripts directory, and you can easily run the script instead of creating one yourself.

```php
# Run from theme root, e.g. "themes/contrib/bootstrap_barrio".
# Make script executable.
chmod +x scripts/create_subtheme.sh
# Run script with interactive prompts.
./scripts/create_subtheme.sh
```

You should search the codebase looking for "Bootstrap Barrio" and alter the remaining textual references to your sub-theme. Also make sure that the [Bootstrap library specified ](https://www.drupal.org/docs/8/themes/barrio-bootstrap-4-drupal-89-theme/bootstrap-libraries-load) in the `$CUSTOM_BARRIO.info.yml` under `library `is the one you want [(CDN or local)](https://www.drupal.org/docs/8/themes/barrio-bootstrap-4-drupal-89-theme/bootstrap-libraries-load).

In the future, this script might be [turned into a Composer plugin](https://www.drupal.org/project/bootstrap%5Fsass/issues/3030844#comment-12970978 "Script for creating a bootstrap sub-theme [#3030844] | Drupal.org").