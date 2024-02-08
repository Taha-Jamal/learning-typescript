"use strict";
class keyvaluepair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new keyvaluepair('a', 1);
function wrap(value) {
    return [value];
}
wrap(2);
class arr {
    static wrap(value) {
        return [value];
    }
}
arr.wrap(2);
class person1 {
    constructor(name) {
        this.name = name;
    }
}
class custom extends person1 {
}
function echo(value) {
    return value;
}
class store {
    constructor() {
        this.objects = [];
    }
    add(obj) {
        this.objects.push(obj);
    }
    find(property, value) {
        return this.objects.find(obj => obj[property] === value);
    }
}
let s5 = new store();
s5.add({ name: 'a', price: 1, });
s5.find('name', 'a');
s5.find('price', 1);
//# sourceMappingURL=generics.js.map