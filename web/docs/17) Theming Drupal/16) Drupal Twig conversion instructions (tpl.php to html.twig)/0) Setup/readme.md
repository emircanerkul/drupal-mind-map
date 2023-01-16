### First, Clone Drupal 8.0.x:

`git clone -b 8.0.x http://git.drupal.org/project/drupal.git d8`

The current working version of Drupal will be installed in the folder ‘d8’ (name it whatever you like)

1. Install Drupal as normal (using the Standard install profile).
2. Set all 3 `Twig` settings (debugging, cache, auto\_reload) to `True` in `services.yml`.

---