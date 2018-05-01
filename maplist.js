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