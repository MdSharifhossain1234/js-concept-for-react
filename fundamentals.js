// 1. How to declare a variable using let and const 
const fatherName = 'arnold';

let season = 'rainy';
season = 'winter';

// 2. 6 basic conditions : >, <, ===, !==, <=, >=
// multiple conditions : && ||

if(fatherName === 'arnold' || season === 'rainy'){
     console.log('this is true')
}

else{

    console.log('this true')
    
};



// 3. array 
// index
// length
// push

const number = [55,67,56,88,345,976];

// 4. for loop 
for (let i = 0; i<numbers.length; i++)


// 5.function 

function multiply(num1,num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(45,66);
console.log(output);

// 6.object 
// 3 ways to access property by name 
const  student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}


console.log(student);
console.log(student.age);
console.log(student['age']);
