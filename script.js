
const numbers = [10, 20, 30];

const [a, b, c] = numbers;
console.log(a, b, c);

const [first, , third] = numbers;
console.log(first, third); 


const user = {
    name: "John",
    age: 25,
    city: "Manila"
};

const { name, age } = user;

console.log(name); 
console.log(age);  

const person = {
    info: {
        firstName: "Alice",
        lastName: "Smith"
    }
};

const { info: { firstName, lastName } } = person;

console.log(firstName, lastName);

const data = {
    title: "Developer"
};

const { title, salary = 50000 } = data;

console.log(title);   
console.log(salary);  

const product = {
    price: 100,
    quantity: 2
};

const { price: itemPrice, quantity: qty } = product;

console.log(itemPrice, qty);


function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

displayUser({ name: "Mark", age: 30 });



function sum([x, y]) {
    return x + y;
}

console.log(sum([5, 10])); 