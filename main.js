let MapList = require('./maplist.js');
let arrSource = Array(1e2).fill({
    seed: "test"
});


let arrData = arrSource.map((item, index) => {
    let newItem = {};
    newItem.name = item.seed + index;
    newItem.value = index;
    return newItem;
});
arrSource = null;
console.log("arrData created");

mapList = new MapList("name");
arrData.forEach((item, index) => {
    mapList.add(item);
});

