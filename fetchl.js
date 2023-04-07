// 1. JSON => stringify, json 

const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
};

// how to convert general Object to all varible string ,so we use JSON.stringify 

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

// convert to allstring variable to general object 

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2.fetch 

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));


// 3. how to get Object to keys and values 

const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers = [45,66,58,77];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like Object 
// loop on an Object using for in 

// add or remove from an Array 

const products = [
    {name: 'laptop', price: 3200,brand:'lenovo', color:'silver'},
    {name: 'phone', price: 7000,brand:'iphone', color:'golden'},
    {name: 'watch', price: 6778,brand:'casio', color:'yellow'},
    {name: 'sunglass', price: 300,brand:'ribon', color:'black'},
    {name: 'camera', price: 38200,brand:'canon', color:'black'},
    
    
];

const newProduct = {name: 'webcame', price: 354, brand: 'lal'};

// copy products array and then add newProduct

const newProducts = [...products,newProduct];
console.log(newProducts);


// create a new array and then add newProduct 
// remove phone means create a new array without the phone 

const remaining = products.filter(p => p.name !== 'phone');
 



