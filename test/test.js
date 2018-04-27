const expect = require('chai').expect;
const KeyedList = require('../keyedlist');

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
    it ('return a list of key for the object in the collection',()=>{
        let kl = new KeyedList(KEY);
        testData.forEach(test =>{
            kl.add(test);
        });
        let keys = kl.keys;
        expect(keys[0]).to.be.equal("test1");
        expect(keys[1]).to.be.equal("test2");
    });
    it ('can be represented as a numerically indexed array',()=>{
        let kl = new KeyedList(KEY);
        testData.forEach(test =>{
            kl.add(test);
        });
        let klArray = kl.asList();
        expect(Array.isArray(klArray)).to.be.equal(true);
        expect(klArray[0].value).to.be.equal(1);
        expect(klArray.length).to.be.equal(2);
    });
    it ('can be represented as a map whose contents are accessible by key',()=>{
        let kl = new KeyedList(KEY);
        testData.forEach(test =>{
            kl.add(test);
        });
        let klMap = kl.asMap();
        expect(typeof klMap).to.be.equal("object");
        expect(klMap["test1"].value).to.be.equal(1);
        expect(klMap.length).to.be.equal(undefined);
    });
});