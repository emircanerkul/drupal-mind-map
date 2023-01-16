Running automatic accessibility checks and manually tabbing through the page already goes a long way. If you are not familiar with using a screen reader, many of these issues can be detected without actually using a screen reader.

### What to look for

* Do all controls have a label?  
   * All controls should be described by a label that describes the purpose of the control. Most of the time this is done by using the element, but in some advanced use cases, you might have to use [aria-labelledby](//www.w3.org/TR/2010/WD-wai-aria-20100916/states%5Fand%5Fproperties#aria-labelledby”) attribute.
* Are there any custom controls? Are they described by appropriate role and any required ARIA attributes that confer their state?  
   * Users of assistive technology should have access to the same information that is conveyed to sighted users via visual cues such as formatting, cursor style, or position. Native elements have this semantic information built-in by the browser, but for custom controls you need to use [ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) to add this information in. For example, a custom slider component might take an ARIA role of slider, which has some related ARIA attributes: aria-valuenow, aria-valuemin and aria-valuemax.
* Is the flow of information consistent with what you see on the screen, and does it make sense?  
   * The flow of information might be altered by CSS. Does the flow of content make sense as well when accessed with a screen reader?
* Do link texts make sense?  
   * Most screen readers say "link" before each link. For example, a "products" link would be. read as "link products". Therefore links do not need to include "link" in the link text, because all users already know it’s a link.  
   * Tabbing from link to link is a way of skimming web content for screen reader users. Links should make sense out of context. Phrases such as "click here," "more," "click for details," and so on are ambiguous when read out of context.
* Do all images have proper alt text?  
   * All images should have a proper alt text. The exception to this practice is when images are primarily for presentation purposes and are not essential pieces of content. If the image should be skipped by a screen reader, set the value of the alt attribute to an empty string.

### Manual testing with a screen reader

Some issues can only be caught by manually testing the application with a screen reader. The most common screen readers are VoiceOver (Mac OS) and NVDA (Windows). To get started with VoiceOver you can watch a video on [VoiceOver basics](//www.youtube.com/watch?v=5R-6WvAihms”) and read WebAIM tutorial for VoiceOver. To get started with NVDA you can watch a video on [NVDA basics](//www.youtube.com/watch?v=Jao3s%5FCwdRU”) and read about [how to use NVDA and Firefox to test your web pages for by Marco Zehe](//marcozehe.wordpress.com/articles/how-to-use-nvda-and-firefox-to-test-your-web-pages-for-accessibility/”).

Once you become familiar with the screen reader and have learned the general keyboard commands you need, try turning off your monitor and putting away your mouse. Remember that screen reader pronunciation should be left outside of the scope of testing.

If you are not already a screen reader user, testing with one is not as easy as it may sound. It takes time and diligence to unlearn visual navigation, and to learn the shortcuts and techniques available to a screen reader user. Additionally, all screen readers work a little differently, and it is important to test on as many as you can, as well as to test with different browsers and platforms.