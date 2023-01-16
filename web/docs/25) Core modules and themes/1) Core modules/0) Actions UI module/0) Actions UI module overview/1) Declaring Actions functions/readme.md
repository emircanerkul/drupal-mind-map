This section is obsolete since <https://www.drupal.org/node/2020549> and needs to be rewritten.  
Actions functions are declared by modules by implementing hook\_action\_info(). Modules can cause action functions to run by calling actions\_do().

**Each Actions function takes two to four arguments:**

1. \- $entity: The object that the action acts on, such as a node, comment, or user
2. \- $context: Array of additional information about what triggered the action.
3. \- $a1, $a2: Optional additional information, which can be passed into actions\_do() and will be passed along to the actions function.