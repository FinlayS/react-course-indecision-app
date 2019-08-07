function square(x) {
    return x * x;
};

console.log(square(8))

// const squareArrow = (x) => {
//     return  x * x;
// }

const squareArrow = (x) => x * x;

console.log(squareArrow(9))


const getFirstName = (name) => {
    return firstName = name.split(' ')[0]
    console.log(firstName)
}

getFirstName('FinlayFirst SimpsonLast')

const getShortLastName = (name) => console.log(name.split(' ')[1])
getShortLastName('FinlayFirst SimpsonLast')

const getShorterLastName = (name) => (name.split(' ')[1])
console.log(getShorterLastName('FIRST LAST'))
