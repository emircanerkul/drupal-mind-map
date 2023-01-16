URL: `http://example.com/jsonapi/node/article?fields[node--article]=uid,title,created&fields[user--user]=name,mail&include=uid`

### Response

HTTP 200 response. The response body includes a user object containing the specified fields in the related object (in this case, author name and author email). The same syntax will work for other related data such as taxonomy term.