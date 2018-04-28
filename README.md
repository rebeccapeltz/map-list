# map-list
A data structure that allows for iteration and fast object retrieval by key.

When you need to access your data iteratively or directly by a key in the object, you can encapsulate it in this data structure.

## Example:  
Your data contains an array of object with a property designated "name"

```
let obj = {name:"test1",value:1}
```
You want to use the name property as the key.  When you instantiate the key-list object  
you supply the name of the key.

```
let mapList = new MapList("name");
```
Use the `add` command to add each object to the collection.
```
mapList.add(obj);
```
Now you can access the object directly
```
mapList.getItemByKey("test1")
```
or as a member of an array
```
mapList.asList[0];
```

[![Build Status](https://travis-ci.org/rebeccapeltz/keyed-list.svg?branch=master)](https://travis-ci.org/rebeccapeltz/keyed-list)
