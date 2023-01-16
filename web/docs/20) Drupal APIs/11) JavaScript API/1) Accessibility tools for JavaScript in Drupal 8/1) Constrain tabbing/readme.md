For some interactions, you may want to guide a non-visual user to the most important elements on the page. For example, the Contextual module constrains tabbing to the contextual links when the global edit mode is enabled.

These modules achieve this constrained tabbing with the `Drupal.tabbingManager` JavaScript feature. To constrain tabbing on the page, invoke the tabbing manager feature like this.

```php
var tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));

```

A set of elements is passed to the `constrain` method. Pressing the tabbing key will now only move between the tab-able elements in this set of elements.

To remove the tabbing constraint, the `release` method must be called on the tabbing context object.

```php
tabbingContext.release();

```

The Overlay module uses two functions to initiate a tabbing constraint and release the constraint:

```php
/**
 * Makes elements outside the overlay unreachable via the tab key.
 */
Drupal.overlay.constrainTabbing = function ($tabbables) {
  // If a tabset is already active, return without creating a new one.
  if (this.tabset && !this.tabset.isReleased()) {
    return;
  }
  // Leave links inside the overlay and toolbars alone.
  this.tabset = Drupal.tabbingManager.constrain($tabbables);
  var self = this;
  $(document).on('drupalOverlayClose.tabbing', function () {
    self.tabset.release();
    $(document).off('drupalOverlayClose.tabbing');
  });
};

/**
 *
 */
Drupal.overlay.releaseTabbing = function () {
  if (this.tabset) {
    this.tabset.release();
    delete this.tabset;
  }
};

```

Only one tabbing constraint may be active at a time. If a tabbing constraint is active and another is invoked, the previously active tabbing constraint will be disabled and the new one applied. You need only worry about the tabbing constraint that your module controls.  
If another module overrides your tabbing constraint and then releases this constraint, then your module's tabbing constraint will be reapplied. In this case, if your module releases its tabbing constraint while its tabbing constraint is disabled (meaning another module has an active tabbing constraint), then it will not be reapplied, as you would expect.