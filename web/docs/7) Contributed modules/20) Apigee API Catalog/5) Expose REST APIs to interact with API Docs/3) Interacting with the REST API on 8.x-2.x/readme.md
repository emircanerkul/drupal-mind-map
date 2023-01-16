Once the REST API endpoints have been exposed and you have configured the appropriate authentication and permission, you should be able to perform any necessary CRUD operations, as described below.

### Fetch API Docs

#### To list all API Docs on your site:

```php
curl -X GET \
  https://kickstart.local/jsonapi/node/apidoc \
  -H 'Accept: application/vnd.api+json' \
  -H 'Authorization: Basic XXXXXXXXXXXXXXXX'
```

#### To fetch a single API Doc:

Note that the {{uuid}} is not the same as the node id. You can get its value from the id property in the previous response.

```php
curl -X GET \
  https://kickstart.local/jsonapi/node/apidoc/{{uuid}} \
  -H 'Accept: application/vnd.api+json' \
  -H 'Authorization: Basic XXXXXXXXXXXXXXXX' 
```

### Create API Docs

POST requests are used to create new resources. To create a new API Doc there are two options. The format of the POST request will vary depending on whether the associated Open API spec file is provided as a file upload or a URL reference. Examples of each approach are provided below:

#### Option A: Create a new API Doc with a URL reference to a spec file

Note that the url must reference a valid .yaml file.

```php
curl -X POST \
  https://kickstart.local/jsonapi/node/apidoc \
  -H 'Accept: application/vnd.api+json' \ -H 'Authorization: Basic XXXXXXXXXXXXXXXX' \
  -H 'Content-Type: application/vnd.api+json' \
  -d '{
  "data": {
    "type": "node--apidoc",
    "attributes": {
      "status": true,
      "title": "New API Doc",
      "body": {
        "value": "<p>Lorem ipsum...</p>",
        "format": "basic_html"
      },
      "field_apidoc_spec_file_source": "url",
      "field_apidoc_file_link": {
        "uri": "http://other.local/spec.yaml"
      }
    } 
  } 
}'
```

#### Option B: Create a new API Doc and uploading the spec file

To create a new API Doc with an associated Open API spec file we will make two requests. The first request is to upload the file and the second is to create the API Doc entity.

To upload the file:

```php
curl -X POST \
  https://kickstart.local/jsonapi/node/apidoc/field_apidoc_spec \
  -H 'Accept: application/vnd.api+json' \ -H 'Authorization: Basic XXXXXXXXXXXXXXXX' \
  -H 'Content-Disposition: file; filename="spec.yaml"' \
  -H 'Content-Type: application/octet-stream' \
  --data "@/path/to/spec.yaml"
```

The response returned for this request will be the JSON:API response for a newly created file entity. You will need to parse and extract the UUID of new file entity from the response to use it in the second request to create the API Doc:

```php
curl -X POST \
  https://kickstart.local/jsonapi/node/apidoc \ 
  -H 'Accept: application/vnd.api+json' \
  -H 'Authorization: Basic XXXXXXXXXXXXXXXX' \
  -H 'Content-Type: application/vnd.api+json' \ 
  -d '{
  "data": {
    "type": "node--apidoc",
    "attributes": {
      "status": true,
      "title": "New API Doc",
      "body": {
        "value": "<p>Lorem ipsum...</p>",
        "format": "basic_html"
      },
      "field_apidoc_spec_file_source": "file"
     },
     "relationships": {
       "field_apidoc_spec": {
         "data": {
           "type": "file--file",
           "id": "{{file_uuid}}"
         }
       }
     }
   }
}'
```

The response will be a 201 (created) response. The response body contains the JSON:API response of the new API Doc node entity.

### Update API Docs

To update an API Doc _without_ changing the specification file, send the following request:

**NOTE**: The **`id`** is required. You can add any other attributes that should be updated.

```php
curl -X PATCH \ 
  https://kickstart.local/jsonapi/node/apidoc/{{uuid}} \
  -H 'Accept: application/vnd.api+json' \
  -H 'Authorization: Basic XXXXXXXXXXXXXXXX' \
  -H 'Content-Type: application/vnd.api+json' \
  -d '{
  "data": {
    "type": "node--apidoc",
    "id": "{{uuid}}",
    "attributes": {
      "status": true,
      "title": "Updated API Doc",
      "body": {
        "value": "<p>Lorem ipsum v2...</p>",
        "format": "basic_html"
      }
    }
  }
}'
```

The response will be an HTTP 200, the JSON:API response of the updated API Doc node entity.

To update the specification file of an API Doc:

```php
curl -X POST \
 https://kickstart.local/jsonapi/node/apidoc/{{uuid}}/field_apidoc_spec \ 
 -H 'Accept: application/vnd.api+json' \ 
 -H 'Content-Type: application/octet-stream' \ 
 -H 'Authorization: Basic XXXXXXXXXXXXXXXX' \
 -H 'Content-Disposition: file; filename="new_spec.yaml"' 

[... binary file data ...]
```

The response for this request will be the JSON:API response for a newly uploaded file entity.

### Delete API Docs

To delete an API Doc:

```php
curl -X DELETE \
  https://kickstart.local/jsonapi/node/apidoc/{{uuid}} \
 -H 'Authorization: Basic XXXXXXXXXXXXXXXX' 
```

The response will be an HTTP 204 (no content) response; i.e. an empty response body.