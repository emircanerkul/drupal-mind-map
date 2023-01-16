### Fetch article

Let's imagine you have an article with two comments and each of those comments have the _same_ author. To get all this data without includes, you would first make a request to `GET /jsonapi/node/article/some-random-uuid`:

```php
{
  "data": {
    "type": "node--article",
    "id": "some-random-uuid",
    "relationships": {
      "field_comments": {
        "links": {
          "related": {
            "href": "https://my.example.com/node/article/some-random-uuid/field_comments"
          }
        }
      }
    }
  }
}

```

### Fetch comment

Then, you would make a request to `GET /node/article/some-random-uuid/field_comments`:

```php
{
  "data": [{
    "type": "comment",
    "id": "one-random-uuid",
    "relationships": {
      "uid": {
        "links": {
          "related": {
            "href": "https://my.example.com/comment/one-random-uuid/uid"
          }
        }
      }
    }
  }, {
    "type": "comment",
    "id": "two-random-uuid",
    "relationships": {
      "uid": {
        "links": {
          "related": {
            "href": "https://my.example.com/comment/two-random-uuid/uid"
          }
        }
      }
    }
  }
}

```

### Fetch users

And again, you would need to make two more requests to `/comment/one-random-uuid/uid` and `/comment/two-random-uuid/uid `. We can see that the second request is entirely unnecessary because we know that the author of both comments is the _same_ in our example.

So, how can includes help?