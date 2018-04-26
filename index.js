const KeyedList = require("./keyedlist");
let testData = [{name:"test1", value:1},{name:"test2", value:2}];


let keyedList = new KeyedList("name");
testData.forEach(test =>{
    keyedList.add(test);
});

