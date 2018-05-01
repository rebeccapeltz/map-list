
let arrSource = Array(1e2).fill({seed:"test"});
const sizeof = require('object-sizeof');
let newArray = [];

let arrData = arrSource.map((item,index)=>{
    let newItem = {};
    newItem.name = item.seed + index;
    newItem.value = index;
    return newItem;
});

arrData.map((item,index)=>{
    newArray.push(item);
})

arrSource = null;
arrData = null;

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used.toFixed(2)} MB`);
console.log(`The new array is ${sizeof(newArray) / 1000} MB`);