---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/ckeditor-5-module/testing-the-ckeditor-4-to-5-upgrade-path
description: >-
  We need ~450,000 Drupal 8 and 9 sites to make a fully automated upgrade from
  CKEditor 4 to 5. But CKEditor 4 and 5 have vastly different architectures,
  which has significant consequences for that upgrade path. Virtually every
  detail is different! In a nutshell: CKEditor 4 leverages the browser as much
  as possible. Consequence: any tiny difference in behavior across browsers in
  low-level APIs has a huge negative impact. CKEditor 5 therefore avoids using
  the browser for many low-level operations, and re-implements many things. This
  way, it can guarantee consistency and reliability.
published_time: '2022-04-02T16:41:31+00:00'
modified_time: '2022-10-27T07:53:11+00:00'
---
We need [\~450,000 Drupal 8 and 9 sites](https://www.drupal.org/project/usage/drupal) to make a _fully automated upgrade_ from CKEditor 4 to 5.

But CKEditor 4 and 5 have vastly different architectures, which has significant consequences for that upgrade path. Virtually every detail is different!

<!-- note-tip -->
> TIP: In a nutshell:&nbsp;CKEditor 4 leverages the browser as much as possible. Consequence: any tiny difference in behavior across browsers in low-level&nbsp;APIs has a huge negative impact.&nbsp;CKEditor 5 therefore avoids using the browser for many low-level operations, and re-implements many things. This way, it can guarantee consistency and reliability. But consequently,&nbsp;not all&nbsp;HTML&nbsp;is natively supported&nbsp;anymore!

An enormous amount of effort went into the upgrade path. But even though we developed and tested it with as many edge cases in mind as we could think of, the strongest proof is testing it on real-world sites, with actual content.

<!-- note-tip -->
> TIP: The questions we kept in mind while working on the upgrade path:

How do we ensure that the toolbar people get to use looks as similar as&nbsp;possible?
How do we ensure that all&nbsp;HTML&nbsp;that was already created in&nbsp;CKEditor 4 continues to work fine in&nbsp;CKEditor&nbsp;5?
How do we ensure the same&nbsp;HTML&nbsp;restrictions are enforced by&nbsp;CKEditor&nbsp;5?
How do we ensure that&nbsp;HTML&nbsp;tags/attributes/attribute values allowed by a Drupal&nbsp;text format&nbsp;match those of the corresponding&nbsp;CKEditor 5&nbsp;text editor&nbsp;exactly?
How do we communicate changes in the toolbar to the site&nbsp;builder?
Does the resulting text editor experience match your&nbsp;expectations?

So we'd like you to test two things:

1. **The upgrade path for the CKEditor 4 configuration to a CKEditor 5 equivalent.**
2. **After having done the above, testing the editing of existing content with CKEditor 5\.**

### 1\. **Testing the upgrade path for the CKEditor 4 configuration to a CKEditor 5 equivalent**

1. Install the experimental CKEditor 5 module that is included with Drupal 9.3 and newer. (Do not install the former contrib module!) Because CKEditor 5 is experimental every commit not only goes to 9.4 (and 10.0) but also 9.3!
2. Go to `/admin/config/content/formats`
3. Find the most complex text format on your site that indicates `CKEditor` is its text editor
4. Click its `Configure` operation
5. Copy the machine name (for example: `basic_html`)
6. In a terminal, do  
```php  
drush cget filter.format.MACHINE_NAME > MACHINE_NAME-format-before.yml  
drush cget editor.editor.MACHINE_NAME > MACHINE_NAME-editor-before.yml  
```
7. Return to the text format configuration page in the browser, find the `Text editor` dropdown, choose `CKEditor 5` instead of `CKEditor`. Ignore what happens for a moment, save the form and go to the next step.
8. In a terminal, do  
```php  
drush cget filter.format.MACHINE_NAME > MACHINE_NAME-format-after.yml  
drush cget editor.editor.MACHINE_NAME > MACHINE_NAME-editor-after.yml  
```
9. In the browser, look at what actually happened. Write down your observations, concerns, fears, celebrations. We want to hear about it!
10. Check the [coordination handbook page](https://www.drupal.org/docs/core-modules-and-themes/core-modules/ckeditor-5-module/upgrade-coordination-for-modules-providing-ckeditor-4-plugins#comment-14472688) for finding out what's happening to the additional Drupal modules you have installed that provided CKEditor 4 plugins.

### **2\. Testing the editing of existing content with CKEditor 5\.** 

First do step 1\. Then try editing existing content. That can simply be:

1. Open complex content in CKEditor 5
2. Change a single letter
3. Save
4. Check whether the saved HTML looks like you would expect

**_This is especially valuable to test with the "Full HTML" text format!_**