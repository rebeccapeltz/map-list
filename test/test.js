const expect = require('chai').expect;
const KeyedList = require('../KeyedList');
const testData = [{
    name: "test1",
    value: 1
}, {
    name: "test2",
    value: 2
}];
const KEY = "name";


describe('KeyedList class', function () {
    before(function () {
        this.keyedList = new KeyedList(KEY);
        testData.forEach(test =>{
            this.keyedList.add(test);
        });
    });
    after(function() {
        delete this.keyedList;
      });
    it('should add to and get an item from the collection based on KEY', function () {
        let item = {name:"test3",value:3};
        this.keyedList.add(item);
        let fetchedItem = this.keyedList.getItemByKey("test3");
        expect(fetchedItem.value).to.be.equal(3);
    });
    it ('should throw an error if you try add a duplicate key',()=>{
        let itemA = {name:"test1",value:1};
        let itemB = {name:"test1",value:2};
        let kl = new KeyedList(KEY);
        kl.add(itemA); //no problem
        expect(kl.add.bind(kl, itemB)).to.throw('User with name = test1 already exists');
        expect(kl.getItemByKey("test1").value).to.be.equal(1);
    });
});