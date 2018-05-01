# map-list
A data structure that allows for iteration and direct object retrieval by key.

When you need to access your data iteratively or directly by a key in the object, you can encapsulate it in this data structure.

## Example:  
Your data contains an array of objects with a property designated "name"

```
let obj = {name:"test1",value:1}
```
You want to use the name property as the key.  When you instantiate the key-list object  
you supply the name of the key.


## Constructor  

**constructor** (key, errOnDuplicates = false)  
By default duplicates are allowed.  If there are duplicates  
only the first item will be added to the list and the map structure.  
If the **errOnDuplicates** option is set to true,   
both list and map will be set to empty structure and an error will be thrown.  

```
let mapList = new MapList("name");
let mapListNoDups = new MapList("name",true);
```
Use the `add` command to add each object to the collection.
```
mapList.add(obj);
```
Now you can access the object directly
```
mapList.asMap["test1"] or mapList.getItemByKey("test1")
```
or as a member of an array
```
mapList.asList[0] or mapList.getItemByIndex(0);
```

[![Build Status](https://travis-ci.org/rebeccapeltz/keyed-list.svg?branch=master)](https://travis-ci.org/rebeccapeltz/keyed-list)
