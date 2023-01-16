URL: `http://example.com/jsonapi/user/user?filter[anon][condition][path]=uid&filter[anon][condition][value]=0&filter[anon][condition][operator]=<>`

### Response

HTTP 200 response. The response body contains the JSON:API object of user accounts in the system, excluding the anonymous user account. Note that if you want to get a list of all user accounts, you must use the above query, as simply issuing a GET request to `/jsonapi/user/user `[will result in a HTTP 403 error](https://www.drupal.org/node/2873854).