const expect = require('chai').expect;
const MapList = require('../maplist');

const testData = [{
    name: "test1",
    value: 1
}, {
    name: "test2",
    value: 2
}];
const KEY = "name";


describe('MapList class', function () {
    beforeEach(function () {
        this.mapList = new MapList(KEY);
        testData.forEach(test => {
            this.mapList.add(test);
        });
    });
    afterEach(function () {
        delete this.mapList;
    });
    it('should add to and get an item from the collection based on KEY', function () {
        let item = {
            name: "test3",
            value: 3
        };
        this.mapList.add(item);
        let fetchedItem = this.mapList.getItemByKey("test3");
        expect(fetchedItem.value).to.be.equal(3);
    });
    it('should add to and get an item from the collection based on INDEX', function () {
        console.log("length", this.mapList.asList().length);
        let fetchedItem = this.mapList.getItemByIndex(0);
        expect(fetchedItem.value).to.be.equal(1);
    });
    it('should remove an item from both collections based on id', function () {
        let itemToRemove = this.mapList.getItemByIndex(0);
        this.mapList.remove(itemToRemove);
        expect(this.mapList._listCollection.length).to.be.equal(1);
        let keys = Object.keys(this.mapList._mapCollection);
        expect(keys.length).to.be.equal(1);
    });
    it ('should throw an error if you try to remove an item that does not exist',function(){
        let itemToRemove = {
            name: "test3",
            value: 3
        };
        expect(this.mapList.remove.bind(this.mapList,itemToRemove)).to.throw('Item with key test3 does not exist');
    })
    it('should throw an error if errOnDuplicates is true you try add a duplicate key', () => {
        let itemA = {
            name: "test1",
            value: 1
        };
        let itemB = {
            name: "test1",
            value: 2
        };
        let kl = new MapList(KEY,true);
        kl.add(itemA); //no problem
        expect(kl.add.bind(kl, itemB)).to.throw('Item with name = test1 already exists');
        expect(kl.asList().length).to.equal(0);
        //test for empty object
        expect(Object.keys(kl.asMap()).length === 0).to.equal(true);
    });
    it('return a list of key for the object in the collection', () => {
        let kl = new MapList(KEY);
        testData.forEach(test => {
            kl.add(test);
        });
        let keys = kl.keys;
        expect(keys[0]).to.be.equal("test1");
        expect(keys[1]).to.be.equal("test2");
    });
    
    it('return a list of key for the object in the collection', () => {
        let kl = new MapList(KEY);
        testData.forEach(test => {
            kl.add(test);
        });
        let keys = kl.keys;
        expect(keys[0]).to.be.equal("test1");
        expect(keys[1]).to.be.equal("test2");
    });
    
    it('should NOT throw an error if errOnDuplicates is false (default) you try add a duplicate key', () => {
        let itemA = {
            name: "test1",
            value: 1
        };
        let itemB = {
            name: "test1",
            value: 2
        };
        let kl = new MapList(KEY);
        kl.add(itemA); //no problem
        expect(kl.add.bind(kl, itemB)).to.not.throw('User with name = test1 already exists');
        expect(kl.getItemByKey("test1").value).to.be.equal(1);
    });
    it('return a list of key for the object in the collection', () => {
        let kl = new MapList(KEY);
        testData.forEach(test => {
            kl.add(test);
        });
        let keys = kl.keys;
        expect(keys[0]).to.be.equal("test1");
        expect(keys[1]).to.be.equal("test2");
    });
   
    it('can be represented as a numerically indexed array', () => {
        let kl = new MapList(KEY);
        testData.forEach(test => {
            kl.add(test);
        });
        let klArray = kl.asList();
        expect(Array.isArray(klArray)).to.be.equal(true);
        expect(klArray[0].value).to.be.equal(1);
        expect(klArray.length).to.be.equal(2);
    });
    it('can be represented as a map whose contents are accessible by key', () => {
        let kl = new MapList(KEY);
        testData.forEach(test => {
            kl.add(test);
        });
        let klMap = kl.asMap();
        expect(typeof klMap).to.be.equal("object");
        expect(klMap["test1"].value).to.be.equal(1);
        expect(klMap.length).to.be.equal(undefined);
    });
});