'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(40, 62));

var user = {
    name: 'finlay',
    cities: ['edinburgh', 'aberdeen', 'jersey', 'london', 'letchworth'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived ' + city;
        });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    number: 9,
    multipliedBy: [4, 5, 6, 7, 8, 9],
    multiply: function multiply() {
        var _this2 = this;

        return this.multipliedBy.map(function (sums) {
            return _this2.number * sums;
        });
    }
};
console.log(multiplier.multiply());
