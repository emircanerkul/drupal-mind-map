Keyboard navigation is the primary means of reaching everything on screen for users who either cannot or choose not to use a mouse. This includes screen reader users, as well as those with motor impairments such as Repetitive Stress Injury (RSI) or paralysis. For a good keyboarding experience, aim to have a logical tab order and easily discernible focus styles. You should also make sure that the user doesn’t have to navigate through an excessive number of tab stops.

### What to look for

* Can you skip repeated content?  
   * A skip link should be provided that takes users directly to the content unique to that page, skipping repeated content such as navigation menus. The skip link should be the first tab stop on the page, and should be visible when focused.
* Are all controls fully operable?  
   * Every interactive element has to be usable with the keyboard. Expand/collapses, tree views and sliders, dialogs and overlays - drag and drops - everything. Or there needs to be an alternative way to accomplish the action.
* Can you tab in both directions?  
   * We’ve seen some applications where tabbing forward through the page worked fine, but it was impossible to tab backward (using the Shift+Tab key combination), which created a keyboard trap. Make sure you can tab all the way through the interface in both directions.
* Are there any keyboard traps?  
   * Beware of completely trapping focus at any point. Is there a way for the user to escape overlays, modals and autocomplete widgets by just using a keyboard? If not, you’ve just created a keyboard trap.
* Is your focus constrained when there is a dialog?  
   * When there is a dialog, your keyboard focus should be constrained within it. Otherwise, you might tab off it and be tabbing around the page behind the dialog, unable to see where you are.
* Is your focus always visible?  
   * The general rule of thumb is that any control users can interact with or provide input should be focusable and display a focus indicator (for example a focus ring). If a keyboard user can’t see what’s focused, they have no way of interacting with the page.
* Is there content that is not visible, but is accessible by keyboard?  
   * Be sure that there isn’t content that is supposed to be hidden, but is still it in the tab order.
* Are there keyboard accessible equivalents to content visible based on hovering?  
   * Use your mouse to test if there’s any content that is only visible when hovered that you cannot access by just using a keyboard. Content that is visible by hover should have an alternative way to be accessed. This is not only needed for users navigating with keyboard, but to users navigating with touch.
* Are there focusable elements that shouldn’t be focusable?  
   * Non-interactive content should not be focusable. If something is focusable, the expectation is that the user can do something with it. Users are likely to be confused or frustrated by focusable content which can't be operated.  
   * Don't put tabindex="0" attributes on elements unless the user is expected to operate them.  
   * Adding unnecessary tabindex attributes on non-interactive elements also means it takes more effort to navigate the content.
* Is the tab order natural and logical?  
   * If tabindex has been modified, or if the layout of a page has been reorganized against the natural flow of the DOM (document object model, or elements actually scripted onto the page), then a sighted keyboard user may experience a confusing flow as they navigate through the page

### Test your responsive breakpoints

After you’ve done all those keyboard tests: Increase your browser zoom until you hit a responsive breakpoint and do it all again. Anyone who is using a high level of browser zoom will be interacting with your “tablet” or “phone” version on their laptop. Mobile breakpoints aren’t just for touchscreen users.