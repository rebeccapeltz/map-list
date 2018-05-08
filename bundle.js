(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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


},{"./maplist.js":2}],2:[function(require,module,exports){
//https://www.valentinog.com/blog/memory-usage-node-js/

module.exports = class MapList {
    constructor(key, errOnDuplicates = false) {
        this._listCollection = [];
        this._mapCollection = {};
        this.key = key;
        this.errOnDuplicates = errOnDuplicates;
    }
    _clearCollections() {
        this._listCollection = [];
        this._mapCollection = {};
    }
    _addToCollections(item) {
        //rule: if errOnDuplicates is false and there is a duplicate, 1st one is kept
        if (this._mapCollection[item[this.key]] === undefined) {
            this._listCollection.push(item);
            this._mapCollection[item[this.key]] = item;
        }
    }
    add(item) {
        // check if already added  to keep user unique
        if (this.errOnDuplicates === true) {
            if (this._mapCollection[item[this.key]] !== undefined) {
                this._clearCollections();
                throw new Error(`Item with ${this.key} = ${item[this.key]} already exists`);
            } else {
                this._addToCollections(item);
            }
        } else {
            this._addToCollections(item);
        }
    }
    getItemByKey(itemKey) {
        return this._mapCollection[itemKey];
    }
    getItemByIndex(itemIndex) {
        return this._listCollection[itemIndex];
    }
    asList() {
        return this._listCollection;
    }
    asMap() {
        return this._mapCollection;
    }
    get keys() {
        return Object.keys(this._mapCollection);
    }

}
},{}]},{},[1]);
