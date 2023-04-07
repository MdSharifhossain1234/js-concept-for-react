// 1.normal array declare

const products = [
    {name: 'laptop', price: 3200,brand:'lenovo', color:'silver'},
    {name: 'phone', price: 7000,brand:'iphone', color:'golden'},
    {name: 'watch', price: 6778,brand:'casio', color:'yellow'},
    {name: 'sunglass', price: 300,brand:'ribon', color:'black'},
    {name: 'camera', price: 38200,brand:'canon', color:'black'},
    

];

// use to map 

const brands = products.map(product => product.brand);
// console.log(brands);


// 3.use to foreach 

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

// 4.use to filter 

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const SpecificName = products.filter(product =>product.name.includes('n'));
// console.log(SpecificName);

// 5.how to use find

const special  = products.find(product => product.name.includes('n'));
console.log(special);


