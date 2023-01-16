---
url: >-
  https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/pagination
description: >-
  Pagination can be a deceptively complex topic. It's easy to fall into traps
  and not follow best-practices. This page will help you do pagination "right".
  That is, if you read and understand this page, we think your client will be
  more robust and future-proof and make your life easier down the road. If you
  take only one thing away from this guide, it should be that you should not
  construct your own pagination URLs. Every paginated response from the JSON:API
  module already has a link to the next page of a collection built in for you to
  use. You should follow that link.
published_time: '2018-02-06T10:36:50+00:00'
modified_time: '2021-10-04T14:48:26+00:00'
---
Pagination can be a deceptively complex topic. It's easy to fall into traps and not follow best-practices. This page will help you do pagination "right". That is, if you read and understand this page, we think your client will be more robust and future-proof and make your life easier down the road.

If you take only one thing away from this guide, it should be that **you should not construct your own pagination URLs**.

Every paginated response from the JSON:API module already has a link to the next page of a collection built in for you to use. You should follow that link.

In the beginning of this document, we're going to look at some important features of the API and how to implement pagination "right". At the end of this document, you'll find some [answers to common questions and gotchas](#common-questions-gotchas).

### How?

Every paginated response from the JSON:API module has pagination links built right in. Let's look at a small example:

```php
{
  "data": [
    {"type": "sample--type", "id": "abcd-uuid-here"},
    {"type": "sample--type", "id": "efgh-uuid-here"}
  ],
  "links": {
    "self": "<collection_url>?page[offset]=3&page[limit]=3",
    "next": "<collection_url>?page[offset]=6&page[limit]=3",
    "prev": "<collection_url>?page[offset]=0&page[limit]=3"
  }
}

```

Let's take note of a few things:

* There are 3 pagination links under the `links` key:  
   * `self`: this is the URL for the _current_ page.  
   * `next`: this is the URL for the _next_ page.  
   * `prev`: this is the URL for the _previous_ page.
* There is a `page[limit]` of **3**, but there are only **2** resources (?!)

**The presence or absence of the pagination links is significant.** You need to know:

1. If the `next` link exists, _there are more pages_.
2. If the `next` link _does not_ exist, _you are on the last page_.
3. If the `prev` link exists, _you are not on the first page_.
4. If neither a `next` nor a `prev` link exists, _there is only one page_.

Even though there is a page limit of 3, there are **only 2 resources!** This is because an entity was removed for security reasons. We can tell that it's **not** because there aren't enough resources to fill the response because we can see that there's a `next` link. If you'd like to know more about this, it's [explained in more detail below](#resources-per-page-question).

Okay, now that we've established some important facts. Let's think about how we should build our client. We'll look at some pseudo-JavaScript to help. 🧐

Let's imagine you want to show a listing of the newest content on our site and we have some "premium" content. Only paying subscribers should be allowed to see premium content. We've also decided that we want a "top 5" component, however, if more content exists, the user should be able to click a "next page" link to see the next 5 newest pieces of content.

A **naive implementation** might look something like this:

`` const baseUrl = 'http://example.com';
const path = '/jsonapi/node/content';
const pager = 'page[limit]=5';
const filter = `filter[field_premium][value]=${user.isSubscriber()}`;

fetch(`${baseUrl}${path}?${pager}&${filter}`)
  .then(resp => {
    return resp.ok ? resp.json() : Promise.reject(resp.statusText);
  })
  .then(document => listComponent.setContent(document.data))
  .catch(console.log);
 ``

However, even ignoring the terrible error handling, we already know this isn't a very robust implementation.

We've seen above that we cannot be sure that a response will have 5 items. If 2 of those entities aren't accessible (maybe they're unpublished) then our "top 5" component will only have 3 items!

We also have an unnecessary filter. The server should already be removing content that the user is not allowed to see. If not, we would have a potential access bypass in our application because a malicious user could easily alter the query to see the "premium" content. Always be sure that you enforce access control on the server; don't trust your queries to do that for you.

Let's fix it:

`` const listQuota = 5;
const content = [];
const baseUrl = 'http://example.com';
const path = '/jsonapi/node/content';
const pager = `page[limit]=${listQuota}`;

const getAndSetContent = (link) => {
  fetch(link)
  .then(resp => {
    return resp.ok ? resp.json() : Promise.reject(resp.statusText);
  })
  .then(document => {
    content.push(...document.data);
    listContent.setContent(content.slice(0, listQuota));

    const hasNextPage = document.links.hasOwnProperty("next");
    if (content.length <= listQuota && hasNextPage) {
      getAndSetContent(document.links.next);
    }

    if (content.length > listQuota || hasNextPage) {
      const nextPageLink = hasNextPage
        ? document.links.next
        : null;
      listComponent.showNextPageLink(nextPageLink);
    }
  })
  .catch(console.log);
}

getAndSetContent(`${baseUrl}${path}?${pager}`)
 ``

First, you can see that the `filter` is gone. That's because we're assuming that access checks are being performed on the server instead of relying on a filter. This is the only secure solution. We could add it back in as a performance optimization, but it's probably not necessary.

Next, since we know that the server just removes resources that aren't accessible to the user we _really_ need to check how many resources are _actually_ in the response.

In the "naive" implementation, we were assuming that every response would have 5 items. In this example, we now set a "quota" of 5 resources. After we make our requests, we check to see if we've met our quota or not. We also check to see if the server still has more pages (we'll know this because it will have a `next` link, remember?).

If we haven't met the quota _and_ we're not on the last page, we make another request using the `next` link that we _extracted from the document_. It's important to notice that we did not construct the a new URL for the next page by hand. There's no need to reinvent the wheel because the JSON:API server has already done it for us!

Another interesting thing to note is that because `fetch` is asynchronous, we can add the content of the first request to our component even before all the requests have been made. When the second request finishes, we just update the component again so that it includes the newly fetched results.

Finally, we make sure our fictional `listComponent` knows whether or not to show a "next page" link. It should only show the link if we already have extra content _or_ if the server has extra pages.

The former case might occur if we receive only 4 items in the first request and in the second we get 5 items but _no_ `next` link. In that case, we'll have a total of 9 items but our `listComponent` will only show the first 5\. So we still want to show a "next page" link on the component but we _don't_ want our component to actually send more requests. To indicate that, we set `nextPageLink` to `null`.

In the latter case—when we _do_ have a `next` link—we pass that next page link to our component so that it can use it to make a subsequent request. We don't want to make that request if the user never clicks "next page" link do we?

The last few paragraphs illustrate a really important concept... **"next page" links in your HTML do not need to be correlated to API pages!** In fact, it's an indication that you might be doing it "wrong" if they are.

### Why ... ?

#### ... can't I see a page count?

Newcomers are often tripped up by their inability to see a total page or resource count. It's a reasonable expectation. However, the JSON:API module does not provide a count because it would severely degrade performance.

Imagine an application with 200,000 entities and a pagination limit of 50, that would seem to indicate that there should be 4000 pages (200,000 entities/50 entities per page). Right?

Unfortunately that's not guaranteed to be the case! The JSON:API module must to check access to every resource that it puts in a response. If just 50 of those entities are inaccessible (perhaps they're unpublished) the page count would be 3999.

Perhaps this inaccuracy seems tolerable, but what if half of the entities are inaccessible? What if all of them are inaccessible? That might be true when the user simply doesn't have access to see entities of that type.

The JSON:API module also needs to consider the performance implication of including a total count. Would you really want your application running 200,000 entity access checks when it can only ever include a maximum of 50 entities per page?

Because of all of those considerations, the JSON:API module does _not_ include a total page count.

#### ... can't I set a page limit higher than 50?

First, read the example given above. Understand that JSON:API _must_ run individual access checks for every entity in a response. Second, understand that the JSON:API module aims to be "zero configuration." You shouldn't have to install, alter or configure anything to use the module.

The reason for this is to protect your application from a DDoS attack. If a malicious API client set a page limit of 200,000 resources, the JSON:API module would need to run entity access checks for every one of those entities. This would quickly lead to out-of-memory errors and slow responses. The server _needs_ to set a maximum. The limit of 50 was somewhat arbitrarily chosen as a nice round number.

Please understand that there have been many long conversations around this decision and a compromise had to be made between support burden, sane defaults, and frontend performance. While the JSON:API module maintainers _do_ understand that this may not be ideal for every use case, they're confident that if your client follows the recommendations in these docs, it should have little to no impact on you :)

If you still want a higher limit, you may use [JSON:API Page Limit module](https://www.drupal.org/project/jsonapi%5Fpage%5Flimit).

#### ... aren't there X number of resources in the response?

The JSON:API module lets you specify a page _limit_, this is often misunderstood as a guarantee that some number of resources will be included in a response. For example, you may know that there are sufficient resources available to "fill" a response, but the response does not have as many resources as you might expect.

For many of the same reasons outlined above, JSON:API only runs a database query for number of items specified by the `page[limit]` query parameter. It's just a maximum. If access to some of the resources in the query result is not allowed, those resources will be removed from the response. When that's the case, you will see fewer resources than you might have expected.

This is quite common when making a request for entities that may be unpublished (like nodes) and those entities haven't already been filtered out using the `filter` query parameter.