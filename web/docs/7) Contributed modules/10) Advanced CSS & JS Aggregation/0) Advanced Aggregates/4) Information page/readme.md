Located at `admin/config/development/performance/advagg/info`. This page provides debugging information. There are no configuration options here.

* **Hook Theme Info:** Displays the `preprocess_html` order.
* **Core Asset Hooks Implemented by Modules:** List modules implementing the various core asset hook functions. _Note:_ if a module does not use these but is changing things with assets beyond adding/removing, there is a much greater chance that there may be conflicts with AdvAgg especially with some of the submodules.
* **Get information about an optimized file:** Enter the name of an optimized file and get back an array of information about the file including its original name and location.