### Place your module in the `/modules` folder

As of Drupal 8.0, most core files are now contained in a `core/` subdirectory, so that site builders can now use the top-level `modules/` and `themes/` folders for contributed and custom extensions. (See the **[change record on the new core subdirectory](https://drupal.org/node/1327978)**.) So, you can **place your module's git repository directly inside the `modules/` folder**.

### Contributed module maintainers: Create an 8.x branch

* Navigate into your Drupal 8 installation's modules directory.
* Go to the version control tab on your project page on Drupal.org, and follow the instructions to clone the latest 7.x branch.
* Create a new 8.x branch from the 7.x branch.
* Push the new 8.x branch back to Drupal.org.

#### Example commands

```php
cd ~/Sites/8.x/modules

git clone --branch 7.x-prague xjm@git.drupal.org:project/pants.git

cd pants

git checkout -b 8.x-1.x

git push -u origin 8.x-1.x

```

### Non-maintainers: Create an 8.x sandbox

* Navigate into your Drupal 8 installation's modules directory.
* Follow the **[instructions for creating a contributed module development sandbox](https://drupal.org/contrib-8x-sandbox)**.

#### Example commands

```php
mkdir xjm_pants

cd xjm_pants

git init

git remote add origin xjm@git.drupal.org:sandbox/xjm/2097535.git

git remote add pants http://git.drupal.org/project/pants.git

git fetch --all

git checkout -b xjm-8.x-1.x remotes/pants/8.x-1.x

git push origin xjm-8.x-1.x

```