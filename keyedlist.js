//https://www.valentinog.com/blog/memory-usage-node-js/

module.exports =  class KeyedList {
    constructor(key) {
        this._listCollection = [];
        this._mapCollection = {};
        this.key = key;
    }
    add(item) {
        //check if already added  to keep user unique
        if (this.keys.indexOf(item[this.key]) > -1) {
            throw new Error(`User with ${this.key} = ${item[this.key]} already exists`);
        }
        else {
            this._listCollection.push(item);
            this._mapCollection[item[this.key]] = item;
        }
    }
    getItemByKey(itemKey) {
        return this._mapCollection[itemKey];
    }
    asList() {
        return this._listCollection;
    }
    asMap() {
        return this._mapCollection;
    }
    get keys() {
        return Object.keys(this._mapCollection);
        ;
    }
   
}



