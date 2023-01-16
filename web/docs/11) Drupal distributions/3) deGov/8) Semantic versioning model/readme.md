---
url: https://www.drupal.org/docs/distributions/degov/semantic-versioning-model
description: >-
  We want to document new features and bugfixes via our versioning model. Also
  we want to publish bugfixes as soon as possible. Therefore we have introduced
  a 4-characters long last version number within the Drupal version model. First
  of all: please make sure you've read the page at https://semver.org/ (it will
  take you ~5 minutes). Let's say your current deGov version is 8.x-3.1100. If
  we were using purely semantic versioning, like you see in many other software
  projects on GitHub etc., then you would have version 3.11.0. Please note: We
  remove the beginning zeros in the Drupal patch release.
published_time: '2018-09-17T08:53:00+00:00'
modified_time: '2018-09-18T11:20:45+00:00'
---
![deGov version model](https://www.drupal.org/files/degov-version-model.jpg)

We want to document new features and bugfixes via our versioning model. Also we want to publish bugfixes as soon as possible. Therefore we have introduced a 4-characters long last version number within the Drupal version model.

First of all: please make sure you've read the page at <https://semver.org/> (it will take you \~5 minutes).

Let's say your current deGov version is **8.x-3.1100**. If we were using purely semantic versioning, like you see in many other software projects on GitHub etc., then you would have version **3.11.0**.

Please note: We remove the beginning zeros in the Drupal patch release. There can be a maximum of two digits per segment.

An example for pure semantic versioning:

![Example for pure semantic versioning](https://www.drupal.org/files/pure-semantic-versioning.jpg)

See the table below for example updates and their impact on your project.

| **Drupal version** | **Semantic version** | **Description**      | **Impact**                                                                                                                                                                                                                                                                     |
| ------------------ | -------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 8.x-3.100          | 3.1.0                | Current version      | No changes.                                                                                                                                                                                                                                                                    |
| 8.x-3.101          | 3.1.1                | Patch version update | Here you would receive a bugfix.                                                                                                                                                                                                                                               |
| 8.x-3.201          | 3.2.1                | Minor version update | A minor version update describes new features, which _do not break_ backwards compatibility.                                                                                                                                                                                   |
| 8.x-4.1201         | 4.12.1               | Major version update | A major version update describes new features, which do break backwards compatibility. Such an update should be done very carefully. Your project may need modifications to gain the new features and still work smoothly. Major segment: 4 Minor segment: 12 Patch segment: 1 |

### Example for a wrong version intent

Given you want achieve version number \`3.11.0\` in semantic versioning. Then you cannot specify Drupal version \`8.x-3.11\`. Because this version would be computed to \`3.0.11\`. You must specify Drupal version \`8.x-3.1100\` to achieve your intent.

#### More examples

* 8.x-3.1 -> 3.01
* 8.x-3.11 -> 3.0.11
* 8.x-3.101 -> 3.1.1
* 8.x-3.1010 -> 3.10.10

### Composer

Composer uses semantic versioning. Find our more about [version constraints](https://getcomposer.org/doc/articles/versions.md#writing-version-constraints). It's important to install deGov via our [deGov project skeleton](https://bitbucket.org/publicplan/degov%5Fproject/src/master/). See our [install documentation page](https://www.drupal.org/docs/8/distributions/degov/install-degov-2x).

### Update hooks

You might be asking, if semantic versioning is also working in Drupal update hooks. Yes, they do. See the following code example.

```php
/**
 * deGov Update 8.x-6.0001
 */
function degov_update_860001() {
  echo "Done.";
}
```

Please note: You must specify all version number digits. Do not remove leading zeros.