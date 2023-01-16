The Typed Data API mainly provides three different interfaces. Below you will find a description of these interfaces and some important methods (not a comprehensive list).

* ### ComplexDataInterface  
Implementations of this interface are used for data that **is composed of named properties with more pieces of data**. This interface defines some basic methods, including:  
#### get($property\_name)  
Fetch the value of a property.  
#### set($property\_name, $value)  
Set the value of a property. The $value must be an instance of one of these three interfaces.
* ### ListInterface  
Implementations of this interface are used for something that **is composed of a sequential list of other things**, for instance a list of other complex pieces of data. Lists are ordered and may contain duplicate items, e.g. a multiple node reference field could contain the same reference two times.  
 This interface extends the `ArrayAccess` interface.  
#### offsetGet($index)  
Method inherited from ArrayAccess, so individual items may be retrieved as from arrays:  
```php  
  $first_item = $items[0];  
```
* ### TypedDataInterface  
Implementations of this interface are used for something that **represents a single piece of typed data**, like a string, integer etc. This is the smallest building block in the Typed Data API, and it can definitely be used as is. The interface defines some basic methods, including:  
#### getValue()  
Fetches the value of the data.  
#### setValue($value)  
Sets the value of the data.  
#### getDefinition()  
Fetches information about the data telling you if it’s of a primitive type etc.