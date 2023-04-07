const numbers = [55,67,56,88,345,976];

const  student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
};


// 1. template string 
const about = `My name is ${student.name}  age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// 2.arrow function 

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x,y,z) => x + y + z ;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// 3.Spread operator 

const newNumbers = [...numbers];
numbers.push(99);

// create a new array from an older array and add an Element 

const currentNumbers = [...numbers, 666];
console.log(currentNumbers);