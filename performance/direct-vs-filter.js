const MapList = require('../maplist');

let mapList = null;

let arrSource = Array(1e6).fill({seed:"test"});


let arrData = arrSource.map((item,index)=>{
    let newItem = {};
    newItem.name = item.seed + index;
    newItem.value = index;
    return newItem;
});
arrSource = null;

mapList = new MapList("name");
arrData.forEach((item,index)=>{
    mapList.add(item);
});

console.time("direct access");
console.log("direct",mapList.getItemByKey("test999").value);
console.timeEnd("direct access");

console.time("filter");
let filterArr = arrData.filter(item=>item.name === "test999");
console.log(filterArr[0].value);
console.log("direct",mapList.getItemByKey("test999").value);
console.timeEnd("filter");