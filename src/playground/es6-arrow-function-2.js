
const add = (a, b) => {
    return a + b
}

console.log(add(40, 62))

const user = {
    name: 'finlay',
    cities: ['edinburgh', 'aberdeen', 'jersey', 'london', 'letchworth'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived ' + city)
    }
}
console.log(user.printPlacesLived())
 
const multiplier = {
    number: 9,
    multipliedBy: [4, 5, 6, 7, 8, 9],
    multiply() {
        return this.multipliedBy.map((sums) => this.number * sums)
    }
}
console.log(multiplier.multiply())
