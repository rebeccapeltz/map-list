
let arrSource = Array(1e6).fill({seed:"test"});
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
