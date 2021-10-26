// example 1
let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
}

console.log(user.studentstatus)

// example 2
// for cycle
let cars = ['bmw', 'audi', 'porsche', 'ferrari', 'mercedes']

for (let x=0; x<5; x++)

console.log(cars[x])
// while cycle
let y = 0; 
while (y<cars.length) {
    console.log(cars[y]);
    y++;
}

// example 3 

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89]

for (x=0; x<numbers.length; x++ ) {
if(numbers[x]>5)

console.log(numbers[x])
}

// example 4 

let array = ["html", "css", "bootstrap", "javascript","python"]

for (x=0; x<array.length; x++){
if (array[x].length>5 && array[x].includes('ava'))
    console.log(array[x])
}

// example 5 

let users = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if (users.age>18 && users.studentstatus == 'active'){
    console.log('hello')
}
if (users.name == 'giorgi'){
    console.log('hello giorgi')
}
if (users.studentstatus == 'actve' || users.age<25) {
    console.log('hello world')
}
