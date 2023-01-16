### Technical requirements

* PHP  
   * At least version 7.3  
   * Extensions:  
         * PDO  
         * XML  
         * Open SSL  
         * JSON  
         * cURL  
         * Mbstring
* Apache Solr at least version 6.6  
   * The database search is installed by default. If you want to use advanced search functions, then install Apache Solr in at least version 6.6.

Learn more about [system requirements for Drupal](https://www.drupal.org/docs/8/system-requirements).

### Create the deGov project via Composer

#### With packages for development purpose  

composer create-project degov/degov-project my_project_name/ --prefer-source --keep-vcs

Make sure your webserver is pointing the deGov host to the docroot directory. After Composer has fetched all code sources for you, you can install deGov into your database.

#### Without packages for development purpose  

composer create-project degov/degov-project folder_name/ --prefer-dist --remove-vcs --no-dev

More about [composers create-project command](https://getcomposer.org/doc/03-cli.md#create-project).

### Run the deGov installer

After you have setup the project structure via Composer in your filesystem, you can install deGov like a traditional Drupal via the web installer or Drush. However, we do recommend the installation via our [Robo build tool](https://robo.li/) commands. It's quicker and handier. Just run the following command from the project root folder:

./bin/robo degov:site-install

To see all available Robo commands run:

./bin/robo list

### Watch the deGov installation screencast on YouTube

<https://www.youtube.com/watch?v=z-qpyBRTJ2A>

Please make sure you are using PHP in at least version 7.3\. That version is also the supported one via php.net. See <https://www.php.net/supported-versions.php>.