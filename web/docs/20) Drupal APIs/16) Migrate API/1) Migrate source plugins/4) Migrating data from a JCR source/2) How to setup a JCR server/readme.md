If you do not have access to a JCR server and you want to test this module out you can do so using the Jackrabbit standalone server. However, it's important to remember that while JCR is an open standard, not all JCR servers will have the same features and data types. It's best to test with a copy of the real data you'll be migrating with.

1. Install the Java virtual machine. You can find this here: <http://www.java.com/en/download/manual.jsp>
2. Download the latest stable standalone Jackrabbit server: <http://jackrabbit.apache.org/jcr/downloads.html>
3. In the folder you downloaded the JAR file, start the Jackrabbit server with this command:  
```php  
java -jar jackrabbit-standalone-*.jar --port 8080  
```
4. You should now be able to access the server at: <http://localhost:8080/>