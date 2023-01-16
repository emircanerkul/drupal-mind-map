Condition groups can be used to create more complex where clauses (including ORs) in the condition of the query. There are two condition group types:

* `orConditionGroup` \- returns an object of conditions joined with ORs
* `andConditionGroup` \- returns an object of conditions joined with ANDs

Conditions groups return an object, which can then be added as a condition to the query.

```php
// Create the orConditionGroup
$orGroup = $query->orConditionGroup()
  ->condition('promoted', 1)
  ->condition('uid', [2,4,7,22], 'IN');
  
// Add the group to the query.
$query->condition($orGroup);
```

In this example, the conditions for promoted and uid are added to the query’s WHERE, grouped together with OR. This would result in a WHERE which looks like:

```php
WHERE ( promoted = 1 OR uid IN (2,4,7,22) )
```

Multiple orConditionGroup and andConditionGroups can be added as needed. Condition groups can be nested for more complex WHERE clause needs.

Given the following example WHERE clause:

```php
WHERE   ( a = 1 OR b = 1) AND ( (c = 1 AND d = 1) OR (e = 1) )
```

The query conditions could be written with condition groups as:

```php
$orGroup1 = $query->orConditionGroup()
  ->condition('a', 1)
  ->condition('b', 1);
  
$andGroup1 = $query->andConditionGroup()
  ->condition('c', 1)
  ->condition('d', 1);
  
$orGroup2 = $query->orConditionGroup()
  ->condition($andGroup1)
  ->condition('e', 1);
  
$query->condition($orGroup1);
$query->condition($orGroup2);

```