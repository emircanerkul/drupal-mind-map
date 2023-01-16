We agreed to move variables that are only used by a single component to the component itself. We will define those variables in the `:root` scope, so they have to still remain somewhat specific to not overlap with other components. Variables that are used by multiple components will remain in the `variables.css`. When a variable isn't specific to an element, the variable should start with the variable type to make it easier to find the correct variable through autocomplete and skimming.

For variables that are not specific to an element, the pattern is:

`([variable-type{color, font-size, size, line-height}])(-[property])`

Examples:

* `--color-absolutezero`
* `--font-size-s`

And for variables that are specific to an element, the pattern is:

`([element])(-[property])(?--[state])(-[variable-type{color, font-size, size, line-height}])(?--[modifier])`

Examples:

* `--button-bg-color`
* `--button--focus-bg-color`
* `--button--focus-bg-color--dark`
* `--button-primary-bg-color`
* `--button-primary--focus-bg-color`
* `--button-border-radius-size`