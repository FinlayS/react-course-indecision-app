var  nameVar = 'finlay';
console.log('nameVar', nameVar)

let nameLet = 'simpson';
nameLet = 'bob'
console.log('nameLet', nameLet)

const nameConst = 'blobby';
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Bobby'
    return petName
}
console.log(getPetName())

const fullName = 'Finlay Simpson';
let firstName
let lastName

if (fullName) {
    firstName = fullName.split(' ')[0]
    lastName = fullName.split(' ')[1]
console.log('Name =',lastName,firstName)
}

console.log('firstName', firstName)
