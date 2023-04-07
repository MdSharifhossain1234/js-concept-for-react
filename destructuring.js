// 1.array destructuring 
const numbers = [34,56];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x,y);


// how to use destructuring 2 ways

// const [x,y] = [34,56];

const [x,y] = numbers;

// console.log(x,y);

// Object destructuring 

const {name, age} = {name: 'alu', age: 23};

const employee = {
    id: 'vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['html','css','js'],
    specification: {
        name: 'MD SHARIF HOSSAIN',
        height:45,
        weight: 66,
        address: 'cumilla',
        drink: 'water'
    }
};

const {id,machine} = {employee};
// console.log(employee);
