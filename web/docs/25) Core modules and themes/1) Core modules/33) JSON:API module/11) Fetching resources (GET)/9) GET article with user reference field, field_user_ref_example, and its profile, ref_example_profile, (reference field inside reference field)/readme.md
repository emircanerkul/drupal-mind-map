URL: `http://example.com/jsonapi/node/article/{{article_uuid}}?include=field_user_ref_example,field_user_ref_example.ref_example_profile`

### Response

HTTP 200 response. The response body includes a user object containing all information about the associated user and its profile. The same syntax will work for other related data that also contains a reference field.