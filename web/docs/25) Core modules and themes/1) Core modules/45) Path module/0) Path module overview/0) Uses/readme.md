As an administrator you can :

1. Set the path for an individual node with the Path module (on the node/add or node edit form).
2. Add an URL alias at _**Administer > Configuration > Search and metadata > URL aliases > Add alias**_
3. Administer the list of URL aliases at _Administer > Configuration > Search and metadata > URL aliases_

When combined with using Drupal's "[Clean URLs](/node/15365 "Configure clean URLs")" feature `http://www.example.com/?q=all-about-tarantulas` becomes `www.example.com/all-about-tarantulas`, which is the ideal readable form.

**Some examples of URL aliases:**

* image/tid/16 => store
* taxonomy/term/7+19+20+21 => store/products/whirlygigs
* node/3 => contact
* node/10 => products/merchandise/cups
* node/11 => coffeemakers

You can create URLs as many levels deep in your virtual directory structure as you like. So, for example, suppose a page is called `http://www.example.com/taxonomy/term/7+19+20+21.` You could give it an alias of `www.example.com/store/products/whirlygigs`

### Tips about URL aliases

#### Avoid changing aliases

Although it is possible to assign the same internal URL to multiple aliases, this is generally not a good idea for search engine rankings; Google, for example, penalizes your site by dropping its rank if Google thinks that you are publishing duplicate content under multiple URLs (a form of web spamming). So if you change your mind later on and _must_ change a URL alias, say from `http://www.example.com/dangerous/tarantulas` to `http://www.example.com/beautiful/tarantulas`, you don't want to just delete the old URL, or that page will have to start from scratch building up page rankings.

#### Redirect old aliases

In the case of a permanent change, use a "[301 redirect](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.2)" from the old URL to the new one. As with many things Drupal, there are several ways to do this, and the best solution will depend on the pattern and number of changes and your environment.

#### Use aliases from the start

Considering the above, it's best to enable the Path module and assign aliases to your content from the very start. Although batch URL aliasing is possible through [several](/node/23708) [different](/node/236304) [mechanisms](/node/144904), you don't want to have to deal with the consequences of search engines and external sites already linking to your pages via the `/node/xx` URLs. Or, if you are converting a site over from another platform (blogging tool, standard HTML-CSS), create your aliases to match the URLs from the previous site. You'll carry all the search engine history right along to the new one.

### How to use Path

Enable the path module on the _modules_ page at _Administer > Modules_. When users with the right permissions create or edit posts, they'll see a field for "URL path settings." That's where they can enter an alias of their choice.

On the _URL aliases_ page, at _Administer > Configuration > Search and metadata > URL aliases_, you'll see a list of all the URL aliases on your site. There you can edit them, and add new ones. You can assign more than one alias to a page (just use the _add alias_ tab again for each new alias).

On the _permissions_ page at _Administer > People > Permissions_, you can decide who can create aliases and who can administer the list of them.

You should consider [configuring clean URLs](/node/15365 "Configure clean URLs") if supported by your server. To automate the generation of URL aliases, look into using [Pathauto module](/handbook/modules/pathauto).