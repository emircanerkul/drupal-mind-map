![Drupal 8 migrations are ETL processes](https://www.drupal.org/files/d8-migrate-etl-process.PNG)

Migration is an [Extract, Transform, Load (ETL) process](http://wikipedia.org/wiki/Extract,%5Ftransform,%5Fload). In the Drupal Migrate API the :

* extract phase is called _source_
* transform phase is called _process_
* load phase is called _destination_

It is important to understand that the term _load_ in ETL means to load data _into_ the storage, while in a typical Drupal context the term _load_ refers to loading data _from_ storage.

In the source phase, a set of data, called the _row_, is retrieved from the data source. The data can be migrated from a database, loaded from a file (for example CSV, JSON or XML) or fetched from a web service (for example RSS or REST). The row is sent to the process phase where it is transformed as needed or marked to be skipped. After processing, the transformed row is passed to the destination phase where it is loaded (saved) into the target Drupal site.

Migrations could have dependencies like migrating nodes comes after migrating users. See [migration\_dependencies example](https://www.drupal.org/docs/8/api/migrate-api/migrate-destination-plugins-examples/migrating-taxonomy-terms#s-associating-the-migrated-tags-with-nodes-in-node-migration).