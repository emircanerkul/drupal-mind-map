### Breakpoint

A breakpoint consists of a label and a media query. Media queries are a formal way to encode breakpoints. For instance, a width breakpoint at 40em is written as the media query '(min-width: 40em)'. Breakpoints are really just media queries with some additional metadata, such as name and multiplier information.

Themes and modules can define breakpoints by creating a config file called `myThemeOrModule.breakpoints.yml`, where `myThemeOrModule` is the name of your theme or module.

Each entry in this file defines one breakpoint, consisting of a machine name, by which the breakpoint entry is uniquely identified e.g. `bartik.mobile`, and its children defining the breakpoint's properties:

1. `label` \- A human readable label for the breakpoint.
2. `mediaQuery` \- Media query text proper, e.g. 'all and (min-width: 851px)'.
3. `weight` \- Positional weight (order) for the breakpoint.
4. `multipliers` \- Supported pixel resolution multipliers.

**Note:** The order in which breakpoints are arranged through their weight value is extremely important. Breakpoints with the smallest min-width should have the lowest weight, while breakpoints with the largest min-width should have a larger weight value. By default, modules will order breakpoints from smallest to largest. However modules can reverse that order if necessary: for example the Responsive Image module takes care of re-ordering breakpoints from largest to smallest based on the weight value.

Example (bartik.breakpoints.yml):

```php
bartik.mobile:
  label: mobile
  mediaQuery: ''
  weight: 0
  multipliers:
    - 1x
bartik.narrow:
  label: narrow
  mediaQuery: 'all and (min-width: 560px) and (max-width: 850px)'
  weight: 1
  multipliers:
    - 1x
bartik.wide:
  label: wide
  mediaQuery: 'all and (min-width: 851px)'
  weight: 2
  multipliers:
    - 1x
```

### Breakpoint group

Breakpoints can be organized into groups. Modules and themes should use groups to separate out breakpoints that are meant to be used for different purposes, such as breakpoints for layouts or breakpoints for image sizing.

A breakpoint group is a combination of breakpoints. Each theme or module can define zero or more breakpoint groups. A breakpoint is created through the usage of special breakpoint IDs and keys. Specifying a group is optional, if you don't specify a group, the group will be named the same as your theme or module.

For example, within yourtheme.breakpoints.yml, you could create the following two breakpoint groups:

```php
yourtheme.group1.mobile:
  label: narrow
  mediaQuery: ''
  weight: 0
  multipliers:
    - 1x
  group: yourtheme.group1
yourtheme.group1.narrow:
  label: narrow
  mediaQuery: '(min-width: 560px)'
  weight: 0
  multipliers:
    - 1x
    - 2x
  group: yourtheme.group1
yourtheme.group1.wide:
  label: wide
  mediaQuery: '(min-width: 851px)'
  weight: 1
  multipliers:
    - 1x
    - 2x
  group: yourtheme.group1

yourtheme.group2.mobile:
  label: narrow
  mediaQuery: ''
  weight: 0
  multipliers:
    - 1x
  group: yourtheme.group2
yourtheme.group2.narrower:
  label: narrow
  mediaQuery: '(min-width: 400px)'
  weight: 0
  multipliers:
    - 1x
    - 2x
  group: yourtheme.group2
yourtheme.group2.wider:
  label: wide
  mediaQuery: '(min-width: 1001px)'
  weight: 1
  multipliers:
    - 1x
    - 2x
  group: yourtheme.group2

```

Starting the ID for a breakpoint with the machine name of the theme or module, a dot and then a machine name for the group, and then using that same theme/module.group identifier in the group key is what creates a breakpoint group. All breakpoints with those same sets of keys will appear in the same breakpoint group.

At this time it is not possible to create a custom label for a breakpoint group beyond the machine name that appears in the group key. That is what will appear as the label when selecting a breakpoint group in the Responsive Image module UI, for example.

### Advanced use

You can also add breakpoints to breakpoint groups defined by other modules or themes, but you must use the full name.

For example, in yourmodule.breakpoints.yml you could do the following:

```php
yourmodule.yourtheme.group2.superwide
  label: superwide
  mediaQuery: '(min-width: 1501px)'
  weight: 1
  multipliers:
    - 1x
    - 2x
  group: yourtheme.group2

```

This would add the breakpoint defined in your module to the breakpoint group defined in yourtheme.

### Multipliers

Multipliers are a measure of the viewport's device resolution, defined as the ratio between the physical pixel size of the active device and the device-independent pixel size. For example "retina" displays have a multiplier of 2x.

The breakpoint module defines multipliers of 1x, 1.5x and 2x. When defining breakpoints, modules and themes can define which multipliers apply to each breakpoint.

Example:

```php
'1.5x' // supports Android
   '2x' // supports Mac retina display
   
```

### Load new breakpoint files

If you add a new breakpoints config file during theme testing, you can rebuild caches to view the new breakpoints.

### Resources

* [Media Queries: W3C Recommendation 19 June 2012](http://www.w3.org/TR/css3-mediaqueries/)
* [Breakpoint-sass.com](http://breakpoint-sass.com/)