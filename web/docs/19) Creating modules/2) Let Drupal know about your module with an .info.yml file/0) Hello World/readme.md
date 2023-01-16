The following is the `hello_world.info.yml` file we will be using. If you are following along, go ahead and create a new `hello_world.info.yml` file in your module's root folder, and paste this code into it.

```yaml
name: Hello World Module
description: Creates a page showing "Hello World".
package: Custom

type: module
core_version_requirement: ^9.4 || ^10

```

Let's take a look at each line to see what it does.

The first three lines are primarily used in the administration UI when allowing users to enable or disable your module. The `name` and `description` keys provide the text that is shown on the module administration page.

The `package` key allows you to group like modules together. Core, for example, uses `package: Core` to group all of the modules provided with Drupal core together, likewise you might use `package: Custom` to group all of your projects custom modules together making them easier to locate and enable. `package` entries should follow [Drupal capitalization standard](https://www.drupal.org/docs/develop/user-interface-standards/interface-text#interface-text-capitalization) and use sentence case ("User interface" not "User Interface") by default, except if referring to something which properly uses title case ("Organic Groups").

The `type` key, which was introduced in Drupal 8, indicates the type of extension, e.g. module, theme, or profile.

For modules hosted on drupal.org, the version number will be filled in by the packaging script. You should not specify it manually, but leave out the version line entirely.

The `core_version_requirement` key specifies with which Drupal core versions your module is compatible.

`name`, `type` and `core_version_requirement` are required keys.