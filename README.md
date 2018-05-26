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
Use the `remove` function to delete an object from the collecion by using just the key as an argument. 
```
mapList.remove(itemKey);  
```

If the item doesn't exist, an error will be thrown.  

Use the `update` function to update an object in the collection  
```
mapList.update(item);  
```
If the item doesn't exist, an error will be thrown.

**To use this node module in the browser**
```
npm install map-list
```
In the browser code (for example main.js) use require to load the module
```
let MapList = require('maplist');
```
Run browserify to transpile for the browser and build bundle.js
```
npm run build-example
```

[![Build Status](https://travis-ci.org/rebeccapeltz/map-list.svg?branch=master)](https://travis-ci.org/rebeccapeltz/map-list)