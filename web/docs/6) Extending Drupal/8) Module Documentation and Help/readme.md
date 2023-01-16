---
url: https://www.drupal.org/docs/extending-drupal/module-documentation-and-help
description: >-
  Some modules do not actually need you to do anything, and they just do what
  they do behind the scenes. Those modules, however, probably have no
  configurable options, or that serve only as those upon which other modules are
  dependent upon. More commonly, a module you are concerned about is something
  that you can adjust permissions and options for. Some projects are easy to
  use, which is to say, their use is 'intuitive', and it will be relatively
  clear to you what you can adjust, and what you need to do to accomplish
  whatever it is that you may want to do.
published_time: '2017-01-21T18:45:44+00:00'
modified_time: '2019-11-12T17:00:59+00:00'
---
Some modules do not actually need you to do anything, and they just do what they do behind the scenes. Those modules, however, probably have no configurable options, or that serve only as those upon which other modules are dependent upon.

More commonly, a module you are concerned about is something that you can adjust permissions and options for. Some projects are easy to use, which is to say, their use is 'intuitive', and it will be relatively clear to you what you can adjust, and what you need to do to accomplish whatever it is that you may want to do.

If you want to know all of the relevant details that you need to intelligently use the module you just installed, then, offhand, I can think of several things you may need to do, or places to look.

The following suggestions are ordered roughly by ease-of-use.

Unfortunately for beginning end-users like us, Drupal is in constant development, and while we are lucky to be able to freely benefit from all of the great work by the developers, their time is limited, and I think it is safe to say that the best of the developers are not inclined to be the most diligent of documentation creators for the benefit of newbies, which is what we are, else you and I would not be here now.

I would encourage you to document and post your trials and tribulations as you are learning to use Drupal, for the benefit of the thousands of individuals who will in your shoes in the coming day, months, and years.

I accept it as the ultimate challenge to create this documentation, in spite of (or because of) the seemingly endless irritations, frustrations, and aggravations-- of using the new documentation section at Drupal-- and to a lesser extent, the undo challenges of learning and using Drupal, which could have been eliminated if adequate newbie 'How-to's had previously been created by others like you and me-- but especially, I am happy in my assumption that you, my friend, will benefit from this.

You, like me, do not have to know anything about 'development' or programming to share what you 'do' know, and are learning.

### Trial and error

You can just jump right in and start using the module, or start playing with its configuration options.

Or in cases where after research on your part you can not figure out what an option does, or what all of the potential implications of using an option might be, you should feel free to just try anything that your adventurous soul thinks best.

Whenever you reach a point in time that a module requires guesswork on your part, you really do not have to worry about trying out any option available to you, because your site is backed up, and you can always revert to a former version of your site. Your site is backed up, right?

Given that it may not be immediately apparent to you what all of the affects a module or a particular option for that module will have across your site, it is for that reason that I recommend that you only try out one module at a time and that you navigate to every corner of your site, and try using your site in every way that you can conceive of-- creating new pages, and trying different configuration options-- before you move on to adding another contrib module.

Otherwise, if you enable more that one new module and you then encounter problems or situations that seem weird to you, you will not know which of the new modules are responsible for that which is troubling you.

### Project page content

Each module 'project page' is its home-page at drupal.org. The project page is where I usually go first both when I am considering whether or not to try out a module, or when I encounter problems or have questions about a module I have just enabled.

If you carefully read the project page in its entirety, you can be relatively certain that you have all of the most important information you need. For example, when considering whether to try out a module, if any other modules are required for the module to work, those other modules will be listed somewhere on the project page.

The project page might also include other helpful links of interest for a variety of things relating to that module.

The project page content might be intended for new Drupal users, or might be geared toward more advanced users/developers.

### Project page 'Read documentation' link (when existing)

In the right-hand column, (a column that drops to the page-bottom on mobile devices, or inside other narrow browser windows) you will always find the heading 'Resources', under which you may, or may not find a link 'Read documentation'.

Not all project pages have a 'Read documentation' link, however, and in that case, hopefully, you will have found helpful documentation links in the project page's main content area.

When the 'Read documentation' link does exist, it will be to what the developer(s) consider to be the single most relevant resource for you to use to begin your quest for more information.

The content of each project page is determined by and under the control of that project's initial creator, and possibly a few other individuals to whom the initial creator has given such permission.

Other drupal.org members without access to changing the project page, will, never-the-less, have very often created other d.o pages with great information about the module you want to know about. Unfortunately, however, those other pages will only very rarely have links to them on the project page.

Finding those pages which are not linked to on the project page will be discussed below in the section [Google search limited to drupal.org ⤵](#google%5Fsearch%5Fa%5Fsite)

### Module "README.txt" file

The "README.txt" file has historically been the official place where all of the truly relevant and necessary information for a module (or theme) is documented, including anything relevant when the module (or theme) is updated to a newer version.

The README.txt file is in the top-level folder of the contrib module (or theme) after it has been extracted if it exists.

To view a module's (or theme's) 'README.txt' file without having to download anything, visit the URL:

`http://cgit.drupalcode.org/project/PROJECT_MACHINE_NAME.git/blob/HEAD:/README.txt`

Replace the expression `PROJECT_MACHINE_NAME` in the URL above with the short 'machine name' of the particular project.

The 'machine name' is in your browser's address-bar URL when you are at any drupal.org project page, as for example, the 'PROJECT\_MACHINE\_NAME' portion of this sample URL-- a URL similar to the one for every project:

`https://www.drupal.org/project/PROJECT_MACHINE_NAME`

If the README.txt file does Not exist, the module is probably one for which there are no configurable options, and is simply a module that works silently in the background, and is necessary for other contrib modules to work.

When there is no README.txt file, or if you just want to see all of the other documentation for a project, use the following URL (replace 'PROJECT\_MACHINE\_NAME'):

`http://cgit.drupalcode.org/PROJECT_MACHINE_NAME/tree/?id=HEAD`

At the top-right corner of that 'drupalcode.org' page, you may have to 'switch' to the Drupal core version that you are interested in exploring.

### Google search limited to drupal.org

If you want a search that is limited to the entire drupal.org site, this is what I do. I use this method quite often for searches of drupal.org, or of any other domain of my choice.

I go to [google.com ⎘ ](https://www.google.com/ "   This link opens in a new tab/window.  "), and I type:

`site:drupal.org`

Note that there is No space following the colon (":") in front of the domain name. And do not use 'www.' at the beginning of any domain name.

Add a 'blank-space' following whatever the domain name is, and type whatever keywords you can think of, namely, for our discussion today, the module's name.

I have at times also found it helpful to try to limit a Google search specifically to 'Drupal 8' (instead of also getting results for D6, D7...) by adding `"Drupal 8"` into the Google search engine text-area box. By using double-quotation marks, Google will then return search results for pages that contain the exact two-or-more word expression in double-quotes. (...mostly.)

To see what information is available for a specific module all across the Earth, including pages both inside of, and outside of drupal.org, omit 'site:drupal.org'.

**To get 100 Google search results per page, instead of 10**, when you are at any Google search results page, click the top-right 'gear' icon, and in the drop-down menu, click 'Search settings'. At the next page, under the heading 'Google Instant predictions', click the radio-button "Never show instant results", Then under the heading 'Results per page', drag the slider all the way to the right. Your searches will now take an extra three-thousandths of a second, however, or something like that.

Slanted and ranted opinion: You might have considered using the search engine provided by drupal.org at the top of all drupal.org pages. I tried that a few times years ago, and I would encourage you to try it for yourself if you like exercises in futility.

### Your site's 'Extend' page "Help" buttons/links (when existing)

On the 'Extend' page of your site, to the right of each module's name, you might see the first line of its description if your browser window is wide enough.

If you were to click on that first line of the description, it would expand down and reveal the rest of its description, and would also reveal the 'Help', 'Permissions', and 'Configure' buttons/links for that module when those items are available.

If you are not immediately seeing the first line of the module's description to the right of its name, and you want to see it, use the instructions on the [Module Configuration page](https://www.drupal.org/docs/8/extending-drupal-8/module-configuration).

Unfortunately, however, to gain access to the help page on your site for a module, not only do you have to have the module imported into your site, but also, the 'Help' button/link will only be visible if that module is enabled. And, unfortunately, not all contrib or core modules have a 'Help' button/link available for it, but you will have no way of knowing if one is available unless you first enable the module.

For those problematic reasons, I have never relied on, nor used those 'Help' buttons, though looking at them now I see that they do often lead to pages that contain good information.