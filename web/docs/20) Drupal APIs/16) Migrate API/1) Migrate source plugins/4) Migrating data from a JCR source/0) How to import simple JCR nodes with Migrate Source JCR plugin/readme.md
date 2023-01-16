This example is intended to explain how to import the Title and Body fields from a JCR database into a Drupal node.

1. Download the [Migrate Source JCR](https://www.drupal.org/project/migrate%5Fsource%5Fjcr) module and enable it.
2. Download [Migrate Plus](https://www.drupal.org/project/migrate%5Fplus) and enable it
3. Download [Migrate Tools](https://www.drupal.org/project/migrate%5Ftools) and enable it.
4. Ensure you're using the latest version of Drush.
5. Ensure your Drupal instance has a content type called "Blog" (machine name "blog") with at least two fields:  
   1. Title (title) - a plain text field (Drupal adds this for you to Node types)  
   2. Body (body) - a long formatted text field
6. Ensure you have access to a JCR storage. See "How to setup a JCR server" below if you do not have a JCR server available. Take note of the following:  
   1. Host: This should be the full URL to the JCR endpoint.  
   2. User: The username, if authentication is required.  
   3. Pass: The password, if authentication is required.  
   4. Workspace: The JCR workspace to read from.
7. Populate the JCR source with the exact test data shown here. You can do this by:  
   1. Save [https://gist.github.com/josephdpurcell/728dd8744fabd4fcf80798664e270df5#...](https://gist.github.com/josephdpurcell/728dd8744fabd4fcf80798664e270df5#file-migrate%5Fsource%5Fjcr%5Fimport%5Fsample%5Fdata-php) as "migrate\_source\_jcr\_import\_sample\_data.php" in your repository root  
   2. Save the following XML file as "migrate\_source\_jcr\_example.xml" in your repository root:  
   ```yaml  
   <?xml version="1.0"?>  
   <blog xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0" xmlns:sling="http://sling.apache.org/jcr/sling/1.0" jcr:primaryType="nt:unstructured" jcr:createdBy="admin" jcr:created="2019-10-16T12:34:56.123+00:00">  
     <jcr:content jcr:uuid="f8db54ed-593a-420c-a291-d7cc650577eb">  
       <blog>  
         <node1>  
           <jcr:content jcr:title="Node with no body" sling:resourceType="components/structure/page" jcr:uuid="c2ce1e97-51bf-48b2-ab8f-daa963b73aa8"/>  
         </node1>  
         <node2>  
           <jcr:content jcr:title="Node with a body" sling:resourceType="components/structure/page" jcr:uuid="24146ada-9567-4455-a2b8-8b6582e78c36">  
             <body jcr:primaryType="nt:unstructured" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>  
           </jcr:content>  
         </node2>  
       </blog>  
     </jcr:content>  
   </blog>  
   ```  
   3. Now, in your repository root run this command from the command line:  
   ```php  
   php migrate_source_jcr_import_sample_data.php  
   ```
8. Copy the following YML contents:  
```yaml  
id: blog  
label: Blog  
source:  
  plugin: jcr  
  host: "http://localhost:8080/server"  
  query: 'SELECT * FROM [nt:unstructured] AS node WHERE ISDESCENDANTNODE(node, "/migrate_source_jcr_example/blog") AND [sling:resourceType] = "components/structure/page"'  
  type: "JCR-SQL2"  
  user: "admin"  
  pass: "admin"  
  workspace: "default"  
  keys:  
    - title  
  fields:  
    -  
      name: title  
      subpath: ''  
      property: 'jcr:title'  
    -  
      name: body  
      subpath: body  
      property: text  
process:  
  title:  
    -  
      plugin: skip_on_empty  
      method: row  
      source: title  
    -  
      plugin: get  
      source: title  
  body/value:  
    -  
      plugin: get  
      source: body  
  body/format:  
    -  
      plugin: default_value  
      default_value: rich_text  
destination:  
  plugin: 'entity:node'  
  default_bundle: blog  
```
9. Import the YAML you just copied as a migration. To do this:  
   1. Navigate to _Administration > Configuration > Development > Synchronize_ (`admin/config/development/configuration/single/import`)  
   2. Select _Migration_ as the _Configuration type_  
   3. Copy-paste the YAML format migration definition, changing the Host, User, Pass, and Workspace values as needed. Click _Import_.
10. Execute the migration. To do this run this command:  
```php  
drush migrate:import blog  
```
11. Confirm you see 2 nodes imported. The drush command should output:  
```php  
 [notice] Processed 2 items (2 created, 0 updated, 0 failed, 0 ignored) - done with 'blog'  
```