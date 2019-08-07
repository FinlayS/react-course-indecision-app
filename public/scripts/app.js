'use strict';

function square(x) {
    return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//     return  x * x;
// }

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(9));

var getFirstName = function getFirstName(name) {
    return firstName = name.split(' ')[0];
    console.log(firstName);
};

getFirstName('FinlayFirst SimpsonLast');

var getShortLastName = function getShortLastName(name) {
    return console.log(name.split(' ')[1]);
};
getShortLastName('FinlayFirst SimpsonLast');

var getShorterLastName = function getShorterLastName(name) {
    return name.split(' ')[1];
};
console.log(getShorterLastName('FIRST LAST'));
