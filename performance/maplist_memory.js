const MapList = require('../maplist');
const sizeof = require('object-sizeof');
let mapList = null;

let arrSource = Array(1e2).fill({seed:"test"});


let arrData = arrSource.map((item,index)=>{
    let newItem = {};
    newItem.name = item.seed + index;
    newItem.value = index;
    return newItem;
});

mapList = new MapList("name");
arrData.forEach(item=>{
    mapList.add(item);
});

arrSource = null;
arrData = null;

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used.toFixed(2)} MB`);
console.log(`The map list is ${sizeof(mapList) / 1000} MB`);