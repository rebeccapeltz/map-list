const MapList = require('../maplist');
let mapList = null;

let arrSource = Array(1e6).fill({seed:"test"});


let arrData = arrSource.map((item,index)=>{
    let newItem = {};
    newItem.name = item.seed + index;
    newItem.value = index;
    return newItem;
});

mapList = new MapList("name");
arrData.forEach((item,index)=>{
    mapList.add(item);
});


const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used.toFixed(2)} MB`);
